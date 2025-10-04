import { HrDivider } from "../HrDivider/HrDivider";

export function Header(){
    return (
        <header className="text-center text-4xl mt-8">
            <img src="/images/logo.png" alt="Logo do Tarolando" className="mx-auto w-40 md:w-60" />

            <h1 className='text-xl mt-6 md:mt-10 md:text-2xl'>Seu guia para jogar <span className='font-bold'>tarot</span> de um jeito <span className='font-bold'>simples</span>!</h1>

            <HrDivider />
            
            <p className='text-xl my-5 font-light px-8'>
                Aqui a gente te ajuda a desvendar o seu <span className='font-normal'>Tarot</span>! Jogue suas <span className='font-normal'>cartas</span> no <span className='font-normal'>mundo real</span>, faça sua pergunta e deixe a gente te dar uma mãozinha na interpretação com a ajuda da <span className='font-normal'>inteligência artificial</span>.
            </p>

            <HrDivider />
            
        </header>
    )
}