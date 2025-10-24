import { Text } from "../../components/text/Text";
import { DeckMenu } from "../../layout-components/DeckMenu";
import { DeckMenuItem } from "../../layout-components/DeckMenuItem";
import { PageTitle } from "../../layout-components/PageTitle";
import TarotOneCard from "./../../assets/icons/TarotOneCard.svg?react";
import TarotThreeCards from "./../../assets/icons/TarotThreeCards.svg?react";
import TarotTwoCards from "./../../assets/icons/TarotTwoCards.svg?react";

export function LenormandMenu(){
    return (
        <div>
             
            <PageTitle>Lenormand</PageTitle>
            <Text as="h3" variant="title-sm" className="text-center">1. Escolha o tipo de jogada</Text>            

            <DeckMenu>
                <DeckMenuItem text="Carta Única" description="Jogada com apenas uma carta única." href="/lenormand/carta-unica">
                    <TarotOneCard className="w-20 h-20 fill-white"/>
                </DeckMenuItem>
                <DeckMenuItem text="Duas Cartas" description="Jogada com apenas uma carta resposta e uma carta de complemento." href="/lenormand/duas-cartas">
                    <TarotTwoCards className="w-20 h-20 fill-white"/>
                </DeckMenuItem>
             
                <DeckMenuItem text="Três Cartas" description="Jogada com apenas três cartas." href="/lenormand/tres-cartas">
                    <TarotThreeCards className="max-w-30 h-20 fill-white"/>
                </DeckMenuItem>
            </DeckMenu>
        </div>
    )
}