import './HomePage.css'
import { Categories } from '../../components/Categories/Categories'
import { cross, outerwear, underwear } from '../../orders'




/** Главная страница. */
export const HomePage = () => {
    return (
        <>
            <h5>Главная страница</h5>

          

            

            
            
            <Categories categoryName={'Смартфоны'} ordersArray={cross} />
            <Categories categoryName={'Ноутбуки'} ordersArray={outerwear} />
            <Categories categoryName={'Кресла'} ordersArray={underwear} />
            <Categories categoryName={'Прочее'} />
        </>
    );
};
