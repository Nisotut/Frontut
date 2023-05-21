import './Card.css'
import { Card as ButCard, Button } from 'react-bootstrap'
import { CardModal } from './CardModal';
import { useState } from 'react'
import { Order } from '../../orders';

interface Props {
    /** Описание товара. */
    order: Order;
}

/** Компонент карточки товара. */
export const Card = ({ order }: Props) => {
    /** Заказать товар. */
    const [confirm, setConfirm] = useState<boolean>(false);
    /** Открытие модального окна. */
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <>
            <CardModal order={order} show={openModal} onHide={() => setOpenModal(false)} />
            <ButCard border="info" style={{ minWidth: '300px'}}> 
                <ButCard.Img variant='top' src={order.imgSrc ? order.imgSrc : '/logo192.png'} style={{ width: "50%", margin: 'auto'}}  />
                <ButCard.Body>
                    <ButCard.Title>
                        {order.name ? order.name : 'Товар'}
                    </ButCard.Title>
                    <ButCard.Text>
                        {order.description ? order.description : 'Описание отсутствует'}
                    </ButCard.Text>
                    <div className='buttons'>
                        <Button size='sm' variant={confirm ? 'light' : 'primary'} onClick={() => setConfirm((prev) => !prev)}>{confirm ? 'Отменить' : 'Заказать'}</Button>
                        <Button size='sm' variant='light' onClick={() => setOpenModal(true)} >Подробнее</Button>
                    </div>
                </ButCard.Body>
            </ButCard>
        </>
    );
};
