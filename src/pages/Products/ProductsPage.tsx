import { cross, outerwear, underwear } from '../../orders'
import { useLocation } from 'react-router-dom'
import { Categories } from '../../components/Categories/Categories'

/** Страница со списком товаров. */
export const ProductsPage = () => {
    /** Получаем hash из строки браузера. */
    const { hash } = useLocation()

    return (
        <>
            <h5>Товары</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad omnis tenetur reprehenderit dicta repudiandae 
                voluptas! Doloribus quia unde veniam, nulla ipsum iste quibusdam sunt odio dolor nesciunt corrupti facilis.</p>
            {hash !== '' ? (
                <>
                    {hash === '#burgers' && <Categories categoryName={'Смартфоны'} ordersArray={cross} />}
                    {hash === '#pasta' && <Categories categoryName={'Ноутбуки'} ordersArray={outerwear} />}
                    {hash === '#beverages' && <Categories categoryName={'Кресла'} ordersArray={underwear} />}
                </>
            ) : (
                <>
                    <Categories categoryName={'Смартфоны'} ordersArray={cross} />
                    <Categories categoryName={'Ноутбуки'} ordersArray={outerwear} />
                    <Categories categoryName={'Кресла'} ordersArray={underwear} />
                    <Categories categoryName={'Прочее'} />
                </>
            )}
        </>
    );
};
