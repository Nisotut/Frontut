import { Nav } from 'react-bootstrap'

/** Компонент с отображением левого меню */
export const LeftMenu = () => {
    return (
        <>
            <h5>Товары</h5>
            <Nav className="flex-column">
                <Nav.Link href="/products#burgers">Смартфоны</Nav.Link>
                <Nav.Link href="/products#pasta">Ноутбуки</Nav.Link>
                <Nav.Link href="/products#beverages">Кресла</Nav.Link>
            </Nav>
        </>
    );
};
