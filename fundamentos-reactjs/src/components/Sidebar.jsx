import styles from './Sidebar.module.css'

import { PencilLine } from "phosphor-react";


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
                src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=50" />
            
            <div className={styles.profile}>
                <img src="http://github.com/deyvsonaguiar.png" />
                <strong>Deyvson Aguiar</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    )
    
}