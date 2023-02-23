import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi"

import { Container, Form, Avatar } from "./styles"

import { Button } from "../../components/Button"

import { Input } from "../../components/Input"

import { Link } from 'react-router-dom'

export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
        <img 
          src="http://github.com/rodrigo0089.png" 
          alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        />

        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        />

        <Input 
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
        />

        <Input 
        placeholder="Senha nova"
        type="password"
        icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}