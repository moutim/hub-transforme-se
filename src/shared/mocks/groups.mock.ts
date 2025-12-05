export interface Grupo {
  nome: string;
  integrantes: string[];
  emoji: string;
  resumo: string;
  links: {
    dossie: string;
    projeto: string;
    repositorio: string;
    linktree: string;
  };
}

const grupos: Grupo[] = [
  {
    nome: 'FinUp',
    integrantes: [
      'CAIO HIGOR DO NASCIMENTO OLIVEIRA',
      'ANA BEATRIZ DA MATA SILVA',
      'NATANAEL DA SILVA',
      'LIVIA RIBEIRO ALVARENGA',
      'MATHEUS FERREIRA LIMA',
      'EMILLY BARROS'
    ],
    emoji: '🟢',
    resumo: 'A FinUp é uma plataforma de gestão financeira gamificada focada no jovem da Classe C e D que enfrenta o endividamento e a falta de educação financeira. A ferramenta funciona substituindo planilhas complexas por uma interface lúdica: o usuário insere seus ganhos e gastos, e o sistema transforma esses dados em desafios visuais simples. O objetivo é orientar a tomada de decisão e a priorização de pagamentos de forma intuitiva, permitindo que pessoas sem conhecimento bancário organizem suas finanças sem estresse.',
    links: {
      dossie: 'https://heyzine.com/flip-book/927180dd42.html',
      projeto: 'https://finup-theta.vercel.app/',
      repositorio: 'https://github.com/Grupo-SP02-Transforme-se/SP02_Transforme-se.git',
      linktree: 'https://linktr.ee/projeto.finup'
    }
  },
  {
    nome: 'Heróis Reais',
    integrantes: [
      'ROSILENE SELES DE ARAUJO',
      'ANGELO QUEIROZ',
      'ANA CAROLINA OLIVEIRA DOS SANTOS',
      'CARLA SANTOS',
      'Felipe Timoteo Neves Moura',
      'ANA LUISA TORRES LOUREIRO GERMANIO'
    ],
    emoji: '🔵',
    resumo: 'Portal gratuito que conecta doadores e ONGs, facilitando a doação de roupas, alimentos, móveis e brinquedos de forma organizada e segura. O projeto beneficia ONGs com recursos e voluntários, doadores com certificações, horas complementares e cursos exclusivos, e empresas com reforço de imagem institucional, popularidade e engajamento social. Conta com instituições verificadas para garantir doações confiáveis e acessíveis.',
    links: {
      dossie: 'https://docs.google.com/document/d/1jZdeQngS0jjYxLWYVaaWQhzY5Ayex9-QO4KaY9qW2HM/edit?tab=t.0',
      projeto: 'https://herois-reais.github.io/herois-reais/',
      repositorio: 'https://github.com/Herois-Reais/herois-reais',
      linktree: '#'
    }
  },
  {
    nome: 'GAIA',
    integrantes: [
      'KLAYVEN GUIMARAES DA SILVA',
      'BEATRIZ FREIRE SANTOS',
      'MATHEUS BRITO ANDRADE',
      'GUSTAVO DOS SANTOS SILVA'
    ],
    emoji: '🟣',
    resumo: 'GAIA, sigla para Gestão Ambiental e Inovação Aplicada, é um projeto desenvolvido pelos integrantes Matheus Brito, Beatriz Freire, Gustavo dos Santos e Klayvem Guimarães com o objetivo de facilitar o entendimento e o acesso à logística reversa. A iniciativa funciona conectando consumidores a pontos de coleta de resíduos plásticos, ajudando cooperativas a receberem materiais de forma mais organizada e incentivando práticas sustentáveis no cotidiano. Um dos pilares do projeto é o sistema de recompensas, criado para estimular usuários a realizarem o descarte correto, trocando resíduos entregues por pontos convertidos em produtos ou benefícios. Essa dinâmica também abre espaço para que marcas e empresas parceiras tenham maior visibilidade, aproximando o público de iniciativas ambientais e promovendo um ciclo em que todos se beneficiam — consumidores, cooperativas e parceiros comerciais. GAIA nasce, portanto, como uma proposta colaborativa que une educação ambiental, tecnologia e incentivo prático para fortalecer a cultura da reciclagem.',
    links: {
      dossie: 'https://www.canva.com/design/DAG6NCpWYoM/IAzOHMdysRKjBtHGBbbigQ',
      projeto: 'https://gaia-projeto.vercel.app',
      repositorio: 'https://github.com/Grupo-03-GAIA',
      linktree: '#'
    }
  },
  {
    nome: 'Sênior Bank',
    integrantes: [
      'SARAH PAULA SILVA',
      'BEATRIZ DA SILVA SANTOS',
      'BRENDA MORENO DOS SANTOS',
      'RONALDO SANTANA',
      'CLARA VITÓRIA SANTOS VITAL'
    ],
    emoji: '🟠',
    resumo: 'Aplicativo financeiro simples e seguro voltado para idosos e pessoas com pouca familiaridade com tecnologia. Promove inclusão digital e financeira através de interface acessível (letras grandes, alto contraste), comandos de voz, biometria, alertas de proteção contra golpes, botão de emergência e modo família para apoio de cuidadores. Alinha-se à economia prateada e reduz riscos de fraudes e endividamento entre idosos.',
    links: {
      dossie: 'https://heyzine.com/flip-book/3c333f5a8f.html',
      projeto: 'https://seniorbank-ecru.vercel.app/',
      repositorio: 'https://github.com/Senior-Bank/senior-bank',
      linktree: '#'
    }
  }
];

export default grupos;
