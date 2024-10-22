import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar-people-profile-svgrepo-com.svg";

import {
  IoIosLock,
  IoIosMail,
  IoMdPerson,
  IoMdArrowRoundBack,
  IoIosCamera,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Profile() {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <a onClick={handleBack}>
          <IoMdArrowRoundBack />
          Voltar
        </a>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <IoIosCamera />
            <input id="avatar" type="file" onChange={handleAvatarChange} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={IoMdPerson}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={IoIosMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={IoIosLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={IoIosLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Button label="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
