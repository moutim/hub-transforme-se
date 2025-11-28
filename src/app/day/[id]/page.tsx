import { getDayById } from "@/features/days/api/api";
import DaySkeleton from "@/shared/components/skeletons/day/day-skeleton";
import { Suspense } from "react";
import styles from "./day.module.css";

interface IDayProps {
  params: Promise<{
    id: string;
  }>
}

async function DayContent({ id }: { id: string }) {
  const dia = await getDayById(Number(id));

  if (!dia || !dia.conteudo) {
    return (
      <div className="container has-text-centered">
        <h1 className="title">Dia não encontrado</h1>
        <p>O dia com ID {id} não foi encontrado.</p>
      </div>
    );
  }

  return (
    <section>
      <h4 className="title is-2">{dia.titulo}</h4>
      <div 
        className={`container ${styles.content} ${styles.containerBulma}`}
        dangerouslySetInnerHTML={{ __html: dia.conteudo }}
      />
    </section>
  )
}

export default async function Day({ params }: IDayProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<DaySkeleton />}>
      <DayContent id={id} />
    </Suspense>
  );
}