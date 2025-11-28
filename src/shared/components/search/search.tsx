'use client';

import { useState, useEffect } from 'react';
import styles from './search.module.css';
import weeks from '../../mocks/weeks.mock';
import { IDay, IWeek } from '../../models/weeks.interface';

const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<IDay[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const normalizedQuery = normalizeText(query);
    const allDays: IDay[] = weeks.semanas.flatMap((semana: IWeek) => semana.dias || []);
    const filtered = allDays.filter((day: IDay) =>
      normalizeText(day.titulo).includes(normalizedQuery) ||
      normalizeText(day.descricao).includes(normalizedQuery)
    );
    console.log(filtered);
    setResults(filtered);
  }, [query]);

  return (
    <div className="field mb-6" style={{ position: 'relative' }}>
      <div className="control has-icons-left">
        <input
          className={`input is-medium ${styles.searchInput}`}
          type="text"
          placeholder="Procure por algum assunto"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-magnifying-glass"></i>
        </span>
      </div>
      {results.length > 0 && (
        <div className={`${styles.dropdown} box p-0`}>
          <div className={styles.dropdownList}>
            {results.map((day) => (
              <a
                key={day.id}
                href={`/day/${day.id}`}
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownMedia}>
                  <span className={styles.dropdownIcon}>
                    <i className={`fas ${day.icone}`}></i>
                  </span>
                  <div>
                    <p className={styles.dropdownTitle}>{day.titulo}</p>
                    <p className={styles.dropdownDesc}>{day.descricao}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}