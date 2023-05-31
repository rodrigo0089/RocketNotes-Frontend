import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi"

import { useAuth } from "../../hooks/auth";

import { api } from '../../services/api'

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { Container, Form, Avatar } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
const { user, updateProfile } = useAuth();

  const [name, setName ] = useState(user.name);
  const [email, setEmail ] = useState(user.email);
  const [passwordOld, setPasswordOld ] = useState();
  const [passwordNew, setPasswordNew ] = useState();

  const navigate = useNavigate();
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  const [ avatar, setAvatar ] = useState(avatarUrl);
  const [ avatarFile, setAvatarFile ] = useState(null);


  function handleBack(){
    navigate(-1)
  }


 async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChanceAvatar(){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  }

  return(
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft size={24} />

        </button>
       
        
      </header>
      <Form>
        <Avatar>
        <img 
          src={avatar}
          alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file"
              onChange={handleChanceAvatar}
            />
          </label>
        </Avatar>

        <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        value={name}
        onChange={e => setName(e.target.value)}
        />

        <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        value={email}
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
        placeholder="Senha nova"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}