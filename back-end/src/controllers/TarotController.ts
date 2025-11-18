import { Tarot } from "@/entities/Tarot";
import { Subjects } from "@/entities/types/enums/Subjects";
import { TarotCards } from "@/entities/types/enums/TarotCards";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { playController } from "./PlayController";



export const tarotRequestValidation = z.object({
    question: z.string(),
    subjects: z.array(z.nativeEnum(Subjects)).min(1).max(3),
    cards: z.array(z.nativeEnum(TarotCards)).min(1).max(3)
}).refine((data) => data.subjects.length === data.cards.length, {
    message: "O número de assuntos deve ser igual ao número de cartas",
    path: ["subjects", "cards"]
});


export function getTarotCards(): string[] {
    const list = Object.values(TarotCards);
    return list;    
}


export async function playTarotController(request: FastifyRequest, reply: FastifyReply) {
    return playController(request, reply, tarotRequestValidation, Tarot);
}