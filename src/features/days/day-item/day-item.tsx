'use client';

import { IDay } from "@/shared/models/weeks.interface";
import { useRouter } from "next/navigation";
import styles from './day-item.module.css';

export default function DayItem({ dia }: { dia: IDay }) {
  const router = useRouter();

  const handleRedirect = (id: number) => {
    router.push(`/day/${id}`);
  };

  return (
    <div
      className="column is-half animate__animated animate__fadeInUp"
      onClick={() => handleRedirect(dia.id)}
    >
      <div className={`card ${styles.cardDay}`}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <span className="icon is-large">
                <i className={`fas ${dia.icone} fa-2x`}></i>
              </span>
            </div>
          </div>

          <div className="media-content">
            <p className="title is-4 mb-1">{dia.titulo}</p>
            <p className="subtitle is-6">{dia.subtitulo}</p>
            <p className="subtitle is-6">{dia.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  )
}