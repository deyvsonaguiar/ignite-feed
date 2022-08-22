import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="http://github.com/deyvsonaguiar.png" />
                    <div className={styles.authorInfo}>
                        <strong>Deyvson Aguiar</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                
                <time dateTime="2022-08-16 23:13:33" title="16 de Agosto às 23:13">Publicado há 1h</time>
            </header>

            <div className={styles.content}>

                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">👉{'  '}jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}  
                    <a href="">#nlw</a>{' '} 
                    <a href="">#rocketseat</a> 
                </p>

            </div>
        </article>
    )
}