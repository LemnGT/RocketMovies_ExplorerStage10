import { useState } from "react";
import { Container, Form, BG } from "./styles";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Button } from "../../components/Button";
import {
  IoIosLock,
  IoIosMail,
  IoMdPerson,
  IoMdArrowRoundBack,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={IoMdPerson}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="E-mail"
          icon={IoIosMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={IoIosLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Cadastrar" onClick={handleSignUp} />
        <Link to="/">
          <IoMdArrowRoundBack />
          Voltar para o login
        </Link>
      </Form>
      <BG />
    </Container>
  );
}
