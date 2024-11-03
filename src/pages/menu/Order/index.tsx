import classNames from 'classnames';
import styles from './Order.module.scss'
import options from './options.json'
import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    ordain: string;
    setOrdain: React.Dispatch<React.SetStateAction<string>>;
}

export default function Order({ordain, setOrdain}: Props) {
    const [open, setOpen] = useState(false)
    const ordainName = ordain && options.find(option => option.value === ordain)?.nome;
    return (
        <button 
            className={classNames({
                [styles.ordenador]: true,
                [styles["ordenador--ativo"]]: ordain !== "",
            })}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>{ordainName || "Ordenar Por"}</span>
            {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div 
                className={classNames({
                    [styles.ordenador__options]: true,
                    [styles["ordenador__options--ativo"]]: open,
                })}
            >
                {options.map(option => (
                    <div 
                        className={styles.ordenador__option} 
                        key={option.value}
                        onClick={() => setOrdain(option.value)}
                    >
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}