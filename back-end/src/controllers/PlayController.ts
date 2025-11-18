import { ICard } from "@/entities/interfaces/ICard";
import { IAGemini } from "@/libs/IAGemini";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { Play } from "../entities/Play";

//type cardsRequestTypes = z.infer<typeof cardsRequestValidation>;

export async function playController<T extends ICard>(
    request: FastifyRequest, 
    reply: FastifyReply,
    validationSchema: z.ZodSchema,
    CardClass: new (card: any) => T
) {

    const requestValidated = validationSchema.safeParse(request.body);

    if (requestValidated.success === false) {
        return reply.status(400).send({
            error: "Dados de entrada inválidos",
            details: requestValidated.error.errors.map(err => ({
                path: err.path.join('.'),
                message: err.message
            }))
        });
    }

    const validatedData = requestValidated.data;

    const { question, subjects, cards } = validatedData;

    const play = new Play<T>({ numberOfCards: cards.length, question });

    for (let i = 0; i < cards.length; i++) {
        const card = new CardClass({ card: cards[i] });
        const subject = subjects[i];

        play.addCard(subject, card);
    }

    const completeQuestion = play.buildCompleteQuestion();

    const iaGemini = new IAGemini(completeQuestion);
    const iaAnswer = await iaGemini.sendRequest();

    return reply.send({ data: iaAnswer });

}