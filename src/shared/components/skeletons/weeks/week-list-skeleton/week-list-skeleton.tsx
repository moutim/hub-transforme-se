import WeekSkeleton from "../week-skeleton/week-skeleton";

export default function WeekListSkeleton() {
  return (
    <section className="columns is-multiline is-4">
      {Array.from({ length: 9 }).map((_, index) => (
        <WeekSkeleton key={index} />
      ))}
    </section>
  );
}