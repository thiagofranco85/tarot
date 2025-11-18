import { MoonStar, Sun } from "lucide-react";
import { Text } from "../../components/text/Text"; // Import your Text component
import { DeckMenuItem } from "../../layout-components/DeckMenuItem";
import { HrDivider } from "../../layout-components/HrDivider";
import { DeckMenu } from "./../../layout-components/DeckMenu";

export function Home() {
  return (
    <>
      <Text as="h1" variant="title-md" className="text-center px-1">
        Seu guia para jogar{" "}
        <Text as="span" variant="title-md" weight={"semibold"}>
          tarot
        </Text>{" "}
        de um jeito{" "}
        <Text as="span" variant="title-md" weight={"semibold"}>
          simples
        </Text>
        !
      </Text>

      <HrDivider className="mt-5" />

      <Text as="p" className="my-5 font-light px-8 text-center">
        Aqui a gente te ajuda a desvendar o seu{" "}
        <Text as="span" variant="body-sm" weight={"semibold"}>
          Tarot
        </Text>
        ! Jogue suas <Text weight={"semibold"}>cartas</Text> no{" "}
        <Text variant="body-sm" weight={"semibold"}>
          mundo real
        </Text>
        , faça sua pergunta e deixe a gente te dar uma mãozinha na interpretação
        com a ajuda da{" "}
        <Text variant="body-sm" weight={"semibold"}>
          inteligência artificial
        </Text>
        .
      </Text>

      <HrDivider />

      <Text as="h2" variant={"title-sm"} className="text-center mt-10">
        Escolha o tipo de baralho
      </Text>

      <DeckMenu>
        <DeckMenuItem
          text="Lenormand"
          href="/lenormand"
          description="Clique aqui para a opção Lenormand"
        >
          <Sun className="w-25 h-25 stroke-1" />
        </DeckMenuItem>

        <DeckMenuItem
          text="Tarot"
          href="/tarot"
          description="Clique aqui para a opção Tarot"
        >
          <MoonStar className="w-25 h-25 stroke-1" />
        </DeckMenuItem>

      </DeckMenu>
    </>
  );
}
