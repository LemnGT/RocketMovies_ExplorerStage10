import { Input } from "../Input";
import { Container, Profile, PageName } from "./styles";
import { IoIosSearch } from "react-icons/io";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../ButtonText";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar-people-profile-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

export function Header({ setSearch }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <PageName to="/">RocketMovies</PageName>

      <Input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar por título"
        Icon_end={<IoIosSearch />}
      />

      <Profile>
        <div>
          <strong>
            <a href="/profile">{user.name}</a>
          </strong>
          <ButtonText title="sair" onClick={handleSignOut} />
        </div>
        <a href="/profile">
          <img src={avatarUrl} alt={user.name} />
        </a>
      </Profile>
    </Container>
  );
}
