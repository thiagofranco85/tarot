import { Anchor, Sparkles } from 'lucide-react';
import { Text } from '../../components/Text/Text';
import { DeckMenuItem } from '../DeckMenuItem/DeckMenuItem';

export function DeckMenu(){
    return (
        <>
            <Text as='h2' variant={'title-sm'} className="text-center mt-10">Escolha o tipo de baralho</Text>
            <div className="flex flex-row flex-wrap justify-center gap-16 mt-10">                
                <DeckMenuItem                         
                    text="Lennormand" 
                    href="/decks/lennormand" 
                    description="Clique aqui para a opção Lennormand"                     
                >    
                    <Anchor size={90} absoluteStrokeWidth={true} />
                </DeckMenuItem>                 
               
                <DeckMenuItem                         
                    text="Tarot" 
                    href="/decks/tarot" 
                    description="Clique aqui para a opção Tarot" 
                >    
                    <Sparkles size={90} absoluteStrokeWidth={true} />
                </DeckMenuItem>                 
            </div>
        </>
    )
}