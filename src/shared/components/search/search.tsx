import styles from './search.module.css';

export default function Search() {
  return (
    <div className="field">
      <div className="control has-icons-left">
        <input className={`input is-medium ${styles.searchInput}`} type="text" placeholder="Procure por algum assunto" />
        <span className="icon is-small is-left">
          <i className="fas fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  )
}