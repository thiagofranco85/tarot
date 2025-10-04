import { Anchor } from 'lucide-react'
import { HrDivider } from '../HrDivider/HrDivider'

export function DeckMenu(){
    return (
        <>
            <h2 className="text-center text-2xl mt-12 font-normal">Escola o tipo de baralho:</h2>
            <div className="flex flex-row flex-wrap justify-center gap-16 mt-16">
                <div className='flex flex-col items-center' >
                    <Anchor size={60} absoluteStrokeWidth={true} href="/decks/lennormand" />
                    <HrDivider />
                    <h3 className="text-xl my-2">Lennormand</h3>  
                    <HrDivider />                  
                </div>
                <div>
                    <h3 className="text-xl">Baralho 2</h3>
                    <p>Descrição do baralho 2</p>
                </div>
            </div>
        </>
    )
}