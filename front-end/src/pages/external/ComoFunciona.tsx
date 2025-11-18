import { MeuComponente } from "../../components/MeuComponente";
import { Text } from "../../components/text/Text";
import { PageTitle } from "../../layout-components/PageTitle";

export function ComoFunciona() {
  return (
    <section>
      <PageTitle>Como Funciona</PageTitle>
      <Text as="p" variant="body-md">
        Esta é a página que explica como funciona o nosso sistema de tarot.
      </Text>

      <MeuComponente />
    </section>
  );
}
