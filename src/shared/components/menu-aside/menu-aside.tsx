import styles from './menu-aside.module.css';
import ThemeToggle from '../theme-toggle/theme-toggle';

export default function MenuAside() {
  return (
    <aside>
      <section className={`${styles.asideStyle} is-flex is-flex-direction-column is-justify-content-space-between`}>
        <div>
          <div className={`${styles.containerLogo} section pl-5 pr-5 pb-5`}>
            <figure className="image is-64x64">
              <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
            </figure>

            <h1>Transforme-se</h1>
          </div>

          <nav className="menu section pl-5 pr-5 pt-5">
            <ul className="menu-list">
              <li className="mb-3">
                <a>
                  <i className="fas fa-calendar-week mr-4"></i>
                  Semanas
                </a>
              </li>
              <li className="mb-3">
                <a>
                  <i className="fas fa-calendar-day mr-4"></i>
                  Dias
                </a>
              </li>
              <li className="mb-3">
                <a>
                  <i className="fas fa-group-arrows-rotate mr-4"></i>
                  Grupos
                </a>
              </li>
              <li className="mb-3">
                <a>
                  <i className="fas fa-folder-open mr-4"></i>
                  Material complementar
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={`section pl-5 pr-5 pt-5 pb-5 ${styles.themeToggle}`}>
          <ThemeToggle />
        </div>
      </section>
    </aside>
  )
}