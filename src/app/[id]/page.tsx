import { Suspense } from "react";
import { getWeekById, getWeeks } from "@/features/weeks/api/api";
import WeekListSkeleton from "@/shared/components/skeletons/weeks/week-list-skeleton/week-list-skeleton";
import DaysList from "@/features/days/days-list/days-list";

interface WeekIdProps {
  params: Promise<{
    id: string;
  }>;
}

async function WeekContent({ id }: { id: string }) {
  const week = await getWeekById(Number(id));

  return (
    <DaysList dias={week?.dias ?? []} titulo={week?.titulo.toLowerCase() ?? ''} />
  )
}

export default async function WeekId({ params }: WeekIdProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<WeekListSkeleton />}>
      <WeekContent id={id} />
    </Suspense>
  );
}