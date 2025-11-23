import { IDay } from "@/shared/models/weeks.interface";
import DayItem from "../day-item/day-item";

export default function DaysList({ dias }: { dias: IDay[] }) {
  return (
    <>
      <h2 className="title is-2">Aulas</h2>

      <section className="columns is-multiline is-4">
        {
          dias.map((dia) => (
            <DayItem key={dia.id} dia={dia} />
          ))
        }
      </section>
    </>
  )
}