import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink
                style={{color:"white", textDecoration: 'none'}}
                to={SHOP_ROUTE}
            >
                КупиДевайс
            </NavLink>
            {user.isAuth ?
                <Nav className="ms-auto" style={{color: "white"}}>
                    <Button
                        className={"me-1"}
                        variant={"outline-light"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Админ панель
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={() => logout()}
                    >
                        Выйти
                    </Button>
                </Nav>
            :
            <Nav
                className="ms-auto"
                style={{color: "white"}}
            >
                <Button
                    variant={"outline-light"}
                    onClick={() => navigate(LOGIN_ROUTE)}
                >
                    Авторизация
                </Button>
            </Nav>
            }
            </Container>
        </Navbar>
    );
}
);

export default NavBar;