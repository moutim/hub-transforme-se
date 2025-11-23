export interface IDay {
  id: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  icone: string;
  conteudo?: string;
}

export interface IWeek {
  id: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  icone: string;
  dias?: IDay[]
}

export interface IWeeks {
  semanas: IWeek[]
}