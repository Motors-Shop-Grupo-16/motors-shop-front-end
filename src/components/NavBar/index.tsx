import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

import logo from "../../assets/Logo.png";
import { LinkBtn } from "../../styles/buttonsNavBar";
import { Container, NavContainer, UserUl, NavUl } from "./styles";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [submenuIsVisible, setSubmenuIsVisible] = useState(true);
  const [user, setUser] = useState(true);
  const [isAdm, setIsAdm] = useState(false);

  return (
    <>
      <Container>
        {/* <Link to={'/home'}> */}
        <img src={logo} alt="logo" />
        {/* </Link> */}
        <NavContainer isVisible={menuIsVisible}>
          <NavUl>
            <li>
              <LinkBtn className="medium link_li" as="a" href="#">
                Carros
              </LinkBtn>
            </li>
            <li>
              <LinkBtn className="medium link_li" as="a" href="#">
                Motos
              </LinkBtn>
            </li>
            <li>
              <LinkBtn className="medium link_li" as="a" href="#">
                Leilão
              </LinkBtn>
            </li>
          </NavUl>
          <div className="separator"></div>
          {user ? (
            <UserUl submenuIsVisible={submenuIsVisible}>
              <li>
                <div>
                  <span>SL</span>
                </div>
                <LinkBtn onClick={() => setSubmenuIsVisible(!submenuIsVisible)}>
                  Samuel Leão
                </LinkBtn>
              </li>
              <ul className="sub_menu">
                <li>
                  <LinkBtn className="medium" as="a">
                    Editar Perfil
                  </LinkBtn>
                </li>
                <li>
                  <LinkBtn className="medium" as="a">
                    Editar Endereço
                  </LinkBtn>
                </li>
                {isAdm ? (
                  <li>
                    {/* <Link to={'/profile'}> */}
                    <LinkBtn className="medium" as="a">
                      Meus Anúncios
                    </LinkBtn>
                    {/* </Link> */}
                  </li>
                ) : null}
                <li>
                  <LinkBtn
                    className="medium"
                    as="a"
                    onClick={() => setUser(false)}
                  >
                    sair
                  </LinkBtn>
                </li>
              </ul>
            </UserUl>
          ) : (
            <NavUl>
              <li>
                {/* <Link to={'/login'}> */}
                <LinkBtn className="medium link_li" as="a">
                  Fazer Login
                </LinkBtn>
                {/* </Link> */}
              </li>
              <li className="li_btn">
                {/* <Link to={'/register'}> */}
                <LinkBtn className="outlineGrey medium btn_li" as="a">
                  Cadastrar
                </LinkBtn>
                {/* </Link> */}
              </li>
            </NavUl>
          )}
        </NavContainer>
        {menuIsVisible ? (
          <button className="btn_menu" onClick={() => setMenuIsVisible(false)}>
            <GrFormClose size={24} />
          </button>
        ) : (
          <button className="btn_menu" onClick={() => setMenuIsVisible(true)}>
            <BiMenu size={24} />
          </button>
        )}
      </Container>
    </>
  );
};

export default Navbar;
