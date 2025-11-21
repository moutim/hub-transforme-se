import { IWeeks } from "@/shared/models/weeks.interface";
import weeksMock from "@/shared/mocks/weeks.mock";

export async function getWeeks(): Promise<IWeeks> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(weeksMock);
    }, 1000);
  });
}
