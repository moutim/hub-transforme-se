import DaysList from "@/features/days/days-list/days-list";
import { getDays } from "@/features/weeks/api/api";
import WeekListSkeleton from "@/shared/components/skeletons/weeks/week-list-skeleton/week-list-skeleton";
import { Suspense } from "react";

async function DaysContent() {
  const days = await getDays();

  return (
    <DaysList dias={days ?? []} titulo="1ª a 12ª" />
  )
}

export default function DaysPage() {
  return (
    <Suspense fallback={<WeekListSkeleton />}>
      <DaysContent />
    </Suspense>
  );
}