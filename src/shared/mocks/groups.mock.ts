export interface Grupo {
  nome: string;
  integrantes: string[];
  emoji: string;
  resumo: string;
  turma: string;
  links: {
    dossie: string;
    projeto: string;
    repositorio: string;
    linktree?: string;
  };
}

const grupos: Grupo[] = [
  // ========== TURMA 02 ==========
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
    turma: 'Turma 02',
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
    turma: 'Turma 02',
    resumo: 'Portal gratuito que conecta doadores e ONGs, facilitando a doação de roupas, alimentos, móveis e brinquedos de forma organizada e segura. O projeto beneficia ONGs com recursos e voluntários, doadores com certificações, horas complementares e cursos exclusivos, e empresas com reforço de imagem institucional, popularidade e engajamento social. Conta com instituições verificadas para garantir doações confiáveis e acessíveis.',
    links: {
      dossie: 'https://docs.google.com/document/d/1jZdeQngS0jjYxLWYVaaWQhzY5Ayex9-QO4KaY9qW2HM/edit?tab=t.0',
      projeto: 'https://herois-reais.github.io/herois-reais/',
      repositorio: 'https://github.com/Herois-Reais/herois-reais',
      linktree: 'https://docs.google.com/document/d/1jZdeQngS0jjYxLWYVaaWQhzY5Ayex9-QO4KaY9qW2HM/edit?tab=t.0'
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
    turma: 'Turma 02',
    resumo: 'GAIA, sigla para Gestão Ambiental e Inovação Aplicada, é um projeto desenvolvido pelos integrantes Matheus Brito, Beatriz Freire, Gustavo dos Santos e Klayvem Guimarães com o objetivo de facilitar o entendimento e o acesso à logística reversa. A iniciativa funciona conectando consumidores a pontos de coleta de resíduos plásticos, ajudando cooperativas a receberem materiais de forma mais organizada e incentivando práticas sustentáveis no cotidiano. Um dos pilares do projeto é o sistema de recompensas, criado para estimular usuários a realizarem o descarte correto, trocando resíduos entregues por pontos convertidos em produtos ou benefícios. Essa dinâmica também abre espaço para que marcas e empresas parceiras tenham maior visibilidade, aproximando o público de iniciativas ambientais e promovendo um ciclo em que todos se beneficiam — consumidores, cooperativas e parceiros comerciais. GAIA nasce, portanto, como uma proposta colaborativa que une educação ambiental, tecnologia e incentivo prático para fortalecer a cultura da reciclagem.',
    links: {
      dossie: 'https://www.canva.com/design/DAG6NCpWYoM/IAzOHMdysRKjBtHGBbbigQ',
      projeto: 'https://gaia-projeto.vercel.app',
      repositorio: 'https://github.com/Grupo-03-GAIA',
      linktree: 'https://linktr.ee/Grupo03Gaia'
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
    turma: 'Turma 02',
    resumo: 'Aplicativo financeiro simples e seguro voltado para idosos e pessoas com pouca familiaridade com tecnologia. Promove inclusão digital e financeira através de interface acessível (letras grandes, alto contraste), comandos de voz, biometria, alertas de proteção contra golpes, botão de emergência e modo família para apoio de cuidadores. Alinha-se à economia prateada e reduz riscos de fraudes e endividamento entre idosos.',
    links: {
      dossie: 'https://heyzine.com/flip-book/3c333f5a8f.html',
      projeto: 'https://seniorbank-ecru.vercel.app/',
      repositorio: 'https://github.com/Senior-Bank/senior-bank',
      linktree: 'https://linktr.ee/senior.bank'
    }
  },

  // ========== TURMA 06 ==========
  {
    nome: 'PRISMA',
    integrantes: [
      'GABRIEL AMBROSIO BELLO DOS SANTOS',
      'DAIANE SOUSA MATOS',
      'BEATRIZ REZIO',
      'BIANCA VITÓRIA DA SILVA SANTOS',
      'ELAINE LAURA SILVESTRE',
      'GUILHERME LEANDRO GOMES OLIVEIRA'
    ],
    emoji: '🔷',
    turma: 'Turma 06',
    resumo: 'O Prisma tem como principal objetivo desenvolver uma plataforma educacional voltada ao ensino de inglês aplicado ao contexto profissional. A proposta é preparar os usuários para utilizarem o idioma em situações reais do ambiente de trabalho, contribuindo para o desenvolvimento de habilidades comunicativas e ampliando suas oportunidades de progressão na carreira.',
    links: {
      dossie: 'https://heyzine.com/flip-book/e6214099b7.html',
      projeto: 'https://prisma-front-eta.vercel.app/index.html',
      repositorio: 'https://github.com/Prisma-Ingles/Prisma-Front'
    }
  },
  {
    nome: 'Nubis',
    integrantes: [
      'KEVIN PEIXOTO SANTANA',
      'ANNA PAULA ALVES SILVA',
      'CAMILLY QUEIROZ DAMASCENO BRISOLA',
      'KAIK SÁ TELLES RAMOS',
      'FELIPE SILVA',
      'JORGE MIGUEL THOMAZ DA SILVA',
      'PATRICK RYAN DE OLIVEIRA'
    ],
    emoji: '☁️',
    turma: 'Turma 06',
    resumo: 'Somos a Nubis, uma empresa que surgiu com o objetivo de ajudar as pessoas a organizarem melhor sua vida financeira. Percebemos que grande parte da população brasileira — cerca de 79,5% das famílias, segundo a CNC — possui dívidas, o que acaba agravando cada vez mais a situação financeira dessas pessoas. Pensando nisso, a Nubis foi criada para auxiliar o público de 16 a 40 anos a ter mais controle e organização financeira por meio de um sistema simples, prático e fácil de usar. Nele, é possível gerenciar seus ganhos, gastos e economias, além de ter uma visão clara de para onde o seu dinheiro está indo e quanto você está gastando em cada categoria ao longo do mês. Além disso, contamos com uma funcionalidade que permite acompanhar seus investimentos e entender como eles podem crescer ao longo do tempo, considerando diferentes opções como CDB, Tesouro Direto, entre outros. Isso traz mais motivação para economizar e investir, ajudando você a construir um futuro financeiro mais estável e seguro.',
    links: {
      dossie: 'https://online.fliphtml5.com/dottp/hiar/',
      projeto: 'https://nubis-financeiro.vercel.app/',
      repositorio: 'https://github.com/Nubis-Corp/Nubis-Financeiro'
    }
  },
  {
    nome: 'Abapyra Tech',
    integrantes: [
      'MARIA EDUARDA ALVES DE MELO',
      'KAWAN BARBOSA TURCHIAI',
      'KAYK JUNIOR DA SILVA TRINDADE',
      'GUSTAVO HENRIQUE CAVALCANTI ROCHA',
      'JEFERSON VINICIUS BARBOSA DA SILVA',
      'KAUANNY DOS ANJOS GALVÃO',
      'MARIA LUIZA CORTEZ OLIVEIRA'
    ],
    emoji: '♻️',
    turma: 'Turma 06',
    resumo: 'A tecnologia transforma o mundo rapidamente, mas essa evolução constante frequentemente resulta em resíduos. Na Abapyra Tech, nosso objetivo é transformar essa realidade. Vemos o "lixo eletrônico" como um tesouro: uma fonte rica para o aprendizado e uma grande chance de impulsionar a economia circular. No centro do nosso trabalho, pulsa o Programa Educacional. Voltado para adolescentes com mais de 16 anos, sobretudo residentes em áreas carentes e em condição de fragilidade, disponibilizamos formações em conservação e inovação digital que facilitam o acesso ao universo profissional. Para isso, temos o apoio de profissionais qualificados que, de forma gratuita, dividem seus conhecimentos práticos e elaboram lições aplicadas para os aprendizes.',
    links: {
      dossie: 'https://heyzine.com/flip-book/9a5012bdc6.html',
      projeto: 'https://abapyra-mu.vercel.app/',
      repositorio: 'https://github.com/Abapyra-Tech/Abapyra'
    }
  },
  {
    nome: 'Gotas de Vida',
    integrantes: [
      'IVY COSTA SANTANA',
      'KATLYN SPINETTI',
      'AMANDA MENDES SOUZA',
      'BIANCA DA SILVA SANTOS NASCIMENTO',
      'LETÍCIA GOMES DA SILVA LEITE',
      'YASMYN VITORINO FERREIRA'
    ],
    emoji: '💧',
    turma: 'Turma 06',
    resumo: 'Projeto social voltado à conscientização sobre a importância da doação de sangue e a conexão entre doadores e hemocentros, facilitando o acesso à informação e incentivando a solidariedade na comunidade.',
    links: {
      dossie: 'https://heyzine.com/flip-book/470633fd06.html',
      projeto: 'https://projetogotasdevida.vercel.app/',
      repositorio: 'https://github.com/GotasDeVida/projeto-Gotas-de-vida'
    }
  }
];

export default grupos;
