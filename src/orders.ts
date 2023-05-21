/** Описание товара. */
export interface Order { 
    /** Название товара. */
    name?: string;
    /** Описание товара. */
    description?: string;
    /** Ссылка на изображение товара. */
    imgSrc?: string;
};


export const cross: Order[] = [
    { name: 'iphone 14', description: 'dododododoo wwowoowowo wwowoowowooww wwoowowowow', imgSrc: '/images/iph13.png' },
    { name: 'iphone 13', description: 'wooowowowo owwooowowoow owoowooowoow owoowowowow wo', imgSrc: '/images/iph13.png' },
    { name: 'Honor 14', description: 'woowoowo wpwowowoow wwowoowoowow owowoowowowo woowo', imgSrc: '/images/iph13.png' },
    { name: 'Honor 13', description: 'woowooowoooowowoowoowoowoooow owoowoo oowowow', imgSrc: '/images/iph13.png' },
    { name: 'Xiaomi 14', description: 'wowowowowo  ow oww owowowowoww woow', imgSrc: '/images/iph13.png' },
    { name: 'Xiaomi 13', description: 'wowowo wowoww  wo wo owowowowwooow', imgSrc: '/images/iph13.png' },
];


export const outerwear: Order[] = [
    { name: 'MacBook pro 14', description: 'sosoooso osooso osooso', imgSrc: '/images/nb.png' },
    { name: 'Redmibook 15', description: 'soosoos osoos oso oososo', imgSrc: '/images/nb.png' },
];


export const underwear: Order[] = [
    { name: 'Кресло1', description: 'Fofo ofoofo ofoofoo ofoo', imgSrc: '/images/kres.png' },
    { name: 'Кресло2', description: 'Fooofoofo foo ofoo', imgSrc: '/images/kres.png' },
    { name: 'Кресло3', description: 'Fofoofof fofofo fofof', imgSrc: '/images/kres.png' },
];