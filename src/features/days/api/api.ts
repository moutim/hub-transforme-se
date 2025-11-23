import weeksMock from "@/shared/mocks/weeks.mock";
import { IDay } from "@/shared/models/weeks.interface";

export async function getDayById(id: number): Promise<IDay | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Busca em todas as semanas e retorna o dia específico
      for (const semana of weeksMock.semanas) {
        const dia = semana.dias?.find(dia => dia.id === id);
        if (dia) {
          resolve(dia);
          return;
        }
      }
      resolve(undefined);
    }, 1000);
  });
}