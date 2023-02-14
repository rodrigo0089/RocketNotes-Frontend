import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile>
        <img 
          src="http://github.com/rodrigo0089.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>Rodrigo Faria</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}