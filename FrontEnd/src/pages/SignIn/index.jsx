import { Container, Form, BG } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IoIosLock, IoIosMail } from "react-icons/io";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu Login</h2>
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
        <Button label="Entrar" onClick={handleSignIn} />
        <Link to="/signup">Criar conta</Link>
      </Form>
      <BG />
    </Container>
  );
}
