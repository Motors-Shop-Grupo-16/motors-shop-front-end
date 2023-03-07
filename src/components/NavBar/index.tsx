import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.svg";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { UserContext } from "../../contexts/UserContext";
import { LinkBtn } from "../../styles/buttonsNavBar";
import { BodyText } from "../../styles/typography";
import UserImage from "../UserImage/userImage";
import {
  Container,
  ContainerHeader,
  NavContainer,
  NavUl,
  UserUl,
} from "./styles";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [submenuIsVisible, setSubmenuIsVisible] = useState(false);

  const { goTo } = useContext(AnnouncementContext);

  const { user, setUser, setIsEditUser, setIsEditAddress, setToken } =
    useContext(UserContext);

  function logout() {
    localStorage.removeItem("@usermotorsshop:token");
    setSubmenuIsVisible(false);
    setUser(null);
    setToken(null);
    goTo("/");
  }

  const location = useLocation();
  let pathname = "/";
  if (
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    location.pathname !== "/product"
  ) {
    pathname = location.pathname;
  }

  return (
    <>
      <ContainerHeader>
        <Container>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <NavContainer isVisible={menuIsVisible}>
            <NavUl>
              <li>
                <HashLink
                  className="hashLink"
                  to={`${pathname}${location.search}#car`}
                >
                  <a className="link_li">Carros</a>
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="hashLink"
                  to={`${pathname}${location.search}#motorcycle`}
                >
                  <a className="link_li">Motos</a>
                </HashLink>
              </li>
              <li>
                <HashLink className="hashLink" to="/#auction">
                  <a className="link_li">Leilão</a>
                </HashLink>
              </li>
            </NavUl>
            <div className="separator"></div>
            {user ? (
              <UserUl submenuIsVisible={submenuIsVisible}>
                <li>
                  <div className="navbar-userimage">
                    <UserImage className="productUserImage" name={user.name} />
                  </div>
                  <div
                    onClick={() => setSubmenuIsVisible(!submenuIsVisible)}
                    className="navbar-nameuser"
                  >
                    <BodyText
                      className=""
                      tag="p"
                      style="body-1"
                      weight="600"
                      color="--color-grey0"
                    >
                      {user.name}
                    </BodyText>
                  </div>
                </li>
                <ul className="sub_menu">
                  <li>
                    <LinkBtn
                      className="medium"
                      as="a"
                      onClick={() => setIsEditUser(true)}
                    >
                      Editar Perfil
                    </LinkBtn>
                  </li>
                  <li>
                    <LinkBtn
                      className="medium"
                      as="a"
                      onClick={() => setIsEditAddress(true)}
                    >
                      Editar Endereço
                    </LinkBtn>
                  </li>
                  {user.isAdvertiser ? (
                    <li>
                      <LinkBtn
                        className="medium"
                        as="a"
                        onClick={() => console.log("Ir pagina meus anuncios")}
                      >
                        Meus Anúncios
                      </LinkBtn>
                    </li>
                  ) : null}
                  <li>
                    <LinkBtn className="medium" as="a" onClick={() => logout()}>
                      Sair
                    </LinkBtn>
                  </li>
                </ul>
              </UserUl>
            ) : (
              <NavUl>
                <li>
                  <a className="medium link_li" onClick={() => goTo("/login")}>
                    Fazer Login
                  </a>
                </li>
                <li className="li_btn">
                  <LinkBtn
                    className="outlineGrey medium btn_li"
                    as="a"
                    onClick={() => goTo("/register")}
                  >
                    Cadastrar
                  </LinkBtn>
                </li>
              </NavUl>
            )}
          </NavContainer>
          {menuIsVisible ? (
            <button
              className="btn_menu"
              onClick={() => setMenuIsVisible(false)}
            >
              <GrFormClose size={24} />
            </button>
          ) : (
            <button className="btn_menu" onClick={() => setMenuIsVisible(true)}>
              <BiMenu size={24} />
            </button>
          )}
        </Container>
      </ContainerHeader>
    </>
  );
};

export default Navbar;
