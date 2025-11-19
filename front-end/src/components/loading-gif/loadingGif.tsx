import { Text } from "../text/Text";
import cardsLoadingGif from "./../../assets/images/tarot.gif";

export function LoadingGif() {
    return (
        <div className="fixed w-full top-0 left-0 bg-background-1/80 h-lvh flex flex-col justify-center items-center">
            <img className="flex-col" src={cardsLoadingGif} alt="Loading..." />
            <Text as="p" variant="title-xs" className="flex-col text-center text-white mt-4">Aguarde!<br />Estamos interpretando as cartas...</Text>
        </div>
    );
}