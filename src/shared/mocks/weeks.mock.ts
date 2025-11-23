import { IWeeks } from "../models/weeks.interface";

const weeks: IWeeks = {
  "semanas": [
    {
      "id": 1,
      "titulo": "Semana 1",
      "subtitulo": "5/5 dias",
      "descricao": "Introdução à Web, Servidores, Internet, Figma e Fundamentos",
      "icone": "fa-globe",
      "dias": [
        {
          "id": 1,
          "titulo": "Arquitetura da Web",
          "subtitulo": "Aula 1.1",
          "descricao": "Compreendendo a Internet, a World Wide Web, a diferença entre infraestrutura e serviços, e como funciona a comunicação entre navegadores e servidores",
          "icone": "fa-globe",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="internet">
              <h2 class="title is-4 section-title mb-5">1. A Internet: A Infraestrutura Global</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      É a <strong class="highlight-pink">rede global de computadores</strong> que conecta o mundo, permitindo a
                      transmissão de dados. Pense nela como a infraestrutura física de estradas e cabos.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink">Marcos Históricos</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Anos 60:</strong> Nasce como <code class="has-text-weight-bold">ARPANET</code>, um projeto militar dos EUA.</li>
                        <li><strong>Anos 70-80:</strong> Surge o protocolo <code class="has-text-weight-bold">TCP/IP</code>, que padroniza a comunicação.</li>
                        <li><strong>Anos 90:</strong> Expansão comercial e popularização para o grande público.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://s2-oglobo.glbimg.com/-KuB1cldu8rUDxRrOj0rJK5obX8=/0x0:992x715/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/Q/d/KLDeT8SHq8F9V7LBMLvQ/infrapedia.png"
                      alt="Ilustração de uma rede global de computadores" />
                  </figure>
                </div>
              </div>
            </div>

            <!-- Section 2: Web -->
            <div class="mb-6" id="web">
              <h2 class="title is-4 section-title mb-5">2. A Web: Um Universo de Informação</h2>
              <div class="content is-size-5 mb-5">
                <p>
                  A World Wide Web (WWW) é um <strong class="highlight-green">serviço que opera sobre a Internet</strong>. É um
                  sistema de documentos e recursos interligados, acessados via navegador.
                </p>
              </div>

              <div class="columns is-vcentered mb-5">
                <div class="column">
                  <figure class="image">
                    <img src="https://i0.wp.com/energiainteligenteufjf.com.br/wp-content/uploads/2024/11/tim-berners-lee.jpg?fit=1240%2C826&ssl=1"
                      alt="Foto de Tim Berners-Lee, inventor da Web" />
                  </figure>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink">O Nascimento da Web (1990)</h3>
                    <div class="content">
                      <p class="mb-4">Criada por <strong>Tim Berners-Lee</strong>, baseada em três pilares:</p>
                      <ul>
                        <li><strong>HTML:</strong> A linguagem para estruturar as páginas.</li>
                        <li><strong>URL:</strong> O sistema de endereços únicos.</li>
                        <li><strong>HTTP:</strong> O protocolo para a comunicação.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-4 has-text-centered highlight-pink mb-5">A Evolução da Web</h3>
                <div class="columns">
                  <div class="column has-text-centered">
                    <figure class="image is-square mb-3">
                      <img 
                        src="https://securiumsolutions.com/wp-content/uploads/2023/07/Post-01-min-1024x1024.jpg"
                        alt="Ilustração Web 1.0" 
                        style="object-fit: cover" />
                    </figure>
                    <h4 class="title is-5">Web 1.0 (Estática)</h4>
                    <p class="is-size-6">Páginas "somente leitura". O usuário era um consumidor de conteúdo.</p>
                  </div>
                  <div class="column has-text-centered">
                    <figure class="image is-square mb-3">
                      <img 
                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
                        alt="Ilustração Web 2.0" 
                        style="object-fit: cover" />
                    </figure>
                    <h4 class="title is-5">Web 2.0 (Social)</h4>
                    <p class="is-size-6">O usuário se torna produtor de conteúdo (redes sociais, blogs).</p>
                  </div>
                  <div class="column has-text-centered">
                    <figure class="image is-square mb-3">
                      <img 
                        src="https://files.selar.co/product-images/2022/products/coursea/how-to-build-web-3-0-apps-selar.co-6282d40491241.jpg"
                        alt="Ilustração Web 3.0" 
                        style="object-fit: cover" />
                    </figure>
                    <h4 class="title is-5">Web 3.0 (Semântica)</h4>
                    <p class="is-size-6">Focada em IA, descentralização e uma experiência mais inteligente.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Cliente-Servidor e Servidores -->
            <div class="mb-6" id="arquitetura">
              <h2 class="title is-4 section-title mb-5">3. Arquitetura Web: Clientes e Servidores</h2>

              <div class="diagram-box mb-5">
                <div class="columns is-vcentered">
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-2">Cliente (Client)</h3>
                    <p class="emoji-large mb-3">💻</p>
                    <p>Seu navegador, que <strong>solicita</strong> os recursos.</p>
                  </div>
                  <div class="column is-narrow has-text-centered">
                    <div class="is-size-4 has-text-grey">&lt;-- HTTP --&gt;</div>
                    <p class="is-size-7 has-text-grey-light">(Requisição & Resposta)</p>
                  </div>
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-2">Servidor (Server)</h3>
                    <p class="emoji-large mb-3">🗄️</p>
                    <p>A máquina que <strong>armazena</strong> e responde.</p>
                  </div>
                </div>
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 has-text-white mb-4">Tipos Comuns de Servidores</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Servidor Web:</strong> Entrega a "fachada" do site (HTML, CSS).</li>
                        <li><strong>Servidor de Aplicação:</strong> Processa a lógica de negócio ("backend").</li>
                        <li><strong>Servidor de Banco de Dados:</strong> Armazena e gerencia os dados.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://i.ytimg.com/vi/sTQgSE2dCqA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCUi5UEX4IUp6u3MjM_EYmzyqr-7Q"
                      alt="Foto de um data center com vários servidores" />
                  </figure>
                </div>
              </div>
            </div>

            <!-- Section 4: Atividade Prática -->
            <div class="mb-6" id="atividade">
              <h2 class="title is-4 section-title mb-5">4. Atividade Prática: Analisando uma Requisição</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <p class="mb-4">Vamos usar as "Ferramentas do Desenvolvedor" do navegador para ver essa conversa acontecer:</p>
                  <ol>
                    <li class="mb-3">Pressione <strong>F12</strong> e clique na aba <strong>"Rede"</strong> (ou "Network").</li>
                    <li class="mb-3">Acesse um site (ex: google.com) e observe a lista de requisições.</li>
                    <li><strong>Tente identificar:</strong> O arquivo principal (<code>document</code>), os códigos de status
                      (<code>200 OK</code>) e os tipos de arquivo.</li>
                  </ol>
                </div>
              </div>
            </div>

            <!-- Section 5: Síntese e Próximos Passos -->
            <div class="mb-6" id="sintese">
              <h2 class="title is-4 section-title mb-5">5. Síntese e Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 has-text-white mb-3">Resumo da Aula</h3>
                <div class="content">
                  <ul>
                    <li><strong>Internet</strong> é a infraestrutura; <strong>Web</strong> é um serviço sobre ela.</li>
                    <li>A Web evoluiu de um modelo estático (<strong>1.0</strong>) para um social (<strong>2.0</strong>).</li>
                    <li>A comunicação web segue o modelo <strong>Cliente-Servidor</strong> via <strong>HTTP/HTTPS</strong>.</li>
                  </ul>
                </div>
                <h3 class="title is-5 has-text-white mt-5 mb-3">Na Próxima Aula...</h3>
                <div class="content">
                  <p>Vamos mergulhar nos dois lados dessa conversa: o que é <strong>Front-End</strong> e <strong>Back-End</strong>.</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 2,
          "titulo": "Front-End vs. Back-End",
          "subtitulo": "Aula 1.2",
          "descricao": "Entendendo as duas faces de uma aplicação web, o que é o palco (front-end) e os bastidores (back-end), e as tecnologias essenciais de cada área",
          "icone": "fa-layer-group"
        },
        {
          "id": 3,
          "titulo": "Protocolos, Navegadores e Servidores",
          "subtitulo": "Aula 1.3",
          "descricao": "Explorando como os navegadores funcionam, o protocolo HTTP, o ciclo de request-response, e o papel fundamental dos servidores na web moderna",
          "icone": "fa-server"
        },
        {
          "id": 4,
          "titulo": "As Linguagens da Web",
          "subtitulo": "Aula 1.4",
          "descricao": "A trindade HTML, CSS e JavaScript: compreendendo estrutura, estilo e comportamento na construção de páginas web interativas e modernas",
          "icone": "fa-code"
        },
        {
          "id": 5,
          "titulo": "O Mercado de Trabalho Front-End",
          "subtitulo": "Aula 1.5",
          "descricao": "O papel do desenvolvedor front-end, rotina de trabalho na prática, habilidades técnicas necessárias e oportunidades no mercado de tecnologia",
          "icone": "fa-briefcase"
        },
        {
          "id": 6,
          "titulo": "Fundamentos do Desenvolvimento Web",
          "subtitulo": "Resumo 1° semana",
          "descricao": "Compilação completa de todos os fundamentos da web: da Internet e protocolos às linguagens de programação e o mercado de trabalho front-end",
          "icone": "fa-graduation-cap"
        }
      ]
    },
    {
      "id": 2,
      "titulo": "Semana 2",
      "subtitulo": "1/1 dia",
      "descricao": "Primeiros passos com HTML e estruturação de páginas",
      "icone": "fa-code"
    },
    {
      "id": 3,
      "titulo": "Semana 3",
      "subtitulo": "2/2 dias",
      "descricao": "Introdução ao Git, GitHub e controle de versão de código",
      "icone": "fa-code-branch"
    },
    {
      "id": 4,
      "titulo": "Semana 4",
      "subtitulo": "1/1 dia",
      "descricao": "Mão na Massa com Projetos - Aplicando HTML e CSS na prática",
      "icone": "fa-hammer"
    },
    {
      "id": 5,
      "titulo": "Semana 5",
      "subtitulo": "5/5 dias",
      "descricao": "Introdução à Lógica de Programação, Algoritmos e Portugol",
      "icone": "fa-brain"
    },
    {
      "id": 6,
      "titulo": "Semana 6",
      "subtitulo": "4/4 dias",
      "descricao": "JavaScript - Dando vida às páginas com interatividade",
      "icone": "fa-js"
    },
    {
      "id": 7,
      "titulo": "Semana 7",
      "subtitulo": "2/2 dias",
      "descricao": "Projeto Prático - Revisão Geral dos Fundamentos da Web",
      "icone": "fa-project-diagram"
    },
    {
      "id": 8,
      "titulo": "Semana 8",
      "subtitulo": "4/4 dias",
      "descricao": "JavaScript Assíncrono e APIs - Conectando ao mundo real",
      "icone": "fa-cloud"
    },
    {
      "id": 9,
      "titulo": "Semana 9",
      "subtitulo": "2/2 dias",
      "descricao": "Ferramentas Modernas - Variáveis CSS, Bulma e Métodos de Array",
      "icone": "fa-tools"
    }
  ]
}

export default weeks;