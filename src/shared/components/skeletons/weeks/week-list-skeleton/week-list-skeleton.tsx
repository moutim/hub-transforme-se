import WeekSkeleton from "../week-skeleton/week-skeleton";

export default function WeekListSkeleton() {
  return (
    <>
      <h2 className="title is-3 has-skeleton">Semanas</h2>
      <section className="columns is-multiline is-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <WeekSkeleton key={index} />
        ))}
      </section>
    </>
  );
}