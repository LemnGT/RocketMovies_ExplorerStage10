import { Container } from "./styles";
import { Tag } from "../Tag";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export function MiniPrev({ data, onClick, ...rest }) {
  let i = 1;
  const goodRating = [];
  const badRating = [];

  while (data.rating >= i) {
    goodRating.push({ star: i });
    i++;
  }
  while (i <= 5) {
    badRating.push({ nostar: i });
    i++;
  }

  return (
    <Container onClick={onClick}>
      <h2>{data.title}</h2>
      <section>
        {goodRating.map((goodRating) => (
          <span key={goodRating.star}>
            <IoIosStar />
          </span>
        ))}
        {badRating.map((badRating) => (
          <span key={badRating.nostar}>
            <IoIosStarOutline />
          </span>
        ))}
      </section>
      <p>{data.description}</p>
      {data.tag && (
        <footer>
          {data.tag.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
