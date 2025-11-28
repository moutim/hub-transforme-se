'use client';

import { IWeek } from "@/shared/models/weeks.interface";
import styles from './week-item.module.css';
import { useRouter } from "next/navigation";

export default function WeekItem({ semana }: { semana: IWeek }) {
  const router = useRouter();
  const handleRedirect = (id: number) => router.push(`/${id}`);

  return (
    <div
    onClick={() => handleRedirect(semana.id)}
    className="column is-one-third animate__animated animate__fadeInUp"
    >
      <div className={`card ${styles.cardWeek}`}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <span className="icon is-large">
                <i className={`fas ${semana.icone} fa-2x`}></i>
              </span>
            </div>
          </div>

          <div className="media-content">
            <p className="title is-4 mb-1">{semana.titulo}</p>
            <p className="subtitle is-6">{semana.descricao}</p>
            <p className="subtitle is-6">{semana.subtitulo}</p>
          </div>

          <div className="content mt-2">
            <progress className="progress" value="60" max="100">
              45%
            </progress>
          </div>
        </div>
      </div>
    </div>
  )
}