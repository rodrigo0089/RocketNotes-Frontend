import { Container, Form } from './styles'

import { Header } from '../../components/Header'


import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />

          <Textarea placeholder="Observações"/>

        </Form>
      </main>



      <Button title="Salvar" />
    </Container>
  )
}