import { NavOptions, Text, ListOptions, Link } from "./Navbar.styles";
import "./styles.css";
const NavBar = () => {
  return (
    <nav>
      <NavOptions>
        <Text href="#">
          <i className="ri-apple-fill"></i>
        </Text>
        <ListOptions>
          <li>
            <Link href="#" className="link">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Contatos
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Referências
            </Link>
          </li>
        </ListOptions>
      </NavOptions>
    </nav>
  );
};

export default NavBar;
