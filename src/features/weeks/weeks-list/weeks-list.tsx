import { IWeeks } from "@/shared/models/weeks.interface";
import WeekItem from "../week-item/week-item";
import WeekSkeleton from "../../../shared/components/skeletons/weeks/week-skeleton/week-skeleton";

export default function WeeksList({ semanas }: IWeeks ) {
  return (
    <section className="columns is-multiline is-4">
      {
        semanas ? semanas.map((semana) => (
          <WeekItem key={semana.id} semana={semana} />
        )) : Array.from({ length: 9 }).map((_, index) => (
          <WeekSkeleton key={index} />
        ))
      }
    </section>
  )
}