import { IWeek, IWeeks } from "@/shared/models/weeks.interface";
import weeksMock from "@/shared/mocks/weeks.mock";

export async function getWeeks(): Promise<IWeeks> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(weeksMock);
    }, 1000);
  });
}

export async function getWeekById(id: number): Promise<IWeek | undefined> {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        weeksMock.semanas.find(semana => semana.id == id)
      );
    }, 1000);
  });
}
