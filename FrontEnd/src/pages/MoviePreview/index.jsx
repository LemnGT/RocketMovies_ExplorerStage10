import { Container, Content } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { FaRegClock } from "react-icons/fa";
import {
  IoIosStar,
  IoIosStarOutline,
  IoMdArrowRoundBack,
} from "react-icons/io";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function MoviePreview() {
  let i = 1;
  const goodRating = [];
  const badRating = [];

  const navigate = useNavigate();

  const params = useParams();

  const [data, setData] = useState("");

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o filme?");
    if (confirm) {
      await api.delete(`/movie_notes/${params.id}`);
      navigate(-1);
    } else {
      return;
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  while (data.rating >= i) {
    goodRating.push({ star: i });
    i++;
  }
  while (i <= 5) {
    badRating.push({ nostar: i });
    i++;
  }

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <div>
              <a onClick={handleBack}>
                <IoMdArrowRoundBack /> Voltar
              </a>
              <a onClick={() => handleRemove()}>Excluir filme</a>
            </div>
            <div id="title">
              <h1>{data.title}</h1>
              <section>
                {goodRating.map((goodRating) => (
                  <span key={String(goodRating.star)}>
                    <IoIosStar />
                  </span>
                ))}
                {badRating.map((badRating) => (
                  <span key={String(badRating.nostar)}>
                    <IoIosStarOutline />
                  </span>
                ))}
              </section>
            </div>
            <div id="infos">
              <img src="https://github.com/LemnGT.png" alt="" />
              <span>Por MG</span>
              <FaRegClock />
              <span> {data.created_at}</span>
            </div>
            {data.movieTags && (
              <Section>
                <footer>
                  {data.movieTags.map((tag) => (
                    <Tag key={tag.id} title={tag.name} />
                  ))}
                </footer>
              </Section>
            )}
            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
