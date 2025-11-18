import { Lenormand } from "@/entities/Lenormand";
import { LenormandCard } from "@/entities/types/enums/LenormandCard";
import { Subjects } from "@/entities/types/enums/Subjects";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { playController } from "./PlayController";


export const lenormandRequestValidation = z.object({
    question: z.string(),
    subjects: z.array(z.nativeEnum(Subjects)).min(1).max(3),
    cards: z.array(z.nativeEnum(LenormandCard)).min(1).max(3)
}).refine((data) => data.subjects.length === data.cards.length, {
    message: "O número de assuntos deve ser igual ao número de cartas",
    path: ["subjects", "cards"]
});

export function getLenormandCards(): string[] {
    const list = Object.values(LenormandCard);
    return list;    
}

export async function playLennormandController(request: FastifyRequest, reply: FastifyReply) {
    return playController(request, reply, lenormandRequestValidation, Lenormand);
}