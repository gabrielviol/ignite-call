import { Button, Heading, MultiStep, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, Header } from '../styles'
import { FormAnnotation, ProfileBox } from './styles'

const updateProfileSchema = z.object({
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<UpdateProfileData>({
        resolver: zodResolver(updateProfileSchema),
    })

    async function handleUpdateProfile(data: UpdateProfileData) {
    }

    return (
        <Container>
            <Header>
                <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você pode
                    editar essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={1} />
            </Header>

            <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
                <label>
                    <Text size="sm">Nome de usuário</Text>
                    <TextInput
                        prefix="ignite.com/"
                        placeholder="seu-usuario"
                        {...register('username')}
                    />

                    {errors.username && (
                        <FormError size="sm">{errors.username.message}</FormError>
                    )}
                </label>

                <label>
                    <Text size="sm">Sobre você</Text>
                    <TextArea {...register('bio')} />
                    <FormAnnotation size='sm'>
                        Fale um pouco sobre você. Isto será exibido em sua página pessoal.
                    </FormAnnotation>

                </label>

                <Button type="submit" disabled={isSubmitting}>
                    Finalizar
                    <ArrowRight />
                </Button>
            </ProfileBox>
        </Container>
    )
}
