import styles from './menu-aside.module.css';

export default function MenuAside() {
  return (
    <aside>
      <section className="section">
        <div className={styles.containerLogo}>
          <figure className="image is-64x64">
            <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
          </figure>

          <h1>Transforme-se</h1>
        </div>

        <nav className="menu mt-6">
          <ul className="menu-list">
            <li>
              <a>
                <i className="fas fa-calendar-week mr-4"></i>
                Semanas
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-calendar-day mr-4"></i>
                Dias
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-group-arrows-rotate mr-4"></i>
                Grupos
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-folder-open mr-4"></i>
                Material complementar
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  )
}