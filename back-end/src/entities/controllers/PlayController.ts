import { IAGemini } from "@/libs/IAGemini";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { Lennormand } from "../Lennormand";
import { Play } from "../Play";
import { LenormandCard } from "../types/enums/LenormandCard";
import { Subjects } from "../types/Subjects";

export const cardsRequestValidation = z.object({
    question: z.string(),
    subjects: z.array(z.nativeEnum(Subjects)).min(1).max(3),
    cards: z.array(z.nativeEnum(LenormandCard)).min(1).max(3)
}).refine((data) => data.subjects.length === data.cards.length, {
    message: "O número de assuntos deve ser igual ao número de cartas",
    path: ["subjects", "cards"]
});

//type cardsRequestTypes = z.infer<typeof cardsRequestValidation>;

export async function playLennormand(request: FastifyRequest, reply: FastifyReply) {

    const requestValidated = cardsRequestValidation.safeParse(request.body);

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

    const play = new Play<Lennormand>({ numberOfCards: cards.length, question });

    for (let i = 0; i < cards.length; i++) {
        const card = new Lennormand({ card: cards[i] });
        const subject = subjects[i];

        play.addCard(subject, card);
    }

    const completeQuestion = play.buildCompleteQuestion();

    const iaGemini = new IAGemini(completeQuestion);
    const iaAnswer = await iaGemini.sendRequest();

    return reply.send({ data: iaAnswer });

}