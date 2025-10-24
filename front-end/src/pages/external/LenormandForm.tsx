import { Text } from "../../components/text/Text";
import { TextArea } from "../../components/textarea/TextArea";
import { PageTitle } from "../../layout-components/PageTitle";

export function LenormandForm(){
    return (
        <>
            <PageTitle>Lenormand</PageTitle>
            <Text as="h2" variant="title-xs" className="text-center">1. Digite a pergunta que você fez às cartas.</Text>

            <TextArea                
                size="sm"
                placeholder="Como vai ser o meu dia hoje?"
            ></TextArea>
        </>
    )   
}