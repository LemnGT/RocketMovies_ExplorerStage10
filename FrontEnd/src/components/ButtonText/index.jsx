import { Container } from "./styles";

export function ButtonText({ title, icon, onClick, ...rest }) {
  return (
    <Container type="button" onClick={onClick} {...rest}>
      {icon}
      {title}
    </Container>
  );
}
