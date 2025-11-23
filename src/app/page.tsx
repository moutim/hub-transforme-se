import { Suspense, use } from "react";
import { getWeeks } from "@/features/weeks/api/api";
import WeeksList from "@/features/weeks/weeks-list/weeks-list";
import WeekListSkeleton from "@/shared/components/skeletons/weeks/week-list-skeleton/week-list-skeleton";

const weeksRequest = getWeeks();

function WeeksContent() {
  const weeks = use(weeksRequest);

  return <WeeksList semanas={weeks.semanas} />;
}

export default function Home() {
  return (
    <main>
      <section>
        <Suspense fallback={<WeekListSkeleton />}>
          <WeeksContent />
        </Suspense>
      </section>
    </main>
  );
}
