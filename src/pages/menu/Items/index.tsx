import menu from './items.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    search: string;
    filter: number | null;
    ordain: string;
}

export default function Items(props: Props) {
    const [list, setList] = useState(menu);
    const { search, filter, ordain } = props;

    function testSarch(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function testFilter(id: number | null) {
        if (filter !== null) return filter === id
        return true
    }

    function commandOrder(newList: typeof menu) {
        switch(ordain) {
            case 'porcao':
                return newList.sort((a,b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
            case 'qtd_pessoas':
                return newList.sort((a,b) => a.price > b.price ? 1 : -1);
            default:
                return newList
        }
    }

    useEffect(() => {
        const newList = menu.filter(item => testSarch(item.title) &&
        testFilter(item.category.id));
        setList(commandOrder(newList));
    },[search, filter, ordain])

    return (
        <div className={styles.itens}>
            {list.map((item) => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}