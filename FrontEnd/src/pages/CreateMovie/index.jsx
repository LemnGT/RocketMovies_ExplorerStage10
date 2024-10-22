import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Marcador } from "../../components/Marcador";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { IoMdArrowRoundBack } from "react-icons/io";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título do filme.");
    }

    if (!rating) {
      return alert("Digite a nota do filme (0 a 5).");
    } else if (rating > 5) {
      return alert("Maior nota possível é 5.");
    } else if (rating < 0) {
      return alert("Menor nota possível é 0.");
    }

    if (newTag) {
      return alert(
        "Deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/movie_notes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <a onClick={handleBack}>
            <IoMdArrowRoundBack /> Voltar
          </a>
          <h1>Novo filme</h1>
          <header>
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota de 0 a 5"
              onChange={(e) => setRating(e.target.value)}
            />
          </header>
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <h2>Marcadores</h2>
          <div className="tags">
            {tags.map((tag, index) => (
              <Marcador
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
            <Marcador
              isNew
              placeholder="Novo marcador"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
          <footer>
            <Button label="Excluir filme" />
            <Button
              label="Salvar alterações"
              onClick={() => {
                handleNewNote();
              }}
            />
          </footer>
        </Form>
      </main>
    </Container>
  );
}
