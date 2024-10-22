import { Container } from "./styles";

export function Button({ label, icon, onClick, loading = false }) {
  return (
    <Container type="button" disabled={loading} onClick={onClick}>
      {icon}
      {loading ? "Carregando..." : label}
    </Container>
  );
}
