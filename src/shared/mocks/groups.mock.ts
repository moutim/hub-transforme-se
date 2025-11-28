export interface Grupo {
  nome: string;
  integrantes: string[];
  emoji: string;
}

const grupos: Grupo[] = [
  {
    nome: 'Grupo 1',
    integrantes: [
      'Caio', 'Ana da Mata', 'Natanael', 'Livia', 'Matheus Ferreira', 'Emilly'
    ],
    emoji: '🟢'
  },
  {
    nome: 'Grupo 2',
    integrantes: [
      'Rosi', 'Angelo', 'Ana Carolina', 'Carla', 'Felipe', 'Ana Spider'
    ],
    emoji: '🔵'
  },
  {
    nome: 'Grupo 3',
    integrantes: [
      'Klayvem', 'Bea Freire', 'Eduardo', 'Matheus Brito', 'Gustavo'
    ],
    emoji: '🟣'
  },
  {
    nome: 'Grupo 4',
    integrantes: [
      'Sarah', 'Bea Silva', 'Brenda', 'Higor', 'Ronaldo', 'Clara'
    ],
    emoji: '🟠'
  }
];

export default grupos;
