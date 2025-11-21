export interface IWeek {
  id: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  icone: string;
}

export interface IWeeks {
  semanas: IWeek[]
}