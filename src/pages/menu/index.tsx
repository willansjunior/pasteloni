import styles from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'
import Search from './Search'
import { useState } from 'react'
import Filters from './Filters'
import Order from './Order'
import Items from './Items'

export default function Menu() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [ordain, setOrdain] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Código e espaguete é aqui!
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    Cardápio
                </h3>
                <Search 
                    search={search}
                    setSearch={setSearch}
                />
                <div className={styles.cardapio__filtros}>
                    <Filters 
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <Order 
                        ordain={ordain} 
                        setOrdain={setOrdain} 
                    />
                </div>
                <Items 
                    search={search}
                    filter={filter}
                    ordain={ordain}
                />
            </section>
        </main>
    )
}