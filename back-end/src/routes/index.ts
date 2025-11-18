import { getLenormandCards, lenormandRequestValidation, playLennormandController } from "@/controllers/LenormandController";

import { getFormatedSubjects } from "@/controllers/SubjectController";
import { getTarotCards, playTarotController, tarotRequestValidation } from "@/controllers/TarotController";
import { FastifyInstance } from "fastify";
import z from "zod";

export async function routes(app: FastifyInstance) {

  app.get("/formated-subjects", async (_, reply) => {
    const list = getFormatedSubjects();
    reply.status(200).send({ data: list });
  })

  app.get("/lenormand-cards", async (_, reply) => {
    const list = getLenormandCards();
    reply.status(200).send({ data: list });
  })

  app.get("/tarot-cards", async (_, reply) => {
    const list = getTarotCards();
    reply.status(200).send({ data: list });
  })

  app.post("/play/lenormand", {
    schema: {
      summary: "Play Lenormand",
      description: "Play a game of Lenormand with the specified cards and subjects.",
      body: lenormandRequestValidation,
      response: {
        200: z.object({ data: z.string() }).describe("Response from the AI with the answer to the question asked."),
      }
    }
  }, playLennormandController);
  
  app.post("/play/tarot", {
    schema: {
      summary: "Play Tarot",
      description: "Play a game of Tarot with the specified cards and subjects.",
      body: tarotRequestValidation,
      response: {
        200: z.object({ data: z.string() }).describe("Response from the AI with the answer to the question asked."),
      }
    }
  }, playTarotController);

}