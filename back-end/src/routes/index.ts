import { cardsRequestValidation, playLennormand } from "@/controllers/PlayController";
import { TarotCards } from "@/entities/types/enums/TarotCards";
import { FastifyInstance } from "fastify";
import z from "zod";

export async function routes(app: FastifyInstance) {

  /*
  app.get("/", async (request, reply) => {
    reply.send(JSON.stringify({ hello: "world" }));
  });
  */

  app.post("/play/lennormand", {
    schema: {
      summary: "Play Lennormand",
      description: "Play a game of Lennormand with the specified cards and subjects.",
      body: cardsRequestValidation,
      response: {
        200: z.object({ data: z.string() }).describe("Response from the AI with the answer to the question asked."),
      }
    }
  }, async (request, reply) => {
    return playLennormand(request, reply);
  });

  // ...existing code...
// ...existing code...
// ...existing code...
app.post("/play/tarot", async (request, reply) => {

  const body = request.body

  const schema = z.object({
    cards: z.array(z.nativeEnum(TarotCards)).min(1).max(3),
  })

  try {
    const { cards } = schema.parse(body);
    
    // Here you can implement the logic to handle the Tarot play with the provided cards
    console.log("Received Tarot cards:", cards);
    reply.send({ data: "Tarot cards processed successfully." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply.status(400).send({ error: error.format() });
    }
    console.error("Error processing Tarot cards:", error);
    reply.status(500).send({ error: "Internal server error" });
  }

});
// ...existing code...
// ...existing code...
// ...existing code...
  /*
    app.post("/play/tarot", async (request, reply) => {
      
      const playMajor = new Play<MajorArcana>(null, 2);
      playMajor.addCard(new MajorArcana(Trump.TheFool));
      playMajor.addCard(new MajorArcana(Trump.TheMagician));
  
      const minor1 = new MinorArcana(Suit.Clubs, Rank.Ace);
      const major = new MajorArcana(Trump.TheFool);
  
      const tarot1 = new Tarot(minor1);
      const tarot2 = new Tarot(major);
  
      const playTarot = new Play<Tarot>(null, 2);
      playTarot.addCard(tarot1);
      playTarot.addCard(tarot2);
  
      console.log(tarot2.name);
      
    });
    */
}
