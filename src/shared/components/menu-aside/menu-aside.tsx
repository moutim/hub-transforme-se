'use client';

import styles from './menu-aside.module.css';
import ThemeToggle from '../theme-toggle/theme-toggle';
import { useState } from 'react';
import ListItem from '../list-item/list-item';

export default function MenuAside() {
  const [asideClosed, setAsideClosed] = useState<boolean>(false);
  const handleCloseAside = () => setAsideClosed(!asideClosed);

  return (
    <aside>
      <section className={`${styles.asideStyle} ${asideClosed ? styles.asideClosed : ''} is-flex is-flex-direction-column is-justify-content-space-between`}>
        <div>
          <div className={`${styles.containerLogo} ${asideClosed ? styles.asideClosed : ''} section pl-5 pr-5 pb-5`}>
            {
              !asideClosed && (
                <figure className={`image ${styles.logo}`}>
                  <img src="/logo.png" />
                </figure>
              )
            }

            <button
              onClick={() => handleCloseAside()}
              className={`button is-ghost`}
            >
              <span className="icon is-small">
                <i className={`fas ${styles.containerLogo} ${asideClosed ? 'fa-arrow-right' : 'fa-arrow-left'} ${styles.menuAsideArrow}`}></i>
              </span>
            </button>
          </div>

          <nav className="menu section pl-5 pr-5 pt-5">
            <ul className="menu-list">
              <ListItem text={asideClosed ? '': 'Semanas'} icon='fa-calendar-week' route="/" />
              <ListItem text={asideClosed ? '': 'Dias'} icon='fa-calendar-day' route="/days" />
              <ListItem text={asideClosed ? '': 'Grupos'} icon='fa-arrows-rotate' route="/groups" />
              <ListItem text={asideClosed ? '': 'Complementar'} icon='fa-folder-open' route="/materials" />
            </ul>
          </nav>
        </div>

        <div className={`section pl-5 pr-5 pt-5 pb-5 ${styles.themeToggle} ${styles.containerLogo} ${asideClosed ? styles.asideClosed : ''}`}>
          <ThemeToggle textVisible={ asideClosed ? false : true } />
        </div>
      </section>
    </aside>
  )
}