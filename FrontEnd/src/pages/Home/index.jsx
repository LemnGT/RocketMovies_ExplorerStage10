import { ButtonNav } from "../../components/ButtonNav";
import { Header } from "../../components/Header";
import { MiniPrev } from "../../components/MiniPrev";
import { Container } from "./styles";
import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/moviepreview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header setSearch={setSearch} />
      <main>
        <div>
          <h1>Meus filmes</h1>
          <ButtonNav to="/createmovie">
            <FaPlus /> Adicionar filme
          </ButtonNav>
        </div>
        {notes.map((note) => (
          <MiniPrev
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
          />
        ))}
      </main>
    </Container>
  );
}
