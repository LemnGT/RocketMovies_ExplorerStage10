import { Container } from "./styles";

export function Input({ icon: Icon, Icon_end, onChange, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} onChange={onChange} />
      {Icon_end}
    </Container>
  );
}
