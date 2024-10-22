import { Container } from "./styles";

import { IoIosAdd, IoIosClose } from "react-icons/io";

export function Marcador({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick}>
        {isNew ? <IoIosAdd /> : <IoIosClose />}
      </button>
    </Container>
  );
}
