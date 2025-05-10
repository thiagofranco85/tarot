import { playLennormand } from "@/entities/controllers/PlayController";
import { FastifyInstance } from "fastify";

export async function routes(app: FastifyInstance) {

  app.get("/", async (request, reply) => {
    reply.send(JSON.stringify({ hello: "world" }));
  });

  app.post("/play/lennormand", async (request, reply) => {
    return playLennormand(request, reply);
  });

  app.post("/play/tarot", async (request, reply) => {
    /*
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
    */
  });
}
