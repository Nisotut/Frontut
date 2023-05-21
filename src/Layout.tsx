import { Container, Navbar, Nav, Row, Col } from "react-bootstrap"
import { LeftMenu } from "./components/LeftMenu/LeftMenu"
import { NavLink, Outlet } from "react-router-dom"


/** Шаблон. */
export const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        NiSo
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Главная страница
                        </NavLink>
                        <Nav/>
                        
                        <NavLink to={'products'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Товары
                        </NavLink>
                        <NavLink to={'about'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            О нас
                        </NavLink>
                        <NavLink to={'admin'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Админ
                        </NavLink>
                       
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row style={{ marginTop: '10px'}}>
                    <Col sm={2} md={2} lg={2}>
                        <LeftMenu />
                    </Col>
                    <Col sm={10} md={10} lg={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
