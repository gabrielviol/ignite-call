import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { ConnectItem, ConnetBox } from './styles'
import { signIn } from 'next-auth/react'



export default function Register() {
    return (
        <Container>
            <Header>
                <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
                <Text>
                    Conecte o seu calendário para verificar automaticamente as horas ocupadas e os
                    novos eventos à medida em que são agendados.
                </Text>

                <MultiStep size={4} currentStep={2} />
            </Header>

            <ConnetBox>
                <ConnectItem>
                    <Text>Google Calender</Text>
                    <Button variant="secondary" size="sm" onClick={() => signIn('google')}>
                        Conectar 
                        <ArrowRight />
                    </Button>
                    
                </ConnectItem>

                <Button type="submit">
                    Próximo passo
                    <ArrowRight />
                </Button>
            </ConnetBox>

        </Container>
    )
}
