import { Text } from '../../components/Text/Text';
import { HrDivider } from "../HrDivider/HrDivider";
import { Menu } from "../Menu/Menu";
 
export function Header(){
    return (
        <header className="text-center text-4xl">

            <Menu />           

            <img src="/images/logo.png" alt="Logo do Tarolando" className="mx-auto w-40 md:w-60" />

            <Text as="h1" variant='title-md' className='mt-6 md:mt-10'>
                Seu guia para jogar <Text as="span" variant='title-md' weight={'semibold'}>tarot</Text> {" "} 
                de um jeito <Text as="span" variant='title-md' weight={'semibold'}>simples</Text>!
            </Text>

            <HrDivider className="mt-5" />

            <Text as="p" className='my-5 font-light px-8'>
                Aqui a gente te ajuda a desvendar o seu <Text as="span" variant='body-sm' weight={'semibold'}>Tarot</Text>! Jogue suas <Text weight={'semibold'}>cartas</Text> no <Text variant='body-sm' weight={'semibold'}>mundo real</Text>, faça sua pergunta e deixe a gente te dar uma mãozinha na interpretação com a ajuda da <Text variant='body-sm' weight={'semibold'}>inteligência artificial</Text>.
            </Text>

            <HrDivider />
            
        </header>
    )
}