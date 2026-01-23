import { IWeeks } from "../models/weeks.interface";

const weeks: IWeeks = {
  "semanas": [
    {
      "id": 1,
      "titulo": "Semana 1",
      "subtitulo": "6/6 dias",
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
                      É a <strong>rede global de computadores</strong> que conecta o mundo, permitindo a
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
                  A World Wide Web (WWW) é um <strong>serviço que opera sobre a Internet</strong>. É um
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
                    <h3 class="title is-5 mb-4">Tipos Comuns de Servidores</h3>
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
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <ul>
                    <li><strong>Internet</strong> é a infraestrutura; <strong>Web</strong> é um serviço sobre ela.</li>
                    <li>A Web evoluiu de um modelo estático (<strong>1.0</strong>) para um social (<strong>2.0</strong>).</li>
                    <li>A comunicação web segue o modelo <strong>Cliente-Servidor</strong> via <strong>HTTP/HTTPS</strong>.</li>
                  </ul>
                </div>
                <h3 class="title is-5 mt-5 mb-3">Na Próxima Aula...</h3>
                <div class="content">
                  <p>Vamos mergulhar nos dois lados dessa conversa: o que é <strong>Front-End</strong> e <strong>Back-End</strong>.</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 50,
          "titulo": "Introdução ao Figma",
          "subtitulo": "Aula 1.1",
          "descricao": "Descobrindo a importância do Figma no processo de design, o que é um protótipo de projeto e por que os times trabalham primeiro com protótipos antes de codar",
          "icone": "fa-palette",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="figma-importancia">
              <h2 class="title is-4 section-title mb-5">1. O que é o Figma?</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      O Figma é uma <strong>ferramenta de design colaborativo baseada na nuvem</strong> que revolucionou
                      a forma como designers e desenvolvedores trabalham juntos. É como um "Google Docs para design",
                      onde múltiplas pessoas podem editar o mesmo arquivo simultaneamente.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink">Por que o Figma é Essencial?</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Colaboração em Tempo Real:</strong> Várias pessoas editam o mesmo arquivo ao mesmo tempo.</li>
                        <li><strong>Acessível de Qualquer Lugar:</strong> Funciona no navegador, sem necessidade de instalação.</li>
                        <li><strong>Protótipos Interativos:</strong> Crie animações e transições que simulam a experiência real.</li>
                        <li><strong>Hand-off Perfeito:</strong> Exporte assets e gere especificações automaticamente para devs.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop"
                      alt="Interface do Figma mostrando um design de aplicativo" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="prototipo">
              <h2 class="title is-4 section-title mb-5">2. O que é um Protótipo de Projeto?</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064&auto=format&fit=crop"
                      alt="Ilustração de um protótipo de aplicativo em wireframe" />
                  </figure>
                </div>
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      Um protótipo é uma <strong>representação preliminar de um produto</strong>, criado antes da versão final.
                      É como a "maquete" ou "modelo" de um prédio antes da construção real.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Tipos de Protótipos</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Wireframe:</strong> Estrutura básica, sem cores ou detalhes visuais.</li>
                        <li><strong>Mockup:</strong> Design visual completo, mas estático.</li>
                        <li><strong>Protótipo Interativo:</strong> Versão funcional que simula a experiência do usuário.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="fluxo-prototipo">
              <h2 class="title is-4 section-title mb-5">3. Por que Construir Protótipos Antes de Codar?</h2>

              <div class="diagram-box mb-5">
                <div class="columns is-vcentered">
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-2">1. Ideia</h3>
                    <p class="emoji-large mb-3">💡</p>
                    <p>Conceito inicial do produto</p>
                  </div>
                  <div class="column is-narrow has-text-centered">
                    <div class="is-size-4 has-text-grey">→</div>
                  </div>
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-2">2. Protótipo</h3>
                    <p class="emoji-large mb-3">🎨</p>
                    <p>Design e validação da ideia</p>
                  </div>
                  <div class="column is-narrow has-text-centered">
                    <div class="is-size-4 has-text-grey">→</div>
                  </div>
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-2">3. Código</h3>
                    <p class="emoji-large mb-3">💻</p>
                    <p>Implementação técnica</p>
                  </div>
                </div>
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Benefícios do Fluxo Protótipo → Código</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Redução de Riscos:</strong> Identifique problemas antes de investir tempo em código.</li>
                        <li><strong>Comunicação Clara:</strong> Todos no time entendem exatamente o que será construído.</li>
                        <li><strong>Iteração Rápida:</strong> Teste ideias rapidamente sem escrever código complexo.</li>
                        <li><strong>Experiência do Usuário:</strong> Foque na usabilidade antes da funcionalidade técnica.</li>
                        <li><strong>Economia de Tempo e Dinheiro:</strong> Evite retrabalho e mudanças custosas no código.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                      alt="Equipe discutindo um protótipo em reunião" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="atividade-figma">
              <h2 class="title is-4 section-title mb-5">4. Atividade Prática: Explorando o Figma</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <p class="mb-4">Vamos começar nossa jornada no Figma:</p>
                  <ol>
                    <li class="mb-3">Acesse <strong>figma.com</strong> e crie uma conta gratuita.</li>
                    <li class="mb-3">Explore a interface: crie um novo arquivo e experimente as ferramentas básicas.</li>
                    <li class="mb-3">Procure por templates de UI/UX para entender como são estruturados os projetos.</li>
                    <li><strong>Próximo passo:</strong> Na próxima aula, vamos criar nosso primeiro wireframe!</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-6" id="sintese-figma">
              <h2 class="title is-4 section-title mb-5">5. Síntese e Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <ul>
                    <li><strong>Figma</strong> é uma ferramenta essencial para design colaborativo e criação de protótipos.</li>
                    <li>Um <strong>protótipo</strong> é uma representação preliminar que ajuda a validar ideias antes do código.</li>
                    <li>O fluxo <strong>Protótipo → Código</strong> reduz riscos e melhora a qualidade final do produto.</li>
                  </ul>
                </div>
                <h3 class="title is-5 mt-5 mb-3">Na Próxima Aula...</h3>
                <div class="content">
                  <p>Esta é a última aula da semana! Você está pronto para começar a programar.</p>
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
          "icone": "fa-layer-group",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="intro">
              <h2 class="title is-4 section-title mb-5">1. As Duas Faces de uma Aplicação</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      Toda aplicação web, de um site simples a uma rede social complexa, funciona como um restaurante. Existe o
                      que você <strong>vê</strong> (o salão, o menu, a decoração) e o que você <strong>não vê</strong> (a cozinha, o estoque, os chefs).
                    </p>
                    <p>
                      No mundo da tecnologia, chamamos essas duas partes de <strong>Front-End</strong> e <strong>Back-End</strong>.
                    </p>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                      alt="Foto de um restaurante movimentado, mostrando o salão" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="frontend">
              <h2 class="title is-4 section-title mb-5">2. O Front-End: O Palco</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
                      alt="Ilustração de uma interface de usuário sendo desenhada" />
                  </figure>
                </div>
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      O Front-End é a <strong>parte visual e interativa</strong> da aplicação. É tudo
                      aquilo com que o usuário interage diretamente no navegador. É o "salão do restaurante".
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Tecnologias Essenciais</h3>
                    <div class="content">
                      <ul>
                        <li><code>HTML</code><strong>:</strong> A estrutura, o "esqueleto" da página.</li>
                        <li><code>CSS</code><strong>:</strong> A estilização, as "roupas" e a decoração.</li>
                        <li><code>JavaScript</code><strong>:</strong> A interatividade, o "comportamento" dos elementos.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="backend">
              <h2 class="title is-4 section-title mb-5">3. O Back-End: Os Bastidores</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      O Back-End é a <strong>parte que funciona "por trás das câmeras"</strong>. Ele cuida
                      da lógica do negócio, do banco de dados e da comunicação com o servidor. É a "cozinha do restaurante".
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Funções Principais</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Servidor:</strong> Onde a aplicação "vive".</li>
                        <li><strong>Banco de Dados:</strong> Onde os dados (usuários, posts, produtos) são guardados.</li>
                        <li><strong>Regras de Negócio:</strong> A lógica que faz tudo funcionar (ex: calcular um frete).</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2070&auto=format&fit=crop"
                      alt="Foto de código em um monitor com fundo escuro" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="comunicacao">
              <h2 class="title is-4 section-title mb-5">4. A Ponte: Como Eles se Comunicam?</h2>
              <div class="box box-dark has-text-centered">
                <h3 class="title is-4 highlight-pink mb-4">APIs (Application Programming Interface)</h3>
                <div class="content is-size-5">
                  <p class="mb-5" style="max-width: 800px; margin-left: auto; margin-right: auto;">
                    O Front-End e o Back-End conversam através de APIs. Pense na API como o <strong>garçom</strong>: o cliente (Front-End) faz um pedido, o garçom (API) leva o pedido para a
                    cozinha (Back-End), e depois traz o prato pronto de volta.
                  </p>
                  <div class="is-size-4 has-text-grey my-5">
                    <span>💻 (Front)</span> <span class="is-size-5 mx-4">&lt;-- API --&gt;</span> <span>🗄️ (Back)</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="sintese">
              <h2 class="title is-4 section-title mb-5">5. Síntese e Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <ul>
                    <li><strong>Front-End</strong> é a camada de apresentação, o que o usuário vê e com o que interage.</li>
                    <li><strong>Back-End</strong> é a camada de lógica e dados, que processa as informações.</li>
                    <li>A comunicação entre os dois é feita principalmente por <strong>APIs</strong>.</li>
                  </ul>
                </div>
                <h3 class="title is-5 mt-5 mb-3">Na Próxima Aula...</h3>
                <div class="content">
                  <p>Vamos entender os detalhes da comunicação: os protocolos <strong>HTTP/HTTPS</strong> e o papel dos navegadores.</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 3,
          "titulo": "Protocolos, Navegadores e Servidores",
          "subtitulo": "Aula 1.3",
          "descricao": "Explorando como os navegadores funcionam, o protocolo HTTP, o ciclo de request-response, e o papel fundamental dos servidores na web moderna",
          "icone": "fa-server",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="navegador">
              <h2 class="title is-4 section-title mb-5">1. O Navegador: Sua Janela para a Web</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      O navegador (ou <em>browser</em>) é o principal programa que usamos para acessar a Web. Ele não apenas exibe sites,
                      mas também <strong>interpreta códigos</strong> (HTML, CSS, JS) e <strong>faz requisições</strong> a servidores para buscar o conteúdo que você vê.
                    </p>
                    <p>
                      Pense nele como um tradutor universal que transforma código em páginas interativas.
                    </p>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop"
                      alt="Logos de diversos navegadores web como Chrome, Firefox e Safari" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="http">
              <h2 class="title is-4 section-title mb-5">2. O Protocolo HTTP: A Linguagem da Web</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image">
                    <img src="https://becode.com.br/wp-content/uploads/2017/10/o-que-e-http-1.jpg"
                      alt="Código de programação sendo exibido num laptop" />
                  </figure>
                </div>
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      HTTP significa <strong>Hypertext Transfer Protocol</strong>. É o conjunto de regras que
                      define como as mensagens são formatadas e transmitidas entre o cliente (navegador) e o servidor. É a
                      "língua" que ambos falam para se entender.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Como funciona? (Request-Response)</h3>
                    <div class="content">
                      <ol>
                        <li class="mb-3"><strong>Requisição (Request):</strong> Seu navegador pede um recurso (ex: "me dê a página inicial do Google").</li>
                        <li><strong>Resposta (Response):</strong> O servidor do Google recebe o pedido, processa e envia de volta os arquivos da página.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div class="box box-dark mt-5">
                <h3 class="title is-5 mb-4">Verbos HTTP: A Intenção do Pedido</h3>
                <div class="content is-size-5">
                  <p class="mb-5">Cada requisição HTTP tem um "verbo" que indica a intenção daquela ação. Os mais comuns são:</p>
                  <ul>
                    <li class="mb-3"><code>GET</code><strong>:</strong> Usado para <strong>buscar</strong> ou ler dados. É o que acontece quando você acessa um site.</li>
                    <li class="mb-3"><code>POST</code><strong>:</strong> Usado para <strong>enviar</strong> ou criar novos dados. Ex: preencher um formulário de cadastro.</li>
                    <li class="mb-3"><code>PUT</code><strong>:</strong> Usado para <strong>atualizar</strong> um dado que já existe. Ex: editar seu perfil em uma rede social.</li>
                    <li><code>DELETE</code><strong>:</strong> Usado para <strong>remover</strong> um dado. Ex: apagar uma foto que você postou.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-6" id="https">
              <h2 class="title is-4 section-title mb-5">3. HTTP vs. HTTPS: A Camada de Segurança</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      Você já deve ter notado o "S" a mais e o ícone de cadeado em alguns sites. O <strong>S</strong> em HTTPS significa <strong>Secure (Seguro)</strong>.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <div class="content">
                      <div class="mb-4 is-flex is-align-items-start">
                        <span class="is-size-3 mr-4">🔓</span>
                        <div><strong>HTTP:</strong> Os dados entre navegador e servidor são enviados em texto
                          puro. Qualquer um no meio do caminho pode ler.</div>
                      </div>
                      <div class="is-flex is-align-items-start">
                        <span class="is-size-3 mr-4">🔒</span>
                        <div><strong>HTTPS:</strong> Usa uma camada extra (SSL/TLS) para <strong>criptografar</strong> os dados. Essencial para lojas, bancos e qualquer site
                          que lide com informações sensíveis.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                      alt="Imagem de um cadeado digital simbolizando segurança na internet" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="url">
              <h2 class="title is-4 section-title mb-5">4. Anatomia de uma URL</h2>
              <div class="box box-dark">
                <div class="content is-size-5 has-text-centered">
                  <p class="mb-5">Uma URL (Uniform Resource Locator) é o endereço único de um recurso na web. Ela tem partes bem definidas:</p>
                  <div class="box p-4 is-size-5 has-text-centered" style="font-family: monospace; word-break: break-all;">
                    <span class="highlight-green">https</span><span class="has-text-grey">://</span><span class="has-text-info">www.serasa.com.br</span><span class="has-text-purple">/ ecred/simular</span><span class="has-text-warning">?tipo=cartao</span>
                  </div>
                  <div class="columns mt-5">
                    <div class="column">
                      <div class="box p-3">
                        <strong>Protocolo:</strong> Define como a comunicação será feita (https, http, ftp).
                      </div>
                    </div>
                    <div class="column">
                      <div class="box p-3">
                        <strong>Domínio:</strong> O endereço principal do site.
                      </div>
                    </div>
                    <div class="column">
                      <div class="box p-3">
                        <strong>Caminho (Path):</strong> A "pasta" ou página específica dentro do site.
                      </div>
                    </div>
                    <div class="column">
                      <div class="box p-3">
                        <strong>Parâmetros (Query):</strong> Informações extras enviadas ao servidor.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="sintese">
              <h2 class="title is-4 section-title mb-5">5. Síntese e Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <ul>
                    <li>O <strong>Navegador</strong> é o software que interpreta códigos e faz requisições.</li>
                    <li><strong>HTTP</strong> é o protocolo padrão para a comunicação na web (requisição e resposta).</li>
                    <li><strong>HTTPS</strong> é a versão segura do HTTP, que criptografa os dados.</li>
                    <li>Uma <strong>URL</strong> é um endereço estruturado que nos leva a um recurso específico.</li>
                  </ul>
                </div>
                <h3 class="title is-5 mt-5 mb-3">Na Próxima Aula...</h3>
                <div class="content">
                  <p>Vamos finalmente começar a "construir": uma visão geral das linguagens da web: <strong>HTML, CSS e JavaScript</strong>.</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 4,
          "titulo": "As Linguagens da Web",
          "subtitulo": "Aula 1.4",
          "descricao": "A trindade HTML, CSS e JavaScript: compreendendo estrutura, estilo e comportamento na construção de páginas web interativas e modernas",
          "icone": "fa-code",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="intro">
              <h2 class="title is-4 section-title mb-5">1. A Trindade da Web: Estrutura, Estilo e Comportamento</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      Construir um site é como construir uma casa. Precisamos de três componentes essenciais que trabalham juntos: a <strong>estrutura</strong> (as paredes, o telhado), a <strong>aparência</strong> (a pintura, os móveis) e a <strong>funcionalidade</strong> (a eletricidade, a água encanada).
                    </p>
                    <p>
                      Na web, essas três camadas são representadas por HTML, CSS e JavaScript.
                    </p>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1974&auto=format&fit=crop"
                      alt="Imagem de uma casa em construção com a estrutura, um arquiteto analisando a planta e a casa finalizada" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="html">
              <h2 class="title is-4 section-title mb-5">2. HTML: A Estrutura</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
                      alt="Pessoa apontando para o esqueleto de um site, o wireframe" />
                  </figure>
                </div>
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      HTML (HyperText Markup Language) é a linguagem de marcação que define a <strong>estrutura de todo o conteúdo</strong> de uma página. Ele usa "tags" para criar títulos, parágrafos, listas, links, imagens e muito mais.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Exemplo Básico:</h3>
                    <pre style="padding: 1rem; border-radius: 6px;"><code>&lt;h1&gt;Título Principal&lt;/h1&gt;
&lt;p&gt;Este é um parágrafo.&lt;/p&gt;
&lt;img src="imagem.jpg"&gt;</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="css">
              <h2 class="title is-4 section-title mb-5">3. CSS: O Estilo</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      CSS (Cascading Style Sheets) é a linguagem que usamos para <strong>estilizar e dar aparência</strong> ao nosso HTML. Com CSS, definimos cores, fontes, espaçamentos, layouts e animações.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Exemplo de Estilização:</h3>
                    <pre style="padding: 1rem; border-radius: 6px;"><code>h1 {
  color: #e80170;
  font-size: 32px;
}</code></pre>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop"
                      alt="Paleta de cores e ferramentas de design em uma mesa" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="js">
              <h2 class="title is-4 section-title mb-5">4. JavaScript: O Comportamento</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop"
                      alt="Desenvolvedor trabalhando com código JavaScript em um laptop" />
                  </figure>
                </div>
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      JavaScript (JS) é uma linguagem de programação que <strong>adiciona interatividade e dinamismo</strong> às páginas. Validação de formulários, animações complexas, atualizações de conteúdo sem recarregar a página, tudo isso é feito com JS.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Exemplo de Interação:</h3>
                    <pre style="padding: 1rem; border-radius: 6px;"><code>button.onclick = function() {
  alert('Você clicou!');
};</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="sintese">
              <h2 class="title is-4 section-title mb-5">5. Síntese e Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <ul>
                    <li><strong>HTML</strong> é o esqueleto (estrutura).</li>
                    <li><strong>CSS</strong> é a aparência (estilo).</li>
                    <li><strong>JavaScript</strong> é o cérebro (comportamento).</li>
                    <li>Juntos, eles formam a base de praticamente todos os sites e aplicações web que usamos hoje.</li>
                  </ul>
                </div>
                <h3 class="title is-5 mt-5 mb-3">Na Próxima Aula...</h3>
                <div class="content">
                  <p>Vamos explorar o <strong>Mercado de Trabalho</strong> e entender qual é o papel de uma pessoa desenvolvedora Front-End no dia a dia.</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 52,
          "titulo": "IDE e Visual Studio Code",
          "subtitulo": "Aula 1.7",
          "descricao": "Descobrindo o que é uma IDE, a importância do Visual Studio Code no desenvolvimento e como extensões e autocomplete podem acelerar seu trabalho",
          "icone": "fa-code",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="ide-conceito">
              <h2 class="title is-4 section-title mb-5">1. O que é uma IDE (Ambiente de Desenvolvimento Integrado)?</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      Uma <strong>IDE (Integrated Development Environment)</strong> é uma aplicação que combina várias ferramentas
                      essenciais para o desenvolvimento de software em um único ambiente. É como uma "oficina completa"
                      para programadores, onde você tem tudo que precisa em um só lugar.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink">Ferramentas Essenciais em uma IDE</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Editor de Código:</strong> Onde você escreve e edita seu código</li>
                        <li><strong>Debugger:</strong> Para encontrar e corrigir erros no código</li>
                        <li><strong>Terminal Integrado:</strong> Para executar comandos sem sair da IDE</li>
                        <li><strong>Controle de Versão:</strong> Integração com Git</li>
                        <li><strong>Autocomplete:</strong> Sugestões inteligentes enquanto você digita</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
                      alt="Foto de um desenvolvedor trabalhando em uma IDE moderna" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="vscode-importancia">
              <h2 class="title is-4 section-title mb-5">2. Por que o Visual Studio Code é Especial?</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop"
                      alt="Interface do Visual Studio Code mostrando código" />
                  </figure>
                </div>
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      O <strong>Visual Studio Code (VS Code)</strong> é uma IDE gratuita e open-source desenvolvida pela Microsoft
                      que se tornou a ferramenta mais popular entre desenvolvedores web. Sua popularidade vem da combinação
                      perfeita entre poder, simplicidade e extensibilidade.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Vantagens do VS Code</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Gratuito e Open-Source:</strong> Sem custos e código aberto</li>
                        <li><strong>Leve e Rápido:</strong> Abre instantaneamente, mesmo em projetos grandes</li>
                        <li><strong>Multiplataforma:</strong> Funciona no Windows, macOS e Linux</li>
                        <li><strong>Extensível:</strong> Milhares de extensões para qualquer linguagem</li>
                        <li><strong>IntelliSense:</strong> Autocomplete inteligente e contextual</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="extensoes">
              <h2 class="title is-4 section-title mb-5">3. Extensões: Personalizando sua IDE</h2>

              <div class="diagram-box mb-5">
                <div class="columns is-vcentered">
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-2">VS Code Básico</h3>
                    <p class="emoji-large mb-3">📝</p>
                    <p>Editor simples e funcional</p>
                  </div>
                  <div class="column is-narrow has-text-centered">
                    <div class="is-size-4 has-text-grey">+</div>
                  </div>
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-2">Extensões</h3>
                    <p class="emoji-large mb-3">🔧</p>
                    <p>Funcionalidades específicas</p>
                  </div>
                  <div class="column is-narrow has-text-centered">
                    <div class="is-size-4 has-text-grey">=</div>
                  </div>
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-2">IDE Personalizada</h3>
                    <p class="emoji-large mb-3">🚀</p>
                    <p>Ferramenta poderosa e específica</p>
                  </div>
                </div>
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Extensões Essenciais para Desenvolvimento Web</h3>
                    <div class="content">
                      <ul>
                        <li><strong>ES7+ React/Redux/React-Native snippets:</strong> Atalhos para React</li>
                        <li><strong>Prettier:</strong> Formatação automática de código</li>
                        <li><strong>ESLint:</strong> Análise estática e correção de erros</li>
                        <li><strong>Auto Rename Tag:</strong> Renomeia tags HTML/XML automaticamente</li>
                        <li><strong>Bracket Pair Colorizer:</strong> Colore pares de chaves e parênteses</li>
                        <li><strong>GitLens:</strong> Suporte avançado ao Git</li>
                        <li><strong>Live Server:</strong> Servidor local para desenvolvimento web</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
                      alt="Interface mostrando extensões do VS Code" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="autocomplete">
              <h2 class="title is-4 section-title mb-5">4. Autocomplete e IntelliSense: Seu Assistente Pessoal</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      O <strong>IntelliSense</strong> do VS Code é um sistema inteligente de autocomplete que entende o contexto
                      do seu código e oferece sugestões relevantes. É como ter um programador experiente olhando por cima
                      do seu ombro e sugerindo o que escrever.
                    </p>
                  </div>
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Como o IntelliSense Ajuda</h3>
                    <div class="content">
                      <ul>
                        <li><strong>Completar Nomes:</strong> Sugere variáveis, funções e classes disponíveis</li>
                        <li><strong>Parâmetros de Função:</strong> Mostra quais parâmetros uma função aceita</li>
                        <li><strong>Documentação:</strong> Exibe documentação das funções enquanto você digita</li>
                        <li><strong>Correção de Erros:</strong> Sugere correções para erros de sintaxe</li>
                        <li><strong>Importações Automáticas:</strong> Adiciona imports necessários automaticamente</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                      alt="Demonstração do IntelliSense no VS Code" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="atividade-vscode">
              <h2 class="title is-4 section-title mb-5">5. Atividade Prática: Configurando seu VS Code</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <p class="mb-4">Vamos transformar seu VS Code em uma IDE profissional:</p>
                  <ol>
                    <li class="mb-3">Baixe e instale o VS Code de <strong>code.visualstudio.com</strong></li>
                    <li class="mb-3">Abra o VS Code e vá para a aba de extensões (Ctrl+Shift+X)</li>
                    <li class="mb-3">Instale as extensões essenciais: Prettier, ESLint, ES7+ React/Redux/React-Native</li>
                    <li class="mb-3">Configure o Prettier como formatador padrão (Ctrl+Shift+P → "Format Document")</li>
                    <li class="mb-3">Teste o IntelliSense: crie um arquivo .js e comece a digitar código</li>
                    <li><strong>Próximo passo:</strong> Agora você está pronto para começar a programar profissionalmente!</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-6" id="sintese-vscode">
              <h2 class="title is-4 section-title mb-5">6. Síntese e Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <ul>
                    <li><strong>IDE</strong> é um ambiente completo para desenvolvimento de software</li>
                    <li><strong>VS Code</strong> é a IDE mais popular devido à sua velocidade, extensibilidade e gratuidade</li>
                    <li><strong>Extensões</strong> transformam o VS Code em uma ferramenta especializada</li>
                    <li><strong>IntelliSense</strong> acelera o desenvolvimento com sugestões inteligentes</li>
                  </ul>
                </div>
                <h3 class="title is-5 mt-5 mb-3">Agora Você Está Pronto!</h3>
                <div class="content">
                  <p>Com o VS Code configurado e todas essas ferramentas, você tem tudo que precisa para começar sua jornada como desenvolvedor. As próximas semanas serão sobre colocar a mão na massa!</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 5,
          "titulo": "O Mercado de Trabalho Front-End",
          "subtitulo": "Aula 1.5",
          "descricao": "O papel do desenvolvedor front-end, rotina de trabalho na prática, habilidades técnicas necessárias e oportunidades no mercado de tecnologia",
          "icone": "fa-briefcase",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="papel-front">
              <h2 class="title is-4 section-title mb-5">1. O Papel do Desenvolvedor Front-End</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-5">
                      O papel do desenvolvedor Front-End é traduzir o design e os requisitos de um produto em uma <strong>interface interativa e funcional</strong>, garantindo a melhor experiência
                      possível para o usuário final.
                    </p>
                    <p>
                      É a ponte entre o design visual e a tecnologia funcional.
                    </p>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                      alt="Pessoa trabalhando com gráficos e interfaces de usuário em múltiplos monitores" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="diaadia-front">
              <h2 class="title is-4 section-title mb-5">2. O Dia a Dia na Prática</h2>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                      alt="Equipa de trabalho a colaborar num quadro branco com post-its" />
                  </figure>
                </div>
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-4">
                      As tarefas diárias são uma mistura de desenvolvimento, colaboração e resolução de problemas:
                    </p>
                    <ul>
                      <li class="mb-3"><strong>Criação de Telas e Jornadas:</strong> Transformar protótipos em código funcional.</li>
                      <li class="mb-3"><strong>Refinamento de Produto:</strong> Participar de reuniões para discutir funcionalidades.</li>
                      <li class="mb-3"><strong>Sustentação e Correção de Bugs:</strong> Manter a aplicação funcionando e corrigir problemas.</li>
                      <li><strong>Sugestão de Melhorias:</strong> Propor otimizações de performance e usabilidade.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="habilidades-front">
              <h2 class="title is-4 section-title mb-5">3. Habilidades Essenciais: Além do Código</h2>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Hard Skills (Técnicas)</h3>
                    <div class="content">
                      <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>Frameworks (React, Angular, etc.)</li>
                        <li>Controle de Versão (Git)</li>
                        <li>Responsividade</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Soft Skills (Comportamentais)</h3>
                    <div class="content">
                      <ul>
                        <li>Comunicação</li>
                        <li>Resolução de Problemas</li>
                        <li>Trabalho em Equipa</li>
                        <li>Aprendizado Contínuo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao-modulo">
              <h2 class="title is-4 section-title mb-5">4. Conclusão do Módulo 1</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Parabéns por chegar até aqui!</h3>
                <div class="content">
                  <p class="mb-4">Neste módulo, viajamos desde a origem da internet até o dia a dia de um profissional da
                    área. Você agora entende os conceitos fundamentais que formam a base de toda a web.</p>
                  <p class="has-text-weight-bold mt-4">Nos vemos no Módulo 2!</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 6,
          "titulo": "Resumo",
          "subtitulo": "Resumo 1° semana",
          "descricao": "Compilação completa de todos os fundamentos da web: da Internet e protocolos às linguagens de programação e o mercado de trabalho front-end",
          "icone": "fa-graduation-cap",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="internet-historia">
              <h3 class="title is-4 section-title mb-5">1. A Internet: A Infraestrutura Global</h3>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-4">A Internet é a <strong>rede mundial de computadores</strong>, a infraestrutura física (cabos, satélites, roteadores) que permite que dispositivos troquem informações entre si.</p>
                    <p>É a base sobre a qual vários serviços, incluindo a Web, funcionam.</p>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                      alt="Imagem abstrata de cabos de rede e conexões globais" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="web-conceito">
              <h3 class="title is-4 section-title mb-5">2. A Web: Um Serviço na Internet</h3>
              <div class="columns is-vcentered">
                <div class="column">
                  <figure class="image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg" 
                      alt="Foto de Tim Berners-Lee, o criador da World Wide Web" />
                  </figure>
                </div>
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-4">A World Wide Web (ou apenas "Web") é um <strong>sistema de documentos e recursos interligados</strong>, acessados através da Internet. Foi criada por <strong>Tim Berners-Lee</strong> em 1990.</p>
                    <p>Ela usa protocolos como o HTTP para permitir a navegação entre páginas por meio de hiperlinks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="web-evolucao">
              <h3 class="title is-4 section-title mb-5">3. A Evolução da Web</h3>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h4 class="title is-5 mb-2">Web 1.0 (Estática)</h4>
                    <p>Páginas "somente leitura". O conteúdo era produzido por poucos e consumido por muitos. Interação mínima.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h4 class="title is-5 mb-2">Web 2.0 (Social)</h4>
                    <p>A era das redes sociais e blogs. Os usuários se tornam produtores de conteúdo, com alta interatividade.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h4 class="title is-5 mb-2">Web 3.0 (Semântica/Descentralizada)</h4>
                    <p>Foco em inteligência artificial, dados conectados e tecnologias como blockchain, buscando uma web mais inteligente e descentralizada.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="servidores">
              <h3 class="title is-4 section-title mb-5">4. Servidores: Os Guardiões do Conteúdo</h3>
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="content is-size-5">
                    <p class="mb-4">Um servidor é um computador potente, sempre conectado à internet, cujo trabalho é <strong>armazenar, processar e entregar</strong> os arquivos de um site para o seu navegador quando você faz uma requisição.</p>
                    <p>Quando você digita um endereço no navegador, está pedindo a um servidor que lhe envie a página correspondente.</p>
                  </div>
                </div>
                <div class="column">
                  <figure class="image">
                    <img src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070&auto=format&fit=crop" 
                      alt="Foto de um data center com vários racks de servidores" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="mb-6" id="frontend-backend">
              <h3 class="title is-4 section-title mb-5">5. Front-End e Back-End: As Duas Faces</h3>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h4 class="title is-5 highlight-pink mb-3">Front-End (O Palco)</h4>
                    <div class="content">
                      <p class="mb-3">A parte visual e interativa da aplicação. É o que o usuário vê e interage.</p>
                      <p><strong>Tecnologias:</strong> HTML, CSS, JavaScript</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h4 class="title is-5 highlight-pink mb-3">Back-End (Os Bastidores)</h4>
                    <div class="content">
                      <p class="mb-3">A lógica do negócio, banco de dados e processamento de dados no servidor.</p>
                      <p><strong>Funções:</strong> Servidor, Banco de Dados, APIs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="linguagens-web">
              <h3 class="title is-4 section-title mb-5">6. A Trindade das Linguagens da Web</h3>
              <div class="box box-dark">
                <div class="columns">
                  <div class="column">
                    <h4 class="title is-5 mb-3">HTML</h4>
                    <p>A <strong>estrutura</strong> - o esqueleto da página</p>
                  </div>
                  <div class="column">
                    <h4 class="title is-5 mb-3">CSS</h4>
                    <p>A <strong>aparência</strong> - o estilo e design</p>
                  </div>
                  <div class="column">
                    <h4 class="title is-5 mb-3">JavaScript</h4>
                    <p>O <strong>comportamento</strong> - a interatividade</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="protocolos">
              <h3 class="title is-4 section-title mb-5">7. Protocolos HTTP e HTTPS</h3>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h4 class="title is-5 mb-3">HTTP</h4>
                    <div class="content">
                      <p>O protocolo padrão de comunicação na web. Define como as mensagens são formatadas e transmitidas entre cliente e servidor.</p>
                      <p class="mt-3"><strong>Ciclo:</strong> Request (Requisição) → Response (Resposta)</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h4 class="title is-5 highlight-green mb-3">HTTPS</h4>
                    <div class="content">
                      <p>A versão <strong>segura</strong> do HTTP. Criptografa os dados transmitidos entre navegador e servidor.</p>
                      <p class="mt-3"><strong>Essencial para:</strong> Lojas, bancos e sites com dados sensíveis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="mercado">
              <h3 class="title is-4 section-title mb-5">8. O Mercado de Trabalho Front-End</h3>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <p class="mb-4">O desenvolvedor Front-End é responsável por criar interfaces interativas e funcionais, sendo a ponte entre design e tecnologia.</p>
                  <div class="columns mt-5">
                    <div class="column">
                      <h4 class="title is-6 mb-3">Principais Atividades</h4>
                      <ul>
                        <li>Criação de telas e jornadas</li>
                        <li>Refinamento de produto</li>
                        <li>Correção de bugs</li>
                        <li>Otimizações de performance</li>
                      </ul>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 mb-3">Habilidades Necessárias</h4>
                      <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>Frameworks modernos</li>
                        <li>Git e controle de versão</li>
                        <li>Comunicação e trabalho em equipe</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao">
              <h3 class="title is-4 section-title mb-5">Conclusão</h3>
              <div class="box box-dark border-left-pink">
                <h4 class="title is-5 mb-3">Parabéns por concluir a primeira semana!</h4>
                <div class="content is-size-5">
                  <p class="mb-4">Você agora possui uma base sólida sobre:</p>
                  <ul class="mb-4">
                    <li>Como a Internet e a Web funcionam</li>
                    <li>A diferença entre Front-End e Back-End</li>
                    <li>Os protocolos de comunicação (HTTP/HTTPS)</li>
                    <li>As linguagens fundamentais da web</li>
                    <li>O papel do desenvolvedor Front-End</li>
                  </ul>
                  <p class="has-text-weight-bold highlight-pink">Continue sua jornada e pratique o que aprendeu!</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
      ]
    },
    {
      "id": 2,
      "titulo": "Semana 2",
      "subtitulo": "6/6 aulas",
      "descricao": "Primeiros passos com HTML, CSS e estruturação de páginas",
      "icone": "fa-code",
      "dias": [
        {
          "id": 7,
          "titulo": "Primeiros Passos com HTML",
          "subtitulo": "Aula 2.1",
          "descricao": "Estrutura básica de documentos HTML, tags essenciais para textos, links, imagens, listas e formulários",
          "icone": "fa-html5",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="estrutura-basica">
              <h2 class="title is-4 section-title mb-5">1. A Estrutura Básica de um Documento HTML</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Todo arquivo HTML segue uma estrutura fundamental que informa ao navegador como interpretar o conteúdo.
                  Pense nisso como o esqueleto de qualquer página que você visita.
                </p>
              </div>
              <pre class="box-dark p-4"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Título da Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- O conteúdo visível da página fica aqui --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
              <div class="columns mt-4">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">&lt;!DOCTYPE html&gt;:</h3>
                    <div class="content">
                      <p>Declara que o documento é um HTML5.</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">&lt;html&gt;:</h3>
                    <div class="content">
                      <p>O elemento raiz que envolve todo o conteúdo.</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">&lt;head&gt;:</h3>
                    <div class="content">
                      <p>Contém metadados: título, scripts, estilos (não visível na página).</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">&lt;body&gt;:</h3>
                    <div class="content">
                      <p>Contém todo o conteúdo visível da página.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="tags-texto">
              <h2 class="title is-4 section-title mb-5">2. Tags Essenciais para Textos</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Para estruturar o conteúdo escrito, usamos tags específicas para títulos, parágrafos e ênfase.
                </p>
              </div>
              
              <h3 class="title is-5 mb-3">Títulos (Headings)</h3>
              <div class="content mb-4">
                <p>Vão de <code>&lt;h1&gt;</code> (mais importante) a <code>&lt;h6&gt;</code> (menos importante).</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;h1&gt;Este é o título principal&lt;/h1&gt;
&lt;h2&gt;Este é um subtítulo&lt;/h2&gt;</code></pre>
              
              <h3 class="title is-5 mt-6 mb-3">Parágrafos</h3>
              <div class="content mb-4">
                <p>A tag <code>&lt;p&gt;</code> é usada para blocos de texto.</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;p&gt;Este é um parágrafo sobre desenvolvimento web.&lt;/p&gt;</code></pre>
              
              <h3 class="title is-5 mt-6 mb-3">Ênfase e Importância</h3>
              <div class="content mb-4">
                <p>Use <code>&lt;strong&gt;</code> para negrito (importância) e <code>&lt;em&gt;</code> para itálico (ênfase).</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;p&gt;Este texto é &lt;strong&gt;importante&lt;/strong&gt; e este tem &lt;em&gt;ênfase&lt;/em&gt;.&lt;/p&gt;</code></pre>
            </div>

            <div class="mb-6" id="links-imagens">
              <h2 class="title is-4 section-title mb-5">3. Links e Imagens</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  A web é feita de conexões. As tags <code>&lt;a&gt;</code> e <code>&lt;img&gt;</code> são fundamentais para isso.
                </p>
              </div>
              
              <h3 class="title is-5 mb-3">Links (Âncoras)</h3>
              <div class="content mb-4">
                <p>A tag <code>&lt;a&gt;</code> (âncora) cria um hyperlink. O atributo <code>href</code> define o destino.</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;a href="https://www.serasa.com.br"&gt;Visite o site da Serasa&lt;/a&gt;</code></pre>
              
              <h3 class="title is-5 mt-6 mb-3">Imagens</h3>
              <div class="content mb-4">
                <p>A tag <code>&lt;img&gt;</code> insere uma imagem. <code>src</code> é o caminho da imagem e <code>alt</code> é o texto alternativo (essencial para acessibilidade).</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;img src="caminho/para/sua/imagem.jpg" alt="Descrição da imagem"&gt;</code></pre>
            </div>

            <div class="mb-6" id="listas">
              <h2 class="title is-4 section-title mb-5">4. Organizando com Listas</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Listas são perfeitas para agrupar informações relacionadas de forma organizada.
                </p>
              </div>
              
              <h3 class="title is-5 mb-3">Lista Não Ordenada</h3>
              <div class="content mb-4">
                <p>Use <code>&lt;ul&gt;</code> (unordered list) para itens sem uma ordem específica.</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;ul&gt;
  &lt;li&gt;Café&lt;/li&gt;
  &lt;li&gt;Leite&lt;/li&gt;
&lt;/ul&gt;</code></pre>
              
              <h3 class="title is-5 mt-6 mb-3">Lista Ordenada</h3>
              <div class="content mb-4">
                <p>Use <code>&lt;ol&gt;</code> (ordered list) para itens que seguem uma sequência.</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;ol&gt;
  &lt;li&gt;Primeiro passo&lt;/li&gt;
  &lt;li&gt;Segundo passo&lt;/li&gt;
&lt;/ol&gt;</code></pre>
            </div>

            <div class="mb-6" id="tags-estruturais">
              <h2 class="title is-4 section-title mb-5">5. Tags Estruturais e Semânticas</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Para organizar o layout da página, usamos tags que agrupam conteúdo. As semânticas também dão significado à estrutura.
                </p>
              </div>
              
              <h3 class="title is-5 mb-3">Divisões e Seções (<code>&lt;div&gt;</code> e <code>&lt;span&gt;</code>)</h3>
              <div class="content mb-4">
                <p><code>&lt;div&gt;</code> é um container em bloco para agrupar grandes seções. <code>&lt;span&gt;</code> é um container em linha para agrupar pequenos trechos de texto.</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;div class="artigo"&gt;
  &lt;h2&gt;Título&lt;/h2&gt;
  &lt;p&gt;Este parágrafo tem um &lt;span class="destaque"&gt;texto destacado&lt;/span&gt;.&lt;/p&gt;
&lt;/div&gt;</code></pre>
              
              <h3 class="title is-5 mt-6 mb-3">Tags Semânticas (HTML5)</h3>
              <div class="content mb-4">
                <p>Elas estruturam a página de forma lógica, ajudando na acessibilidade e SEO.</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;header&gt;Cabeçalho do site&lt;/header&gt;
&lt;nav&gt;Menu de navegação&lt;/nav&gt;
&lt;main&gt;Conteúdo principal da página&lt;/main&gt;
&lt;footer&gt;Rodapé do site&lt;/footer&gt;</code></pre>
            </div>

            <div class="mb-6" id="tabelas-formularios">
              <h2 class="title is-4 section-title mb-5">6. Tabelas e Formulários (Introdução)</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Esses elementos são usados para exibir dados estruturados e coletar informações do usuário.
                </p>
              </div>
              
              <h3 class="title is-5 mb-3">Tabelas</h3>
              <div class="content mb-4">
                <p>Usadas para mostrar dados em linhas e colunas.</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Nome&lt;/th&gt;
    &lt;th&gt;Idade&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Ana&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
              
              <h3 class="title is-5 mt-6 mb-3">Formulários</h3>
              <div class="content mb-4">
                <p>Essenciais para a interação com o usuário.</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;form&gt;
  &lt;label for="nome"&gt;Nome:&lt;/label&gt;
  &lt;input type="text" id="nome"&gt;
  
  &lt;label for="msg"&gt;Mensagem:&lt;/label&gt;
  &lt;textarea id="msg"&gt;&lt;/textarea&gt;
  
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
            </div>

            <div class="mb-6" id="conclusao-html">
              <h2 class="title is-4 section-title mb-5">7. Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <p class="mb-4">Hoje vimos a estrutura básica e aprendemos a usar as principais tags para textos, links, imagens, listas, layouts e formulários. Você já tem o conhecimento fundamental para criar a estrutura de qualquer página web!</p>
                  <p><strong>Na próxima aula, vamos aprender a estilizar tudo isso com CSS!</strong></p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 53,
          "titulo": "Entendendo o Box Model",
          "subtitulo": "Aula 2.1",
          "descricao": "Compreendendo o conceito fundamental de Box Model: como todo elemento HTML possui content, padding, border e margin",
          "icone": "fa-square",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="o-que-e-box-model">
              <h2 class="title is-4 section-title mb-5">1. O que é o Box Model?</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  No HTML, <strong>todo elemento é uma caixa</strong>. Não importa se é um parágrafo, uma imagem, um botão ou uma div — para o navegador, tudo é tratado como um "retângulo invisível". Esse conceito fundamental é chamado de <span class="highlight-pink">Box Model</span>.
                </p>
                <p class="mb-5">
                  Entender o Box Model é essencial porque ele define como os elementos ocupam espaço na página e como eles se relacionam uns com os outros. É a base de todo o layout em CSS.
                </p>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">A Analogia da Caixa de Presente 🎁</h3>
                <div class="content">
                  <p>Imagine que você está embalando um presente:</p>
                  <ul>
                    <li><strong>O presente em si</strong> é o <span class="highlight-pink">content</span> (conteúdo).</li>
                    <li><strong>O papel de seda</strong> ao redor do presente é o <span class="highlight-pink">padding</span> (preenchimento interno).</li>
                    <li><strong>A caixa de papelão</strong> é a <span class="highlight-pink">border</span> (borda).</li>
                    <li><strong>O espaço entre a caixa e outras caixas</strong> na prateleira é a <span class="highlight-pink">margin</span> (margem).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-6" id="componentes-box-model">
              <h2 class="title is-4 section-title mb-5">2. Os 4 Componentes do Box Model</h2>
              <div class="content is-size-5 mb-5">
                <p>
                  Cada elemento HTML é composto por 4 camadas que, de dentro para fora, são:
                </p>
              </div>
              
              <div class="columns mb-5">
                <div class="column">
                  <div class="box box-dark has-text-centered">
                    <h3 class="title is-5 highlight-pink mb-3">1. Content</h3>
                    <p>A área onde o conteúdo real aparece (texto, imagem, etc.). É controlada por <code>width</code> e <code>height</code>.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark has-text-centered">
                    <h3 class="title is-5 highlight-pink mb-3">2. Padding</h3>
                    <p>Espaço <strong>interno</strong> entre o conteúdo e a borda. Empurra a borda para fora do conteúdo.</p>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark has-text-centered">
                    <h3 class="title is-5 highlight-pink mb-3">3. Border</h3>
                    <p>A linha ao redor do padding e do conteúdo. Pode ser visível ou invisível.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark has-text-centered">
                    <h3 class="title is-5 highlight-pink mb-3">4. Margin</h3>
                    <p>Espaço <strong>externo</strong> ao redor da borda. Separa o elemento de outros elementos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="visualizando-box-model">
              <h2 class="title is-4 section-title mb-5">3. Visualizando o Box Model</h2>
              <div class="content is-size-5 mb-5">
                <p>
                  A melhor forma de entender é visualizar. Veja como as camadas se organizam de dentro para fora:
                </p>
              </div>
              <div class="box box-dark p-5">
                <div style="background: #6b7280; padding: 30px; text-align: center;">
                  <span style="color: white; font-size: 14px;">MARGIN (área externa - cinza)</span>
                  <div style="background: #f59e0b; padding: 30px; margin-top: 10px;">
                    <span style="color: white; font-size: 14px;">BORDER (borda - laranja)</span>
                    <div style="background: #10b981; padding: 30px; margin-top: 10px;">
                      <span style="color: white; font-size: 14px;">PADDING (espaço interno - verde)</span>
                      <div style="background: #3b82f6; padding: 20px; margin-top: 10px;">
                        <span style="color: white; font-weight: bold;">CONTENT (conteúdo - azul)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="exemplo-pratico">
              <h2 class="title is-4 section-title mb-5">4. Exemplo Prático em CSS</h2>
              <div class="content is-size-5 mb-5">
                <p>
                  Veja como aplicar cada camada do Box Model usando CSS:
                </p>
              </div>
              <pre class="box-dark p-4"><code>/* Exemplo de Box Model */
.minha-caixa {
  /* 1. Content - tamanho do conteúdo */
  width: 200px;
  height: 100px;
  
  /* 2. Padding - espaço INTERNO */
  padding: 20px;
  
  /* 3. Border - a borda ao redor */
  border: 5px solid #e80170;
  
  /* 4. Margin - espaço EXTERNO */
  margin: 30px;
  
  /* Cor de fundo para visualizar */
  background-color: #374151;
}</code></pre>
              <div class="box box-dark mt-5">
                <h3 class="title is-5 mb-4">📐 Calculando o Tamanho Total</h3>
                <div class="content">
                  <p>No exemplo acima, qual é a largura total ocupada pelo elemento?</p>
                  <ul>
                    <li>Content: <code>200px</code></li>
                    <li>Padding: <code>20px</code> (esquerda) + <code>20px</code> (direita) = <code>40px</code></li>
                    <li>Border: <code>5px</code> (esquerda) + <code>5px</code> (direita) = <code>10px</code></li>
                    <li><strong>Total:</strong> 200 + 40 + 10 = <span class="highlight-pink">250px</span></li>
                  </ul>
                  <p class="mt-3"><em>A margin não é contada no tamanho do elemento, mas sim no espaço que ele ocupa na página.</em></p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="padding-vs-margin">
              <h2 class="title is-4 section-title mb-5">5. Padding vs Margin: Quando Usar Cada Um?</h2>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink mb-4">Padding (Interno)</h3>
                    <div class="content">
                      <p>Use quando quiser:</p>
                      <ul>
                        <li>Dar "respiro" ao conteúdo dentro de um elemento</li>
                        <li>Aumentar a área clicável de um botão</li>
                        <li>Manter o texto afastado das bordas</li>
                      </ul>
                      <p class="mt-3"><strong>Dica:</strong> O padding herda a cor de fundo do elemento!</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink mb-4">Margin (Externo)</h3>
                    <div class="content">
                      <p>Use quando quiser:</p>
                      <ul>
                        <li>Separar elementos uns dos outros</li>
                        <li>Centralizar um elemento (<code>margin: auto</code>)</li>
                        <li>Criar espaçamento entre seções</li>
                      </ul>
                      <p class="mt-3"><strong>Dica:</strong> A margin é sempre transparente!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="inspecionando">
              <h2 class="title is-4 section-title mb-5">6. Atividade: Inspecionando o Box Model</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <p class="mb-4">Vamos usar as Ferramentas do Desenvolvedor para ver o Box Model em ação:</p>
                  <ol>
                    <li class="mb-3">Pressione <strong>F12</strong> no navegador para abrir as DevTools.</li>
                    <li class="mb-3">Selecione qualquer elemento na página usando a ferramenta de seleção (ícone de cursor).</li>
                    <li class="mb-3">Na aba <strong>"Computed"</strong> ou <strong>"Calculado"</strong>, você verá um diagrama colorido do Box Model!</li>
                    <li>Passe o mouse sobre o diagrama para ver cada camada destacada na página.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao-box-model">
              <h2 class="title is-4 section-title mb-5">7. Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <ul>
                    <li><strong>Todo elemento HTML é uma caixa</strong> com 4 camadas.</li>
                    <li>De dentro para fora: <strong>Content → Padding → Border → Margin</strong>.</li>
                    <li><strong>Padding</strong> é espaço interno; <strong>Margin</strong> é espaço externo.</li>
                    <li>O tamanho total de um elemento é a soma de content + padding + border.</li>
                  </ul>
                </div>
                <h3 class="title is-5 mt-5 mb-3">Na Próxima Aula...</h3>
                <div class="content">
                  <p>Vamos praticar o Box Model com exercícios de HTML e CSS, criando layouts com espaçamentos bem definidos!</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 8,
          "titulo": "Introdução ao CSS",
          "subtitulo": "Aula 2.2",
          "descricao": "Conceitos básicos de CSS, formas de aplicação, seletores e propriedades fundamentais de estilização",
          "icone": "fa-css3-alt",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="o-que-e-css">
              <h2 class="title is-4 section-title mb-5">1. O que é CSS?</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  CSS significa <strong>Cascading Style Sheets</strong> (Folhas de Estilo em Cascata). Se o HTML é o esqueleto da página, o CSS é a pele, as roupas e a maquiagem. Ele é usado para controlar a <span class="highlight-pink">aparência visual</span> de todos os elementos HTML.
                </p>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark has-text-centered p-4">🎨 Cores e Fundos</div>
                </div>
                <div class="column">
                  <div class="box box-dark has-text-centered p-4">📝 Fontes e Tamanhos de Texto</div>
                </div>
                <div class="column">
                  <div class="box box-dark has-text-centered p-4">📐 Espaçamentos e Bordas</div>
                </div>
                <div class="column">
                  <div class="box box-dark has-text-centered p-4">📱 Layouts e Responsividade</div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="como-adicionar-css">
              <h2 class="title is-4 section-title mb-5">2. Como Adicionar CSS a uma Página</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Existem três maneiras de incluir estilos CSS em seu HTML. A mais recomendada para projetos organizados é a externa.
                </p>
              </div>
              <div class="mb-5">
                <h3 class="title is-5 mb-3">1. CSS Interno (Internal)</h3>
                <div class="content mb-3">
                  <p>Dentro da tag <code>&lt;head&gt;</code>, usando a tag <code>&lt;style&gt;</code>. Útil para estilos de uma única página.</p>
                </div>
                <pre class="box-dark p-4"><code>&lt;head&gt;
  &lt;style&gt;
    h1 {
      color: blue;
    }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>
              </div>
              
              <div class="mb-5">
                <h3 class="title is-5 mb-3">2. CSS em Linha (Inline)</h3>
                <div class="content mb-3">
                  <p>Diretamente na tag HTML usando o atributo <code>style</code>. Use com moderação.</p>
                </div>
                <pre class="box-dark p-4"><code>&lt;h1 style="color: blue;"&gt;Meu Título Azul&lt;/h1&gt;</code></pre>
              </div>
              
              <div class="mb-5">
                <h3 class="title is-5 mb-3">3. CSS Externo (External) - Recomendado</h3>
                <div class="content mb-3">
                  <p>Em um arquivo separado (ex: <code>style.css</code>) e linkado no <code>&lt;head&gt;</code>. A melhor prática para organização.</p>
                </div>
                <pre class="box-dark p-4"><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;</code></pre>
              </div>
            </div>

            <div class="mb-6" id="seletores-css">
              <h2 class="title is-4 section-title mb-5">3. Seletores: Como Mirar nos Elementos</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  A "mágica" do CSS começa com a regra: <strong>Seletor { Propriedade: Valor; }</strong>. O seletor diz ao navegador QUAL elemento estilizar.
                </p>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Principais Tipos de Seletores</h3>
                <div class="content">
                  <ul>
                    <li class="mb-3"><strong>Por Tag:</strong> Estiliza todas as tags de um tipo. Ex: <code>p { color: white; }</code></li>
                    <li class="mb-3"><strong>Por Classe:</strong> Estiliza todos os elementos com um atributo <code>class</code>. Usa-se um ponto (<code>.</code>). Ex: <code>.destaque { background-color: yellow; }</code></li>
                    <li><strong>Por ID:</strong> Estiliza um ÚNICO elemento com um atributo <code>id</code>. Usa-se uma cerquilha (<code>#</code>). Ex: <code>#menu-principal { width: 100%; }</code></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-6" id="propriedades-basicas">
              <h2 class="title is-4 section-title mb-5">4. Propriedades Básicas de Estilização</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Vamos ver algumas das propriedades mais comuns para começar a transformar nossas páginas.
                </p>
              </div>
              <pre class="box-dark p-4"><code>/* Estilizando um título */
h1 {
  color: #e80170;            /* Cor do texto */
  font-size: 32px;           /* Tamanho da fonte */
  font-family: Arial, sans-serif; /* Tipo da fonte */
  text-align: center;        /* Alinhamento do texto */
}

/* Estilizando um container */
div {
  width: 200px;              /* Largura */
  height: 100px;             /* Altura */
  background-color: #333;    /* Cor de fundo */
  border: 2px solid white;   /* Borda */
  padding: 10px;             /* Espaçamento interno */
  margin: 20px;              /* Espaçamento externo */
}</code></pre>
            </div>
            
            <div class="mb-6" id="conclusao-css">
              <h2 class="title is-4 section-title mb-5">5. Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <p class="mb-4">Aprendemos o que é CSS, as formas de adicioná-lo, como usar seletores para mirar nos elementos e aplicamos algumas das propriedades de estilo mais comuns. Agora você pode dar vida e cor à estrutura do seu HTML!</p>
                  <p><strong>Vamos praticar com alguns exercícios!</strong></p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 9,
          "titulo": "Tags HTML e Seletores CSS",
          "subtitulo": "Aula 2.3",
          "descricao": "Conheça as principais tags HTML e seletores CSS.",
          "icone": "fa-tags",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="tags-html">
              <h2 class="title is-4 section-title mb-5">1. Principais Tags HTML</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <ul>
                    <li><code>&lt;h1&gt; a &lt;h6&gt;</code>: Títulos e subtítulos, organizam a hierarquia do conteúdo.</li>
                    <li><code>&lt;p&gt;</code>: Parágrafo de texto.</li>
                    <li><code>&lt;a&gt;</code>: Link para outras páginas ou sites.</li>
                    <li><code>&lt;img&gt;</code>: Imagem ilustrativa.</li>
                    <li><code>&lt;ul&gt;</code> e <code>&lt;ol&gt;</code>: Listas não ordenadas e ordenadas.</li>
                    <li><code>&lt;li&gt;</code>: Item de lista.</li>
                    <li><code>&lt;div&gt;</code>: Bloco genérico para agrupar elementos.</li>
                    <li><code>&lt;span&gt;</code>: Elemento em linha para estilização ou agrupamento.</li>
                    <li><code>&lt;form&gt;</code>: Formulário para entrada de dados.</li>
                    <li><code>&lt;input&gt;</code>: Campo de entrada de texto, número, etc.</li>
                    <li><code>&lt;button&gt;</code>: Botão para ações.</li>
                    <li><code>&lt;label&gt;</code>: Rótulo para campos de formulário.</li>
                    <li><code>&lt;select&gt;</code>: Menu suspenso para seleção de opções.</li>
                    <li><code>&lt;option&gt;</code>: Opção dentro de um <code>&lt;select&gt;</code>.</li>
                    <li><code>&lt;textarea&gt;</code>: Campo de texto multilinha.</li>
                    <li><code>&lt;table&gt;</code>: Tabela de dados.</li>
                    <li><code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>: Cabeçalho, corpo e rodapé da tabela.</li>
                    <li><code>&lt;tr&gt;</code>: Linha de tabela.</li>
                    <li><code>&lt;td&gt;</code>: Célula de tabela.</li>
                    <li><code>&lt;th&gt;</code>: Cabeçalho de célula de tabela.</li>
                    <li><code>&lt;section&gt;</code>: Seção temática do documento.</li>
                    <li><code>&lt;article&gt;</code>: Conteúdo independente, como posts ou notícias.</li>
                    <li><code>&lt;header&gt;</code>: Cabeçalho da página ou seção.</li>
                    <li><code>&lt;footer&gt;</code>: Rodapé da página ou seção.</li>
                    <li><code>&lt;nav&gt;</code>: Navegação principal.</li>
                    <li><code>&lt;aside&gt;</code>: Conteúdo lateral ou complementar.</li>
                    <li><code>&lt;main&gt;</code>: Conteúdo principal do documento.</li>
                    <li><code>&lt;figure&gt;</code>: Imagem, gráfico ou ilustração com legenda.</li>
                    <li><code>&lt;figcaption&gt;</code>: Legenda de uma figura.</li>
                    <li><code>&lt;iframe&gt;</code>: Embutir outro documento ou vídeo.</li>
                    <li><code>&lt;audio&gt;</code>: Reproduzir áudio.</li>
                    <li><code>&lt;video&gt;</code>: Reproduzir vídeo.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-6" id="seletores-css">
              <h2 class="title is-4 section-title mb-5">2. Seletores CSS, Estilos e Funções</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <ul>
                    <li><strong>Seletor de Tag:</strong> <code>p { color: blue; }</code> — Estiliza todas as tags &lt;p&gt;.</li>
                    <li><strong>Seletor de Classe:</strong> <code>.destaque { font-weight: bold; }</code> — Estiliza todos os elementos com a classe "destaque".</li>
                    <li><strong>Seletor de ID:</strong> <code>#menu { background: #eee; }</code> — Estiliza o elemento com id "menu".</li>
                    <li><strong>Seletor Universal:</strong> <code>* { box-sizing: border-box; }</code> — Aplica a todos os elementos.</li>
                    <li><strong>Seletor de Descendente:</strong> <code>div p { margin: 10px; }</code> — Estiliza &lt;p&gt; dentro de &lt;div&gt;.</li>
                    <li><strong>Seletor de Filho Direto:</strong> <code>ul > li { list-style: none; }</code> — Estiliza apenas os filhos diretos.</li>
                    <li><strong>Seletor de Atributo:</strong> <code>input[type="text"] { border: 1px solid #ccc; }</code> — Estiliza elementos com atributo específico.</li>
                    <li><strong>Pseudo-classes:</strong> <code>a:hover { color: red; }</code> — Estiliza quando o mouse está sobre o link.</li>
                    <li><strong>Pseudo-elementos:</strong> <code>p::first-line { font-weight: bold; }</code> — Estiliza parte específica do elemento.</li>
                    <li><strong>Propriedades Comuns:</strong></li>
                    <li><code>color</code> — Define a cor do texto de um elemento. Exemplo: <code>color: #e80170;</code></li>
                    <li><code>background-color</code> — Define a cor de fundo do elemento. Exemplo: <code>background-color: #f5f5f5;</code></li>
                    <li><code>font-size</code> — Controla o tamanho da fonte. Exemplo: <code>font-size: 18px;</code></li>
                    <li><code>font-family</code> — Escolhe a família de fontes usada. Exemplo: <code>font-family: Arial, sans-serif;</code></li>
                    <li><code>font-weight</code> — Define o peso (espessura) da fonte, como <code>bold</code> ou <code>normal</code>. Exemplo: <code>font-weight: bold;</code></li>
                    <li><code>margin</code> — Espaçamento externo ao redor do elemento. Exemplo: <code>margin: 20px;</code></li>
                    <li><code>padding</code> — Espaçamento interno entre o conteúdo e a borda do elemento. Exemplo: <code>padding: 10px;</code></li>
                    <li><code>border</code> — Adiciona uma borda ao redor do elemento. Exemplo: <code>border: 1px solid #ccc;</code></li>
                    <li><code>border-radius</code> — Arredonda os cantos da borda. Exemplo: <code>border-radius: 8px;</code></li>
                    <li><code>display</code> — Define o tipo de caixa do elemento, como <code>block</code>, <code>inline</code>, <code>flex</code>, <code>grid</code>. Exemplo: <code>display: flex;</code></li>
                    <li><code>text-align</code> — Alinha o texto dentro do elemento (<code>left</code>, <code>center</code>, <code>right</code>). Exemplo: <code>text-align: center;</code></li>
                    <li><code>width</code> — Define a largura do elemento. Exemplo: <code>width: 100%;</code></li>
                    <li><code>height</code> — Define a altura do elemento. Exemplo: <code>height: 50px;</code></li>
                    <li><code>max-width</code> — Limita a largura máxima do elemento. Exemplo: <code>max-width: 800px;</code></li>
                    <li><code>min-width</code> — Define a largura mínima do elemento. Exemplo: <code>min-width: 200px;</code></li>
                    <li><code>max-height</code> — Limita a altura máxima do elemento. Exemplo: <code>max-height: 350px;</code></li>
                    <li><code>min-height</code> — Define a altura mínima do elemento. Exemplo: <code>min-height: 100px;</code></li>
                    <li><code>box-shadow</code> — Adiciona sombra ao redor do elemento. Exemplo: <code>box-shadow: 0 2px 8px #0002;</code></li>
                    <li><code>opacity</code> — Controla a transparência do elemento (0 a 1). Exemplo: <code>opacity: 0.5;</code></li>
                    <li><code>overflow</code> — Define o que acontece quando o conteúdo excede o tamanho do elemento (<code>hidden</code>, <code>scroll</code>, <code>auto</code>). Exemplo: <code>overflow: auto;</code></li>
                    <li><code>z-index</code> — Controla a ordem de sobreposição dos elementos. Exemplo: <code>z-index: 10;</code></li>
                    <li><code>position</code> — Define o método de posicionamento (<code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>). Exemplo: <code>position: absolute;</code></li>
                    <li><code>top</code> — Distância do topo do elemento pai quando <code>position</code> é usado. Exemplo: <code>top: 20px;</code></li>
                    <li><code>left</code> — Distância da esquerda do elemento pai. Exemplo: <code>left: 10px;</code></li>
                    <li><code>right</code> — Distância da direita do elemento pai. Exemplo: <code>right: 10px;</code></li>
                    <li><code>bottom</code> — Distância de baixo do elemento pai. Exemplo: <code>bottom: 0;</code></li>
                    <li><code>cursor</code> — Define o tipo de cursor ao passar sobre o elemento. Exemplo: <code>cursor: pointer;</code></li>
                    <li><code>transition</code> — Cria animações suaves entre estados. Exemplo: <code>transition: all 0.3s;</code></li>
                    <li><code>background-image</code> — Define uma imagem de fundo. Exemplo: <code>background-image: url('img.png');</code></li>
                    <li><code>flex</code> — Propriedades para layout flexível. Exemplo: <code>flex: 1;</code></li>
                    <li><code>grid</code> — Propriedades para layout em grade. Exemplo: <code>grid-template-columns: 1fr 2fr;</code></li>
                    <li><code>align-items</code> — Alinha itens no eixo vertical em flex/grid. Exemplo: <code>align-items: center;</code></li>
                    <li><code>justify-content</code> — Alinha itens no eixo horizontal em flex/grid. Exemplo: <code>justify-content: space-between;</code></li>
                    <li><code>gap</code> — Espaçamento entre itens em flex/grid. Exemplo: <code>gap: 16px;</code></li>
                    <li><code>float</code> — Faz o elemento flutuar à esquerda ou direita. Exemplo: <code>float: right;</code></li>
                    <li><code>clear</code> — Controla o comportamento de elementos flutuantes. Exemplo: <code>clear: both;</code></li>
                    <li><code>visibility</code> — Controla se o elemento é visível ou oculto. Exemplo: <code>visibility: hidden;</code></li>
                    <li><code>vertical-align</code> — Alinha elementos em linha verticalmente. Exemplo: <code>vertical-align: middle;</code></li>
                    <li><code>letter-spacing</code> — Espaçamento entre letras. Exemplo: <code>letter-spacing: 2px;</code></li>
                    <li><code>line-height</code> — Altura da linha do texto. Exemplo: <code>line-height: 1.5;</code></li>
                    <li><code>list-style</code> — Define o estilo dos marcadores de lista. Exemplo: <code>list-style: none;</code></li>
                    <li><code>outline</code> — Adiciona um contorno ao elemento, geralmente usado para acessibilidade. Exemplo: <code>outline: 2px solid #e80170;</code></li>
                    <li><code>clip-path</code> — Recorta o elemento em formas específicas. Exemplo: <code>clip-path: circle(50%);</code></li>
                    <li><code>filter</code> — Aplica efeitos visuais como blur, brilho, etc. Exemplo: <code>filter: blur(2px);</code></li>
                    <li><code>object-fit</code> — Controla o ajuste de imagens/vídeos no container. Exemplo: <code>object-fit: cover;</code></li>
                    <li><code>pointer-events</code> — Controla se o elemento responde a eventos do mouse. Exemplo: <code>pointer-events: none;</code></li>
                    <li><code>user-select</code> — Permite ou bloqueia seleção de texto. Exemplo: <code>user-select: none;</code></li>
                    <li><code>white-space</code> — Controla quebra de linha e espaços em branco. Exemplo: <code>white-space: nowrap;</code></li>
                    <li><code>word-break</code> — Controla quebra de palavras longas. Exemplo: <code>word-break: break-all;</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 10,
          "titulo": "Exercícios de Estrutura HTML",
          "subtitulo": "Exercícios",
          "descricao": "Prática de criação de estruturas HTML com posts, cartões, listas e formulários",
          "icone": "fa-pen",
          "conteudo": `
          <div class="container">
            <div class="content has-text-centered mb-6">
              <p class="is-size-5">
                Crie o código HTML para resolver os desafios abaixo.
              </p>
            </div>
            
            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 1: Post de Blog</h3>
                <div class="content mb-4">
                  <p>Crie a estrutura de um post simples. Ele deve ter um \`h1\` para o título principal, um \`h2\` para o subtítulo, e dois parágrafos \`p\` com texto genérico.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 2: Cartão de Apresentação</h3>
                <div class="content mb-4">
                  <p>Monte um cartão de apresentação usando uma <code>&lt;div&gt;</code> como container. Dentro dela, adicione uma imagem (<code>&lt;img&gt;</code>), um <code>&lt;h2&gt;</code> para o seu nome e um <code>&lt;p&gt;</code> com uma breve descrição sobre você.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 3: Receita de Bolo</h3>
                <div class="content mb-4">
                  <p>Crie uma página de receita com um <code>&lt;h1&gt;</code> para o nome da receita, um <code>&lt;h2&gt;</code> para "Ingredientes" seguido de uma lista não ordenada (<code>&lt;ul&gt;</code>) e outro <code>&lt;h2&gt;</code> para "Modo de Preparo" seguido de uma lista ordenada (<code>&lt;ol&gt;</code>).</p>
                </div>

              </div>
            </div>
            
            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 4: Página de Links Favoritos</h3>
                <div class="content mb-4">
                  <p>Crie uma página com um <code>&lt;h1&gt;</code> "Meus Sites Favoritos". Abaixo, crie uma lista não ordenada onde cada item da lista contém um link (<code>&lt;a&gt;</code>) para um site diferente (ex: Google, YouTube, etc.).</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 5: Formulário de Contato Simples</h3>
                <div class="content mb-4">
                  <p>Crie um formulário (<code>&lt;form&gt;</code>) que peça o nome e o e-mail do usuário. Use a tag <code>&lt;label&gt;</code> para cada campo e a tag <code>&lt;input&gt;</code> para os campos de texto. Adicione um botão de envio no final.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 6: Juntando Tudo</h3>
                <div class="content mb-4">
                  <p>Crie uma <code>&lt;div&gt;</code> principal que servirá como um card. Dentro dela, coloque uma imagem, um título <code>&lt;h3&gt;</code>, um parágrafo <code>&lt;p&gt;</code> e, por fim, um link <code>&lt;a&gt;</code> que diz "Saiba Mais".</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 7: Tabela de Horários</h3>
                <div class="content mb-4">
                  <p>Crie uma tabela (<code>&lt;table&gt;</code>) que represente uma grade de horários semanal. Use <code>&lt;thead&gt;</code> para o cabeçalho com os dias da semana, <code>&lt;tbody&gt;</code> para o corpo com os horários e atividades, e <code>&lt;th&gt;</code> para os títulos das colunas.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 8: Formulário Completo</h3>
                <div class="content mb-4">
                  <p>Expanda o formulário de contato anterior. Adicione um campo <code>&lt;select&gt;</code> com opções de assunto, um <code>&lt;textarea&gt;</code> para a mensagem, e um grupo de <code>&lt;input type="radio"&gt;</code> para o usuário escolher como prefere ser contatado (E-mail ou Telefone). Use <code>&lt;fieldset&gt;</code> e <code>&lt;legend&gt;</code> para agrupar os campos relacionados.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 9: Galeria de Imagens</h3>
                <div class="content mb-4">
                  <p>Crie uma galeria simples. Use uma <code>&lt;div&gt;</code> como container principal com um <code>&lt;h2&gt;</code> "Galeria". Dentro, coloque várias imagens (<code>&lt;img&gt;</code>), cada uma dentro de sua própria <code>&lt;div&gt;</code> com um parágrafo <code>&lt;p&gt;</code> abaixo descrevendo a imagem.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 10: Lista de Definições</h3>
                <div class="content mb-4">
                  <p>Crie um glossário de termos de programação usando a tag <code>&lt;dl&gt;</code> (definition list). Use <code>&lt;dt&gt;</code> para o termo (ex: "HTML", "CSS", "JavaScript") e <code>&lt;dd&gt;</code> para a definição de cada um. Inclua pelo menos 5 termos.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 11: Página de Produto</h3>
                <div class="content mb-4">
                  <p>Monte a estrutura de uma página de produto usando <code>&lt;div&gt;</code> como container principal. Adicione uma <code>&lt;img&gt;</code> para a foto do produto, um <code>&lt;h1&gt;</code> para o nome, um <code>&lt;p&gt;</code> para a descrição, um <code>&lt;span&gt;</code> para destacar o preço, e uma lista não ordenada para as características do produto.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 12: Incorporando Vídeo</h3>
                <div class="content mb-4">
                  <p>Crie uma página que incorpore um vídeo do YouTube usando a tag <code>&lt;iframe&gt;</code>. Adicione um título <code>&lt;h2&gt;</code> acima do vídeo e um parágrafo <code>&lt;p&gt;</code> abaixo com uma breve descrição do conteúdo. Dica: no YouTube, clique em "Compartilhar" > "Incorporar" para obter o código do iframe.</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 13: Citação em Destaque</h3>
                <div class="content mb-4">
                  <p>Crie uma página com uma citação famosa usando <code>&lt;blockquote&gt;</code>. Adicione o texto da citação dentro do blockquote e use a tag <code>&lt;cite&gt;</code> para indicar o autor. Acima, coloque um <code>&lt;h1&gt;</code> com "Citação do Dia".</p>
                </div>

              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 14: Texto com Formatação</h3>
                <div class="content mb-4">
                  <p>Crie um parágrafo que utilize várias tags de formatação de texto: <code>&lt;strong&gt;</code> para texto importante, <code>&lt;em&gt;</code> para ênfase, <code>&lt;mark&gt;</code> para destacar, <code>&lt;small&gt;</code> para texto menor, <code>&lt;del&gt;</code> para texto deletado e <code>&lt;ins&gt;</code> para texto inserido.</p>
                </div>

              </div>
            </div>
          </div>
          `
        },
        {
          "id": 54,
          "titulo": "HTML Semântico e SEO",
          "subtitulo": "Aula 2.4",
          "descricao": "Entenda a importância do HTML semântico para acessibilidade e SEO, e como ele impacta o ranqueamento nos mecanismos de busca",
          "icone": "fa-search",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="o-que-e-seo">
              <h2 class="title is-4 section-title mb-5">1. O que é SEO?</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  <strong>SEO</strong> (Search Engine Optimization) significa <strong>Otimização para Mecanismos de Busca</strong>. 
                  É um conjunto de técnicas e boas práticas que ajudam seu site a aparecer nas primeiras posições 
                  dos resultados de busca do Google, Bing e outros buscadores.
                </p>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 highlight-pink">Por que SEO é importante?</h3>
                <div class="content">
                  <ul>
                    <li><strong>Visibilidade:</strong> Sites bem ranqueados recebem mais visitas orgânicas (gratuitas).</li>
                    <li><strong>Credibilidade:</strong> Usuários confiam mais em sites que aparecem no topo das buscas.</li>
                    <li><strong>Economia:</strong> Menos necessidade de investir em anúncios pagos.</li>
                    <li><strong>Experiência do usuário:</strong> Boas práticas de SEO geralmente melhoram a usabilidade do site.</li>
                  </ul>
                </div>
              </div>
              <div class="box box-dark mt-4">
                <h3 class="title is-5 highlight-pink">Como os buscadores funcionam?</h3>
                <div class="content">
                  <p class="mb-3">Os mecanismos de busca usam robôs (crawlers) que:</p>
                  <ol>
                    <li><strong>Rastreiam:</strong> Navegam pela web lendo o conteúdo das páginas.</li>
                    <li><strong>Indexam:</strong> Armazenam e organizam as informações encontradas.</li>
                    <li><strong>Ranqueiam:</strong> Ordenam os resultados com base em relevância e qualidade.</li>
                  </ol>
                  <p class="mt-3">O HTML semântico ajuda os robôs a entenderem melhor o conteúdo da sua página!</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="html-semantico">
              <h2 class="title is-4 section-title mb-5">2. O que é HTML Semântico?</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  <strong>HTML Semântico</strong> significa usar as tags HTML de acordo com o seu <strong>significado</strong>, 
                  não apenas pela sua aparência visual. Tags semânticas descrevem o propósito do conteúdo, 
                  tornando o código mais legível para desenvolvedores, navegadores e mecanismos de busca.
                </p>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 has-text-danger">❌ Código NÃO Semântico</h3>
                    <pre class="p-3"><code>&lt;div id="cabecalho"&gt;
  &lt;div class="logo"&gt;Meu Site&lt;/div&gt;
  &lt;div class="menu"&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;div id="conteudo"&gt;
  &lt;div class="artigo"&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;div id="rodape"&gt;...&lt;/div&gt;</code></pre>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 has-text-success">✅ Código Semântico</h3>
                    <pre class="p-3"><code>&lt;header&gt;
  &lt;h1&gt;Meu Site&lt;/h1&gt;
  &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;...&lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="beneficios">
              <h2 class="title is-4 section-title mb-5">3. Benefícios do HTML Semântico</h2>
              <div class="columns is-multiline">
                <div class="column is-6">
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink">🔍 Melhor SEO</h3>
                    <p>Os buscadores entendem melhor a estrutura e o conteúdo da página, melhorando o ranqueamento.</p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink">♿ Acessibilidade</h3>
                    <p>Leitores de tela usam as tags semânticas para navegar e descrever o conteúdo para pessoas com deficiência visual.</p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink">🛠️ Manutenção</h3>
                    <p>Código mais organizado e fácil de entender, facilitando futuras alterações.</p>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="box box-dark">
                    <h3 class="title is-5 highlight-pink">📱 Responsividade</h3>
                    <p>Navegadores e dispositivos interpretam melhor o layout quando a estrutura é semântica.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="tags-semanticas">
              <h2 class="title is-4 section-title mb-5">4. Principais Tags Semânticas</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <table class="table is-fullwidth">
                    <thead>
                      <tr>
                        <th>Tag</th>
                        <th>Significado</th>
                        <th>Quando usar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>&lt;header&gt;</code></td>
                        <td>Cabeçalho</td>
                        <td>Topo da página ou de uma seção, geralmente contém logo e navegação</td>
                      </tr>
                      <tr>
                        <td><code>&lt;nav&gt;</code></td>
                        <td>Navegação</td>
                        <td>Menus de navegação principal do site</td>
                      </tr>
                      <tr>
                        <td><code>&lt;main&gt;</code></td>
                        <td>Conteúdo principal</td>
                        <td>O conteúdo central e único da página (use apenas uma vez por página)</td>
                      </tr>
                      <tr>
                        <td><code>&lt;article&gt;</code></td>
                        <td>Artigo independente</td>
                        <td>Conteúdo que faz sentido sozinho: posts, notícias, comentários</td>
                      </tr>
                      <tr>
                        <td><code>&lt;section&gt;</code></td>
                        <td>Seção temática</td>
                        <td>Agrupa conteúdo relacionado com um tema específico</td>
                      </tr>
                      <tr>
                        <td><code>&lt;aside&gt;</code></td>
                        <td>Conteúdo lateral</td>
                        <td>Informações complementares: barras laterais, widgets, anúncios</td>
                      </tr>
                      <tr>
                        <td><code>&lt;footer&gt;</code></td>
                        <td>Rodapé</td>
                        <td>Final da página ou seção: copyright, links, contato</td>
                      </tr>
                      <tr>
                        <td><code>&lt;figure&gt;</code></td>
                        <td>Figura</td>
                        <td>Imagens, gráficos ou ilustrações com legenda</td>
                      </tr>
                      <tr>
                        <td><code>&lt;figcaption&gt;</code></td>
                        <td>Legenda da figura</td>
                        <td>Descrição ou crédito de uma figura</td>
                      </tr>
                      <tr>
                        <td><code>&lt;time&gt;</code></td>
                        <td>Data/Hora</td>
                        <td>Datas e horários em formato legível por máquinas</td>
                      </tr>
                      <tr>
                        <td><code>&lt;mark&gt;</code></td>
                        <td>Destaque</td>
                        <td>Texto marcado/destacado por relevância</td>
                      </tr>
                      <tr>
                        <td><code>&lt;address&gt;</code></td>
                        <td>Endereço</td>
                        <td>Informações de contato do autor ou proprietário</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="mb-6" id="exemplo-estrutura">
              <h2 class="title is-4 section-title mb-5">5. Exemplo de Estrutura Semântica Completa</h2>
              <div class="content is-size-5 mb-4">
                <p>Veja como ficaria a estrutura de uma página de blog usando HTML semântico:</p>
              </div>
              <pre class="box-dark p-4"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="description" content="Blog sobre programação"&gt;
  &lt;title&gt;Meu Blog de Tecnologia&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Meu Blog de Tecnologia&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/sobre"&gt;Sobre&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/contato"&gt;Contato&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;article&gt;
      &lt;header&gt;
        &lt;h2&gt;Como começar a programar&lt;/h2&gt;
        &lt;time datetime="2026-01-21"&gt;21 de Janeiro de 2026&lt;/time&gt;
      &lt;/header&gt;
      &lt;p&gt;Neste artigo você vai aprender...&lt;/p&gt;
      &lt;figure&gt;
        &lt;img src="programacao.jpg" alt="Pessoa programando"&gt;
        &lt;figcaption&gt;Desenvolvedor trabalhando em código&lt;/figcaption&gt;
      &lt;/figure&gt;
    &lt;/article&gt;

    &lt;aside&gt;
      &lt;h3&gt;Posts Relacionados&lt;/h3&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;O que é HTML?&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Primeiros passos com CSS&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/aside&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;address&gt;
      Contato: &lt;a href="mailto:email@exemplo.com"&gt;email@exemplo.com&lt;/a&gt;
    &lt;/address&gt;
    &lt;p&gt;&amp;copy; 2026 Meu Blog. Todos os direitos reservados.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            </div>

            <div class="mb-6" id="dicas-seo">
              <h2 class="title is-4 section-title mb-5">6. Dicas de SEO com HTML</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <ul>
                    <li><strong>Use apenas um &lt;h1&gt; por página:</strong> Ele deve descrever o tema principal.</li>
                    <li><strong>Hierarquia de títulos:</strong> Use h1 → h2 → h3 em ordem, sem pular níveis.</li>
                    <li><strong>Meta description:</strong> Adicione uma descrição clara no &lt;head&gt; da página.</li>
                    <li><strong>Atributo alt nas imagens:</strong> Descreva o conteúdo das imagens para SEO e acessibilidade.</li>
                    <li><strong>URLs amigáveis:</strong> Use palavras descritivas, não códigos ou números.</li>
                    <li><strong>Links internos:</strong> Conecte suas páginas entre si para facilitar a navegação.</li>
                    <li><strong>Conteúdo de qualidade:</strong> Textos úteis e relevantes são o fator mais importante.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-6" id="resumo">
              <h2 class="title is-4 section-title mb-5">7. Resumo</h2>
              <div class="box box-dark">
                <div class="content is-size-5">
                  <p class="mb-4">
                    <strong>HTML Semântico + SEO = Sites melhores!</strong>
                  </p>
                  <ul>
                    <li>SEO ajuda seu site a ser encontrado nos buscadores.</li>
                    <li>HTML semântico usa tags com significado (&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;, etc.).</li>
                    <li>Tags semânticas melhoram SEO, acessibilidade e manutenção do código.</li>
                    <li>Sempre use alt em imagens, hierarquia correta de títulos e meta descriptions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 11,
          "titulo": "Exercícios de Estilização CSS",
          "subtitulo": "Exercícios",
          "descricao": "Prática de estilização com CSS: cores, tamanhos, espaçamentos e criação de componentes visuais",
          "icone": "fa-palette",
          "conteudo": `
          <div class="container">
            <div class="box has-text-centered mb-6 border-left-pink">
              <h3 class="title is-5 mb-3">Instruções Iniciais</h3>
              <div class="content">
                <p class="mb-3">Para os exercícios abaixo, aplique os estilos em um arquivo CSS externo chamado <code>estilos.css</code>. Em cada arquivo HTML de exercício, inclua dentro do <code>&lt;head&gt;</code>:</p>
                <pre class="box-dark p-4"><code>&lt;link rel="stylesheet" href="estilos.css"&gt;</code></pre>
                <p class="mt-3">As regras pedidas abaixo não devem usar <strong>display: flex</strong> nem <strong>display: grid</strong>. Use propriedades como <code>padding</code>, <code>margin</code>, <code>color</code>, <code>background-color</code>, <code>border</code>, <code>border-radius</code>, <code>box-shadow</code>, <code>text-align</code>, <code>font-size</code>, <code>line-height</code>, <code>max-width</code>, <code>object-fit</code>, <code>float</code> quando necessário.</p>
              </div>
            </div>

            <!-- Exercícios 1 a 16 com estrutura HTML de exemplo e instruções de estilo -->

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 1: Estilizando o Post</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: título, subtítulo e parágrafos do post.</p>
                  <pre class="p-3"><code>&lt;article class="post"&gt;
  &lt;h1&gt;Título do Post&lt;/h1&gt;
  &lt;h2&gt;Subtítulo&lt;/h2&gt;
  &lt;p&gt;Parágrafo de abertura...&lt;/p&gt;
&lt;/article&gt;</code></pre>
                  <p>Instruções CSS: centralize os títulos (<code>text-align</code>), defina <code>color: #e80170</code> para o <code>h1</code>, ajuste <code>line-height</code> dos parágrafos e limite a largura com <code>max-width: 720px</code> e <code>margin</code> automático.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 2: Cartão de Apresentação</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: cartão com imagem, nome e descrição.</p>
                  <pre class="p-3"><code>&lt;div class="card"&gt;
  &lt;img src="foto.jpg" alt="Foto" class="card-img"/&gt;
  &lt;h3&gt;Nome&lt;/h3&gt;
  &lt;p&gt;Descrição curta&lt;/p&gt;
&lt;/div&gt;</code></pre>
                  <p>Instruções CSS: largura fixa (<code>max-width: 300px</code>), <code>padding: 20px</code>, <code>background-color: #374151</code>, <code>border-radius: 10px</code>, e <code>box-shadow</code> suave; defina a imagem com <code>width:100%</code> e <code>object-fit:cover</code>.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 3: Receita de Bolo</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: título da receita, lista de ingredientes e modo de preparo.</p>
                  <pre class="p-3"><code>&lt;h1&gt;Bolo de Chocolate&lt;/h1&gt;
&lt;h2&gt;Ingredientes&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Farinha&lt;/li&gt;
  &lt;li&gt;Açúcar&lt;/li&gt;
&lt;/ul&gt;
&lt;h2&gt;Modo de Preparo&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Misturar ingredientes&lt;/li&gt;
&lt;/ol&gt;</code></pre>
                  <p>Instruções CSS: remova marcadores com <code>list-style:none</code>, use <code>padding</code> para os itens, adicione <code>border-left</code> colorido nos títulos e defina <code>font-size</code> maior para o <code>h1</code>.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 4: Página de Links</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: lista de links favoritos.</p>
                  <pre class="p-3"><code>&lt;h1&gt;Meus Sites Favoritos&lt;/h1&gt;
&lt;ul class="links"&gt;
  &lt;li&gt;&lt;a href="#"&gt;Google&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                  <p>Instruções CSS: remova sublinhado (<code>text-decoration:none</code>), defina <code>color: #e80170</code>, e use <code>padding</code> e <code>border-bottom</code> em cada item para separação visual.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 5: Formulário Agradável</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: formulário simples com labels e inputs.</p>
                  <pre class="p-3"><code>&lt;form class="contato"&gt;
  &lt;label&gt;Nome&lt;input type="text" name="nome" /&gt;&lt;/label&gt;
  &lt;label&gt;Mensagem&lt;textarea&gt;&lt;/textarea&gt;&lt;/label&gt;
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
                  <p>Instruções CSS: aplique <code>padding:10px</code> nos inputs, <code>border:1px solid #ccc</code>, <code>border-radius:5px</code>, e espaçamento vertical entre campos com <code>margin-bottom</code>.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 6: Botão Estilizado</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: link transformado em botão.</p>
                  <pre class="p-3"><code>&lt;a href="#" class="botao"&gt;Saiba Mais&lt;/a&gt;</code></pre>
                  <p>Instruções CSS: fundo <code>#e80170</code>, cor do texto <code>#fff</code>, <code>padding:10px 16px</code>, <code>text-decoration:none</code>, e <code>border-radius:5px</code>. Adicione um <code>box-shadow</code> leve para profundidade.</p>
                </div>
              </div>
            </div>

            <!-- Novos exercícios 7 a 16 -->

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 7: Galeria de Imagens</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: galeria com figuras e legendas.</p>
                  <pre class="p-3"><code>&lt;section class="galeria"&gt;
  &lt;figure&gt;
    &lt;img src="img1.jpg" alt="" /&gt;
    &lt;figcaption&gt;Legenda 1&lt;/figcaption&gt;
  &lt;/figure&gt;
&lt;/section&gt;</code></pre>
                  <p>Instruções CSS: defina <code>max-width</code> para figuras, borda sutil e <code>padding</code> interno; use <code>float</code> para alinhar imagens em linha se desejar e limpe os floats com um <code>clear</code> no container.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 8: Tabela de Horários</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: tabela com cabeçalho e corpo.</p>
                  <pre class="p-3"><code>&lt;table class="grade"&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Dia&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;Segunda&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
                  <p>Instruções CSS: estilize <code>th</code> com <code>background-color</code>, defina <code>padding</code> nas células, use <code>border-collapse:collapse</code> e bordas finas entre células.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 9: Incorporando Vídeo</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: iframe do YouTube com legenda.</p>
                  <pre class="p-3"><code>&lt;figure&gt;
  &lt;iframe src="..." title="video"&gt;&lt;/iframe&gt;
  &lt;figcaption&gt;Descrição do vídeo&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
                  <p>Instruções CSS: defina <code>max-width</code> para o iframe, use <code>height</code> proporcional, adicione borda e <code>box-shadow</code>. Use <code>object-fit:cover</code> quando aplicar em elementos substituíveis.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 10: Citação em Destaque</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: blockquote com autor.</p>
                  <pre class="p-3"><code>&lt;blockquote&gt;Texto da citação&lt;/blockquote&gt;
&lt;cite&gt;Autor&lt;/cite&gt;</code></pre>
                  <p>Instruções CSS: aplique <code>font-style:italic</code>, <code>border-left:4px solid #e80170</code>, <code>padding-left</code> e <code>margin</code> para destaque visual.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 11: Texto com Formatação</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: parágrafo com ênfases e destaques.</p>
                  <pre class="p-3"><code>&lt;p&gt;Texto com &lt;strong&gt;importância&lt;/strong&gt;, &lt;em&gt;ênfase&lt;/em&gt; e &lt;mark&gt;destaque&lt;/mark&gt;.&lt;/p&gt;</code></pre>
                  <p>Instruções CSS: defina estilos para <code>strong</code> (font-weight), <code>em</code> (font-style), <code>mark</code> (background-color), e ajuste <code>letter-spacing</code> e <code>line-height</code> para leitura.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 12: Lista de Definições</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: glossário usando <code>&lt;dl&gt;</code>.</p>
                  <pre class="p-3"><code>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Linguagem de marcação&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
                  <p>Instruções CSS: destaque <code>dt</code> com <code>font-weight:bold</code>, adicione <code>margin-left</code> em <code>dd</code> e use <code>background-color</code> sutil no par de definição.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 13: Página de Produto</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: foto do produto, título, descrição e preço.</p>
                  <pre class="p-3"><code>&lt;div class="produto"&gt;
  &lt;img src="produto.jpg" alt=""/&gt;
  &lt;h1&gt;Produto&lt;/h1&gt;
  &lt;p class="preco"&gt;R$ 99,90&lt;/p&gt;
&lt;/div&gt;</code></pre>
                  <p>Instruções CSS: defina <code>max-width</code>, destaque o preço com <code>color</code> e <code>font-weight</code>, use <code>border</code> e <code>padding</code> para separar visualmente.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 14: Lista de Cards</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: lista vertical de cards.</p>
                  <pre class="p-3"><code>&lt;ul class="cards"&gt;
  &lt;li class="card"&gt;
    &lt;h3&gt;Card&lt;/h3&gt;
    &lt;p&gt;Descrição&lt;/p&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                  <p>Instruções CSS: defina margem entre itens (<code>margin-bottom</code>), padding interno, borda e <code>background-color</code>. Para layout em colunas, use larguras e floats em vez de flex/grid.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 15: Navegação</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: cabeçalho com menu de navegação.</p>
                  <pre class="p-3"><code>&lt;header&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;</code></pre>
                  <p>Instruções CSS: estilize os itens de menu com <code>padding</code>, <code>border-radius</code> em links, altere <code>background-color</code> de itens ativos e use <code>text-transform:uppercase</code> se desejar.</p>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 16: Rodapé e Contato</h3>
                <div class="content mb-4">
                  <p>HTML a estilizar: rodapé com endereço e links de contato.</p>
                  <pre class="p-3"><code>&lt;footer&gt;
  &lt;address&gt;
    &lt;a href="mailto:email@exemplo.com"&gt;email@exemplo.com&lt;/a&gt;
  &lt;/address&gt;
&lt;/footer&gt;</code></pre>
                  <p>Instruções CSS: defina <code>background-color</code> escuro, cor do texto clara, padding generoso e <code>text-align:center</code>. Use <code>font-size</code> menor para informações secundárias.</p>
                </div>
              </div>
            </div>

          </div>
          `
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Semana 3",
      "subtitulo": "3/3 dias",
      "descricao": "Introdução ao Git, GitHub e controle de versão de código",
      "icone": "fa-code-branch",
      "dias": [
        {
          "id": 12,
          "titulo": "Introdução ao Git e GitHub",
          "subtitulo": "Aula 3.1",
          "descricao": "Explorando os conceitos fundamentais do controle de versão com Git, a distinção entre Git e GitHub, e como essas ferramentas transformam o trabalho colaborativo no desenvolvimento.",
          "icone": "fa-code-branch",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="o-problema">
              <h2 class="title is-4 section-title mb-5">1. O Problema: "trabalho_final_agora_vai.zip"</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Imagine que você está escrevendo um trabalho importante. Você salva várias versões: <code class="has-text-weight-bold">versao1.docx</code>, <code class="has-text-weight-bold">versao_revisada.docx</code>, <code class="has-text-weight-bold">versao_final.docx</code>, <code class="has-text-weight-bold">versao_final_final_mesmo.docx</code>. Fica
                  uma bagunça, e se você apagar algo importante por engano?
                </p>
                <p>
                  No mundo da programação, onde dezenas de pessoas podem trabalhar no mesmo projeto, esse caos seria
                  impossível de gerenciar. Precisamos de uma forma organizada de controlar as versões do nosso código.
                </p>
              </div>
            </div>

            <div class="mb-6" id="o-que-e-git">
              <h2 class="title is-4 section-title mb-5">2. O que é Git? Um "Save Game" para seu Código</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  <strong>Git é um sistema de controle de versão.</strong> Pense nele como um sistema de "checkpoints" ou
                  "save points" de um videogame. A qualquer momento, você pode salvar o estado atual do seu projeto e, se algo
                  der errado no futuro, você pode simplesmente voltar para um checkpoint anterior que estava funcionando.
                </p>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Repositório (Repo)</h3>
                    <p>A pasta do seu projeto que está sendo "vigiada" pelo Git.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">Commit</h3>
                    <p>Um "snapshot" ou uma foto do seu código em um ponto específico no tempo, com uma mensagem descrevendo o
                      que foi alterado.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="o-que-e-github">
              <h2 class="title is-4 section-title mb-5">3. O que é GitHub? A Rede Social do seu Código</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Se o Git é a ferramenta que você instala no seu computador, o <strong>GitHub é um serviço online que hospeda
                    seus repositórios Git.</strong> Pense nele como um "Google Drive" ou "Dropbox" para seus projetos de
                  código, mas com superpoderes.
                </p>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">☁️ Backup na Nuvem</h3>
                    <p>Seus projetos ficam salvos online, seguros contra perdas no seu computador.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">🤝 Colaboração</h3>
                    <p>É a principal plataforma para que equipes trabalhem juntas no mesmo projeto de forma organizada.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">📁 Portfólio</h3>
                    <p>Seu perfil no GitHub se torna um portfólio, onde você pode mostrar seus projetos para o mundo e para
                      recrutadores.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="diferenca">
              <h2 class="title is-4 section-title mb-5">4. Git vs. GitHub: A Diferença Crucial</h2>
              <div class="box box-dark">
                <div class="columns is-vcentered">
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-4">Git</h3>
                    <p>É a <span class="highlight-pink">ferramenta</span> que você instala e roda no seu
                      computador para versionar o código.</p>
                  </div>
                  <div class="column has-text-centered">
                    <h3 class="title is-4 mb-4">GitHub</h3>
                    <p>É o <span class="highlight-pink">serviço online</span> que hospeda seus projetos e
                      permite a colaboração.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao-git">
              <h2 class="title is-4 section-title mb-5">5. Conclusão</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo da Aula</h3>
                <div class="content">
                  <p class="mb-4">Aprender Git e GitHub não é opcional, é uma <strong>habilidade
                      fundamental</strong> para qualquer pessoa que queira trabalhar com desenvolvimento de software. Eles
                    garantem organização, segurança e, acima de tudo, a capacidade de colaborar em projetos de qualquer
                    tamanho.</p>
                  <p class="mt-4">Na próxima aula, vamos criar nossas contas e fazer nosso primeiro "commit"!</p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 13,
          "titulo": "Git na Linha de Comando",
          "subtitulo": "Aula 3.2",
          "descricao": "Aprendendo a usar Git na linha de comando, configurar SSH, clonar repositórios e dominar o fluxo diário de commits, pull e push para uma colaboração eficiente no desenvolvimento.",
          "icone": "fa-terminal",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="por-que-cli">
              <h2 class="title is-4 section-title mb-5">1. Por que usar a Linha de Comando?</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Interfaces gráficas são ótimas para começar, mas a linha de comando (CLI) é onde você ganha <span class="highlight-pink">velocidade, controle e poder</span>. É a ferramenta principal de trabalho de desenvolvedores experientes e a que te dá a compreensão mais profunda sobre o Git.
                </p>
              </div>
            </div>

            <div class="mb-6" id="configuracao-ssh">
              <h2 class="title is-4 section-title mb-5">2. Passo Zero: Configurando a Chave SSH</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Antes de interagir com o GitHub, você precisa de uma forma segura de se autenticar. A chave SSH funciona como uma "impressão digital" digital, permitindo que você se conecte sem precisar digitar seu usuário e senha toda vez. <strong>Isso só precisa ser feito uma vez por computador.</strong>
                </p>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Passo 1: Gerar a Chave</h3>
                <p class="mb-4">Abra seu terminal e rode o comando abaixo, substituindo pelo seu e-mail do GitHub.</p>
                <pre class="p-4"><code>ssh-keygen -t ed25519 -C "seu_email@exemplo.com"</code></pre>
              </div>
              <div class="box box-dark mt-5">
                <h3 class="title is-5 mb-4">Passo 2: Adicionar a Chave ao GitHub</h3>
                <p class="mb-4">O comando anterior cria uma chave pública. Você precisa copiar o conteúdo dessa chave e colá-lo nas configurações da sua conta no GitHub.</p>
                <ol class="mb-4">
                  <li>Copie sua chave pública (o conteúdo do arquivo <code class="has-text-weight-bold">id_ed25519.pub</code>).</li>
                  <li>No GitHub, vá em <code class="has-text-weight-bold">Settings</code> > <code class="has-text-weight-bold">SSH and GPG keys</code>.</li>
                  <li>Clique em <code class="has-text-weight-bold">New SSH key</code>, dê um título e cole sua chave.</li>
                </ol>
              </div>
            </div>

            <div class="mb-6" id="comecando-com-clone">
              <h2 class="title is-4 section-title mb-5">3. O Ponto de Partida: Clonando o Repositório</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Com a autenticação configurada, o fluxo mais comum é entrar em um projeto que já existe no GitHub. O primeiro passo é <strong>clonar</strong> (fazer uma cópia local) desse repositório.
                </p>
                <pre class="p-4"><code>git clone URL_SSH_DO_SEU_REPOSITORIO_NO_GITHUB</code></pre>
                <p class="mt-4">
                  <strong>Importante:</strong> Ao clonar, certifique-se de usar a URL SSH (que começa com <code class="has-text-weight-bold">git@github.com:...</code>), não a HTTPS.
                </p>
              </div>
            </div>

            <div class="mb-6" id="fluxo-de-trabalho">
              <h2 class="title is-4 section-title mb-5">4. O Fluxo de Trabalho no Dia a Dia</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Uma vez com o projeto na sua máquina, o ciclo de trabalho é constante. O objetivo é salvar suas alterações em pequenos "pacotes" com significado.
                </p>
              </div>
              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 1: Verificar o que mudou</h3>
                <p class="mb-4">Antes de mais nada, veja o estado atual do seu projeto.</p>
                <pre class="p-4"><code>git status</code></pre>
              </div>
              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 2: Preparar as alterações</h3>
                <p class="mb-4">Adicione os arquivos que você modificou para a "área de preparação" (staging area), sinalizando que eles estão prontos para o próximo commit.</p>
                <pre class="p-4"><code>git add .</code></pre>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Passo 3: Salvar as alterações (Commit)</h3>
                <p class="mb-4">Crie um "save point" com uma mensagem clara e descritiva sobre o que foi feito.</p>
                <pre class="p-4"><code>git commit -m "Adiciona a seção de contato ao rodapé"</code></pre>
              </div>
            </div>

            <div class="mb-6" id="sincronizando-remoto">
              <h2 class="title is-4 section-title mb-5">5. Sincronizando com o GitHub (Pull & Push)</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Trabalhar em equipe significa manter seu código local sincronizado com o repositório remoto no GitHub.
                </p>
              </div>
              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Pull: Trazendo atualizações</h3>
                <p class="mb-4"><strong>Antes de começar a trabalhar (e antes de dar um push)</strong>, sempre puxe as últimas alterações do repositório remoto. Isso evita conflitos.</p>
                <pre class="p-4"><code>git pull</code></pre>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Push: Enviando suas alterações</h3>
                <p class="mb-4">Depois de fazer seus commits locais, envie-os para o GitHub para que o resto da equipe possa vê-los.</p>
                <pre class="p-4"><code>git push</code></pre>
              </div>
            </div>

            <div class="mb-6" id="conclusao-cli">
              <h2 class="title is-4 section-title mb-5">6. Conclusão</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo do Fluxo Colaborativo</h3>
                <div class="content">
                  <ol class="mb-4">
                    <li><strong>Configuração (só na primeira vez por máquina):</strong> Gerar e adicionar a chave SSH.</li>
                    <li><code class="has-text-weight-bold">git clone</code>: Baixar o projeto (só na primeira vez).</li>
                    <li><code class="has-text-weight-bold">git pull</code>: Sincronizar com as novidades do remoto (sempre!).</li>
                    <li>... fazer suas alterações no código ...</li>
                    <li><code class="has-text-weight-bold">git status</code> / <code class="has-text-weight-bold">git add .</code> / <code class="has-text-weight-bold">git commit -m "..."</code>: Salvar seu trabalho localmente.</li>
                    </ol>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          "id": 14,
          "titulo": "Git no GitHub Desktop",
          "subtitulo": "Aula 3.3",
          "descricao": "Explorando o GitHub Desktop como alternativa visual ao Git na linha de comando, com visão geral do aplicativo e passo a passo para clonar repositórios, fazer commits e publicar alterações.",
          "icone": "fa-desktop",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="introducao-github-desktop">
              <h2 class="title is-4 section-title mb-5">1. O que é GitHub Desktop? Uma Interface Visual para o Git</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Se a linha de comando te deixa intimidado, o <strong>GitHub Desktop é a ponte perfeita</strong> entre o mundo visual e o poder do Git. É uma aplicação gratuita desenvolvida pelo próprio GitHub que transforma comandos complexos em cliques simples, mantendo toda a funcionalidade do Git.
                </p>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">🎨 Interface Intuitiva</h3>
                    <p>Visualize mudanças, histórico de commits e branches de forma clara e organizada.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">🔄 Sincronização Automática</h3>
                    <p>Push e pull acontecem com um clique, sem precisar decorar comandos.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4">📊 Visualização de Diffs</h3>
                    <p>Veja exatamente o que mudou em cada arquivo antes de commitar.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="instalacao">
              <h2 class="title is-4 section-title mb-5">2. Instalação e Primeiros Passos</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  O GitHub Desktop está disponível para Windows e macOS. Baixe gratuitamente no site oficial do GitHub.
                </p>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Passo 1: Download e Instalação</h3>
                <p class="mb-4">Acesse <code class="has-text-weight-bold">desktop.github.com</code> e baixe a versão para seu sistema operacional.</p>
              </div>
              <div class="box box-dark mt-5">
                <h3 class="title is-5 mb-4">Passo 2: Login com sua Conta GitHub</h3>
                <p class="mb-4">Ao abrir o app pela primeira vez, faça login com suas credenciais do GitHub. Isso conecta o Desktop ao seu perfil online.</p>
              </div>
            </div>

            <div class="mb-6" id="clonando-repositorio">
              <h2 class="title is-4 section-title mb-5">3. Clonando um Repositório</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Clonar significa baixar uma cópia completa de um repositório do GitHub para seu computador. É o primeiro passo para contribuir em projetos existentes.
                </p>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Como Clonar:</h3>
                <div class="content">
                  <ol class="mb-4">
                    <li>No GitHub Desktop, clique em <code class="has-text-weight-bold">File > Clone Repository</code>.</li>
                    <li>Escolha <code class="has-text-weight-bold">GitHub.com</code> na aba superior.</li>
                    <li>Procure pelo repositório desejado ou cole a URL.</li>
                    <li>Selecione a pasta local onde quer salvar o projeto.</li>
                    <li>Clique em <code class="has-text-weight-bold">Clone</code>.</li>
                  </ol>
                  <p class="mb-4">Pronto! O repositório agora está em seu computador e você pode começar a trabalhar.</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="fazendo-commits">
              <h2 class="title is-4 section-title mb-5">4. Fazendo Commits das Suas Alterações</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Um commit é como tirar uma foto do seu código. Ele salva todas as mudanças em um ponto específico no tempo, com uma mensagem explicando o que foi alterado.
                </p>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">O Processo de Commit:</h3>
                <div class="content">
                  <ol class="mb-4">
                    <li>Faça suas alterações nos arquivos do projeto.</li>
                    <li>No GitHub Desktop, você verá as mudanças na aba <code class="has-text-weight-bold">Changes</code>.</li>
                    <li>Selecione os arquivos que quer incluir no commit (ou marque todos).</li>
                    <li>Escreva uma mensagem de commit clara e descritiva na caixa de texto inferior.</li>
                    <li>Clique em <code class="has-text-weight-bold">Commit to [branch-name]</code>.</li>
                  </ol>
                  <div class="notification is-info is-light mt-4">
                    <strong>Dica:</strong> Mensagens de commit devem ser concisas mas informativas. Exemplos: "Adiciona validação de formulário" ou "Corrige bug no cálculo de total".
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="publicando-commits">
              <h2 class="title is-4 section-title mb-5">5. Publicando seus Commits (Push)</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Depois de commitar suas mudanças localmente, você precisa enviá-las para o GitHub para que outros colaboradores possam vê-las e para manter seu código seguro na nuvem.
                </p>
              </div>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Como Fazer Push:</h3>
                <div class="content">
                  <ol class="mb-4">
                    <li>Após fazer commits, clique no botão <code class="has-text-weight-bold">Push origin</code> no topo da janela.</li>
                    <li>O GitHub Desktop enviará suas mudanças para o repositório remoto.</li>
                    <li>Você verá uma confirmação quando o push for concluído com sucesso.</li>
                  </ol>
                  <p class="mb-4">Se houver conflitos (quando alguém alterou os mesmos arquivos), o GitHub Desktop te guiará na resolução.</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="fluxo-completo">
              <h2 class="title is-4 section-title mb-5">6. Fluxo Completo de Trabalho</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Resumo do Workflow no GitHub Desktop</h3>
                <div class="content">
                  <ol class="mb-4">
                    <li><strong>Clone:</strong> Baixe o repositório para seu computador.</li>
                    <li><strong>Trabalhe:</strong> Faça suas alterações nos arquivos.</li>
                    <li><strong>Commit:</strong> Salve suas mudanças localmente com uma mensagem descritiva.</li>
                    <li><strong>Push:</strong> Envie suas mudanças para o GitHub.</li>
                    <li><strong>Pull:</strong> Baixe mudanças de outros colaboradores antes de começar a trabalhar.</li>
                  </ol>
                  <p class="mt-4">O GitHub Desktop torna esse processo visual e intuitivo, permitindo que você se concentre no código em vez de comandos complexos.</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao-desktop">
              <h2 class="title is-4 section-title mb-5">7. Conclusão</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">GitHub Desktop: A Ponte para o Git</h3>
                <div class="content">
                  <p class="mb-4">O GitHub Desktop é uma excelente ferramenta para quem está começando com Git ou prefere uma interface visual. Ele oferece toda a potência do controle de versão sem a complexidade da linha de comando, facilitando a colaboração e o gerenciamento de projetos.</p>
                  <p class="mt-4">Lembre-se: tanto o GitHub Desktop quanto a linha de comando usam o mesmo Git por baixo dos panos. Você pode alternar entre eles conforme sua preferência ou necessidade.</p>
                </div>
              </div>
            </div>
          </div>
          `
        }
      ]
    },
    {
      "id": 4,
      "titulo": "Semana 4",
      "subtitulo": "1/1 dia",
      "descricao": "Mão na Massa com Projetos - Aplicando HTML e CSS na prática",
      "icone": "fa-hammer",
      "dias": [
        {
          "id": 15,
          "titulo": "Projetos Práticos",
          "subtitulo": "Aula 4.1",
          "descricao": "A quarta semana foi dedicada a projetos práticos, aplicando HTML e CSS para recriar interfaces de aplicações populares como Spotify, Netflix e outros, consolidando o aprendizado teórico.",
          "icone": "fa-hammer",
          "conteudo": `
          <div class="container">
            <div class="mb-6" id="introducao">
              <h2 class="title is-3 section-title mb-6">1. O Objetivo da Semana</h2>
              <div class="content is-size-5 mb-6">
                <p class="mb-6">
                  A quarta semana foi totalmente dedicada a colocar em prática os conhecimentos de HTML, CSS e Lógica de Programação. O objetivo era sair do campo teórico e enfrentar desafios reais de desenvolvimento, recriando interfaces de aplicações famosas.
                </p>
                <p>
                  Cada projeto foi uma oportunidade para consolidar o aprendizado, treinar a resolução de problemas e construir um portfólio inicial.
                </p>
              </div>
            </div>

            <div class="mb-6" id="projetos-entregues">
              <h2 class="title is-3 section-title mb-6">2. Projetos Entregues</h2>
              <div class="content is-size-5 mb-6">
                <p class="mb-6">
                  A turma demonstrou um talento incrível ao recriar interfaces complexas e populares. Todos os projetos foram entregues com sucesso no dia 15 de Outubro. Parabéns a todos!
                </p>
              </div>
              <div class="columns is-multiline is-mobile">
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 ">Clone do Spotify</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 ">Site de Notícias</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 ">Clone do Tinder 🥵</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 ">Login do Facebook</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 ">Site da Starbucks</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 ">Clone site da Tesla</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 ">Clone do Youtube</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 ">Clone da Netflix</h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao-semana">
              <h2 class="title is-3 section-title mb-6">3. Conclusão e Próximos Passos</h2>
              <div class="box box-dark border-left-pink p-6">
                <h4 class="title is-5  mb-3">Parabéns pela dedicação!</h4>
                <div class="content">
                  <p class="mb-4">Esta semana de projetos provou que vocês são capazes de transformar conceitos em produtos reais. Cada linha de código escrita foi um passo importante na jornada de vocês como desenvolvedores.</p>
                  <p class="mt-4"><strong>Agora, estamos prontos para avançar para tópicos ainda mais avançados, construindo sobre esta base sólida que vocês criaram.</strong></p>
                </div>
              </div>
            </div>
          </div>
          `
        }
      ]
    },
    {
      "id": 5,
      "titulo": "Semana 5",
      "subtitulo": "5/5 dias",
      "descricao": "Introdução à Lógica de Programação, Algoritmos e Portugol",
      "icone": "fa-brain",
      "dias": [
        {
          "id": 16,
          "titulo": "Lógica de Programação",
          "subtitulo": "Aula 5.1",
          "descricao": "Introduz lógica de programação: algoritmos, variáveis, operadores e condicionais. Praticamos Portugol e traduzimos soluções para JavaScript.",
          "icone": "fa-brain",
          "conteudo": `
  <div class="container">
    <section id="aula-5-1">
      <div class="content is-size-5">
        <div id="o-que-e-logica" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. O que é Lógica de Programação?</h3>
          <p class="mb-5">Lógica de programação é a <strong><span class="highlight-pink">habilidade de organizar um pensamento de forma sequencial e coerente</span></strong> para resolver um problema. É como criar uma receita de bolo para o computador: uma lista de passos claros e sem ambiguidade que ele deve seguir para chegar a um resultado.</p>
          <p class="mb-5">Antes de escrever qualquer código, você precisa primeiro pensar na lógica por trás da solução.</p>
        </div>

        <div id="algoritmos" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Algoritmos: A Receita do Bolo</h3>
          <p class="mb-5">Um <strong>algoritmo</strong> é exatamente essa sequência de passos. Trocar uma lâmpada, somar dois números, fazer café... tudo isso pode ser descrito como um algoritmo. O objetivo é pegar um problema complexo e quebrá-lo em passos pequenos e gerenciáveis.</p>

          <div class="box box-dark p-4 mb-4">
            <h4 class="title is-5 mb-2">Exemplo: Algoritmo para somar dois números</h4>
            <ol>
              <li>Receba o primeiro número.</li>
              <li>Receba o segundo número.</li>
              <li>Some os dois números.</li>
              <li>Mostre o resultado.</li>
            </ol>
          </div>
        </div>

        <div id="variaveis" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Variáveis: As "Caixas" para Guardar Informações</h3>
          <p class="mb-5">Para que o computador execute os passos, ele precisa de um lugar para guardar as informações com as quais está trabalhando. <strong>Variáveis</strong> são como caixas com etiquetas: elas têm um nome e guardam um valor dentro.</p>

          <div class="columns">
            <div class="column">
              <div class="box box-dark p-4">
                <h4 class="title is-5 mb-2">Texto (String)</h4>
                <p>Para guardar palavras e frases. Ex: <code class="inline">nome = "Maria"</code></p>
              </div>
            </div>
            <div class="column">
              <div class="box box-dark p-4">
                <h4 class="title is-5 mb-2">Número (Integer/Float)</h4>
                <p>Para guardar números inteiros ou com casas decimais. Ex: <code class="inline">idade = 30</code></p>
              </div>
            </div>
            <div class="column">
              <div class="box box-dark p-4">
                <h4 class="title is-5 mb-2">Lógico (Boolean)</h4>
                <p>Para guardar apenas dois valores: <code class="inline">Verdadeiro</code> ou <code class="inline">Falso</code>.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="operadores" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Operadores: As Ferramentas de Ação</h3>
          <p class="mb-5">Operadores são os símbolos que usamos para realizar ações com nossas variáveis, como cálculos matemáticos ou comparações.</p>

          <div class="columns">
            <div class="column">
              <div class="box box-dark p-4">
                <h4 class="title is-5 mb-2">Aritméticos</h4>
                <p>Soma (<code class="inline">+</code>), Subtração (<code class="inline">-</code>), Multiplicação (<code class="inline">*</code>), Divisão (<code class="inline">/</code>).</p>
              </div>
            </div>
            <div class="column">
              <div class="box box-dark p-4">
                <h4 class="title is-5 mb-2">Relacionais</h4>
                <p>Maior que (<code class="inline">&gt;</code>), Menor que (<code class="inline">&lt;</code>), Igual a (<code class="inline">==</code>), Diferente de (<code class="inline">!=</code>).</p>
              </div>
            </div>
          </div>
        </div>

        <div id="condicionais" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. Condicionais: Tomando Decisões</h3>
          <p class="mb-5">Nem sempre um algoritmo segue uma linha reta. Às vezes, o computador precisa tomar uma decisão com base em uma condição. Para isso, usamos o <strong>SE / SENÃO</strong> (<code class="inline">if / else</code>).</p>

          <pre class="p-4"><code>SE (idade &gt;= 18) ENTAO
  escreva("Você é maior de idade.")
SENAO
  escreva("Você é menor de idade.")
FIMSE
</code></pre>
        </div>

        <div id="portugol-js" class="mb-6">
          <h3 class="title is-4 section-title mb-4">6. Portugol e JavaScript</h3>
          <p class="mb-5">Para treinar nossa mente, vamos primeiro escrever nossos algoritmos em <strong><span class="highlight-pink">Portugol</span></strong>, uma "linguagem" que se parece com o português e foca apenas na lógica. Depois que a lógica estiver correta, vamos "traduzir" para o <strong><span class="highlight-pink">JavaScript</span></strong>, uma linguagem de programação real que os navegadores entendem.</p>
        </div>

      </div>
    </section>
  </div>
`
        },
        {
          "id": 17,
          "titulo": "Exercícios: Praticando a Lógica 5.1",
          "subtitulo": "Aula 5.1",
          "descricao": "Exercícios práticos para fixar lógica: Olá Mundo, operações, médias, condições e estruturas de decisão; resolva em Portugol e JavaScript usando lógica de programação.",
          "icone": "fa-brain",
          "conteudo": `
  <div class="container">
    <section id="exercicios">
      <h2 class="title is-3 lesson-title mb-5">Exercícios: Praticando a Lógica</h2>
      <p class="content is-size-5 has-text-centered mb-5">Para cada problema, pense primeiro na solução em <strong>Portugol</strong> (a sequência de passos) e depois tente "traduzir" para <strong>JavaScript</strong>.</p>

      <div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">1. Olá, Mundo!</h3>
          <p>Crie um algoritmo que simplesmente mostre a mensagem "Olá, Mundo!" na tela.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">2. Nome e Sobrenome</h3>
          <p>Crie um algoritmo que peça o nome e o sobrenome do usuário e, em seguida, mostre o nome completo.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">3. Soma de Dois Números</h3>
          <p>Crie um algoritmo que solicite dois números ao usuário e mostre a soma deles.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">4. Calculadora de Média</h3>
          <p>Crie um algoritmo que peça 3 notas de um aluno e calcule a média. Mostre a média no final.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">5. Sucessor e Antecessor</h3>
          <p>Crie um algoritmo que peça um número e mostre na tela o seu antecessor e o seu sucessor.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">6. Aumento Salarial</h3>
          <p>Crie um algoritmo que leia o salário de um funcionário e mostre seu novo salário com 15% de aumento.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">7. Conversor de Moedas</h3>
          <p>Crie um algoritmo que leia um valor em Reais e converta para Dólares. Considere a cotação do Dólar como R$ 5,00.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">8. Par ou Ímpar?</h3>
          <p>Crie um algoritmo que leia um número e diga se ele é par ou ímpar. (Dica: use o operador de resto de divisão %).</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">9. Maior de Idade</h3>
          <p>Crie um algoritmo que leia a idade de uma pessoa e diga se ela é maior de idade (18 anos ou mais) ou não.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">10. Qual é maior?</h3>
          <p>Crie um algoritmo que leia dois números e informe qual deles é o maior.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">11. Aprovado ou Reprovado?</h3>
          <p>Crie um algoritmo que calcule a média de duas notas e informe se o aluno foi aprovado (média &gt;= 7) ou reprovado.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">12. Positivo, Negativo ou Zero?</h3>
          <p>Crie um algoritmo que leia um número e informe se ele é positivo, negativo ou zero.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">13. Categoria de Nadador</h3>
          <p>Crie um algoritmo que leia a idade de um nadador e o classifique em uma das seguintes categorias: Infantil A (5-7 anos), Infantil B (8-11 anos), Juvenil A (12-13 anos), Juvenil B (14-17 anos) ou Adulto (maiores de 18 anos).</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">14. Login Simples</h3>
          <p>Crie um algoritmo que peça um nome de usuário e uma senha. Se o usuário for "admin" e a senha for "1234", mostre "Login efetuado com sucesso". Caso contrário, mostre "Falha na autenticação".</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">15. Calculadora de IMC</h3>
          <p>Crie um algoritmo para calcular o IMC (Índice de Massa Corporal) de uma pessoa. Peça o peso (em kg) e a altura (em metros). A fórmula é: IMC = peso / (altura * altura). Mostre o resultado.</p>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 18,
          titulo: "Revisão e Exercícios de Lógica — Parte 2",
          subtitulo: "Aula 5.2",
          descricao: "Revisão prática de lógica: condicionais, conversões, cálculos e validações; escrevemos algoritmos em Portugol para estruturar soluções passo a passo.",
          icone: "fa-brain",
          conteudo: `
          <div class="container">
            <section id="aula-5-2">
              <div class="content is-size-5">
                <p class="mb-5">Nesta aula revisamos e ampliamos exercícios práticos que envolvem condicionais, conversões, cálculos e validações. A ideia é primeiro estruturar a solução em Portugol e validar a lógica passo a passo.</p>

                <div class="box box-dark p-4 mb-4">
                  <h3 class="title is-5 mb-3">Objetivos</h3>
                  <ul>
                    <li>Praticar lógica com exemplos reais.</li>
                    <li>Entender condições e tratamentos de casos.</li>
                    <li>Validar entradas e formatar saídas.</li>
                  </ul>
                </div>

                <div class="box box-dark p-4">
                  <h3 class="title is-5 mb-3">Metodologia</h3>
                  <p>Para cada problema, escreva primeiro o algoritmo em Portugol e valide usando os exemplos de entrada e saída.</p>
                </div>
              </div>
            </section>
          </div>
        `
        },
        {
          id: 19,
          titulo: "Exercícios: Praticando a Lógica 5.2",
          subtitulo: "Aula 5.2",
          descricao: "Conjunto de exercícios avançados para praticar lógica usando Portugol: descontos, conversões, decisões, IMC, empréstimos e classificações passo a passo.",
          icone: "fa-brain",
          conteudo: `
        <div class="container">
          <section id="exercicios-5-2">
            <p class="content is-size-5 has-text-centered mb-5">Use os exemplos de entrada e saída para validar a lógica dos seus algoritmos.</p>

            <div>
              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">16. Calculadora de Desconto</h3>
                <p>Peça o preço de um produto e a porcentagem de desconto. Calcule e mostre o valor do desconto e o preço final.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Preço R$ 100, Desconto 20%</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong></p>
                    <p>Valor do desconto: R$ 20.0</p>
                    <p>Preço final: R$ 80.0</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">17. Conversor de Temperatura</h3>
                <p>Peça uma temperatura em Celsius e converta para Fahrenheit. A fórmula é: F = C * 1.8 + 32.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> 25°C</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> A temperatura em Fahrenheit é: 77°F</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">18. Aluguel de Carro</h3>
                <p>Calcule o preço a pagar pelo aluguel de um carro. Peça a quantidade de dias e a quantidade de Km rodados. Preço: R$60/dia e R$0,15/Km.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> 10 dias, 500 Km</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> O preço total a pagar é: R$ 675.0</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">19. Situação de Votação</h3>
                <p>Leia a idade de uma pessoa e informe se ela é "Não votante" (abaixo de 16), "Voto opcional" (entre 16 e 17) ou "Voto obrigatório" (entre 18 e 70).</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Idade 17</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> Situação: Voto opcional.</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">20. IMC com Classificação</h3>
                <p>Calcule o IMC e adicione a classificação: Abaixo de 18.5 (Abaixo do peso), entre 18.5 e 24.9 (Peso normal), entre 25 e 29.9 (Sobrepeso), 30 ou mais (Obesidade).</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Peso 70kg, Altura 1.75m</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong></p>
                    <p>Seu IMC é: 22.85...</p>
                    <p>Classificação: Peso normal.</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">21. Formas de Pagamento</h3>
                <p>Leia o preço de um produto e informe o valor final conforme a condição de pagamento: À vista (10% de desconto), 2x no cartão (preço normal), 3x ou mais (20% de juros).</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Preço R$ 1000, Opção 3</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> Valor final: R$ 1200.0</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">22. É um Triângulo?</h3>
                <p>Peça 3 comprimentos de retas e diga se elas podem ou não formar um triângulo. (Condição: a soma de dois lados deve ser sempre maior que o terceiro lado).</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Lados 7, 10, 5</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> As retas PODEM formar um triângulo.</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">23. Maior de Três</h3>
                <p>Leia três números e mostre qual é o maior deles.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Números 25, 12, 30</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> O maior número é: 30</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">24. Ordem Crescente</h3>
                <p>Leia dois números diferentes e os mostre em ordem crescente.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Números 50, 25</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> Ordem crescente: 25, 50</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">25. Ano Bissexto</h3>
                <p>Peça um ano e determine se ele é bissexto ou não. (Divisível por 4, mas não por 100, a menos que também seja por 400).</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Ano 2024</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> O ano 2024 é bissexto.</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">26. Alistamento Militar</h3>
                <p>Peça o ano de nascimento de um jovem e informe sua situação de alistamento. Considere o ano atual como 2025.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Ano de nascimento 2010</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong></p>
                    <p>Você tem 15 anos em 2025.</p>
                    <p>Ainda vai se alistar. Faltam 3 anos.</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">27. Média com Status</h3>
                <p>Peça duas notas, calcule a média e mostre o status: Reprovado (&lt; 5.0), Recuperação (>= 5.0 e &lt; 7.0) ou Aprovado (>= 7.0).</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Notas 6.0, 8.0</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong></p>
                    <p>Sua média é: 7.0</p>
                    <p>Status: APROVADO</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">28. Pedra, Papel e Tesoura</h3>
                <p>Peça a jogada de dois jogadores (1-Pedra, 2-Papel, 3-Tesoura) e determine o vencedor.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Jogador 1: 2, Jogador 2: 1</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> Jogador 1 VENCEU!</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">29. Preço da Passagem</h3>
                <p>Calcule o preço da passagem de ônibus. Peça a distância em Km. Até 200Km, custa R$0,50/Km. Acima disso, R$0,45/Km.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Distância 300 Km</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong> O preço da passagem é: R$ 135.0</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-4">
                <h3 class="title is-5 mb-3">30. Empréstimo Bancário</h3>
                <p>Peça o valor da casa, o salário do comprador e em quantos anos ele vai pagar. A prestação mensal não pode exceder 30% do salário. Informe se o empréstimo foi aprovado ou negado.</p>
                <div class="mt-4 pt-4">
                  <h4 class="is-6 has-text-grey mb-2">Exemplo de Entrada e Saída:</h4>
                  <div class="box">
                    <p><strong><span class="has-text-info">Entrada:</span></strong> Valor da casa R$ 180000, Salário R$ 2000, Anos 30</p>
                    <p class="mt-2"><strong><span class="has-text-warning">Saída Esperada:</span></strong></p>
                    <p>A prestação mensal será de: R$ 500.0</p>
                    <p>Empréstimo APROVADO!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      `
        },
        {
          id: 20,
          titulo: "Estruturas de Dados e Laços de Repetição",
          subtitulo: "Aula 5.3",
          descricao: "Exploramos vetores, registros e laços de repetição em Portugol, praticando algoritmos para manipular coleções e automatizar tarefas.",
          icone: "fa-brain",
          conteudo: `
            <div class="container">
              <section id="aula-12">
                <div class="content is-size-5">
                  <div id="introducao" class="mb-6">
                    <h3 class="title is-4 section-title mb-4">1. Por que Precisamos de Mais que Variáveis Simples?</h3>
                    <p class="mb-5">Estruturas de dados como <strong class="highlight-pink">vetores</strong> e <strong class="highlight-pink">registros</strong> nos permitem organizar e agrupar informações de forma lógica e eficiente, mas como manipulamos essas coleções de dados sem repetir código várias vezes?</p>
                  </div>
                  <div id="vetores" class="mb-6">
                    <h3 class="title is-4 section-title mb-4">2. Vetores (Arrays): Coleções Ordenadas</h3>
                    <p class="mb-5">Um <strong>vetor</strong> é como um armário com várias gavetas numeradas (índices), que nos permite armazenar uma coleção de valores do mesmo tipo.</p>
                    <pre class="p-4"><code>// Declara um vetor de 5 posições para guardar números inteiros\ninteiro notas[5]\nnotas[0] = 10\n// ...</code></pre>
                  </div>
                  <div id="lacos" class="mb-6">
                    <h3 class="title is-4 section-title mb-4">3. Laços de Repetição: Automatizando Tarefas</h3>
                    <p class="mb-5">Para trabalhar com vetores e outras tarefas repetitivas, usamos os <strong>laços de repetição</strong> (ou loops). Eles executam o mesmo bloco de código várias vezes.</p>
                    <h4 class="title is-5 mb-2">PARA (for): Quando você sabe o número de repetições</h4>
                    <p class="mb-4">O laço <code class="inline">para</code> é perfeito para percorrer vetores, pois sabemos exatamente o tamanho deles.</p>
                    <pre class="p-4"><code>// Mostra todas as 5 notas do vetor\npara (inteiro i = 0; i < 5; i++) {\n  escreva("Nota na posição ", i, ": ", notas[i])\n}</code></pre>
                    <h4 class="title is-5 mb-2">ENQUANTO (while): Quando a condição de parada é variável</h4>
                    <p class="mb-4">O laço <code class="inline">enquanto</code> repete um bloco de código <strong>enquanto</strong> uma condição for verdadeira.</p>
                    <pre class="p-4"><code>inteiro contador = 10\nenquanto (contador >= 0) {\n  escreva(contador, "...")\n  contador = contador - 1\n}\n// Saída: 10... 9... 8... etc.</code></pre>
                  </div>
                  <div id="registros" class="mb-6">
                    <h3 class="title is-4 section-title mb-4">4. Registros (Objetos): Agrupando Dados Diferentes</h3>
                    <p class="mb-5">Um <strong>registro</strong> é como uma ficha de cadastro, agrupando valores de tipos diferentes sobre uma mesma entidade.</p>
                    <pre class="p-4"><code>registro Produto {\n  cadeia nome\n  real preco\n}\nProduto meuProduto\nmeuProduto.nome = "Teclado"</code></pre>
                  </div>
                  <div id="combinando" class="mb-6">
                    <h3 class="title is-4 section-title mb-4">5. O Poder da Combinação: Percorrendo Vetores de Registros</h3>
                    <p class="mb-5">Com os laços de repetição, agora podemos facilmente manipular um catálogo de produtos para, por exemplo, mostrar o nome de todos os itens.</p>
                    <pre class="p-4"><code>// Usando um vetor de Produtos\nProduto catalogo[3]\n// (preencha o catálogo com 3 produtos)\npara (inteiro i = 0; i < 3; i++) {\n  escreva("Produto: ", catalogo[i].nome, " - Preço: R$ ", catalogo[i].preco)\n}</code></pre>
                  </div>
                </div>
              </section>
            </div>
          `
        },
        {
          id: 21,
          titulo: "Exercícios: Praticando a Lógica 5.3",
          subtitulo: "Aula 5.3",
          descricao: "Conjunto de exercícios práticos sobre vetores e laços: preencher, somar, filtrar pares, buscar valores e inverter vetores usando Portugol.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="exercicios-5-3">
      <p class="content is-size-5 has-text-centered mb-5">Use os exemplos de entrada e saída para validar seus algoritmos em Portugol.</p>
      <div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">1. Preencher e Exibir</h3>
          <p>Crie um vetor de 5 posições. Use um laço <code class="inline">para</code> para pedir ao usuário que digite um número para cada posição. Ao final, exiba todos os números.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">2. Soma dos Elementos</h3>
          <p>Crie um vetor de 6 números inteiros. Preencha-o e, usando um laço, calcule a soma de todos os seus elementos. Mostre o resultado final.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">3. Apenas os Pares</h3>
          <p>Crie um vetor de 8 posições. Peça para o usuário preenchê-lo. Use um laço para percorrer o vetor e mostrar apenas os números pares.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">4. Encontrando o Maior Valor</h3>
          <p>Crie um vetor de 7 números. Use um laço para encontrar o maior número dentro do vetor e mostre-o no final.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">5. Média da Turma</h3>
          <p>Crie um vetor para armazenar a nota de 5 alunos. Use um laço para pedir as 5 notas. Ao final, calcule e mostre a média da turma.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">6. Contando Ímpares</h3>
          <p>Crie um vetor com 10 números. Use um laço para contar quantos números ímpares existem no vetor e mostre essa contagem.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">7. Procurando um Número</h3>
          <p>Crie um vetor de 10 posições. Peça ao usuário um número para buscar. Use um laço para verificar se o número está no vetor.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">8. Nomes com a Letra 'A'</h3>
          <p>Crie um vetor com 5 nomes. Use um laço para mostrar apenas os nomes que começam com a letra 'A'.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">9. Vetor Invertido</h3>
          <p>Crie um vetor com 6 números. Use um laço <code class="inline">para</code> que comece do final do vetor e vá até o início, mostrando os números em ordem inversa.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">10. Alunos Aprovados</h3>
          <p>Crie um vetor para as notas de 8 alunos. Use um laço para contar e mostrar quantos alunos foram aprovados (nota &gt;= 7.0).</p>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 22,
          titulo: "O Laço enquanto (while)",
          subtitulo: "Aula 5.4",
          descricao: "Aprenda o laço 'enquanto' (while), suas diferenças para o 'para', uso em menus, e o perigo dos loops infinitos em Portugol.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-13">
      <div class="content is-size-5">
        <div id="introducao-while" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. Repetindo sem Saber o Fim</h3>
          <p class="mb-5">O laço <code class="inline">para</code> é ótimo quando sabemos quantas vezes repetir. Mas se precisamos repetir até o <strong class="">usuário decidir parar</strong>?</p>
          <p>O laço <strong class="has-text-pink">enquanto</strong> executa um bloco de código repetidamente <strong class="has-text-pink">enquanto uma condição for verdadeira</strong>.</p>
        </div>
        <div id="sintaxe-while" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Sintaxe do <code class="inline">enquanto</code></h3>
          <p class="mb-5">A estrutura é simples: testa a condição, executa o bloco, testa novamente. Só para quando a condição fica falsa.</p>
          <pre class="p-4"><code>// Variável de controle fora do laço
inteiro contador = 0

enquanto (contador < 5) {
  escreva("O valor do contador é: ", contador)
  contador = contador + 1
}
// Saída:
// O valor do contador é: 0
// O valor do contador é: 1
// ... até 4
</code></pre>
        </div>
        <div id="para-vs-enquanto" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. <code class="inline">para</code> vs. <code class="inline">enquanto</code></h3>
          <div class="columns">
            <div class="column box">
              <h4 class="title is-5 mb-2">Use <code class="inline">para</code></h4>
              <ul>
                <li>Percorrer vetor de tamanho fixo</li>
                <li>Executar algo exatamente 10 vezes</li>
                <li>Contagem regressiva</li>
              </ul>
            </div>
            <div class="column box">
              <h4 class="title is-5 mb-2">Use <code class="inline">enquanto</code></h4>
              <ul>
                <li>Esperar usuário digitar "sair"</li>
                <li>Validar senha</li>
                <li>Menu de opções ativo</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="switch-case" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Menus com <code class="inline">escolha caso</code></h3>
          <p>Para menus, usamos <strong class="has-text-pink">escolha caso</strong> para avaliar uma variável e executar o bloco correspondente.</p>
          <pre class="p-4"><code>inteiro opcao
escreva("Escolha uma opção (1 ou 2): ")
leia(opcao)
escolha (opcao) {
  caso 1:
    escreva("Você escolheu a opção 1.")
    pare
  caso 2:
    escreva("Você escolheu a opção 2.")
    pare
  caso contrario:
    escreva("Opção inválida!")
}
</code></pre>
        </div>
        <div id="loop-infinito" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. O Perigo do Loop Infinito</h3>
          <p>Se a condição nunca fica falsa, o programa repete para sempre. Isso é um <strong class="has-text-pink">loop infinito</strong> e trava o programa.</p>
          <pre class="p-4"><code>// Exemplo de loop infinito
inteiro contador = 0

enquanto (contador < 5) {
  escreva("Isso vai repetir para sempre!")
  // Esquecemos de incrementar o contador
}
</code></pre>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 23,
          titulo: "Exercícios: Praticando a Lógica 5.2",
          subtitulo: "Aula 5.4",
          descricao: "Exercícios práticos com o laço 'enquanto': contagem, validação, somas, fatorial, Fibonacci e manipulação de vetores em Portugol.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="exercicios-5-4">
      <div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">1. Contagem Crescente</h3>
          <p>Use um laço <code class="inline">enquanto</code> para mostrar os números de 1 a 10.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">2. Peça um Número Positivo</h3>
          <p>Peça ao usuário para digitar um número. Continue pedindo até que ele digite um número maior que 0.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">3. Adivinhe o Número</h3>
          <p>Crie um "jogo" onde o número secreto é 42. Continue pedindo até que o usuário acerte.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">4. Somador com 'flag'</h3>
          <p>Peça para o usuário digitar números para somar. O programa para quando digitar -1.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">5. Validação de Resposta</h3>
          <p>Pergunte: "Você gosta de programação? (s/n)". Continue até que a resposta seja 's' ou 'n'.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">6. Potência sem usar operador direto</h3>
          <p>Peça uma base e um expoente. Calcule a potência usando um laço <code class="inline">enquanto</code>.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">7. Contagem de Pares</h3>
          <p>Mostre todos os números pares de 0 até 20.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">8. Média da Turma (com 'flag')</h3>
          <p>Peça as notas de vários alunos. Pare quando uma nota negativa for digitada. Calcule e mostre a média.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">9. Fatorial de um Número</h3>
          <p>Peça um número e calcule seu fatorial.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">10. Sequência de Fibonacci</h3>
          <p>Peça um número N e mostre os N primeiros termos da sequência de Fibonacci.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">11. Divisão por Subtrações Sucessivas</h3>
          <p>Peça dois números e calcule a divisão inteira usando apenas subtrações.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">12. Maior e Menor (com 'flag')</h3>
          <p>Peça vários números. Pare quando digitar 0. Mostre o maior e o menor número digitado.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">13. Simulando um Saque</h3>
          <p>Comece com saldo de R$500. Peça valores de saque até que seja menor ou igual ao saldo.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">14. Preenchendo Vetor com 'while'</h3>
          <p>Crie um vetor de 5 posições. Use um laço <code class="inline">enquanto</code> para pedir os 5 números.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">15. Cadastro na Lista</h3>
          <p>Crie um vetor de nomes. Permita digitar nomes até que o usuário digite "fim".</p>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 24,
          titulo: "Desfafio: Mini Calculadora Interativa",
          subtitulo: "Desafio",
          descricao: "Desafio final: implemente uma calculadora com menu interativo usando laço 'enquanto' e Portugol.",
          icone: "fa-calculator",
          conteudo: `
  <div class="container">
    <section id="desafio-calculadora">
      <div class="box box-dark mb-5">
        <h3 class="title is-5 mb-3">Enunciado do Desafio</h3>
        <p>Crie um programa que funcione como uma mini calculadora. Ele deve mostrar um menu de opções para o usuário e continuar funcionando até que o usuário escolha sair.</p>
        <p>Use um laço <code class="inline">enquanto</code> para manter o menu ativo.</p>
        <p class="has-text-weight-bold mt-4">O menu deve ter as opções:</p>
        <ul>
          <li>1 - Somar dois números</li>
          <li>2 - Verificar se um número é Par ou Ímpar</li>
          <li>3 - Mostrar a Tabuada de um número</li>
          <li>4 - Mostrar uma mensagem 10 vezes</li>
          <li>5 - Sair</li>
        </ul>
        <p class="mt-4">Se o usuário digitar uma opção inválida, o programa deve mostrar "Opção inválida!" e exibir o menu novamente.</p>
      </div>
      <div class="box box-dark">
        <h3 class="title is-5 mb-3">Exemplo de Funcionamento</h3>
        <pre class="example-box p-4"><code>--- MENU ---
1 - Somar
2 - Par ou Ímpar
3 - Tabuada
4 - Mensagem 10x
5 - Sair
Escolha uma opção: 1

Digite o primeiro número: 10
Digite o segundo número: 5
A soma é: 15

--- MENU ---
1 - Somar
2 - Par ou Ímpar
3 - Tabuada
4 - Mensagem 10x
5 - Sair
Escolha uma opção: 3

Digite um número para ver a tabuada: 7
7 x 1 = 7
7 x 2 = 14
... (até 10)

--- MENU ---
1 - Somar
2 - Par ou Ímpar
3 - Tabuada
4 - Mensagem 10x
5 - Sair
Escolha uma opção: 5

Encerrando o programa...
</code></pre>
      </div>
    </section>
  </div>
`
        },
        {
          id: 25,
          titulo: "Funções: Criando Nossas Ferramentas",
          subtitulo: "Aula 5.5",
          descricao: "Funções em Portugol: como criar, usar parâmetros, retornar valores e evitar repetição de código.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-14">
      <div class="content is-size-5">
        <div id="o-problema-repeticao" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. O Problema: Código Repetido</h3>
          <p class="mb-5">Calcular a média de notas em vários lugares gera repetição, mais trabalho, mais erros e dificulta manutenção.</p>
          <ul>
            <li>Dá mais trabalho.</li>
            <li>Aumenta a chance de erros.</li>
            <li>Dificulta a manutenção.</li>
          </ul>
        </div>
        <div id="o-que-e-funcao" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. O que é uma Função?</h3>
          <p class="mb-5">Uma <strong class="has-text-pink">função</strong> é um bloco de código reutilizável, como uma "máquina" que você constrói uma vez e usa sempre que quiser.</p>
          <p>Funções ajudam a seguir o princípio <strong class="">DRY (Don't Repeat Yourself)</strong>.</p>
        </div>
        <div id="funcao-simples" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Criando uma Função Simples</h3>
          <p class="mb-5">Função básica: executa uma ação, sem receber ou devolver informações.</p>
          <pre class="p-4"><code>// Definindo a função
funcao mostrarMenu() {
  escreva("--- MENU ---\n")
  escreva("1 - Jogar\n")
  escreva("2 - Sair\n")
}

funcao inicio() {
  mostrarMenu()
}
</code></pre>
        </div>
        <div id="parametros" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Parâmetros: Os "Ingredientes" da Função</h3>
          <p class="mb-5">Parâmetros são variáveis que a função recebe para executar sua tarefa.</p>
          <pre class="p-4"><code>// Função recebe um 'nome' como parâmetro
funcao saudar(cadeia nome) {
  escreva("Olá, ", nome, "! Bem-vindo(a).")
}

funcao inicio() {
  saudar("Vitor")
  saudar("Maria")
}
</code></pre>
        </div>
        <div id="retorno" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. Retorno: O "Produto Final" da Função</h3>
          <p class="mb-5">Funções podem calcular um valor e <strong class="has-text-pink">retornar</strong> para quem chamou. Defina o tipo de dado e use <code class="inline">retorne</code>.</p>
          <pre class="p-4"><code>// Função recebe dois inteiros e retorna um inteiro
funcao inteiro somar(inteiro n1, inteiro n2) {
  inteiro resultado = n1 + n2
  retorne resultado
}

funcao inicio() {
  inteiro somaTotal = somar(10, 5)
  escreva("O resultado da soma é: ", somaTotal)
}
</code></pre>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 26,
          titulo: "Exercícios: Praticando a Lógica 5.5",
          subtitulo: "Aula 5.5",
          descricao: "Exercícios práticos com funções: parâmetros, retorno, vetores, tabuada, calculadora e refatoração em Portugol.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="exercicios-5-5">
      <div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">1. Mensagem de Boas-Vindas</h3>
          <p>Crie uma função chamada <code class="inline">mostrarBoasVindas</code> que não recebe parâmetros e mostra "Bem-vindo ao nosso programa!".</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">2. Saudação Personalizada</h3>
          <p>Crie uma função <code class="inline">saudarUsuario</code> que recebe um <code class="inline">nome</code> e mostra "Olá, [nome]! Tenha um bom dia!".</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">3. Dobro de um Número</h3>
          <p>Crie uma função <code class="inline">calcularDobro</code> que recebe um inteiro e retorna o dobro.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">4. Média de Três Números</h3>
          <p>Crie uma função <code class="inline">calcularMedia</code> que recebe três notas e retorna a média.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">5. Verificador de Par ou Ímpar</h3>
          <p>Crie uma função <code class="inline">verificarParidade</code> que recebe um inteiro e mostra se é "Par" ou "Ímpar".</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">6. Maior de Dois Números</h3>
          <p>Crie uma função <code class="inline">encontrarMaior</code> que recebe dois inteiros e retorna o maior.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">7. Tabuada com Função</h3>
          <p>Crie uma função <code class="inline">mostrarTabuada</code> que recebe um inteiro e mostra a tabuada de 1 a 10.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">8. Contagem Regressiva com Função</h3>
          <p>Crie uma função <code class="inline">contagemRegressiva</code> que recebe um inteiro inicial e faz contagem regressiva até 0.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">9. Somar Elementos de um Vetor</h3>
          <p>Crie uma função <code class="inline">somarVetor</code> que recebe um vetor de inteiros e retorna a soma dos elementos.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">10. Encontrar o Menor Valor em um Vetor</h3>
          <p>Crie uma função <code class="inline">encontrarMenor</code> que recebe um vetor e retorna o menor valor.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">11. Contar Pares em um Vetor</h3>
          <p>Crie uma função <code class="inline">contarPares</code> que recebe um vetor de inteiros e retorna a quantidade de pares.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">12. Situação do Aluno</h3>
          <p>Crie uma função <code class="inline">verificarAprovacao</code> que recebe uma média e retorna "Aprovado" ou "Reprovado".</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">13. Calculadora Simples</h3>
          <p>Crie uma função <code class="inline">calculadora</code> que recebe dois números e uma operação (<code class="inline">+ - * /</code>) e retorna o resultado.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">14. Limpador de Tela</h3>
          <p>Crie uma função <code class="inline">limparTela</code> que escreve 50 linhas em branco, simulando limpeza de console.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">15. Refatorando o Desafio</h3>
          <p>Refatore o desafio da calculadora: crie uma função para cada opção do menu e deixe <code class="inline">inicio</code> apenas com o laço do menu.</p>
        </div>
      </div>
    </section>
  </div>
`
        }
      ]
    },
    {
      "id": 6,
      "titulo": "Semana 6",
      "subtitulo": "4/4 dias",
      "descricao": "JavaScript - Dando vida às páginas com interatividade",
      "icone": "fa-js",
      "dias": [
        {
          id: 27,
          titulo: "JavaScript: A Linguagem da Web Interativa",
          subtitulo: "Aula 6.1",
          descricao: "Introdução ao JavaScript: linguagem da web interativa, variáveis, sintaxe e tradução de Portugol para JS.",
          icone: "fa-code",
          conteudo: `
  <div class="container">
    <section id="aula-15">
      <div class="content is-size-5">
        <div id="o-que-e-js" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. O que é JavaScript?</h3>
          <p class="mb-5">Até agora, aprendemos HTML e CSS. O <strong class="has-text-pink">JavaScript (JS)</strong> é a terceira camada: linguagem que adiciona <strong class="">interatividade, lógica e dinamismo</strong> às páginas.</p>
          <p>Se HTML é o esqueleto e CSS é a pele, JavaScript é o sistema nervoso e os músculos.</p>
        </div>
        <div id="onde-roda" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Onde o JavaScript Roda?</h3>
          <div class="columns">
            <div class="column box">
              <h4 class="title is-5 mb-2">No Navegador (Front-end)</h4>
              <p>Ambiente natural. Todo navegador moderno tem um motor JS (como V8 do Chrome) que executa código e permite manipular a página, responder a cliques, validar formulários, etc.</p>
            </div>
            <div class="column box">
              <h4 class="title is-5 mb-2">Fora do Navegador (com Node.js)</h4>
              <p>Graças ao <strong class="">Node.js</strong>, podemos usar JS para back-end, ferramentas de linha de comando e mais, rodando na máquina.</p>
            </div>
          </div>
        </div>
        <div id="como-usar" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Como Adicionar JavaScript a uma Página</h3>
          <p class="mb-5">Duas maneiras principais de incluir JS em HTML.</p>
          <h4 class="title is-5 mb-2 ">Método 1: Script Interno</h4>
          <p class="mb-4">Escrever código diretamente no HTML, dentro de <code class="inline">&lt;script&gt;</code>. Geralmente no final do <code class="inline">&lt;body&gt;</code>.</p>
          <pre class="p-4"><code>&lt;body&gt;
  &lt;!-- Conteúdo do site --&gt;

  &lt;script&gt;
    console.log("Olá, Mundo! Isso roda no console do navegador.");
  &lt;/script&gt;
&lt;/body&gt;
</code></pre>
          <h4 class="title is-5 mb-2 ">Método 2: Script Externo (Recomendado)</h4>
          <p class="mb-4">Melhor prática: arquivo separado com extensão <code class="inline">.js</code> e linkar ao HTML. Mantém código organizado.</p>
          <pre class="p-4"><code>&lt;!-- No arquivo index.html --&gt;
&lt;body&gt;
  &lt;!-- Conteúdo do site --&gt;

  &lt;script src="meu_script.js"&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;!-- No arquivo meu_script.js --&gt;
console.log("Este código veio de um arquivo externo!");
</code></pre>
        </div>
        <div id="variaveis-js" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Declarando Variáveis: <code class="inline">var</code>, <code class="inline">let</code> e <code class="inline">const</code></h3>
          <p class="mb-5">Em JS moderno, usar principalmente <code class="inline">let</code> e <code class="inline">const</code>. <code class="inline">var</code> é antigo e deve ser evitado.</p>
          <div class="mb-6">
            <div class="box">
              <h4 class="title is-5 ">const (Constante)</h4>
              <p>Use para valores que <strong class="">não vão mudar</strong>. Uma vez declarada, não pode atribuir novo valor. Escolha padrão.</p>
              <pre class="mt-2 p-2"><code>const nome = "Vitor";</code></pre>
            </div>
            <div class="box">
              <h4 class="title is-5 ">let (Variável)</h4>
              <p>Use para valores que <strong class="">precisam ser alterados</strong>, como contador em laço.</p>
              <pre class="mt-2 p-2"><code>let idade = 25;
idade = 26; // Funciona!</code></pre>
            </div>
            <div class="box has-background-danger-light">
              <h4 class="title is-5 ">var (Antigo)</h4>
              <p>Forma antiga. Comportamento de escopo pode causar bugs. <strong class="has-text-danger">Evite em código novo.</strong></p>
            </div>
          </div>
          <div class="notification is-info is-light">
            <h4 class="title is-5  mb-2">Regra de Ouro</h4>
            <p>Comece sempre com <code class="inline">const</code>. Se precisar mudar, troque para <code class="inline">let</code>.</p>
          </div>
        </div>
        <div id="portugol-para-js" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. De Portugol para JavaScript: Guia de "Tradução"</h3>
          <p class="mb-5">A lógica é a mesma! Muda a sintaxe. Esta tabela ajuda a "traduzir".</p>
          <table class="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Portugol (Portugol Studio)</th>
                <th>JavaScript</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="has-text-weight-semibold">Escrever no console</td>
                <td><code class="inline">escreva("Alguma coisa")</code></td>
                <td><code class="inline">console.log("Alguma coisa")</code></td>
              </tr>
              <tr>
                <td class="has-text-weight-semibold">Declaração de Variável</td>
                <td><code class="inline">inteiro idade = 18</code><br><code class="inline">cadeia nome = "Ana"</code></td>
                <td><code class="inline">let idade = 18;</code><br><code class="inline">const nome = "Ana";</code></td>
              </tr>
              <tr>
                <td class="has-text-weight-semibold">Saída de Dados</td>
                <td><code class="inline">escreva("Olá")</code></td>
                <td><code class="inline">console.log("Olá")</code></td>
              </tr>
              <tr>
                <td class="has-text-weight-semibold">Condicional</td>
                <td><code class="inline">se (idade >= 18) { ... } senao { ... }</code></td>
                <td><code class="inline">if (idade >= 18) { ... } else { ... }</code></td>
              </tr>
              <tr>
                <td class="has-text-weight-semibold">Operadores Lógicos</td>
                <td><code class="inline">e</code>, <code class="inline">ou</code></td>
                <td><code class="inline">&&</code>, <code class="inline">||</code></td>
              </tr>
              <tr>
                <td class="has-text-weight-semibold">Laço <code class="inline">para</code> (for)</td>
                <td><code class="inline">para (inteiro i=0; i < 5; i++) { ... }</code></td>
                <td><code class="inline">for (let i = 0; i < 5; i++) { ... }</code></td>
              </tr>
              <tr>
                <td class="has-text-weight-semibold">Laço <code class="inline">enquanto</code> (while)</td>
                <td><code class="inline">enquanto (condicao) { ... }</code></td>
                <td><code class="inline">while (condicao) { ... }</code></td>
              </tr>
              <tr>
                <td class="has-text-weight-semibold">Função com Retorno</td>
                <td><code class="inline">funcao inteiro somar(...) { retorne ... }</code></td>
                <td><code class="inline">function somar(...) { return ... }</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 28,
          titulo: "Exercícios: Praticando Com JavaScript",
          subtitulo: "Aula 6.1",
          descricao: "Exercícios práticos de lógica com JavaScript: variáveis, condicionais, laços, funções e arrays.",
          icone: "fa-code",
          conteudo: `
  <div class="container">
    <section id="exercicios-6-1">
      <p class="content is-size-5 has-text-centered mb-5">Crie um arquivo HTML e um arquivo JS separado para resolver cada exercício. Use <code class="inline">console.log()</code> para mostrar os resultados no console do navegador.</p>
      <div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">1. Olá, Mundo no Console</h3>
          <p>Escreva um código que mostre a mensagem "Olá, Mundo!" no console.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">2. Variáveis com Nome</h3>
          <p>Crie uma variável <code class="inline">nome</code> e uma <code class="inline">sobrenome</code>. Atribua seus dados e mostre "Meu nome completo é: [nome] [sobrenome]".</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">3. Soma Simples</h3>
          <p>Crie duas variáveis, <code class="inline">numero1</code> e <code class="inline">numero2</code>, com valores numéricos. Some-as e mostre o resultado.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">4. Média de Notas (Array)</h3>
          <p>Crie um array <code class="inline">notas</code> com 3 notas. Calcule a média e mostre o resultado.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">5. Par ou Ímpar</h3>
          <p>Crie uma variável com um número. Use <code class="inline">if/else</code> para verificar se é par ou ímpar e mostre a mensagem.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">6. Situação do Aluno</h3>
          <p>Usando o exercício da média, verifique se o aluno foi "Aprovado" (média >= 7) ou "Reprovado".</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">7. Tabuada com <code class="inline">for</code></h3>
          <p>Crie uma variável <code class="inline">numeroTabuada</code>. Use um laço <code class="inline">for</code> para mostrar a tabuada de 1 a 10.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">8. Percorrendo Nomes</h3>
          <p>Crie um array com 5 nomes. Use um laço <code class="inline">for</code> para mostrar cada nome no console.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">9. Contagem Regressiva com <code class="inline">while</code></h3>
          <p>Use um laço <code class="inline">while</code> para fazer uma contagem regressiva de 10 a 0.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">10. Função de Saudação</h3>
          <p>Crie uma função <code class="inline">saudar</code> que recebe um <code class="inline">nome</code> e retorna "Olá, [nome]!". Chame e mostre no console.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">11. Função de Soma</h3>
          <p>Crie uma função <code class="inline">somar</code> que recebe dois números e retorna a soma.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">12. Função para Calcular Média de um Array</h3>
          <p>Crie uma função <code class="inline">calcularMediaArray</code> que recebe um array de notas e retorna a média. Use um laço dentro.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">13. Encontrando o Maior Número em um Array</h3>
          <p>Crie uma função <code class="inline">encontrarMaior</code> que recebe um array de números e retorna o maior valor.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">14. Contando Vogais</h3>
          <p>Crie uma função que recebe uma <code class="inline">palavra</code> (string) e retorna o número de vogais.</p>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">15. Invertendo uma String</h3>
          <p>Crie uma função que recebe uma <code class="inline">palavra</code> e a retorna invertida. Ex: "javascript" -> "tpircsavaj".</p>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 29,
          titulo: "Manipulando o DOM com JavaScript",
          subtitulo: "Aula 6.2",
          descricao: "Manipulação do DOM com JavaScript: selecionar elementos, modificar conteúdo, estilos e responder a eventos.",
          icone: "fa-code",
          conteudo: `
  <div class="container">
    <section id="aula-16">
      <div class="content is-size-5">
        <div id="o-que-e-dom" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. O que é o DOM?</h3>
          <p class="mb-5">Quando o navegador carrega uma página HTML, ele cria uma representação da estrutura na memória. Essa representação é o <strong class="has-text-pink">DOM (Document Object Model)</strong>.</p>
          <p>Pense no DOM como uma <strong class="">árvore hierárquica</strong> onde cada tag HTML é um "nó". O JS pode acessar e modificar essa árvore, alterando o que é exibido <strong class="">sem recarregar</strong>.</p>
          <div class="columns">
            <div class="column">
              <h4 class="title is-5  mb-2">Exemplo de HTML:</h4>
              <pre class="p-4"><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Minha Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Título&lt;/h1&gt;
    &lt;p&gt;Um parágrafo.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
            </div>
            <div class="column">
              <h4 class="title is-5  mb-2">Árvore DOM Correspondente:</h4>
              <pre class="dom-tree p-4">Document
└── html
    ├── head
    │   └── title
    │       └── #text ("Minha Página")
    └── body
        ├── h1
        │   └── #text ("Título")
        └── p
            └── #text ("Um parágrafo.")
</pre>
            </div>
          </div>
        </div>
        <div id="selecionando-elementos" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Selecionando Elementos HTML</h3>
          <p class="mb-5">Para modificar um elemento, primeiro precisamos "encontrá-lo" no DOM. JS oferece várias formas.</p>
          <h4 class="title is-5 mb-2 "><code class="inline">getElementById()</code>: Buscando por ID</h4>
          <p class="mb-4">A forma mais direta. Se um elemento tem um atributo <code class="inline">id</code> único, podemos selecioná-lo facilmente.</p>
          <pre class="p-4"><code>// HTML: &lt;h1 id="titulo-principal"&gt;Olá&lt;/h1&gt;
const titulo = document.getElementById('titulo-principal');
// Agora a variável 'titulo' representa o elemento H1
</code></pre>
          <h4 class="title is-5 mb-2 "><code class="inline">querySelector()</code>: Buscando com Seletor CSS</h4>
          <p class="mb-4">Mais versátil. Permite usar seletores CSS para encontrar o <strong class="">primeiro</strong> elemento que corresponda.</p>
          <pre class="p-4"><code>// HTML: &lt;button class="botao-confirmar"&gt;Enviar&lt;/button&gt;
const botao = document.querySelector('.botao-confirmar'); // Busca pela classe
const primeiroParagrafo = document.querySelector('p'); // Busca pela tag
const elementoComID = document.querySelector('#id-especifico'); // Busca pelo ID
</code></pre>
          <h4 class="title is-5 mb-2 "><code class="inline">querySelectorAll()</code>: Buscando Vários Elementos</h4>
          <p class="mb-4">Similar ao <code class="inline">querySelector</code>, mas retorna uma <strong class="">lista</strong> (NodeList) de <strong class="">todos</strong> os elementos que correspondem.</p>
          <pre class="p-4"><code>// HTML: &lt;li&gt;Item 1&lt;/li&gt; &lt;li&gt;Item 2&lt;/li&gt;
const todosOsItensDaLista = document.querySelectorAll('li');
// Retorna uma lista com os dois LIs
</code></pre>
        </div>
        <div id="modificando-conteudo" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Modificando o Conteúdo</h3>
          <p class="mb-5">Uma vez selecionado, podemos alterar seu conteúdo de texto ou HTML.</p>
          <h4 class="title is-5 mb-2 "><code class="inline">innerText</code> ou <code class="inline">textContent</code>: Alterando o Texto</h4>
          <p class="mb-4">Ambos servem para ler ou definir o conteúdo de texto, ignorando tags HTML.</p>
          <pre class="p-4"><code>const titulo = document.getElementById('titulo-principal');
titulo.innerText = "Novo Título da Página"; // Muda o texto do H1
console.log(titulo.textContent); // Mostra o texto atual no console
</code></pre>
          <h4 class="title is-5 mb-2 "><code class="inline">innerHTML</code>: Alterando o HTML Interno</h4>
          <p class="mb-4">Permite ler ou definir todo o conteúdo HTML. Use com <strong class="has-text-danger">cuidado</strong>, pois pode abrir brechas de segurança.</p>
          <pre class="p-4"><code>const caixa = document.querySelector('.minha-caixa');
caixa.innerHTML = "&lt;strong&gt;Texto em negrito&lt;/strong&gt; dentro da caixa.";
</code></pre>
        </div>
        <div id="modificando-estilos" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Modificando Estilos CSS</h3>
          <p class="mb-5">Podemos alterar estilos diretamente ou manipulando classes CSS.</p>
          <h4 class="title is-5 mb-2 ">Diretamente com <code class="inline">style</code></h4>
          <p class="mb-4">Útil para alterações rápidas. Propriedades CSS com hífen viram camelCase.</p>
          <pre class="p-4"><code>const botao = document.querySelector('button');
botao.style.backgroundColor = '#e80170';
botao.style.color = 'white';
</code></pre>
          <h4 class="title is-5 mb-2 ">Manipulando Classes com <code class="inline">classList</code> (Recomendado)</h4>
          <p class="mb-4">Forma mais limpa. Define classes no CSS e usa JS para adicionar/remover.</p>
          <pre class="p-4"><code>// CSS: .ativo { background-color: #e80170; color: white; }

const itemMenu = document.querySelector('#menu-item-1');

itemMenu.classList.add('ativo');    // Adiciona a classe
itemMenu.classList.remove('ativo'); // Remove a classe

// O mais útil: toggle!
// Se existe, remove. Se não, adiciona. Perfeito para botões e menus.
itemMenu.classList.toggle('ativo');
</code></pre>
        </div>
        <div id="event-listener" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. Respondendo a Ações: Event Listeners</h3>
          <p class="mb-5">Para fazer a página responder às ações do usuário, usamos <strong class="has-text-pink">Event Listeners</strong> para "ouvir" eventos e executar uma função.</p>
          <pre class="p-4"><code>// HTML: &lt;button id="meu-botao"&gt;Clique Aqui&lt;/button&gt;
//       &lt;p id="mensagem"&gt;&lt;/p&gt;

const botao = document.getElementById('meu-botao');
const paragrafoMensagem = document.getElementById('mensagem');

// Adiciona um "ouvinte" para o evento de 'click' no botão
botao.addEventListener('click', function() {
  // Esta função será executada QUANDO o botão for clicado
  paragrafoMensagem.textContent = "O botão foi clicado!";
  botao.classList.toggle('ativo'); // Exemplo usando toggle no clique
});
</code></pre>
          <p class="mt-4">Existem muitos tipos de eventos: <code class="inline">click</code>, <code class="inline">mouseover</code>, <code class="inline">keydown</code>, <code class="inline">submit</code>, etc.</p>
        </div>
        <div id="conclusao-dom" class="mb-6">
          <h3 class="title is-4 section-title mb-4">6. Conclusão</h3>
          <div class="notification is-info is-light">
            <p class="mb-4">Dominar a manipulação do DOM é a chave para páginas dinâmicas. Hoje vimos:</p>
            <ul>
              <li>Selecionar elementos (<code class="inline">getElementById</code>, <code class="inline">querySelector</code>).</li>
              <li>Alterar conteúdo (<code class="inline">innerText</code>, <code class="inline">innerHTML</code>).</li>
              <li>Alterar estilos (<code class="inline">.style</code> e <code class="inline">.classList</code>).</li>
              <li>Ouvir eventos (<code class="inline">addEventListener</code>).</li>
            </ul>
            <p class="has-text-weight-bold mt-4">Com essas ferramentas, vocês já podem criar pequenas interações!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 30,
          titulo: "Exercícios: Manipulando o DOM",
          subtitulo: "Aula 6.2",
          descricao: "Exercícios práticos de manipulação do DOM: selecionar, modificar conteúdo, estilos e eventos com JavaScript.",
          icone: "fa-code",
          conteudo: `
  <div class="container">
    <section id="exercicios-6-2">
      <p class="content is-size-5 has-text-centered mb-5">Crie um arquivo HTML e um arquivo JS para cada exercício. Use o HTML fornecido como base.</p>
      <div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">1. Mudar Texto do Título</h3>
          <p>Selecione o <code class="inline">&lt;h1&gt;</code> pelo seu ID e altere seu texto para "Título Modificado pelo JS".</p>
          <pre class="html-snippet p-2 mt-3">&lt;h1 id="titulo"&gt;Título Original&lt;/h1&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">2. Mudar Cor do Parágrafo</h3>
          <p>Selecione o <code class="inline">&lt;p&gt;</code> usando <code class="inline">querySelector</code> e altere a cor do seu texto para <code class="inline">#e80170</code>.</p>
          <pre class="html-snippet p-2 mt-3">&lt;p class="paragrafo"&gt;Este é um parágrafo.&lt;/p&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">3. Alerta no Clique</h3>
          <p>Selecione o botão pelo ID. Adicione um <code class="inline">addEventListener</code> para o evento <code class="inline">click</code> que mostre um <code class="inline">console.log("Botão clicado!")</code>.</p>
          <pre class="html-snippet p-2 mt-3">&lt;button id="meuBotao" class="example-btn"&gt;Clique Aqui&lt;/button&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">4. Mudar Texto no Clique</h3>
          <p>Selecione o botão e o parágrafo. Quando o botão for clicado, mude o texto do parágrafo para "Texto alterado!".</p>
          <pre class="html-snippet p-2 mt-3">&lt;button id="btnMudar" class="example-btn"&gt;Mudar Texto&lt;/button&gt;
&lt;p id="textoParaMudar"&gt;Texto inicial.&lt;/p&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">5. Mostrar/Ocultar Elemento</h3>
          <p>Selecione o botão e a <code class="inline">div</code>. Quando o botão for clicado, oculte a <code class="inline">div</code> definindo seu estilo <code class="inline">display</code> como <code class="inline">none</code>.</p>
          <pre class="html-snippet p-2 mt-3">&lt;button id="btnOcultar" class="example-btn"&gt;Ocultar&lt;/button&gt;
&lt;div id="caixa" style="width:100px; height:100px; background-color: #e80170; margin-top: 10px;"&gt;&lt;/div&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">6. Mudar Estilo no MouseOver</h3>
          <p>Selecione a <code class="inline">div</code>. Adicione um <code class="inline">addEventListener</code> para o evento <code class="inline">mouseover</code>. Quando o mouse passar sobre a <code class="inline">div</code>, mude sua cor de fundo para <code class="inline">blue</code>.</p>
          <pre class="html-snippet p-2 mt-3">&lt;div id="hoverDiv" style="width:100px; height:100px; background-color: #e80170;"&gt;Passe o mouse aqui&lt;/div&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">7. Voltar Estilo no MouseOut</h3>
          <p>Complementando o exercício anterior, adicione um <code class="inline">addEventListener</code> para <code class="inline">mouseout</code>. Quando o mouse sair da <code class="inline">div</code>, volte a cor de fundo para <code class="inline">#e80170</code>.</p>
          <pre class="html-snippet p-2 mt-3">(Use o mesmo HTML do exercício 6)</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">8. Contar Cliques</h3>
          <p>Selecione o botão e o <code class="inline">span</code>. Crie uma variável <code class="inline">contador</code> inicializada com 0. A cada clique no botão, incremente o contador e atualize o texto do <code class="inline">span</code>.</p>
          <pre class="html-snippet p-2 mt-3">&lt;button id="btnContador" class="example-btn"&gt;Clique +1&lt;/button&gt;
&lt;p&gt;Cliques: &lt;span id="numCliques"&gt;0&lt;/span&gt;&lt;/p&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">9. Alterar <code class="inline">innerHTML</code></h3>
          <p>Selecione a <code class="inline">div</code> pelo ID. Use <code class="inline">innerHTML</code> para colocar dentro dela o seguinte HTML: <code class="inline">&lt;strong&gt;Texto em negrito&lt;/strong&gt; e &lt;em&gt;itálico&lt;/em&gt;.</code>.</p>
          <pre class="html-snippet p-2 mt-3">&lt;div id="conteudoHtml"&gt;&lt;/div&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">10. Mudar Imagem no Clique</h3>
          <p>Selecione o botão e a imagem. Quando o botão for clicado, altere o atributo <code class="inline">src</code> da imagem para <code class="inline">https://placehold.co/200x100/e80170/white?text=Imagem+2</code>.</p>
          <pre class="html-snippet p-2 mt-3">&lt;button id="btnTrocaImg" class="example-btn"&gt;Trocar Imagem&lt;/button&gt;
&lt;img id="minhaImagem" src="https://placehold.co/200x100/cccccc/black?text=Imagem+1" alt="Placeholder" style="margin-top: 10px;"&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">11. Pegar Valor do Input</h3>
          <p>Selecione o botão e o input. Quando o botão for clicado, pegue o valor digitado no input (propriedade <code class="inline">.value</code>) e mostre no console.</p>
          <pre class="html-snippet p-2 mt-3">&lt;input type="text" id="meuInput" placeholder="Digite algo" class="text-gray-900 p-2 rounded"&gt;
&lt;button id="btnPegarValor" class="example-btn"&gt;Mostrar Valor&lt;/button&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">12. Copiar Texto do Input</h3>
          <p>Selecione o input, o botão e o parágrafo. Quando o botão for clicado, copie o valor do input para o <code class="inline">textContent</code> do parágrafo.</p>
          <pre class="html-snippet p-2 mt-3">&lt;input type="text" id="inputCopiar" placeholder="Digite para copiar" class="text-gray-900 p-2 rounded"&gt;
&lt;button id="btnCopiar" class="example-btn"&gt;Copiar&lt;/button&gt;
&lt;p id="destinoCopia"&gt;O texto aparecerá aqui.&lt;/p&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">13. Alterar Todos os Itens da Lista</h3>
          <p>Selecione todos os <code class="inline">li</code> usando <code class="inline">querySelectorAll</code>. Use um laço <code class="inline">for</code> para percorrer a lista e alterar o <code class="inline">textContent</code> de cada item para "Item modificado".</p>
          <pre class="html-snippet p-2 mt-3">&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">14. Mudar Classe CSS no Clique</h3>
          <p>Crie uma classe CSS <code class="inline">destacado</code> e adicione-a ao bloco <code class="inline">style</code> principal. Selecione o botão e o parágrafo. Quando o botão for clicado, adicione a classe <code class="inline">destacado</code> ao parágrafo usando <code class="inline">classList.add()</code>.</p>
          <pre class="html-snippet p-2 mt-3">&lt;button id="btnClasse" class="example-btn"&gt;Destacar&lt;/button&gt;
&lt;p id="textoClasse"&gt;Este texto pode ser destacado.&lt;/p&gt;</pre>
        </div>
        <div class="box box-dark mb-4">
          <h3 class="title is-5 mb-3">15. Alternar (Toggle) Classe CSS</h3>
          <p>Similar ao anterior, mas use <code class="inline">classList.toggle('destacado')</code>. Agora, cada clique no botão vai adicionar ou remover a classe.</p>
          <pre class="html-snippet p-2 mt-3">(Use o mesmo HTML do exercício 14)</pre>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 31,
          titulo: "Projeto: Todo List com JavaScript",
          subtitulo: "Aula 6.4",
          descricao: "Projeto Todo List: estrutura HTML inicial, CSS básico e seleção de elementos com JavaScript.",
          icone: "fa-code",
          conteudo: `
  <div class="container">
    <section id="aula-18">
      <div class="content is-size-5">
        <div id="objetivo-projeto" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. Objetivo do Projeto</h3>
          <p class="mb-5">Nesta série de aulas, vamos construir uma aplicação de lista de tarefas (Todo List) funcional, aplicando tudo que aprendemos sobre HTML, CSS e JavaScript, incluindo a manipulação do DOM e o uso do <code class="inline">localStorage</code> para salvar as tarefas.</p>
          <p>Nosso ponto de partida é o design definido no Figma: <a href="https://figma.com/design/mUt1H6wsEFyCk1c47iyqjB/Todo-List---JavaScript--Community-?t=PISwnbS3FnJucj0N-0" target="_blank" class="has-text-link">Link do Protótipo</a>.</p>
        </div>
        <div id="estrutura-html-inicial" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Estrutura HTML Inicial</h3>
          <p class="mb-5">Começamos criando o esqueleto da nossa aplicação no arquivo <code class="inline">index.html</code>. Definimos as áreas principais: o título, o campo para adicionar novas tarefas e a lista onde as tarefas serão exibidas.</p>
          <pre class="p-4"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Todo List&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;h1&gt;Minha Lista de Tarefas&lt;/h1&gt;

        &lt;div class="input-section"&gt;
            &lt;input type="text" id="nova-tarefa" placeholder="Adicione uma nova tarefa..."&gt;
            &lt;button id="btn-adicionar"&gt;Adicionar&lt;/button&gt;
        &lt;/div&gt;

        &lt;ul id="lista-tarefas"&gt;
            &lt;!-- As tarefas serão adicionadas aqui via JS --&gt;
        &lt;/ul&gt;
    &lt;/div&gt;

    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
          <p class="mt-4">Note que já linkamos um arquivo <code class="inline">style.css</code> e um <code class="inline">script.js</code>.</p>
        </div>
        <div id="estilo-css-base" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Estilização Básica (CSS)</h3>
          <p class="mb-5">No arquivo <code class="inline">style.css</code>, adicionamos alguns estilos iniciais para dar uma aparência mais organizada, baseada no protótipo. (Exemplos simplificados)</p>
          <pre class="p-4"><code>body {
  /* Estilos gerais */
}

.container {
  /* Centralização, largura máxima */
}

.input-section {
  /* Display flex para alinhar input e botão */
}

#nova-tarefa {
  /* Estilos do input */
}

#btn-adicionar {
  /* Estilos do botão */
}

#lista-tarefas {
  /* Estilos da lista */
}

/* (Estilos para os itens da lista serão adicionados depois) */
</code></pre>
        </div>
        <div id="javascript-inicial" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. JavaScript Inicial: Selecionando Elementos</h3>
          <p class="mb-5">No arquivo <code class="inline">script.js</code>, o primeiro passo é selecionar os elementos HTML com os quais vamos interagir:</p>
          <pre class="p-4"><code>// Seleciona o campo de input
const inputNovaTarefa = document.getElementById('nova-tarefa');

// Seleciona o botão de adicionar
const btnAdicionar = document.getElementById('btn-adicionar');

// Seleciona a lista UL onde as tarefas serão mostradas
const listaTarefas = document.getElementById('lista-tarefas');

console.log(inputNovaTarefa, btnAdicionar, listaTarefas); // Verifica se selecionou corretamente
</code></pre>
          <p class="mt-4">Com esses elementos selecionados, estamos prontos para adicionar a lógica de criar e exibir as tarefas na próxima aula.</p>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 32,
          titulo: "localStorage: Guardando Dados no Navegador",
          subtitulo: "Aula 6.4",
          descricao: "Aprenda a usar localStorage para armazenar dados persistentes no navegador, incluindo manipulação de chave-valor e uso de JSON.",
          icone: "fa-brain",
          conteudo: `
<section>
  <div class="container">
    <div class="content">

      <div id="o-que-e-ls">
        <h2 class="title is-3 has-text-weight-bold">1. O que é localStorage?</h2>
        <p class="is-size-5 mb-4">
          O <strong class="has-text-primary">localStorage</strong> é um mecanismo que permite aos sites e aplicações web armazenarem dados (chave-valor) diretamente no navegador do usuário, de forma <strong class="">persistente</strong>.
        </p>
        <p class="is-size-5">
          "Persistente" significa que os dados <strong class="">não se apagam</strong> quando o navegador é fechado ou o computador reiniciado. Eles ficam lá até serem removidos explicitamente.
        </p>
        <p class="is-size-5 mt-4">
          É ótimo para guardar preferências do usuário (como tema escuro/claro), pequenos dados de sessão ou informações que não precisam ir para um banco de dados.
        </p>
      </div>

      <div id="como-funciona" class="mt-6">
        <h2 class="title is-3 has-text-weight-bold">2. Como Funciona? Chave-Valor</h2>
        <p class="is-size-5 mb-4">
          O localStorage funciona como um dicionário simples: você guarda informações associadas a uma <strong class="">chave</strong> (um nome único) e depois usa essa mesma chave para recuperar o <strong class="">valor</strong>.
        </p>
        <div class="box has-background-dark has-text-centered">
          <p class="is-size-4">Chave <code class="has-background-grey-dark has-text-grey-light px-2 py-1 is-rounded">"nomeUsuario"</code> ➡️ Valor <code class="has-background-grey-dark has-text-grey-light px-2 py-1 is-rounded">"Maria Silva"</code></p>
          <p class="is-size-4 mt-2">Chave <code class="has-background-grey-dark has-text-grey-light px-2 py-1 is-rounded">"tema"</code> ➡️ Valor <code class="has-background-grey-dark has-text-grey-light px-2 py-1 is-rounded">"dark"</code></p>
        </div>
        <p class="is-size-5 mt-4">
          <strong class="has-text-danger">Importante:</strong> O localStorage só armazena dados como <strong class="">strings (texto)</strong>. Se você precisar guardar números, arrays ou objetos, terá que convertê-los antes.
        </p>
      </div>

      <div id="manipulando-ls" class="mt-6">
        <h2 class="title is-3 has-text-weight-bold">3. Manipulando o localStorage</h2>
        <p class="is-size-5 mb-4">JavaScript nos dá métodos simples para interagir com o localStorage.</p>

        <h3 class="title is-4  mt-4 mb-2">setItem(chave, valor): Salvando Dados</h3>
        <p class="mb-4">Guarda um valor associado a uma chave. Se a chave já existir, o valor antigo é substituído.</p>
        <pre><code class="language-javascript has-background-dark has-text-grey-light p-4 is-block">
localStorage.setItem('usuarioLogado', 'joao123');
localStorage.setItem('preferenciaCor', 'azul');
        </code></pre>

        <h3 class="title is-4  mt-4 mb-2">getItem(chave): Lendo Dados</h3>
        <p class="mb-4">Recupera o valor associado a uma chave. Se a chave não existir, retorna null.</p>
        <pre><code class="language-javascript has-background-dark has-text-grey-light p-4 is-block">
const usuario = localStorage.getItem('usuarioLogado'); // usuario terá o valor "joao123"
const cor = localStorage.getItem('preferenciaCor');   // cor terá o valor "azul"
const tema = localStorage.getItem('temaSite');       // tema terá o valor null (se não foi setado)

console.log(usuario);
        </code></pre>

        <h3 class="title is-4  mt-4 mb-2">removeItem(chave): Removendo um Item</h3>
        <p class="mb-4">Apaga um par chave-valor específico.</p>
        <pre><code class="language-javascript has-background-dark has-text-grey-light p-4 is-block">
localStorage.removeItem('preferenciaCor'); // Apaga apenas a preferência de cor
        </code></pre>

        <h3 class="title is-4  mt-4 mb-2">clear(): Removendo Tudo</h3>
        <p class="mb-4">Apaga <strong class="">todos</strong> os dados armazenados pelo seu site no localStorage.</p>
        <pre><code class="language-javascript has-background-dark has-text-grey-light p-4 is-block">
localStorage.clear(); // Limpa todo o localStorage para este domínio
        </code></pre>
      </div>

      <div id="json-ls" class="mt-6">
        <h2 class="title is-3 has-text-weight-bold">4. Guardando Dados Complexos e JSON</h2>
        <p class="is-size-5 mb-4">Como o localStorage só guarda strings, precisamos de um jeito de representar dados mais complexos (como arrays e objetos) em formato de texto. Para isso, usamos o <strong class="has-text-primary">JSON (JavaScript Object Notation)</strong>.</p>
        <p class="is-size-5 mb-4">JSON é um formato padrão leve para intercâmbio de dados, que é fácil para humanos lerem e para máquinas interpretarem. O JavaScript nos dá duas funções essenciais para trabalhar com JSON:</p>

        <ul class="mb-4">
          <li><code class="has-background-grey-dark has-text-grey-light px-2 py-1 is-rounded">JSON.stringify(objetoOuArray)</code>: Converte um objeto ou array JavaScript em uma <strong class="">string no formato JSON</strong>.</li>
          <li><code class="has-background-grey-dark has-text-grey-light px-2 py-1 is-rounded">JSON.parse(stringJSON)</code>: Converte uma string no formato JSON de volta em um <strong class="">objeto ou array JavaScript</strong>.</li>
        </ul>

        <pre><code class="language-javascript has-background-dark has-text-grey-light p-4 is-block">
// Objeto JavaScript
const preferencias = { tema: 'escuro', fonte: 16 };

// 1. Converter para string JSON antes de salvar
const preferenciasString = JSON.stringify(preferencias);
localStorage.setItem('configUsuario', preferenciasString);
console.log("Salvo no localStorage:", preferenciasString); // Ex: {"tema":"escuro","fonte":16}

// 2. Ler a string do localStorage
const configSalvaString = localStorage.getItem('configUsuario');

// 3. Converter a string JSON de volta para objeto
const configObjeto = JSON.parse(configSalvaString);

console.log("Objeto recuperado:", configObjeto); // Ex: { tema: 'escuro', fonte: 16 }
console.log("Tema recuperado:", configObjeto.tema); // Saída: escuro
        </code></pre>
      </div>

      <div id="consideracoes" class="mt-6">
        <h2 class="title is-3 has-text-weight-bold">5. Considerações Importantes</h2>
        <ul>
          <li><strong class="">Limite de Tamanho:</strong> Geralmente 5MB a 10MB por domínio. Não é feito para guardar grandes volumes de dados.</li>
          <li><strong class="">Apenas Strings:</strong> Lembre-se sempre da necessidade de converter outros tipos de dados usando JSON.</li>
          <li><strong class="has-text-danger">Segurança:</strong> Os dados no localStorage <strong class="has-text-danger">não são seguros</strong>. Qualquer script na página pode acessá-los. Nunca guarde senhas, tokens ou informações sensíveis nele.</li>
          <li><strong class="">Síncrono:</strong> As operações (setItem, getItem) bloqueiam a execução do código até terminarem. Usar excessivamente com dados grandes pode travar a página.</li>
          <li><strong class="">Por Domínio:</strong> Os dados são isolados por origem (protocolo + domínio + porta). Um site a.com não pode ler o localStorage de b.com.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
`
        },
      ]
    },
    {
      "id": 7,
      "titulo": "Semana 7",
      "subtitulo": "2/2 dias",
      "descricao": "Projeto Prático - Revisão Geral dos Fundamentos da Web",
      "icone": "fa-project-diagram",
      "dias": [
        {
          id: 33,
          titulo: "Revisão: Conectando os Pontos",
          subtitulo: "Aula 7.x",
          descricao: "Revisão geral dos fundamentos de JavaScript, conectando lógica de programação, sintaxe, arrays, laços, funções, DOM e localStorage para o projeto Todo List.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-19">

      <div class="content is-size-5">
        <div id="logica-e-sintaxe" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. Lógica de Programação e Sintaxe JS</h3>
          <p class="mb-5">A lógica é o "o quê" (a receita), a sintaxe é o "como" (a língua). A lógica que aprendemos no Portugol é a mesma do JavaScript, só mudam as palavras.</p>
          <div class="columns">
            <div class="column">
              <pre class="p-4"><code>// Portugol (Lógica)
se (idade >= 18) entao
  escreva("Maior de idade")
senao
  escreva("Menor de idade")
fimse</code></pre>
            </div>
            <div class="column">
              <pre class="p-4"><code>// JavaScript (Sintaxe)
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}</code></pre>
            </div>
          </div>
        </div>

        <div id="arrays-loops" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Laços de Repetição e Arrays</h3>
          <p class="mb-5">Arrays (vetores) guardam listas de dados. Laços (<code>for</code>, <code>while</code>) são as ferramentas para <strong>percorrer</strong> e <strong>manipular</strong> essas listas. Quase sempre usamos um <code>for</code> para "varrer" um array.</p>
          <pre class="p-4"><code>const notas = [10, 8, 7, 9];
let soma = 0;

for (let i = 0; i &lt; notas.length; i++) {
  soma = soma + notas[i];
}
// O laço 'for' visitou cada item do array
console.log(soma); // 34</code></pre>
        </div>

        <div id="funcoes" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Funções Distintas</h3>
          <p class="mb-5">O princípio mais importante da programação é <strong>DRY (Don't Repeat Yourself - Não se Repita)</strong>. Em vez de escrever o mesmo código várias vezes, nós o "empacotamos" em uma função.</p>
          <p>No nosso Todo List, temos funções com responsabilidades únicas: <code>criarTarefaAfazer()</code>, <code>adicionaTarefaFazerLocalStorage()</code>, <code>botaoExcluir()</code>. Isso torna o código organizado e fácil de dar manutenção.</p>
        </div>

        <div id="dom" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Manipulando o HTML (DOM)</h3>
          <p class="mb-5">É a ponte entre o JavaScript e o HTML. Precisamos de 3 passos:</p>
          <ol class="mb-5">
            <li><strong>Selecionar o elemento:</strong><br>
              <code>const botao = document.getElementById("meu-botao");</code><br>
              <code>const div = document.querySelector(".minha-classe");</code></li>
            <li><strong>Ouvir um evento (ex: clique):</strong><br>
              <code>botao.addEventListener('click', function() { ... });</code></li>
            <li><strong>Modificar algo:</strong><br>
              <code>div.textContent = "Novo texto";</code> (muda o texto)<br>
              <code>div.classList.add("classe-nova");</code> (adiciona classe CSS)</li>
          </ol>
        </div>

        <div id="localstorage-revisao" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. localStorage</h3>
          <p class="mb-5">É a "memória" do navegador. Permite que nossas tarefas continuem na tela mesmo se o usuário fechar a página. Só guarda <strong>texto (strings)</strong>.</p>
          <ul class="mb-5">
            <li><code>localStorage.setItem(chave, valor)</code>: Salva ou atualiza um item.</li>
            <li><code>localStorage.getItem(chave)</code>: Lê um item.</li>
            <li><code>localStorage.removeItem(chave)</code>: Remove um item.</li>
            <li><strong>Para salvar arrays/objetos:</strong> Usamos <code>JSON.stringify()</code> para transformar em texto antes de salvar.</li>
            <li><strong>Para ler arrays/objetos:</strong> Usamos <code>JSON.parse()</code> para transformar o texto de volta em objeto/array.</li>
          </ul>
        </div>

        <div id="metodos" class="mb-6">
          <h3 class="title is-4 section-title mb-4">6. Métodos do JavaScript</h3>
          <p class="mb-5">No nosso projeto Todo List, usamos vários "métodos" (funções prontas) do JavaScript. A tabela na próxima seção servirá como um glossário de consulta para os comandos mais importantes do projeto.</p>
        </div>

        <div id="glossario" class="mb-6">
          <h3 class="title is-4 section-title mb-4">7. Glossário de Código - Projeto Todo List</h3>
          <p class="has-text-centered mb-5">Uma consulta rápida dos principais comandos e métodos que usamos no projeto Todo List, baseados no código que escrevemos.</p>

          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Comando / Método</th>
                <th>O que faz? (Explicação)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>document.getElementById('...')</code></td>
                <td>Busca no HTML um elemento que tenha o ID exato fornecido.</td>
              </tr>
              <tr>
                <td><code>document.querySelector('...')</code></td>
                <td>Busca o <strong>primeiro</strong> elemento no HTML que combine com o seletor CSS (ex: ".minha-classe" ou "p").</td>
              </tr>
              <tr>
                <td><code>document.querySelectorAll('...')</code></td>
                <td>Busca <strong>todos</strong> os elementos no HTML que combinem com o seletor. Retorna um array (NodeList).</td>
              </tr>
              <tr>
                <td><code>localStorage.getItem('...')</code></td>
                <td>Lê e retorna o valor (string) que está salvo no localStorage com a chave fornecida.</td>
              </tr>
              <tr>
                <td><code>localStorage.setItem('...', json)</code></td>
                <td>Salva um valor (string) no localStorage, associado a uma chave.</td>
              </tr>
              <tr>
                <td><code>JSON.parse(string)</code></td>
                <td>Converte uma string em formato JSON de volta para um objeto ou array JavaScript.</td>
              </tr>
              <tr>
                <td><code>JSON.stringify(array)</code></td>
                <td>Converte um objeto ou array JavaScript em uma string no formato JSON (para salvar no localStorage).</td>
              </tr>
              <tr>
                <td><code>array.push(tarefa)</code></td>
                <td>Adiciona um novo item (a tarefa) no final do array.</td>
              </tr>
              <tr>
                <td><code>document.createElement('div')</code></td>
                <td>Cria um novo elemento HTML (uma <code>&lt;div&gt;</code>, nesse caso) na memória do navegador. Ele ainda não está na tela.</td>
              </tr>
              <tr>
                <td><code>div.classList.add('...')</code></td>
                <td>Adiciona uma classe CSS a um elemento HTML.</td>
              </tr>
              <tr>
                <td><code>div.innerHTML = '...'</code></td>
                <td>Define o conteúdo HTML interno de um elemento. (Usado para adicionar o card da tarefa).</td>
              </tr>
              <tr>
                <td><code>container.appendChild(div)</code></td>
                <td>"Adiciona o filho" - Coloca o elemento criado (a <code>div</code> da tarefa) dentro do elemento pai (o <code>container</code>), tornando-o visível na tela.</td>
              </tr>
              <tr>
                <td><code>botao.addEventListener('click', ...)</code></td>
                <td>"Ouvinte de Evento" - Faz o JavaScript esperar por uma ação (um 'click') em um elemento (o <code>botao</code>) para executar uma função.</td>
              </tr>
              <tr>
                <td><code>input.value</code></td>
                <td>Pega ou define o valor (o texto) que está escrito dentro de um campo de <code>input</code>.</td>
              </tr>
              <tr>
                <td><code>array.forEach(...)</code></td>
                <td>Percorre um array, executando uma função para cada item da lista (similar ao laço <code>para</code>).</td>
              </tr>
              <tr>
                <td><code>event.target</code></td>
                <td>Dentro de um <code>addEventListener</code>, <code>event.target</code> é o elemento exato que disparou o evento (ex: a imagem da lixeira).</td>
              </tr>
              <tr>
                <td><code>elemento.closest('.classe')</code></td>
                <td>"O mais próximo" - Sobe na hierarquia do HTML (pai, avô, etc.) e encontra o primeiro elemento que tenha a classe fornecida. (Usado no lugar de <code>parentNode</code> repetidas vezes).</td>
              </tr>
              <tr>
                <td><code>elemento.remove()</code></td>
                <td>Remove o elemento do HTML (da tela).</td>
              </tr>
              <tr>
                <td><code>elemento.querySelector('...')</code></td>
                <td>Busca um elemento <strong>dentro</strong> de outro elemento. (Usado para achar o nome da tarefa dentro do card que foi clicado).</td>
              </tr>
              <tr>
                <td><code>elemento.textContent</code></td>
                <td>Pega o conteúdo de texto de um elemento (usado para ler o nome da tarefa).</td>
              </tr>
              <tr>
                <td><code>array.filter(...)</code></td>
                <td>"Filtrar" - Cria um novo array contendo apenas os itens que passam em uma condição (usado para remover a tarefa da lista do localStorage).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 34,
          titulo: "Desafio: Meu Orçamento Pessoal",
          subtitulo: "Desafio Opcional",
          descricao: "Desafio opcional para criar uma aplicação de orçamento pessoal usando JavaScript, DOM e localStorage para registrar receitas, despesas e calcular saldos.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="desafio-orcamento">
      <p class="content is-size-5 has-text-centered mb-5">Um projeto simples, mas funcional, para aplicar todos os conceitos de JavaScript, DOM e LocalStorage.</p>

      <div class="box box-dark mb-4">
        <h3 class="title is-5 mb-3">1. O Objetivo</h3>
        <p>Criar uma pequena aplicação onde o usuário possa registrar suas receitas (ganhos) e despesas (gastos). A aplicação deve calcular e mostrar o total de receitas, o total de despesas e o saldo final. Os dados devem persistir ao recarregar a página.</p>
      </div>

      <div class="box box-dark mb-4">
        <h3 class="title is-5 mb-3">2. Conceitos Aplicados</h3>
        <ul class="mb-3">
          <li>Manipulação do DOM (<code>getElementById</code>, <code>querySelector</code>, <code>createElement</code>, <code>appendChild</code>)</li>
          <li>Eventos (<code>addEventListener</code> no botão de adicionar)</li>
          <li>JavaScript (<code>let</code>, <code>const</code>, <code>if/else</code>, Operadores)</li>
          <li>Funções (para organizar o código)</li>
          <li>Arrays e Laços (para guardar e percorrer a lista de transações)</li>
          <li>LocalStorage (para salvar os dados usando <code>JSON.stringify</code> e <code>JSON.parse</code>)</li>
        </ul>
      </div>

      <div class="box box-dark mb-4">
        <h3 class="title is-5 mb-3">3. Estrutura HTML Sugerida</h3>
        <p class="mb-3">Comece com este HTML básico para estruturar sua página.</p>
        <pre class="p-4"><code>&lt;h1&gt;Meu Orçamento&lt;/h1&gt;

&lt;div class="resumo"&gt;
  &lt;div&gt;
    &lt;h4&gt;Receitas&lt;/h4&gt;
    &lt;p id="valor-receitas"&gt;R$ 0.00&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;h4&gt;Despesas&lt;/h4&gt;
    &lt;p id="valor-despesas"&gt;R$ 0.00&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;h4&gt;Saldo&lt;/h4&gt;
    &lt;p id="valor-saldo"&gt;R$ 0.00&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="nova-transacao"&gt;
  &lt;h3&gt;Adicionar Transação&lt;/h3&gt;
  &lt;input type="text" id="input-descricao" placeholder="Descrição"&gt;
  &lt;input type="number" id="input-valor" placeholder="Valor (ex: 150 ou -50)"&gt;
  &lt;button id="btn-adicionar"&gt;Adicionar&lt;/button&gt;
&lt;/div&gt;

&lt;h3&gt;Histórico de Transações&lt;/h3&gt;
&lt;ul id="lista-transacoes"&gt;
  &lt;!-- Transações serão adicionadas aqui via JS --&gt;
&lt;/ul&gt;</code></pre>
      </div>

      <div class="box box-dark mb-4">
        <h3 class="title is-5 mb-3">4. Guia de Passos (Lógica JavaScript)</h3>
        <ol class="mb-3 p-4">
          <li>Crie um array (ex: <code>transacoes</code>) para guardar as transações. Tente carregar o que já existe no <code>localStorage</code> ao iniciar.</li>
          <li>Adicione um <code>addEventListener</code> de clique ao botão <code>btn-adicionar</code>.</li>
          <li>Dentro do evento:
            <ul>
              <li>Pegue os valores dos inputs <code>descricao</code> e <code>valor</code>.</li>
              <li>Verifique se os campos não estão vazios.</li>
              <li>Crie um objeto (ex: <code>{ id: Date.now(), desc: 'Salário', valor: 500 }</code>).</li>
              <li>Adicione (<code>.push()</code>) esse objeto ao seu array <code>transacoes</code>.</li>
              <li>Chame uma função para salvar o array no <code>localStorage</code> (lembre-se do <code>JSON.stringify</code>).</li>
              <li>Chame uma função para atualizar a tela e limpar os inputs.</li>
            </ul>
          </li>
          <li>Crie uma função <code>atualizarTela()</code> que:
            <ul>
              <li>Limpe a lista <code>lista-transacoes</code> (<code>innerHTML = ''</code>).</li>
              <li>Inicie variáveis <code>receitas = 0</code>, <code>despesas = 0</code>.</li>
              <li>Use um laço (<code>forEach</code> ou <code>for</code>) para percorrer seu array <code>transacoes</code>.</li>
              <li>Dentro do laço: se o valor for positivo, some em <code>receitas</code>; se for negativo, some em <code>despesas</code>.</li>
              <li>Também dentro do laço, crie o elemento <code>&lt;li&gt;</code> no DOM (<code>createElement</code>) para mostrar a transação na lista.</li>
              <li>Após o laço, atualize o <code>textContent</code> dos elementos <code>valor-receitas</code>, <code>valor-despesas</code> e <code>valor-saldo</code>.</li>
            </ul>
          </li>
          <li>Chame a função <code>atualizarTela()</code> uma vez no início do script para carregar os dados do <code>localStorage</code>.</li>
        </ol>
      </div>

      <div class="box box-dark mb-4">
        <h3 class="title is-5 mb-3">5. Desafio Extra (Se sobrar tempo)</h3>
        <ul class="mb-3">
          <li>Adicione um botão "X" (excluir) em cada <code>&lt;li&gt;</code> da lista de transações.</li>
          <li>Faça o botão "X" funcionar: ele deve remover a transação do DOM e também do array (usando <code>.filter()</code>).</li>
          <li>Após remover do array, salve a nova lista no <code>localStorage</code> e atualize os totais.</li>
        </ul>
      </div>
    </section>
  </div>
`
        },
        {
          id: 35,
          titulo: "Projeto Todo: Visão Geral",
          subtitulo: "Aula 7.3",
          descricao: "Resumo do projeto Todo List, explorando estrutura Kanban, manipulação dinâmica do DOM, persistência com localStorage e lições aprendidas no desenvolvimento.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="resumo-projeto">

      <div class="content is-size-5">
        <div id="estrutura-colunas" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. A Estrutura Kanban</h3>
          <p class="mb-5">O projeto foi baseado em um layout Kanban, uma ferramenta visual de gerenciamento de fluxo. Dividimos a interface em três colunas principais para representar o ciclo de vida de uma tarefa:</p>
          <div class="columns">
            <div class="column">
              <div class="box box-dark has-text-centered">
                <h4 class="title is-5 mb-2">A Fazer</h4>
                <p>Coluna inicial onde todas as novas tarefas são criadas.</p>
              </div>
            </div>
            <div class="column">
              <div class="box box-dark has-text-centered">
                <h4 class="title is-5 mb-2">Em Andamento</h4>
                <p>Tarefas que estão sendo executadas no momento.</p>
              </div>
            </div>
            <div class="column">
              <div class="box box-dark has-text-centered">
                <h4 class="title is-5 mb-2">Feito</h4>
                <p>Tarefas que foram concluídas.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="dom-dinamico" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Manipulação Dinâmica do DOM</h3>
          <p class="mb-5">A principal funcionalidade do projeto é a movimentação das tarefas entre as colunas. Isso foi feito <strong>sem recarregar a página</strong>, usando JavaScript para manipular o DOM:</p>
          <ul class="mb-5">
            <li><strong>Criação de Tarefas:</strong> Usamos <code>document.createElement('div')</code> e <code>innerHTML</code> para criar um novo card de tarefa com o texto do input.</li>
            <li><strong>Adição na Tela:</strong> A nova tarefa era adicionada na coluna "A Fazer" usando <code>containerTarefasAfazer.appendChild(novaTarefa)</code>.</li>
            <li><strong>Movimentação entre Colunas:</strong> Ao clicar no botão de mover, o JavaScript:
              <ol>
                <li>Identificava o card da tarefa (ex: com <code>event.target.closest('.tarefa')</code>).</li>
                <li>Removia o elemento da coluna atual (com <code>elementoPai.remove()</code>).</li>
                <li>Recriava o card na nova coluna (chamando uma nova função, ex: <code>criarTarefaAndamento()</code>).</li>
              </ol>
            </li>
          </ul>
        </div>

        <div id="persistencia-ls" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Persistência de Dados com LocalStorage</h3>
          <p class="mb-5">Para que as tarefas não sumissem ao fechar o navegador, usamos o <span class="highlight-pink">localStorage</span>.</p>
          <p class="mb-5">Como o localStorage só armazena texto, nós criamos um <strong>array de objetos</strong> para cada coluna e usamos <code>JSON.stringify()</code> para convertê-lo em string antes de salvar.</p>
          <pre class="p-4"><code>// Exemplo de como salvamos a lista "A Fazer"
const tarefasAFazer = [
  { nome: 'Estudar JS', coluna: 'fazer' },
  { nome: 'Fazer café', coluna: 'fazer' }
];

const listaString = JSON.stringify(tarefasAFazer);
localStorage.setItem('tarefasFazer', listaString);</code></pre>
          <p class="mt-5">Ao carregar a página, o script faz o processo inverso: usa <code>localStorage.getItem()</code> para ler a string e <code>JSON.parse()</code> para convertê-la de volta em um array. Em seguida, um laço <code>for</code> percorre o array e chama a função <code>criarTarefaAfazer()</code> para cada item, populando a tela.</p>
        </div>

        <div id="conclusao-projeto" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. O que Aprendemos</h3>
          <div class="box box-dark border-left-pink">
            <p class="mb-4">Este projeto conectou todos os pontos essenciais do front-end moderno:</p>
            <ul>
              <li>Como estruturar um HTML semântico.</li>
              <li>Como selecionar e manipular elementos do DOM em resposta a eventos.</li>
              <li>Como criar e remover elementos dinamicamente.</li>
              <li>Como organizar o código em funções reutilizáveis.</li>
              <li>Como persistir dados no navegador usando <code>localStorage</code> e <code>JSON</code>.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
`
        }
      ]
    },
    {
      "id": 8,
      "titulo": "Semana 8",
      "subtitulo": "4/4 dias",
      "descricao": "JavaScript Assíncrono e APIs - Conectando ao mundo real",
      "icone": "fa-cloud",
      "dias": [
        {
          id: 36,
          titulo: "Consumindo APIs",
          subtitulo: "Aula 8.1",
          descricao: "Introdução ao JavaScript assíncrono, APIs e consumo de dados externos usando fetch, async/await e tratamento de erros com try/catch.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-20">

      <div class="content is-size-5">
        <div id="o-que-e-api" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. O que é uma API? (A Analogia do Garçom)</h3>
          <p class="mb-5">Imagine que você está em um restaurante.</p>
          <ul class="mb-5">
            <li>O <strong>Cliente (Você)</strong> é o Front-end (seu código JS no navegador).</li>
            <li>A <strong>Cozinha</strong> é o Back-end (o servidor onde os dados estão).</li>
            <li>O <span class="highlight-pink">Garçom</span> é a <span class="highlight-pink">API</span> (Interface de Programação de Aplicações).</li>
          </ul>
          <p>Você não vai até a cozinha pegar sua comida. Você chama o garçom (API), faz um pedido (requisição) e ele te traz uma resposta (o prato pronto). A API é o contrato que define como o front-end deve pedir dados ao back-end.</p>
        </div>

        <div id="sync-vs-async" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Síncrono vs. Assíncrono</h3>
          <p class="mb-5">Por padrão, o JavaScript é <strong>síncrono</strong>, ou seja, executa uma linha de cada vez. Se ele precisa esperar 5 segundos por uma resposta de API, ele <strong>trava a página inteira</strong>. Ninguém consegue clicar em nada.</p>
          <p class="mb-5">O código <span class="highlight-pink">Assíncrono</span> resolve isso. Ele permite que o JS faça uma requisição e "siga em frente" com outras tarefas. Quando a resposta da API chegar, ele executa a função de retorno.</p>

          <h4 class="title is-5 mb-2">Exemplo com <code>setTimeout</code></h4>
          <p class="mb-4"><code>setTimeout</code> é uma função assíncrona simples. Ela agenda a execução de uma função para depois de X milissegundos, mas não para o resto do código.</p>
          <pre class="p-4"><code>console.log("1 - Primeiro");

setTimeout(function() {
  console.log("2 - Segundo (veio depois de 2s)");
}, 2000); // 2000 milissegundos = 2 segundos

console.log("3 - Terceiro");

// Ordem no console: 1, 3, 2</code></pre>
        </div>

        <div id="fetch-await" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. <code>fetch</code> com <code>async/await</code> (A Forma Moderna)</h3>
          <p class="mb-5"><code>fetch</code> é a ferramenta moderna do JS para fazer requisições a APIs. <code>async/await</code> é a sintaxe que nos permite escrever código assíncrono de uma forma que parece síncrona (mais fácil de ler).</p>
          <ul class="mb-5">
            <li><code>async</code>: Declara que uma função conterá código que "espera".</li>
            <li><code>await</code>: Pausa a execução da função (e não do navegador) até que a promessa (<code>fetch</code>) seja resolvida.</li>
          </ul>
          <pre class="p-4"><code>// 1. Declara a função como 'async'
async function buscarDadosDaAPI() {

  // 2. Faz a chamada com 'await'
  const response = await fetch('https://api.exemplo.com/dados');

  // 3. Espera a conversão dos dados (também é assíncrono!)
  const dados = await response.json();

  console.log(dados);
}

buscarDadosDaAPI(); // Chama a função</code></pre>
        </div>

        <div id="try-catch" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Tratando Erros com <code>try...catch</code></h3>
          <p class="mb-5">E se a internet cair? Ou a API estiver fora do ar? O <code>await</code> vai falhar e quebrar nosso código. Para evitar isso, "tentamos" (<code>try</code>) executar o código e "capturamos" (<code>catch</code>) o erro se ele acontecer.</p>
          <pre class="p-4"><code>async function buscarDadosComSeguranca() {
  try {
    // Tenta fazer isso
    const response = await fetch('https://api.exemplo.com/dados');

    // Se a resposta não for OK (ex: erro 404, 500), nós mesmos geramos um erro
    if (!response.ok) {
      throw new Error('Erro na rede: ' + response.statusText);
    }

    const dados = await response.json();
    console.log("Dados recebidos:", dados);

  } catch (error) {
    // Se qualquer coisa no 'try' falhar, o 'catch' é executado
    console.error("Houve um problema na requisição:", error.message);
    alert("Não foi possível carregar os dados. Tente novamente.");
  }
}</code></pre>
        </div>

        <div id="conclusao-api" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. Conclusão</h3>
          <div class="box box-dark border-left-pink">
            <p class="mb-4">Hoje aprendemos o fluxo essencial para consumir dados externos:</p>
            <ol>
              <li>Usamos <code>async/await</code> para lidar com o tempo de espera.</li>
              <li>Usamos <code>fetch</code> para fazer o "pedido" à API.</li>
              <li>Usamos <code>.json()</code> para "desempacotar" a resposta.</li>
              <li>Usamos <code>try...catch</code> para garantir que nosso código não quebre se o pedido falhar.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 37,
          titulo: "Trabalho em Equipe: Git e GitHub",
          subtitulo: "Aula 8.2",
          descricao: "Fundamentos da colaboração com Git e GitHub, incluindo branches, pull requests, CI/CD e fluxo de trabalho em equipe para se dar bem desenvolvendo o PI.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-21">

      <div class="content is-size-5">
        <div id="intro-collab" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. Por que Colaborar?</h3>
          <p class="mb-5">Programação é um esporte coletivo. Quase todo projeto profissional envolve múltiplos desenvolvedores trabalhando no mesmo código. O Git e o GitHub são as ferramentas que impedem que esse trabalho vire um caos, permitindo que todos contribuam de forma organizada.</p>
        </div>

        <div id="como-organizar" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Como Organizar um Repositório Compartilhado</h3>
          <p class="mb-5">Existem duas formas principais de compartilhar um repositório no GitHub para que sua equipe possa contribuir:</p>
          <div class="columns">
            <div class="column">
              <div class="box box-dark">
                <h4 class="title is-5 mb-3">Opção 1: Repositório Pessoal + Colaboradores</h4>
                <p>Uma pessoa (líder técnico ou dono) cria o repositório em sua conta pessoal e vai em <code>Settings > Collaborators</code> para convidar os outros membros da equipe. É simples e rápido para projetos pequenos ou pessoais.</p>
              </div>
            </div>
            <div class="column">
              <div class="box box-dark">
                <h4 class="title is-5 mb-3">Opção 2: Conta Corporativa (Organization)</h4>
                <p>Cria-se uma "Organização" no GitHub (ex: "Serasa"). O repositório pertence à organização, não a uma pessoa. Os membros são adicionados à organização e ganham permissões. <strong>Esta é a forma profissional</strong> e usada por todas as empresas.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="o-que-e-branch" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. O que é uma Branch (Ramificação)?</h3>
          <div class="columns is-vcentered">
            <div class="column">
              <p class="mb-4">Pense na branch <code>main</code> como a "versão oficial" e estável do seu projeto, o código que está funcionando.</p>
              <p class="mb-4">Uma <span class="highlight-pink">branch</span> é uma "linha do tempo" independente, uma cópia que você cria a partir da <code>main</code>. Nela, você pode trabalhar em uma nova funcionalidade (ex: "login-facebook") ou corrigir um bug sem estragar a versão principal.</p>
              <p>Depois que seu trabalho na branch está pronto e testado, você a "mescla" (merge) de volta na <code>main</code>.</p>
            </div>
            <div class="column">
              <figure class="image">
                <img src="https://hermes.dio.me/assets/articles/b498d93b-ff2c-4710-a5b6-2305ef40a8e7.png" alt="Diagrama ilustrando a branch main e uma feature branch saindo e voltando" />
              </figure>
            </div>
          </div>
        </div>

        <div id="gitflow-basico" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. O Fluxo de Trabalho Básico (Git Workflow)</h3>
          <p class="mb-5">Para evitar conflitos, seguimos um fluxo de trabalho. A regra de ouro é: <strong>NUNCA ENVIE CÓDIGO DIRETO PARA A BRANCH <code>main</code></strong>.</p>
          <div class="mb-5">
            <h4 class="title is-5 mb-3">Passo 1: Criar uma Branch (Ramificação)</h4>
            <p class="mb-3">A <code>main</code> é a nossa versão "de produção". Para criar uma nova funcionalidade, você cria uma "cópia" dela para trabalhar sem afetar o código principal.</p>
            <pre class="p-4"><code>git checkout -b minha-nova-feature</code></pre>
          </div>
          <div class="mb-5">
            <h4 class="title is-5 mb-3">Passo 2: Fazer Commits</h4>
            <p class="mb-3">Trabalhe na sua <code>branch</code> e salve seu progresso com commits claros.</p>
            <pre class="p-4"><code>git add .
git commit -m "Adiciona o formulário de login"</code></pre>
          </div>
          <div class="mb-5">
            <h4 class="title is-5 mb-3">Passo 3: Enviar sua Branch (Push)</h4>
            <p class="mb-3">Envie sua <code>branch</code> (com seus commits) para o GitHub.</p>
            <pre class="p-4"><code>git push origin minha-nova-feature</code></pre>
          </div>
          <div class="mb-5">
            <h4 class="title is-5 mb-3">Passo 4: Abrir um Pull Request (PR)</h4>
            <p class="mb-3">No site do GitHub, você abre um "Pedido de Junção" (Pull Request), pedindo para juntar (merge) a sua <code>minha-nova-feature</code> na branch <code>main</code>. Aqui é onde seu time revisa seu código, sugere melhorias e aprova as mudanças.</p>
          </div>
          <div class="mb-5">
            <h4 class="title is-5 mb-3">Passo 5: Merge</h4>
            <p>Após aprovado, o líder do time (ou você mesmo, dependendo das regras) clica em "Merge". Seu código agora faz parte da branch <code>main</code>!</p>
          </div>
        </div>

        <div id="ci-cd" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. CI/CD com GitHub Pages</h3>
          <p class="mb-5"><span class="highlight-pink">CI/CD</span> significa "Integração Contínua / Deploy Contínuo". É um processo <strong>automático</strong> que acontece após o merge.</p>
          <div class="box box-dark">
            <h4 class="title is-5 mb-3">Como configuramos (Ex: GitHub Pages):</h4>
            <ol class="mb-3">
              <li>Nas configurações do repositório, ativamos o GitHub Pages para fazer o "deploy" a partir da branch <code>main</code>.</li>
              <li>O GitHub automaticamente cria um fluxo (uma "Action") de CI/CD.</li>
              <li><strong>Quando um PR é mergeado na <code>main</code>...</strong></li>
              <li>O GitHub detecta a mudança e aciona a pipeline de CI/CD.</li>
              <li>Essa pipeline "constrói" o site e o publica automaticamente.</li>
              <li>Em 1 ou 2 minutos, o site ao vivo (no link .github.io) está atualizado!</li>
            </ol>
            <p class="mt-3">Isso garante que a branch <code>main</code> sempre representa o código que está em produção.</p>
          </div>
        </div>

        <div id="conclusao-collab" class="mb-6">
          <h3 class="title is-4 section-title mb-4">6. Resumo do Fluxo</h3>
          <div class="box box-dark border-left-pink">
            <p class="mb-4">Este é o ciclo de vida de uma nova funcionalidade no desenvolvimento profissional:</p>
            <p class="has-text-centered is-size-5"><code>Branch</code> ➡️ <code>Commit</code> ➡️ <code>Push</code> ➡️ <code>Pull Request (Revisão)</code> ➡️ <code>Merge</code> ➡️ <code>Deploy (CI/CD)</code></p>
          </div>
        </div>

        <div id="comandos-git" class="mb-6">
          <h3 class="title is-4 section-title mb-4">7. Comandos Git Essenciais para Branches</h3>
          <p class="mb-5">Aqui estão os comandos mais importantes para trabalhar com branches no dia a dia:</p>
          <div class="mb-5">
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">Criar uma nova branch</h4>
              <pre class="p-4"><code>git checkout -b nome-da-branch</code></pre>
              <p class="mt-2">Cria uma nova branch e já muda para ela automaticamente.</p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">Listar todas as branches</h4>
              <pre class="p-4"><code>git branch</code></pre>
              <p class="mt-2">Mostra todas as branches locais. A branch atual aparece com um asterisco (*).</p>
              <pre class="p-4"><code>git branch -a</code></pre>
              <p class="mt-2">Mostra todas as branches (locais e remotas).</p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">Mudar de branch</h4>
              <pre class="p-4"><code>git checkout nome-da-branch</code></pre>
              <p class="mt-2">Alterna para uma branch existente.</p>
              <pre class="p-4"><code>git switch nome-da-branch</code></pre>
              <p class="mt-2">Comando mais moderno para mudar de branch (Git 2.23+).</p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">Atualizar sua branch com mudanças remotas</h4>
              <pre class="p-4"><code>git pull origin nome-da-branch</code></pre>
              <p class="mt-2">Puxa (baixa) as últimas mudanças da branch remota para sua branch local.</p>
              <pre class="p-4"><code>git pull</code></pre>
              <p class="mt-2">Se você já está na branch, pode usar apenas <code>git pull</code>.</p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">Enviar sua branch para o GitHub</h4>
              <pre class="p-4"><code>git push origin nome-da-branch</code></pre>
              <p class="mt-2">Envia sua branch local para o repositório remoto (GitHub).</p>
              <pre class="p-4"><code>git push -u origin nome-da-branch</code></pre>
              <p class="mt-2">O <code>-u</code> configura o rastreamento, então depois você pode usar apenas <code>git push</code>.</p>
              <pre class="p-4"><code>git push --set-upstream origin nome-da-branch</code></pre>
              <p class="mt-2">Forma mais explícita do comando anterior. O <code>--set-upstream</code> é o mesmo que <code>-u</code>, configurando a branch remota como "upstream" (referência) da sua branch local. Após usar este comando uma vez, você pode simplesmente usar <code>git push</code> ou <code>git pull</code> sem especificar origem e branch.</p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">Atualizar a branch main local</h4>
              <pre class="p-4"><code>git checkout main
git pull origin main</code></pre>
              <p class="mt-2">Sempre atualize sua branch <code>main</code> local antes de criar uma nova branch.</p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">Deletar uma branch (após o merge)</h4>
              <pre class="p-4"><code>git branch -d nome-da-branch</code></pre>
              <p class="mt-2">Deleta uma branch local que já foi mergeada.</p>
              <pre class="p-4"><code>git push origin --delete nome-da-branch</code></pre>
              <p class="mt-2">Deleta a branch no repositório remoto (GitHub).</p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">Ver o status da sua branch</h4>
              <pre class="p-4"><code>git status</code></pre>
              <p class="mt-2">Mostra em qual branch você está e quais arquivos foram modificados.</p>
            </div>
          </div>
        </div>

        <div id="github-desktop" class="mb-6">
          <h3 class="title is-4 section-title mb-4">8. Passo a Passo com GitHub Desktop</h3>
          <p class="mb-5">Se você prefere uma interface gráfica, o GitHub Desktop facilita muito o trabalho com branches. Veja como fazer:</p>
          <div class="mb-5">
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">📋 Passo 1: Atualizar a Branch Main</h4>
              <ol class="mb-3">
                <li>Certifique-se de que está na branch <code>main</code> (você vê o nome no topo da janela)</li>
                <li>Clique no botão <strong>"Fetch origin"</strong> para verificar se há atualizações</li>
                <li>Se aparecer <strong>"Pull origin"</strong>, clique para baixar as mudanças mais recentes</li>
              </ol>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">🌿 Passo 2: Criar uma Nova Branch</h4>
              <ol class="mb-3">
                <li>Clique no botão <strong>"Current Branch"</strong> no topo</li>
                <li>Clique em <strong>"New Branch"</strong></li>
                <li>Digite um nome descritivo para sua branch (ex: <code>feature/login-facebook</code>)</li>
                <li>Certifique-se de que está criando a partir de <code>main</code></li>
                <li>Clique em <strong>"Create Branch"</strong></li>
              </ol>
              <p class="mt-3 p-3 box-dark">💡 <strong>Dica:</strong> Use nomes descritivos como <code>feature/nova-funcionalidade</code>, <code>bugfix/corrige-erro</code>, ou <code>hotfix/problema-critico</code></p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">💻 Passo 3: Fazer Suas Alterações</h4>
              <ol class="mb-3">
                <li>Trabalhe normalmente no seu código</li>
                <li>O GitHub Desktop detectará automaticamente os arquivos modificados</li>
                <li>Você verá a lista de mudanças no painel esquerdo</li>
              </ol>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">💾 Passo 4: Fazer Commit das Mudanças</h4>
              <ol class="mb-3">
                <li>Revise as mudanças no painel central</li>
                <li>Marque os arquivos que deseja incluir no commit (geralmente todos)</li>
                <li>No campo inferior, escreva uma mensagem de commit clara e descritiva</li>
                <li>Clique no botão azul <strong>"Commit to nome-da-branch"</strong></li>
              </ol>
              <p class="mt-3 p-3 box-dark">💡 <strong>Dica:</strong> Faça commits pequenos e frequentes com mensagens claras como "Adiciona formulário de login" ou "Corrige bug no botão de envio"</p>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">☁️ Passo 5: Publicar/Enviar a Branch (Push)</h4>
              <ol class="mb-3">
                <li>Após fazer o commit, você verá um botão <strong>"Publish branch"</strong> (primeira vez)</li>
                <li>Clique nele para enviar sua branch para o GitHub</li>
                <li>Nos próximos commits, o botão mudará para <strong>"Push origin"</strong></li>
                <li>Sempre clique em <strong>"Push origin"</strong> após fazer commits para enviar ao GitHub</li>
              </ol>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">🔀 Passo 6: Criar um Pull Request</h4>
              <ol class="mb-3">
                <li>Após fazer push, aparecerá um botão <strong>"Create Pull Request"</strong></li>
                <li>Clique nele para abrir o navegador no GitHub</li>
                <li>Ou vá manualmente ao GitHub e clique em <strong>"Compare & pull request"</strong></li>
                <li>Adicione uma descrição detalhada do que foi feito</li>
                <li>Selecione os revisores (membros da equipe)</li>
                <li>Clique em <strong>"Create Pull Request"</strong></li>
              </ol>
            </div>
            <div class="box box-dark mb-4">
              <h4 class="title is-5 mb-3">✅ Passo 7: Após Aprovação e Merge</h4>
              <ol class="mb-3">
                <li>Aguarde a revisão e aprovação do time</li>
                <li>Após o merge no GitHub, volte ao GitHub Desktop</li>
                <li>Mude para a branch <code>main</code></li>
                <li>Clique em <strong>"Fetch origin"</strong> e depois <strong>"Pull origin"</strong></li>
                <li>Sua branch <code>main</code> local agora está atualizada!</li>
                <li>(Opcional) Delete a branch antiga clicando em <strong>"Branch"</strong> > <strong>"Delete"</strong></li>
              </ol>
            </div>
            <div class="box box-dark border-left-pink">
              <h4 class="title is-5 mb-3">📌 Resumo Visual do Fluxo no GitHub Desktop</h4>
              <p class="has-text-centered is-size-5">Main atualizada → Nova Branch → Alterações → Commit → Push → Pull Request → Merge → Voltar para Main</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 38,
          titulo: "APIs, Animações e Clipboard",
          subtitulo: "Aula 8.3",
          descricao: "Exploração de APIs públicas, uso de bibliotecas CSS via CDN como Animate.css e implementação de funcionalidades de clipboard para copiar texto.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-22">

      <div class="content is-size-5">
        <div id="public-apis" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. Onde Encontrar APIs para Praticar?</h3>
          <p class="mb-5">Na última aula, vimos como buscar dados com <code>fetch</code>. Mas onde encontrar dados reais para nossos projetos?</p>
          <div class="box box-dark">
            <h4 class="title is-5 mb-3">Recurso: <code>publicapi.dev</code></h4>
            <p class="mb-4">Este site é um repositório gigantesco de APIs públicas e gratuitas que você pode usar para praticar.</p>
            <ul class="mb-4">
              <li>Quer dados sobre Pokémon? Use a PokeAPI.</li>
              <li>Quer dados sobre filmes? Use a OMDb API.</li>
              <li>Quer dados sobre o clima? Existem várias APIs para isso.</li>
            </ul>
            <a href="https://publicapi.dev/" target="_blank" class="button is-link">Visitar o publicapi.dev</a>
          </div>
        </div>

        <div id="cdn-animate" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. CSS Externo (CDN) e <code>Animate.css</code></h3>
          <p class="mb-5">Não precisamos escrever todas as nossas animações ou estilos do zero. Podemos usar bibliotecas de CSS prontas, como a <strong>Animate.css</strong>.</p>

          <h4 class="title is-5 mb-2">O que é um CDN?</h4>
          <p class="mb-4">CDN (Content Delivery Network) é um serviço que hospeda arquivos (como bibliotecas CSS ou JS) em servidores ao redor do mundo. Em vez de baixar o arquivo, nós apenas o linkamos no nosso <code>&lt;head&gt;</code>.</p>

          <h4 class="title is-5 mb-2">Usando Animate.css</h4>
          <p class="mb-4">É uma biblioteca com dezenas de animações prontas que podemos usar apenas adicionando classes ao nosso HTML.</p>
          <pre class="p-4"><code>&lt;!-- 1. Adicione o link do CDN no &lt;head&gt; --&gt;
&lt;head&gt;
  &lt;link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  /&gt;
&lt;/head&gt;

&lt;!-- 2. Use as classes no HTML para animar --&gt;
&lt;h1 class="animate__animated animate__bounce"&gt;Isso aqui pula!&lt;/h1&gt;

&lt;!-- 3. Use com JS para animar em um evento --&gt;
&lt;button id="meu-botao"&gt;Clique para animar&lt;/button&gt;
&lt;p id="texto-animado"&gt;Eu vou aparecer com fade!&lt;/p&gt;

&lt;script&gt;
  const botao = document.getElementById('meu-botao');
  const texto = document.getElementById('texto-animado');

  botao.addEventListener('click', () => {
    texto.classList.add('animate__animated', 'animate__fadeInUp');
  });
&lt;/script&gt;</code></pre>
        </div>

        <div id="clipboard" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Copiando Texto (Clipboard)</h3>
          <p class="mb-5">Muitas vezes queremos dar ao usuário um botão para "Copiar" um código, um link de convite ou um cupom.</p>

          <h4 class="title is-5 mb-2">Método <code>navigator.clipboard</code> (Moderno)</h4>
          <p class="mb-4">A forma mais nova e limpa de fazer isso. Funciona com <code>async/await</code> e é baseada em "Promessas". <strong>Nota:</strong> Pode não funcionar em todos os ambientes (ex: alguns iframes ou sites não-HTTPS).</p>
          <pre class="p-4"><code>async function copiarTextoModerno(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    alert('Texto copiado com sucesso!');
  } catch (err) {
    console.error('Falha ao copiar: ', err);
  }
}

// Para usar:
// copiarTextoModerno('Seu cupom: VITOR10');</code></pre>

          <h4 class="title is-5 mb-2">Método <code>document.execCommand</code> (Compatível)</h4>
          <p class="mb-4">É a forma mais antiga, mas <strong>funciona em praticamente todos os lugares</strong>, incluindo ambientes de teste. Ela é um pouco mais "manual":</p>
          <pre class="p-4"><code>function copiarTextoCompativel(texto) {
  // 1. Cria um textarea temporário fora da tela
  const textarea = document.createElement('textarea');
  textarea.value = texto;
  document.body.appendChild(textarea);

  // 2. Seleciona o texto dentro do textarea
  textarea.select();

  // 3. Executa o comando "copiar"
  try {
    document.execCommand('copy');
    alert('Texto copiado!');
  } catch (err) {
    console.error('Falha ao copiar', err);
  }

  // 4. Remove o textarea temporário
  document.body.removeChild(textarea);
}

// Para usar:
// copiarTextoCompativel('Seu cupom: VITOR10');</code></pre>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 39,
          titulo: "O Que É Um iFrame?",
          subtitulo: "Aula 6.4",
          descricao: "Introdução ao elemento iframe, sua sintaxe, usos comuns como embeds de vídeos e mapas, e considerações de segurança.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-24">
      <div class="content is-size-5">
        <div id="o-que-e-iframe" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. Uma Janela dentro do seu Site</h3>
          <p class="mb-5">A tag <code>&lt;iframe&gt;</code> (Inline Frame) é um elemento HTML que permite <span class="highlight-pink">embutir outra página web completa</span> dentro da sua página atual.</p>
          <p>Pense nela como abrir uma "janela" no seu site onde você pode exibir o conteúdo de um outro site, como um vídeo do YouTube ou um mapa do Google Maps. O conteúdo dentro do iframe é totalmente independente do seu site.</p>
        </div>

        <div id="sintaxe-iframe" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. Sintaxe e Atributos Principais</h3>
          <p class="mb-5">A tag é simples de usar. O atributo mais importante é o <code>src</code>, que define o URL da página que você quer carregar.</p>
          <pre class="p-4"><code>&lt;iframe
  src="https://www.example.com"
  width="600"
  height="400"
  frameborder="0"
  allowfullscreen
&gt;&lt;/iframe&gt;</code></pre>
          <div class="columns mt-4">
            <div class="column">
              <div class="box box-dark"><strong>src</strong>: A URL da página a ser embutida.</div>
            </div>
            <div class="column">
              <div class="box box-dark"><strong>width/height</strong>: Definem o tamanho da janela do iframe.</div>
            </div>
            <div class="column">
              <div class="box box-dark"><strong>frameborder="0"</strong>: Remove a borda padrão feia do iframe.</div>
            </div>
            <div class="column">
              <div class="box box-dark"><strong>allowfullscreen</strong>: Permite que o conteúdo (como um vídeo) possa ser exibido em tela cheia.</div>
            </div>
          </div>
        </div>

        <div id="exemplos-uso" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Exemplos de Uso Comum</h3>
          <p class="mb-5">Você usa iframes o tempo todo, mesmo sem perceber. Os famosos "embeds" quase sempre são iframes.</p>

          <h4 class="title is-5 mb-2">Embutir um Vídeo do YouTube</h4>
          <p class="mb-4">O próprio YouTube fornece o código de iframe pronto para você copiar e colar.</p>
          <pre class="p-4"><code>&lt;iframe
  width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen&gt;
&lt;/iframe&gt;</code></pre>

          <h4 class="title is-5 mb-2">Embutir um Mapa do Google Maps</h4>
          <p class="mb-4">O Google Maps também tem uma opção "Compartilhar > Incorporar um mapa" que gera um iframe.</p>
          <pre class="p-4"><code>&lt;iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600" height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"&gt;
&lt;/iframe&gt;</code></pre>
        </div>

        <div id="consideracoes-iframe" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Considerações de Segurança</h3>
          <p class="mb-5">Iframes são poderosos, mas podem ser um risco de segurança. Por isso, os navegadores impõem restrições:</p>
          <ul class="mb-5">
            <li><strong>Same-Origin Policy:</strong> Por padrão, o JavaScript da sua página <strong>não pode</strong> ler ou manipular o conteúdo de um iframe que venha de um domínio diferente (ex: seu site não pode ler o que acontece dentro do iframe do YouTube).</li>
            <li><strong>X-Frame-Options:</strong> Muitos sites (como o Google, Facebook, e o próprio Serasa) proíbem ser carregados dentro de um iframe. Eles enviam um aviso ao navegador dizendo "Não me coloque em uma janela!", para prevenir ataques de "clickjacking".</li>
          </ul>
          <p class="mt-3">Em resumo: use iframes para embutir conteúdo de serviços que explicitamente permitem isso (como YouTube, Maps, Spotify).</p>
        </div>
      </div>
    </section>
  </div>
`
        }
      ]
    },
    {
      "id": 9,
      "titulo": "Semana 9",
      "subtitulo": "2/2 dias",
      "descricao": "Ferramentas Modernas - Variáveis CSS, Bulma e Métodos de Array",
      "icone": "fa-tools",
      "dias": [
        {
          id: 40,
          titulo: "Variáveis CSS, Bulma e Métodos de Array",
          subtitulo: "Aula 9.1",
          descricao: "Introdução a variáveis CSS, framework Bulma com componentes como botões, notificações e formulários, e métodos de array como forEach, map, filter, find e reduce.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-25">

      <div class="content is-size-5">
        <div id="variaveis-css" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. Variáveis CSS (Propriedades Customizadas)</h3>
          <p class="mb-5">Variáveis CSS são uma forma de definir valores (como cores, fontes, tamanhos) em um lugar e reutilizá-los em todo o seu arquivo CSS. Isso é <strong>excelente para manutenção</strong>, especialmente para criar temas (como Dark/Light Mode).</p>
          <p class="mb-5">Declaramos uma variável usando <code>--nome-da-variavel</code> dentro do seletor <code>:root</code> (que representa a raiz do documento HTML).</p>
          <pre class="p-4"><code>/* 1. Definindo as variáveis no :root */
:root {
  --cor-principal: #e80170;
  --cor-fundo: #111827;
  --tamanho-fonte-padrao: 16px;
}

/* 2. Usando as variáveis com a função var() */
body {
  background-color: var(--cor-fundo);
  font-size: var(--tamanho-fonte-padrao);
}

.botao-destaque {
  background-color: var(--cor-principal);
  color: white;
}</code></pre>
        </div>

        <div id="o-que-e-framework" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. O que é um Framework CSS?</h3>
          <p class="mb-5">Um Framework CSS é um conjunto de código CSS pré-escrito que fornece uma base de estilos e componentes para acelerar o desenvolvimento. Ele resolve problemas comuns de layout, responsividade e design.</p>

          <div class="box box-dark">
            <h4 class="title is-5 mb-3">Baseado em Componentes (Ex: Bulma, Bootstrap)</h4>
            <p>Fornece "componentes prontos". Você usa classes que representam o componente (ex: <code>button</code>, <code>card</code>). É ótimo para construir rápido sem ter que inventar o design do zero.</p>
            <pre class="p-4"><code>&lt;button class="button is-primary"&gt;&lt;/button&gt;</code></pre>
          </div>
        </div>

        <div id="intro-bulma" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Introdução ao Bulma CSS</h3>
          <p class="mb-5">O <strong>Bulma</strong> é um framework CSS moderno, leve e baseado em componentes. Ele <strong>não usa JavaScript</strong>, sendo focado apenas em CSS. É famoso por sua sintaxe limpa e seu poderoso sistema de layout baseado em Flexbox.</p>

          <h4 class="title is-5 mb-2">Como Usar (Via CDN)</h4>
          <p class="mb-4">Assim como o Animate.css, podemos apenas linkar o arquivo CDN no nosso <code>&lt;head&gt;</code>:</p>
          <pre class="p-4"><code>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css"&gt;
&lt;/head&gt;</code></pre>
        </div>

        <div id="exemplos-bulma" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. Exemplos de Componentes Bulma</h3>
          <p class="mb-5">A estilização no Bulma é feita adicionando classes com nomes fáceis de entender:</p>

          <h4 class="title is-5 mb-2">Botões (Button)</h4>
          <pre class="p-4"><code>&lt;button class="button is-primary"&gt;Botão Primário&lt;/button&gt;
&lt;button class="button is-link is-light"&gt;Botão Link Claro&lt;/button&gt;
&lt;button class="button is-danger is-large"&gt;Botão Perigo Grande&lt;/button&gt;
&lt;button class="button is-loading"&gt;Carregando...&lt;/button&gt;</code></pre>
          <div class="box">
            <button class="button is-primary">Botão Primário</button>
            <button class="button is-link is-light">Botão Link Claro</button>
            <button class="button is-danger is-large">Botão Perigo Grande</button>
            <button class="button is-loading">Carregando...</button>
          </div>

          <h4 class="title is-5 mb-2">Notificações (Notification)</h4>
          <pre class="p-4"><code>&lt;div class="notification is-success"&gt;
  Formulário enviado com sucesso!
&lt;/div&gt;</code></pre>
          <div class="box">
            <div class="notification is-success">
              Formulário enviado com sucesso!
            </div>
          </div>

          <h4 class="title is-5 mb-2">Cartão (Card)</h4>
          <pre class="p-4"><code>&lt;div class="card" style="width: 300px;"&gt;
  &lt;div class="card-image"&gt;
    &lt;figure class="image is-4by3"&gt;
      &lt;img src="https://placehold.co/300x225" alt="Placeholder image"&gt;
    &lt;/figure&gt;
  &lt;/div&gt;
  &lt;div class="card-content"&gt;
    &lt;p class="title is-4"&gt;Título do Card&lt;/p&gt;
    &lt;p class="subtitle is-6"&gt;@bulmacss&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          <div class="box">
            <div class="card" style="width: 300px;">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://placehold.co/300x225/e80170/white?text=Bulma" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-4">Título do Card</p>
                <p class="subtitle is-6">@bulmacss</p>
              </div>
            </div>
          </div>

          <h4 class="title is-5 mb-2">Herói (Hero)</h4>
          <pre class="p-4"><code>&lt;section class="hero is-primary"&gt;
  &lt;div class="hero-body"&gt;
    &lt;p class="title"&gt;
      Seção Hero Primária
    &lt;/p&gt;
    &lt;p class="subtitle"&gt;
      Um subtítulo simples
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>
          <div class="box">
            <section class="hero is-primary">
              <div class="hero-body">
                <p class="title">
                  Seção Hero Primária
                </p>
                <p class="subtitle">
                  Um subtítulo simples
                </p>
              </div>
            </section>
          </div>

          <h4 class="title is-5 mb-2">Formulário (Form)</h4>
          <pre class="p-4"><code>&lt;div class="field"&gt;
  &lt;label class="label"&gt;Nome&lt;/label&gt;
  &lt;div class="control"&gt;
    &lt;input class="input" type="text" placeholder="Seu nome"&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="field"&gt;
  &lt;label class="label"&gt;Email&lt;/label&gt;
  &lt;div class="control"&gt;
    &lt;input class="input is-danger" type="email" placeholder="email@exemplo.com"&gt;
  &lt;/div&gt;
  &lt;p class="help is-danger"&gt;Este email é inválido&lt;/p&gt;
&lt;/div&gt;</code></pre>
          <div class="box">
            <div class="field">
              <label class="label">Nome</label>
              <div class="control">
                <input class="input" type="text" placeholder="Seu nome">
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input is-danger" type="email" placeholder="email@exemplo.com">
              </div>
              <p class="help is-danger">Este email é inválido</p>
            </div>
          </div>
        </div>

        <div id="hof" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. Métodos de Array (Funções de Ordem Superior)</h3>
          <p class="mb-5">O JavaScript moderno nos dá ferramentas muito poderosas para manipular arrays sem precisar escrever laços <code>for</code> manualmente. Essas ferramentas são chamadas de <strong>Funções de Ordem Superior (Higher-Order Functions)</strong>.</p>
          <p class="mb-5">Elas são chamadas assim porque são funções (métodos) que <strong>recebem outra função</strong> (chamada de "callback") como argumento, aplicando essa função "callback" a cada item do array.</p>
          <p class="mb-5">Os métodos <code>.forEach()</code>, <code>.map()</code> e <code>.filter()</code> são os exemplos mais comuns que usamos no dia a dia.</p>

          <h4 class="title is-5 mb-2"><code>.forEach()</code> - O "para cada"</h4>
          <p class="mb-4">É uma alternativa moderna ao laço <code>for</code>. Ele executa uma função para cada item de um array.</p>
          <pre class="p-4"><code>const nomes = ['Ana', 'Bia', 'Carlos'];

// Para cada 'nome' dentro do array 'nomes', execute a função
nomes.forEach(function(nome) {
  console.log(\`Olá, \${nome}\`);
});
// Saída: Olá, Ana
//         Olá, Bia
//         Olá, Carlos</code></pre>

          <h4 class="title is-5 mb-2"><code>.map()</code> - O "transformador"</h4>
          <p class="mb-4">Executa uma função para cada item e <strong>retorna um novo array</strong> com os resultados da transformação. Não modifica o array original.</p>
          <pre class="p-4"><code>const numeros = [1, 2, 3, 4];

// Para cada 'numero', retorne ele multiplicado por 2
const numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(numerosDobrados); // Saída: [2, 4, 6, 8]
console.log(numeros);         // Saída: [1, 2, 3, 4] (o original não mudou)</code></pre>

          <h4 class="title is-5 mb-2"><code>.filter()</code> - O "filtro"</h4>
          <p class="mb-4">Executa uma função de teste para cada item e <strong>retorna um novo array</strong> apenas com os itens que passaram no teste (onde a função retornou <code>true</code>).</p>
          <pre class="p-4"><code>const idades = [15, 20, 32, 12, 18];

// Para cada 'idade', retorne 'true' APENAS SE a idade for >= 18
const maioresDeIdade = idades.filter(function(idade) {
  return idade >= 18;
});

console.log(maioresDeIdade); // Saída: [20, 32, 18]</code></pre>

          <h4 class="title is-5 mb-2"><code>.find()</code> - O "localizador"</h4>
          <p class="mb-4">Parecido com o <code>.filter()</code>, mas ele para e <strong>retorna o primeiro item (o valor)</strong> que satisfaz a condição. Retorna <code>undefined</code> se não encontrar.</p>
          <pre class="p-4"><code>const produtos = [
  { id: 1, nome: 'Mouse', preco: 150 },
  { id: 2, nome: 'Teclado', preco: 300 },
  { id: 3, nome: 'Monitor', preco: 800 }
];

const produtoEncontrado = produtos.find(function(produto) {
  return produto.preco > 200;
});

console.log(produtoEncontrado); // Saída: { id: 2, nome: 'Teclado', preco: 300 }</code></pre>

          <h4 class="title is-5 mb-2"><code>.reduce()</code> - O "acumulador"</h4>
          <p class="mb-4">O mais poderoso. Ele "reduz" o array a um <strong>valor único</strong> (como um número, uma string, etc.). Ele executa uma função para cada item, passando o resultado da iteração anterior (o "acumulador") para a próxima.</p>
          <pre class="p-4"><code>const numeros = [10, 20, 30, 40];

// O 'reduce' recebe a função (acumulador, valorAtual) e um valor inicial (0)
const somaTotal = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0); // O '0' é o valor inicial do acumulador

console.log(somaTotal); // Saída: 100</code></pre>
        </div>
      </div>
    </section>
  </div>
`
        },
        {
          id: 41,
          titulo: "Organizando seu Código JavaScript",
          subtitulo: "Aula 9.2",
          descricao: "Organização de código JavaScript com módulos, separação de responsabilidades, uso de import/export, e comparação entre método moderno e clássico.",
          icone: "fa-brain",
          conteudo: `
  <div class="container">
    <section id="aula-26">

      <div class="content is-size-5">
        <div id="o-problema" class="mb-6">
          <h3 class="title is-4 section-title mb-4">1. O Problema do "Arquivo Único"</h3>
          <p class="mb-5">Até agora, colocamos todo o nosso código JavaScript em um único arquivo (ex: <code>script.js</code>). Para projetos pequenos, isso funciona.</p>
          <p class="mb-5">Mas o que acontece quando seu projeto cresce? Seu <code>script.js</code> pode chegar a 500, 1000, 5000 linhas. Isso causa vários problemas:</p>
          <ul class="mb-5">
            <li><strong>Dificuldade de Leitura:</strong> Encontrar uma função específica vira um pesadelo.</li>
            <li><strong>Manutenção Difícil:</strong> Alterar uma parte do código pode quebrar outra sem querer.</li>
            <li><strong>Reutilização Zero:</strong> Você não consegue reaproveitar funções facilmente em outros projetos.</li>
            <li><strong>Conflitos no Git:</strong> Duas pessoas trabalhando no mesmo arquivo gigante ao mesmo tempo é receita para conflitos.</li>
          </ul>
        </div>

        <div id="a-solucao" class="mb-6">
          <h3 class="title is-4 section-title mb-4">2. A Solução: Separação de Responsabilidades</h3>
          <p class="mb-5">A solução é dividir nosso código em múltiplos arquivos, onde cada arquivo tem uma <strong>responsabilidade única</strong>.</p>
          <p class="mb-5">Usando o seu exemplo, podemos pensar em uma "cozinha profissional":</p>
          <ul class="mb-5">
            <li><strong>Arquivo 1: <code>elements.js</code> (O Almoxarife)</strong><br>
              Responsabilidade: Apenas selecionar e "entregar" os elementos do DOM. Ele não faz mais nada.</li>
            <li><strong>Arquivo 2: <code>api.js</code> (O Entregador)</strong><br>
              Responsabilidade: Apenas buscar dados externos (API). Ele não sabe o que vai acontecer com esses dados.</li>
            <li><strong>Arquivo 3: <code>main.js</code> (O Chef)</strong><br>
              Responsabilidade: Orquestrar tudo. Ele pede os elementos ao "Almoxarife", pede os dados ao "Entregador" e aplica a lógica (Event Listeners).</li>
          </ul>
        </div>

        <div id="diagrama-fluxo" class="mb-6">
          <h3 class="title is-4 section-title mb-4">3. Diagrama Visual do Fluxo (Módulos)</h3>
          <p class="mb-5">Podemos visualizar essa organização da seguinte forma. O HTML é o ponto de entrada que carrega apenas o "Chef" (<code>main.js</code>), e o "Chef" se encarrega de importar as ferramentas dos outros arquivos.</p>
          <pre class="p-4"><code>  index.html
      │
      └── &lt;script type="module" src="main.js"&gt;&lt;/script&gt;
                   │
                   ├── import { ... } from './elements.js'
                   │     (Busca os elementos do DOM)
                   │
                   └── import { ... } from './api.js'
                         (Busca as funções da API)</code></pre>
        </div>

        <div id="como-fazer" class="mb-6">
          <h3 class="title is-4 section-title mb-4">4. A Solução Moderna: Módulos JS (import/export)</h3>
          <p class="mb-5">Para fazer os arquivos "conversarem" de forma segura, usamos as palavras-chave <code>export</code> (para expor uma função/variável) e <code>import</code> (para buscar).</p>

          <h4 class="title is-5 mb-2"><code>export</code>: Disponibilizando o código</h4>
          <p class="mb-4">No arquivo que queremos disponibilizar (ex: <code>elements.js</code>), nós usamos <code>export</code> na frente do que queremos "enviar para fora".</p>
          <pre class="p-4"><code>// Em: elements.js
export const botaoAdicionar = document.getElementById('botao-adicionar-tarefa');
export const containerTarefas = document.querySelector('.container-tarefas-a-fazer');

// Em: api.js
export async function buscarDadosDaAPI() {
  const response = await fetch('https://api.exemplo.com/dados');
  const data = await response.json();
  return data;
}</code></pre>

          <h4 class="title is-5 mb-2"><code>import</code>: Buscando o código</h4>
          <p class="mb-4">No nosso arquivo principal (ex: <code>main.js</code>), nós usamos <code>import</code> para "puxar" as funções e variáveis que precisamos.</p>
          <pre class="p-4"><code>// Em: main.js (O "Chef")

// 1. Importamos o que precisamos dos outros arquivos
import { botaoAdicionar, containerTarefas } from './elements.js';
import { buscarDadosDaAPI } from './api.js';

// 2. Agora podemos usá-los!
botaoAdicionar.addEventListener('click', () => {
  // ... lógica do clique ...
  containerTarefas.innerHTML = "Novo item!";
});</code></pre>
        </div>

        <div id="html-modules" class="mb-6">
          <h3 class="title is-4 section-title mb-4">5. A Mágica no HTML: <code>type="module"</code></h3>
          <p class="mb-5">Nada disso funciona se não avisarmos o HTML que estamos usando Módulos. Para fazer isso, adicionamos <code>type="module"</code> na tag <code>&lt;script&gt;</code>.</p>
          <pre class="p-4"><code>&lt;body&gt;
  &lt;!-- ... seu HTML ... --&gt;

  &lt;!--
    Carregamos APENAS o 'main.js' como um módulo.
    O navegador entenderá que ele precisa buscar
    os arquivos que ele 'importa'.
  --&gt;
  &lt;script type="module" src="main.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>
        </div>

        <div id="metodo-classico" class="mb-6">
          <h3 class="title is-4 section-title mb-4">6. O Método "Clássico" (Alternativa Antiga)</h3>
          <p class="mb-5">Antes da introdução dos Módulos JS, a forma de dividir o código era simplesmente importar múltiplos arquivos <code>&lt;script&gt;</code> (sem <code>type="module"</code>).</p>
          <pre class="p-4"><code>&lt;body&gt;
  &lt;!-- ... seu HTML ... --&gt;

  &lt;!--
    Método Clássico: A ORDEM DE CARREGAMENTO IMPORTA!
    'elements.js' e 'api.js' precisam vir ANTES de 'main.js'.
  --&gt;
  &lt;script src="elements.js"&gt;&lt;/script&gt;
  &lt;script src="api.js"&gt;&lt;/script&gt;
  &lt;script src="main.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h4 class="title is-5 mb-2">Como isso funciona? (Escopo Global)</h4>
          <p class="mb-4">Neste método, não usamos <code>import</code> ou <code>export</code>. Todas as funções e variáveis declaradas "soltas" nesses arquivos são "jogadas" no <strong>escopo global</strong> (o objeto <code>window</code>).</p>
          <p class="mb-4">O <code>main.js</code> funciona simplesmente porque ele consegue "enxergar" as funções e variáveis declaradas nos arquivos anteriores.</p>
          <p class="mb-5"><strong>Problemas:</strong> Isso é perigoso. Causa "poluição do escopo global", onde dois arquivos podem acidentalmente criar variáveis com o mesmo nome, causando bugs. A ordem de carregamento também é uma fonte de erros.</p>
        </div>

        <div id="conclusao-modulos" class="mb-6">
          <h3 class="title is-4 section-title mb-4">7. Conclusão: Módulos vs. Escopo Global</h3>
          <div class="box box-dark">
            <ul class="mb-5">
              <li><strong>Método Moderno (Módulos):</strong> Use <code>type="module"</code>, <code>import</code> e <code>export</code>. Os arquivos são isolados, seguros e organizados. <strong>Este é o padrão da indústria.</strong></li>
              <li><strong>Método Clássico (Global):</strong> Apenas liste os scripts. É mais simples para coisas pequenas, mas perigoso para projetos, pois causa colisão de nomes e depende da ordem.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
`
        }
      ]
    },
    {
      "id": 10,
      "titulo": "Revisão dos conteúdos",
      "subtitulo": "Revisões",
      "descricao": "Revisão geral das coisas que apredemos sobre HTML, CSS E Javascript",
      "icone": "fa-tools",
      "dias": [
        {
          id: 42,
          titulo: "HTML: Estrutura e Semântica",
          subtitulo: "Revisão",
          descricao: "Revisão completa dos conceitos fundamentais de HTML: estrutura básica, semântica, formulários, iframes e melhores práticas para desenvolvimento web.",
          icone: "fas fa-html5",
          conteudo: `
<section class="">
  <div class="container">
    
    <div class="content">
      <h2 class="title is-3">1. Estrutura Básica</h2>
      <p>Todo documento HTML começa com a declaração DOCTYPE e as tags html, head e body.</p>
      <pre class="p-4"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Título da Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Olá Mundo!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h2 class="title is-3">2. Semântica</h2>
      <p>Usar tags semânticas melhora a acessibilidade e SEO.</p>
      <div class="box box-dark">
        <h4 class="title is-4 has-text-white">Tags Semânticas Principais</h4>
        <ul>
          <li><strong>&lt;header&gt;</strong>: Cabeçalho da página</li>
          <li><strong>&lt;nav&gt;</strong>: Navegação</li>
          <li><strong>&lt;main&gt;</strong>: Conteúdo principal</li>
          <li><strong>&lt;section&gt;</strong>: Seções do conteúdo</li>
          <li><strong>&lt;article&gt;</strong>: Artigos independentes</li>
          <li><strong>&lt;aside&gt;</strong>: Conteúdo lateral</li>
          <li><strong>&lt;footer&gt;</strong>: Rodapé</li>
        </ul>
      </div>
      
      <h2 class="title is-3">3. Formulários</h2>
      <p>Formulários permitem interação com o usuário.</p>
      <pre class="p-4"><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="nome"&gt;Nome:&lt;/label&gt;
  &lt;input type="text" id="nome" name="nome" required&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
      
      <h2 class="title is-3">4. Iframes e Multimídia</h2>
      <p>Incorporar conteúdo externo como vídeos ou mapas.</p>
      <pre class="p-4"><code>&lt;iframe src="https://www.youtube.com/embed/VIDEO_ID" 
        width="560" height="315" frameborder="0" allowfullscreen&gt;
&lt;/iframe&gt;</code></pre>
      
      <h2 class="title is-3">5. Melhores Práticas</h2>
      <ul>
        <li>Sempre usar DOCTYPE html5</li>
        <li>Definir lang no html</li>
        <li>Usar meta charset UTF-8</li>
        <li>Estruturar com semântica</li>
        <li>Validar o HTML</li>
      </ul>
    </div>
  </div>
</section>
`
        },
        {
          id: 43,
          titulo: "CSS: Estilo, Layout e Responsividade",
          subtitulo: "Revisão",
          descricao: "Revisão completa dos conceitos de CSS: seletores, box model, propriedades essenciais, flexbox, responsividade e frameworks modernos.",
          icone: "fas fa-css3",
          conteudo: `
<section class="">
  <div class="container">
    
    <div class="content">
      <h2 class="title is-3">1. Fundamentos: Seletores e Cascata</h2>
      <p>O CSS funciona aplicando regras de estilo aos elementos HTML. A ordem (cascata) e o tipo de seletor (especificidade) determinam qual regra ganha.</p>
      <div class="box box-dark">
        <h4 class="title is-4 has-text-white">Hierarquia de Seletores (Poder)</h4>
        <ol>
          <li><span class="has-text-danger">Inline (style="")</span>: Vence quase tudo.</li>
          <li><span class="has-text-warning">ID (#header)</span>: Muito específico.</li>
          <li><span class="has-text-info">Classe (.btn)</span>: O mais usado, equilíbrio ideal.</li>
          <li><span class="has-text-grey">Tag (p, div)</span>: O mais fraco, afeta todos os elementos.</li>
        </ol>
      </div>
      
      <h2 class="title is-3">2. Box Model e Reset</h2>
      <p>Todo elemento HTML é essencialmente uma caixa. Entender como as camadas dessa caixa funcionam é vital.</p>
      
      <div class="box box-dark has-text-centered">
        <div class="has-background-warning has-text-black p-4">
          MARGIN
          <div class="is-size-7">(Espaço externo)</div>
          
          <div class="has-background-warning-light has-text-black p-4 mt-2">
            BORDER
            <div class="is-size-7">(Borda visível)</div>
            
            <div class="has-background-success has-text-black p-4 mt-2">
              PADDING
              <div class="is-size-7">(Respiro interno)</div>
              
              <div class="has-background-info has-text-white p-4 mt-2">
                CONTENT
                <br><span class="is-size-7">(Texto/Img)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p>Para evitar problemas de cálculo de tamanho, usamos sempre o Reset Universal no início do CSS:</p>
      <pre class="p-4"><code>* {
  box-sizing: border-box; /* O padding não aumenta a largura do elemento */
  margin: 0;
  padding: 0;
}</code></pre>
      
      <h2 class="title is-3">3. Glossário de Propriedades Essenciais</h2>
      <p>O CSS tem centenas de propriedades, mas você usará essas aqui em 90% do tempo.</p>
      
      <div class="columns">
        <div class="column">
          <div class="box box-dark">
            <h4 class="title is-4 has-text-white">Texto e Tipografia</h4>
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <th>color</th>
                  <td>Cor do texto (ex: <code>#fff</code>, <code>red</code>).</td>
                </tr>
                <tr>
                  <th>font-size</th>
                  <td>Tamanho da fonte (ex: <code>16px</code>, <code>1.5rem</code>).</td>
                </tr>
                <tr>
                  <th>font-weight</th>
                  <td>Peso da fonte (ex: <code>bold</code>, <code>700</code>).</td>
                </tr>
                <tr>
                  <th>text-align</th>
                  <td>Alinhamento do texto (ex: <code>center</code>, <code>right</code>).</td>
                </tr>
                <tr>
                  <th>line-height</th>
                  <td>Altura da linha. Importante para leitura.</td>
                </tr>
                <tr>
                  <th>text-decoration</th>
                  <td>Decoração (ex: <code>none</code> remove sublinhado de links).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="column">
          <div class="box box-dark">
            <h4 class="title is-4 has-text-white">Fundo e Visual</h4>
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <th>background-color</th>
                  <td>Cor de fundo do elemento.</td>
                </tr>
                <tr>
                  <th>background-image</th>
                  <td>Imagem de fundo (ex: <code>url('foto.jpg')</code>).</td>
                </tr>
                <tr>
                  <th>border</th>
                  <td>Borda (ex: <code>1px solid black</code>).</td>
                </tr>
                <tr>
                  <th>border-radius</th>
                  <td>Arredondamento das pontas (ex: <code>10px</code>, <code>50%</code>).</td>
                </tr>
                <tr>
                  <th>box-shadow</th>
                  <td>Sombra da caixa.</td>
                </tr>
                <tr>
                  <th>opacity</th>
                  <td>Transparência (0 a 1).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div class="box box-dark">
        <h4 class="title is-4 has-text-white">Layout e Tamanho</h4>
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <th>width / height</th>
              <td>Largura e Altura. Use <code>%</code> para responsividade.</td>
            </tr>
            <tr>
              <th>margin</th>
              <td>Espaço externo (afasta os vizinhos). <code>margin: 0 auto</code> centraliza.</td>
            </tr>
            <tr>
              <th>padding</th>
              <td>Espaço interno (entre a borda e o conteúdo).</td>
            </tr>
            <tr>
              <th>display</th>
              <td>Comportamento do elemento (<code>block</code>, <code>inline</code>, <code>flex</code>, <code>none</code>).</td>
            </tr>
            <tr>
              <th>position</th>
              <td>Posicionamento avançado (<code>relative</code>, <code>absolute</code>, <code>fixed</code>).</td>
            </tr>
            <tr>
              <th>z-index</th>
              <td>Ordem de empilhamento (quem fica em cima de quem).</td>
            </tr>
            <tr>
              <th>cursor</th>
              <td>Muda o ponteiro do mouse (ex: <code>pointer</code> para mãozinha).</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 class="title is-3">4. Flexbox: O Rei do Layout</h2>
      <p>A ferramenta principal para alinhar elementos (lado a lado ou empilhados).</p>
      <pre class="p-4"><code>.container {
  display: flex; /* Ativa o flexbox */
  justify-content: center; /* Alinha horizontalmente (eixo principal) */
  align-items: center; /* Alinha verticalmente (eixo cruzado) */
  gap: 20px; /* Espaço entre os filhos */
  flex-wrap: wrap; /* Permite quebrar linha se faltar espaço */
}</code></pre>
      
      <h2 class="title is-3">5. Responsividade (Media Queries)</h2>
      <p>Fazer o site se adaptar a celulares e tablets usando regras condicionais.</p>
      <pre class="p-4"><code>/* Regra padrão (Mobile First ou Desktop) */
.menu { display: flex; }

/* Regra para telas menores que 768px (Celulares) */
@media (max-width: 768px) {
  .menu {
    flex-direction: column; /* Muda para coluna no celular */
    background-color: #333;
  }
}</code></pre>
      
      <h2 class="title is-3">6. CSS Moderno e Frameworks</h2>
      <p>Nas últimas aulas, vimos como profissionalizar o CSS.</p>
      
      <h4 class="title is-4">Variáveis CSS</h4>
      <p>Guardam valores reutilizáveis para facilitar manutenção.</p>
      <pre class="p-4"><code>:root { --cor-principal: #e80170; }</code></pre>
      
      <h4 class="title is-4">Frameworks</h4>
      <ul>
        <li><strong>Tailwind (Utility-First):</strong> Estiliza via classes utilitárias no HTML (<code>bg-blue-500</code>, <code>p-4</code>).</li>
        <li><strong>Bulma (Component-Based):</strong> Oferece componentes prontos (<code>.button</code>, <code>.card</code>).</li>
      </ul>
    </div>
  </div>
</section>
    `
        },
        {
          id: 44,
          titulo: "Lógica e JavaScript: O Cérebro da Web",
          subtitulo: "Revisão",
          descricao: "Revisão completa dos conceitos de JavaScript: variáveis, tipos, controle de fluxo, funções, DOM, assincronismo, arrays e localStorage.",
          icone: "fas fa-js-square",
          conteudo: `
<section class="">
  <div class="container">    
    <div class="content">
      <h2 class="title is-3">1. Fundamentos: Variáveis e Tipos</h2>
      <p>Antes de correr, precisamos andar. Tudo começa com onde guardamos dados e que tipos de dados existem.</p>
      
      <div class="columns">
        <div class="column">
          <div class="box box-dark">
            <h4 class="title is-4 has-text-white">Variáveis (Caixas)</h4>
            <ul>
              <li><code>const</code>: Para valores que <strong>não mudam</strong> (90% dos casos). Ex: Seleção de elementos HTML.</li>
              <li><code>let</code>: Para valores que <strong>vão mudar</strong>. Ex: Contadores, resultados de soma.</li>
              <li><strong class="has-text-danger">var</strong>: Antigo e perigoso. Evite usar.</li>
            </ul>
          </div>
        </div>
        
        <div class="column">
          <div class="box box-dark">
            <h4 class="title is-4 has-text-white">Tipos de Dados</h4>
            <ul>
              <li><strong class="has-text-warning">String:</strong> Texto ("Olá").</li>
              <li><strong class="has-text-info">Number:</strong> Números (10, 5.5).</li>
              <li><strong class="has-text-purple">Boolean:</strong> Verdadeiro/Falso (true, false).</li>
              <li><strong class="has-text-grey">Array:</strong> Lista ([1, 2, 3]).</li>
              <li><strong class="has-text-success">Object:</strong> Estrutura complexa ({ nome: "Ana" }).</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2 class="title is-3">2. Controle de Fluxo (Decisões e Loops)</h2>
      <p>Como o programa toma decisões e repete tarefas?</p>
      
      <div class="columns">
        <div class="column">
          <h4 class="title is-5 has-text-white">Condicionais (Se / Senão)</h4>
          <pre class="p-4"><code>if (idade >= 18) {
  console.log("Pode entrar");
} else if (idade >= 16) {
  console.log("Acompanhado");
} else {
  console.log("Barrado");
}</code></pre>
        </div>
        
        <div class="column">
          <h4 class="title is-5 has-text-white">Laços (Repetição)</h4>
          <pre class="p-4"><code>// Para quando sabemos o fim (ex: array)
for (let i = 0; i &lt; lista.length; i++) {
  console.log(lista[i]);
}

// Para quando a condição é dinâmica
while (usuarioNaoClicou) {
  esperar();
}</code></pre>
        </div>
      </div>
      
      <h2 class="title is-3">3. Funções: O Poder do Reuso</h2>
      <p>Funções são "mini-programas" dentro do seu código. Elas recebem dados (parâmetros) e devolvem um resultado (retorno).</p>
      <pre class="p-4"><code>// Sintaxe Clássica
function somar(a, b) {
  return a + b;
}

// Sintaxe Moderna (Arrow Function)
const multiplicar = (a, b) =&gt; {
  return a * b;
};

const resultado = somar(10, 5); // 15</code></pre>
      
      <h2 class="title is-3">4. Manipulando o DOM (HTML)</h2>
      <p>É assim que o JS "conversa" com o HTML. O processo é sempre: Selecionar -> Ouvir -> Modificar.</p>
      <div class="box box-dark">
        <h4 class="title is-4 has-text-white">Receita de Bolo do DOM</h4>
        <ol>
          <li><strong>Selecionar:</strong> Busque o elemento.<br><code>const btn = document.querySelector("#meu-botao");</code></li>
          <li><strong>Ouvir:</strong> Adicione um "fofoqueiro" (Listener).<br><code>btn.addEventListener("click", minhaFuncao);</code></li>
          <li><strong>Modificar:</strong> Altere texto, estilo ou classes.<br><code>elemento.textContent = "Novo Texto";</code><br><code>elemento.classList.toggle("ativo");</code></li>
        </ol>
      </div>
      
      <h2 class="title is-3">5. Assincronismo e APIs</h2>
      <p>O JavaScript não para. Se algo demora (como buscar dados em um servidor), usamos promessas (async/await) para esperar sem travar a tela.</p>
      
      <div class="box box-dark">
        <h4 class="title is-4 has-text-white">Fetch API (O "Garçom")</h4>
        <pre class="p-4"><code>async function buscarDados() {
  try {
    // 1. Faz o pedido (espera chegar)
    const resposta = await fetch("https://api.exemplo.com/dados");
    
    // 2. Converte o pacote (espera converter)
    const dados = await resposta.json();
    
    // 3. Usa os dados
    console.log(dados);
    
  } catch (erro) {
    console.error("Deu ruim:", erro);
  }
}</code></pre>
      </div>
      
      <h2 class="title is-3">6. Poder dos Arrays (Métodos)</h2>
      <p>Maneiras modernas de lidar com listas sem usar o for tradicional.</p>
      <div class="columns is-multiline">
        <div class="column is-half">
          <div class="notification is-primary">
            <strong>.forEach()</strong>: Executa uma ação para cada item (sem retorno).
          </div>
        </div>
        <div class="column is-half">
          <div class="notification is-link">
            <strong>.map()</strong>: Transforma cada item e cria uma NOVA lista.
          </div>
        </div>
        <div class="column is-half">
          <div class="notification is-info">
            <strong>.filter()</strong>: Cria uma nova lista apenas com os itens que passaram no teste.
          </div>
        </div>
        <div class="column is-half">
          <div class="notification is-success">
            <strong>.find()</strong>: Encontra o PRIMEIRO item que passa no teste.
          </div>
        </div>
      </div>
      
      <h2 class="title is-3">7. Persistência (localStorage)</h2>
      <p>Guardando dados no navegador para não perder ao recarregar (ex: Todo List).</p>
      <pre class="p-4"><code>// Salvar (precisa virar texto/JSON)
const usuario = { nome: "Vitor", tema: "dark" };
localStorage.setItem("user_data", JSON.stringify(usuario));

// Ler (precisa voltar a ser Objeto)
const dadosSalvos = localStorage.getItem("user_data");
const objetoUsuario = JSON.parse(dadosSalvos);</code></pre>
      
      <h2 class="title is-3">8. Glossário de Comandos Essenciais</h2>
      <p>Uma lista rápida para você consultar enquanto programa.</p>
      
      <div class="columns">
        <div class="column">
          <div class="box box-dark">
            <h4 class="title is-4 has-text-white">Básico & Debug</h4>
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <th>console.log(x)</th>
                  <td>Mostra mensagem ou valor no console do navegador.</td>
                </tr>
                <tr>
                  <th>alert(msg)</th>
                  <td>Mostra um pop-up de aviso na tela.</td>
                </tr>
                <tr>
                  <th>prompt(msg)</th>
                  <td>Pede um texto ao usuário via pop-up.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="column">
          <div class="box box-dark">
            <h4 class="title is-4 has-text-white">DOM (HTML)</h4>
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <th>document.getElementById('id')</th>
                  <td>Seleciona elemento pelo ID.</td>
                </tr>
                <tr>
                  <th>document.querySelector('.classe')</th>
                  <td>Seleciona o primeiro elemento que bate com o seletor.</td>
                </tr>
                <tr>
                  <th>elm.textContent = '...'</th>
                  <td>Muda o texto dentro do elemento.</td>
                </tr>
                <tr>
                  <th>elm.innerHTML = '...'</th>
                  <td>Muda o HTML interno (perigoso, use com cuidado).</td>
                </tr>
                <tr>
                  <th>elm.classList.add('classe')</th>
                  <td>Adiciona uma classe CSS.</td>
                </tr>
                <tr>
                  <th>elm.classList.toggle('classe')</th>
                  <td>Liga/Desliga uma classe CSS.</td>
                </tr>
                <tr>
                  <th>elm.addEventListener('click', fn)</th>
                  <td>Executa uma função quando o evento ocorre.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div class="columns">
        <div class="column">
          <div class="box box-dark">
            <h4 class="title is-4 has-text-white">Dados & Storage</h4>
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <th>JSON.stringify(obj)</th>
                  <td>Converte Objeto/Array para String.</td>
                </tr>
                <tr>
                  <th>JSON.parse(str)</th>
                  <td>Converte String JSON para Objeto/Array.</td>
                </tr>
                <tr>
                  <th>localStorage.setItem('k', 'v')</th>
                  <td>Salva um item no navegador.</td>
                </tr>
                <tr>
                  <th>localStorage.getItem('k')</th>
                  <td>Recupera um item do navegador.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="column">
          <div class="box box-dark">
            <h4 class="title is-4 has-text-white">Arrays</h4>
            <table class="table is-fullwidth">
              <tbody>
                <tr>
                  <th>arr.push(item)</th>
                  <td>Adiciona item ao final da lista.</td>
                </tr>
                <tr>
                  <th>arr.length</th>
                  <td>Retorna o tamanho da lista.</td>
                </tr>
                <tr>
                  <th>arr.forEach(fn)</th>
                  <td>Loop simples para cada item.</td>
                </tr>
                <tr>
                  <th>arr.map(fn)</th>
                  <td>Cria nova lista transformada.</td>
                </tr>
                <tr>
                  <th>arr.filter(fn)</th>
                  <td>Cria nova lista filtrada.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    `
        },
        {
          id: 45,
          titulo: "Landing Page Aplicando Conceitos",
          subtitulo: "Revisão",
          descricao: "Exemplo prático de landing page responsiva usando HTML semântico, CSS com variáveis, flexbox, grid e media queries para adaptar nossas aplicações para o mobile.",
          icone: "fas fa-laptop-code",
          conteudo: `
<section class="">
  <div class="container">
    
    <div class="content">
      <h2 class="title is-3">1. Estrutura HTML Semântica</h2>
      <p>Usando tags semânticas para melhor acessibilidade e SEO.</p>
      <pre class="p-4"><code>&lt;header&gt;
  &lt;nav&gt;
    &lt;div class="logo"&gt;☕ Café Dev&lt;/div&gt;
    &lt;ul class="nav-links"&gt;
      &lt;li&gt;&lt;a href="#home"&gt;Início&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#produtos"&gt;Produtos&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#sobre"&gt;Sobre&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#contato"&gt;Contato&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section id="home" class="hero"&gt;
    &lt;h1&gt;Codifique com mais energia&lt;/h1&gt;
    &lt;p&gt;O café especial selecionado para programadores.&lt;/p&gt;
    &lt;a href="#produtos" class="cta-button"&gt;Ver Nossos Cafés&lt;/a&gt;
  &lt;/section&gt;
  
  &lt;section id="produtos" class="produtos"&gt;
    &lt;h2&gt;Nossos Blends&lt;/h2&gt;
    &lt;div class="grid-container"&gt;
      &lt;article class="card"&gt;
        &lt;h3&gt;Java Espresso&lt;/h3&gt;
        &lt;p&gt;Forte e intenso, ideal para noites de deploy.&lt;/p&gt;
        &lt;div class="preco"&gt;R$ 35,00&lt;/div&gt;
        &lt;a href="#" class="cta-button"&gt;Comprar&lt;/a&gt;
      &lt;/article&gt;
      &lt;!-- Mais cards --&gt;
    &lt;/div&gt;
  &lt;/section&gt;
  
  &lt;section id="contato" class="newsletter"&gt;
    &lt;h2&gt;Fique por dentro&lt;/h2&gt;
    &lt;form&gt;
      &lt;input type="email" placeholder="Seu e-mail" required&gt;
      &lt;button type="submit"&gt;Inscrever-se&lt;/button&gt;
    &lt;/form&gt;
  &lt;/section&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&copy; 2025 Café Dev. Feito com HTML e CSS puro.&lt;/p&gt;
&lt;/footer&gt;</code></pre>
      
      <h2 class="title is-3">2. CSS com Variáveis</h2>
      <p>Variáveis CSS facilitam a manutenção e consistência das cores.</p>
      <pre class="p-4"><code>:root {
  --cor-primaria: #e80170;
  --cor-secundaria: #2d3748;
  --cor-fundo: #f7fafc;
  --cor-texto: #1a202c;
  --cor-branca: #ffffff;
  --fonte-padrao: 'Segoe UI', sans-serif;
}</code></pre>
      
      <h2 class="title is-3">3. Flexbox para Layout</h2>
      <p>Flexbox permite alinhar elementos horizontal e verticalmente com facilidade.</p>
      <pre class="p-4"><code>nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>
      
      <h2 class="title is-3">4. Grid Responsivo</h2>
      <p>Flexbox com flex-wrap cria um grid que se adapta ao tamanho da tela.</p>
      <pre class="p-4"><code>.grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card {
  flex: 1 1 300px;
  max-width: 350px;
}</code></pre>
      
      <h2 class="title is-3">5. Media Queries</h2>
      <p>Adapta o layout para dispositivos móveis.</p>
      <pre class="p-4"><code>@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
  
  .nav-links {
    flex-direction: column;
    text-align: center;
  }
}</code></pre>
      
      <h2 class="title is-3">6. Demonstração Visual</h2>
      <p>Veja como o layout se adapta:</p>
      <div class="box">
        <div class="columns">
          <div class="column">
            <div class="notification is-info">
              <strong>Desktop:</strong> Menu horizontal, grid de 3 colunas
            </div>
          </div>
          <div class="column">
            <div class="notification is-warning">
              <strong>Mobile:</strong> Menu vertical, grid empilhado
            </div>
          </div>
        </div>
      </div>
      
      <h2 class="title is-3">7. Melhores Práticas Aplicadas</h2>
      <ul>
        <li>Reset CSS com box-sizing: border-box</li>
        <li>Variáveis CSS para cores e fontes</li>
        <li>HTML semântico</li>
        <li>Flexbox para layouts modernos</li>
        <li>Media queries para responsividade</li>
        <li>Transições suaves para interações</li>
      </ul>
    </div>
  </div>
</section>
    `
        }
      ]
    },
    {
      id: 11,
      titulo: "Semana 11",
      subtitulo: "Bônus",
      descricao: "Bônus - Conteúdo extracurricular para evoluir mais ainda as habilidades de programação",
      icone: "fa-star",
      dias: [
        {
          id: 50,
          titulo: "Próximos Passos na Programação",
          subtitulo: "Aula 11.5",
          descricao: "Guia completo para continuar sua jornada como desenvolvedor front-end: frameworks, bibliotecas e práticas essenciais",
          icone: "fa-rocket",
          conteudo: `
          <div class="container">
            <div class="mb-6" id="introducao">
              <h2 class="title is-4 section-title mb-5">1. Parabéns por Chegar Até Aqui! 🎉</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Você dominou os fundamentos: <strong>HTML, CSS e JavaScript</strong>. Aprendeu sobre Git, APIs, pacotes NPM e até banco de dados! Agora é hora de <span class="highlight-pink">elevar seu conhecimento ao próximo nível</span> e se tornar um desenvolvedor front-end profissional.
                </p>
                <div class="box box-dark border-left-pink">
                  <h3 class="title is-5 mb-3">🎯 O Que Vem a Seguir?</h3>
                  <p>Este guia vai te mostrar o caminho para evoluir na sua carreira, com recomendações práticas e recursos valiosos. A jornada está apenas começando!</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="frameworks">
              <h2 class="title is-4 section-title mb-5">2. ⭐ PRIORIDADE MÁXIMA: Aprender um Framework Front-End</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  No mercado de trabalho atual, <strong>saber apenas HTML, CSS e JavaScript vanilla não é suficiente</strong>. As empresas esperam que você domine pelo menos um framework moderno de front-end. É aqui que você realmente se destaca!
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🤔 Por Que Aprender um Framework?</h3>
                <div class="content">
                  <div class="columns">
                    <div class="column">
                      <ul>
                        <li class="mb-3"><strong>✅ Produtividade:</strong> Desenvolva aplicações complexas muito mais rápido</li>
                        <li class="mb-3"><strong>✅ Componentização:</strong> Reutilize código e mantenha tudo organizado</li>
                        <li class="mb-3"><strong>✅ Mercado:</strong> 90% das vagas pedem conhecimento em frameworks</li>
                      </ul>
                    </div>
                    <div class="column">
                      <ul>
                        <li class="mb-3"><strong>✅ Ecossistema:</strong> Bibliotecas e ferramentas prontas</li>
                        <li class="mb-3"><strong>✅ Comunidade:</strong> Suporte e recursos abundantes</li>
                        <li class="mb-3"><strong>✅ Performance:</strong> Otimizações automáticas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="box box-dark mb-5 border-left-pink">
                <h3 class="title is-4 mb-4 has-text-centered">🚀 Recomendação Principal: Next.js</h3>
                
                <div class="content is-size-5">
                  <h4 class="title is-5 mb-3 mt-5">O Que é Next.js?</h4>
                  <p class="mb-4">
                    <strong>Next.js</strong> é um framework construído em cima do React (a biblioteca JavaScript mais popular do mundo) que adiciona superpoderes como renderização no servidor, roteamento automático, otimização de imagens e muito mais. É usado por empresas como <strong>Netflix, TikTok, Twitch, Nike e Uber</strong>.
                  </p>

                  <h4 class="title is-5 mb-3 mt-5">Por Que Next.js é a Melhor Escolha?</h4>
                  <div class="columns mb-4">
                    <div class="column">
                      <ul>
                        <li class="mb-2">✨ Mais fácil de aprender que React puro</li>
                        <li class="mb-2">🚀 Performance excepcional out-of-the-box</li>
                        <li class="mb-2">📁 Roteamento baseado em arquivos (super intuitivo)</li>
                        <li class="mb-2">🎨 Suporte nativo a CSS Modules e Tailwind</li>
                      </ul>
                    </div>
                    <div class="column">
                      <ul>
                        <li class="mb-2">⚡ Hot Reload (recarrega instantaneamente)</li>
                        <li class="mb-2">📱 Responsivo e PWA pronto</li>
                        <li class="mb-2">🌍 Usado por grandes empresas</li>
                        <li class="mb-2">📚 Documentação excelente</li>
                      </ul>
                    </div>
                  </div>

                  <div class="notification is-info is-light mb-4">
                    <h4 class="title is-6 mb-3">🎓 Curso Recomendado (GRATUITO):</h4>
                    <p class="mb-3"><strong>Next.js do Zero ao Avançado</strong></p>
                    <a href="https://www.youtube.com/watch?v=e6FigV2fLC8&themeRefresh=1" target="_blank" class="button is-primary is-medium">
                      <span class="icon">
                        <i class="fab fa-youtube"></i>
                      </span>
                      <span>Assistir Curso Completo no YouTube</span>
                    </a>
                    <p class="mt-3"><small>Este curso completo te levará do zero ao avançado em Next.js, com projetos práticos e tudo que você precisa saber!</small></p>
                  </div>

                  <h4 class="title is-5 mb-3 mt-5">O Que Você Vai Aprender com Next.js:</h4>
                  <ul class="mb-4">
                    <li>📦 Componentes React (a base do Next.js)</li>
                    <li>🛣️ Sistema de rotas automático</li>
                    <li>🎨 Estilização com CSS Modules e Tailwind CSS</li>
                    <li>⚡ Server-Side Rendering (SSR) e Static Site Generation (SSG)</li>
                    <li>🔌 Integração com APIs (consumir e criar)</li>
                    <li>📱 Aplicações responsivas e performáticas</li>
                    <li>🚀 Deploy em produção (Vercel)</li>
                  </ul>

                  <div class="notification is-warning is-light mt-4">
                    <strong>💡 Dica de Ouro:</strong> Dedique pelo menos 2-3 meses estudando e praticando Next.js. Construa projetos reais! Isso vai multiplicar suas chances no mercado de trabalho.
                  </div>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🎯 Outras Opções de Frameworks (se você quiser explorar):</h3>
                <div class="content">
                  <div class="columns">
                    <div class="column">
                      <h4 class="title is-6 mb-2">React.js</h4>
                      <p class="mb-3">Biblioteca mais popular. Next.js é baseado nele.</p>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 mb-2">Vue.js</h4>
                      <p class="mb-3">Framework progressivo, fácil de aprender.</p>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 mb-2">Angular</h4>
                      <p class="mb-3">Framework completo do Google, mais enterprise.</p>
                    </div>
                  </div>
                  <p class="mt-3"><strong>Mas comece com Next.js!</strong> Ele te dá a base de React + funcionalidades avançadas prontas.</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="bibliotecas-estilo">
              <h2 class="title is-4 section-title mb-5">3. 🎨 Dominar uma Biblioteca de Estilização</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Escrever CSS do zero é importante para aprender, mas no dia a dia profissional, você vai usar <strong>bibliotecas de estilização</strong> para acelerar o desenvolvimento e manter consistência visual.
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">💎 Recomendação: Bulma CSS</h3>
                <div class="content">
                  <p class="mb-4">
                    <strong>Bulma</strong> é um framework CSS moderno baseado em Flexbox. É 100% CSS puro (sem JavaScript), o que o torna leve, fácil de aprender e perfeito para iniciantes que já conhecem CSS.
                  </p>
                  
                  <div class="columns mb-4">
                    <div class="column">
                      <h4 class="title is-6 mb-3">Por Que Bulma?</h4>
                      <ul>
                        <li>✅ Sintaxe simples e intuitiva</li>
                        <li>✅ Classes com nomes legíveis</li>
                        <li>✅ Componentes prontos (cards, modals, navbar)</li>
                        <li>✅ Totalmente responsivo</li>
                        <li>✅ Sistema de grid flexível</li>
                        <li>✅ Fácil de customizar</li>
                      </ul>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 mb-3">Exemplo de Código:</h4>
                      <pre class="p-3"><code>&lt;div class="card"&gt;
  &lt;div class="card-content"&gt;
    &lt;p class="title"&gt;Título&lt;/p&gt;
    &lt;p class="subtitle"&gt;Subtítulo&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;button class="button is-primary"&gt;
  Clique Aqui
&lt;/button&gt;</code></pre>
                    </div>
                  </div>

                  <div class="notification is-info is-light">
                    <strong>🔗 Documentação Oficial:</strong> 
                    <a href="https://bulma.io" target="_blank">https://bulma.io</a>
                  </div>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🎨 Outras Bibliotecas Populares:</h3>
                <div class="content">
                  <ul class="mb-4">
                    <li class="mb-3"><strong>Tailwind CSS:</strong> Utility-first, super poderoso (curva de aprendizado média)</li>
                    <li class="mb-3"><strong>Bootstrap:</strong> O mais usado no mercado, componentes ricos</li>
                    <li class="mb-3"><strong>Material UI:</strong> Design do Google, ótimo com React</li>
                    <li class="mb-3"><strong>Chakra UI:</strong> Moderno, acessível, feito para React</li>
                  </ul>
                  <p><strong>Dica:</strong> Comece com Bulma pela simplicidade, depois explore Tailwind (muito usado com Next.js)!</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="pratica-apis">
              <h2 class="title is-4 section-title mb-5">4. 🔌 Praticar MUITO com Projetos de APIs</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  No dia a dia de um desenvolvedor front-end, <strong>a maior parte do trabalho é consumir APIs</strong>. Você vai buscar dados, enviar informações, autenticar usuários - tudo através de APIs.
                </p>
              </div>

              <div class="box box-dark mb-5 border-left-pink">
                <h3 class="title is-5 mb-4">🎯 Por Que Isso É Tão Importante?</h3>
                <div class="content">
                  <p class="mb-3">Em uma aplicação real, você vai:</p>
                  <ul class="mb-4">
                    <li>📡 Fazer requisições HTTP com <code>fetch</code> ou <code>axios</code></li>
                    <li>🔄 Gerenciar estados de loading, sucesso e erro</li>
                    <li>🎨 Renderizar dados dinâmicos na interface</li>
                    <li>✏️ Criar formulários que enviam dados para a API</li>
                    <li>🔒 Lidar com autenticação e autorização</li>
                    <li>📱 Criar experiências reativas e responsivas</li>
                  </ul>
                  <p><strong>90% do trabalho de um dev front-end é exatamente isso!</strong></p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">💡 Projetos Práticos Recomendados:</h3>
                <div class="content">
                  <div class="columns">
                    <div class="column">
                      <h4 class="title is-6 mb-3">1. App de Clima</h4>
                      <p class="mb-3">Use a API do OpenWeather para mostrar previsão do tempo.</p>
                      
                      <h4 class="title is-6 mb-3 mt-4">2. Dashboard de GitHub</h4>
                      <p class="mb-3">Consuma a API do GitHub para mostrar perfis e repositórios.</p>
                      
                      <h4 class="title is-6 mb-3 mt-4">3. Lista de Tarefas (ToDo)</h4>
                      <p class="mb-3">CRUD completo conectado com sua API do Express.js.</p>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 mb-3">4. E-commerce Simples</h4>
                      <p class="mb-3">Catálogo de produtos com carrinho de compras.</p>
                      
                      <h4 class="title is-6 mb-3 mt-4">5. Blog Pessoal</h4>
                      <p class="mb-3">Sistema de posts com comentários e autenticação.</p>
                      
                      <h4 class="title is-6 mb-3 mt-4">6. Pokedex</h4>
                      <p class="mb-3">Use a PokéAPI para criar uma enciclopédia de Pokémon.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🌐 APIs Públicas Gratuitas para Praticar:</h3>
                <div class="content">
                  <ul>
                    <li><strong>JSONPlaceholder:</strong> <a href="https://jsonplaceholder.typicode.com" target="_blank">jsonplaceholder.typicode.com</a> - API fake para testes</li>
                    <li><strong>PokéAPI:</strong> <a href="https://pokeapi.co" target="_blank">pokeapi.co</a> - Dados de Pokémon</li>
                    <li><strong>The Movie DB:</strong> <a href="https://www.themoviedb.org/documentation/api" target="_blank">themoviedb.org</a> - Filmes e séries</li>
                    <li><strong>GitHub API:</strong> <a href="https://api.github.com" target="_blank">api.github.com</a> - Dados do GitHub</li>
                    <li><strong>OpenWeather API:</strong> <a href="https://openweathermap.org/api" target="_blank">openweathermap.org/api</a> - Clima</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-6" id="outras-recomendacoes">
              <h2 class="title is-4 section-title mb-5">5. 📚 Outras Recomendações Essenciais</h2>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🔧 TypeScript - O Próximo Nível do JavaScript</h3>
                <div class="content">
                  <p class="mb-3">
                    <strong>TypeScript</strong> é um "JavaScript com superpoderes" que adiciona tipagem estática ao código. É usado em 80% das empresas modernas.
                  </p>
                  <div class="columns">
                    <div class="column">
                      <h4 class="title is-6 mb-2">Por Que Aprender?</h4>
                      <ul>
                        <li>✅ Previne bugs antes de acontecerem</li>
                        <li>✅ Autocompletar inteligente</li>
                        <li>✅ Código mais profissional</li>
                        <li>✅ Obrigatório em muitas empresas</li>
                      </ul>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 mb-2">Exemplo:</h4>
                      <pre class="p-3"><code>// JavaScript
function somar(a, b) {
  return a + b;
}

// TypeScript
function somar(a: number, b: number): number {
  return a + b;
}</code></pre>
                    </div>
                  </div>
                  <p class="mt-3"><strong>Quando aprender:</strong> Depois de estar confortável com Next.js.</p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🧪 Testes Automatizados</h3>
                <div class="content">
                  <p class="mb-3">Empresas sérias esperam que você saiba escrever testes para seu código.</p>
                  <ul>
                    <li><strong>Jest:</strong> Framework de testes JavaScript</li>
                    <li><strong>React Testing Library:</strong> Testes de componentes</li>
                    <li><strong>Cypress:</strong> Testes end-to-end</li>
                  </ul>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📱 Responsividade e Mobile-First</h3>
                <div class="content">
                  <p class="mb-3">Mais de 60% dos acessos vêm de dispositivos móveis. Domine:</p>
                  <ul>
                    <li>Media Queries avançadas</li>
                    <li>Flexbox e Grid Layout</li>
                    <li>Design Mobile-First</li>
                    <li>Progressive Web Apps (PWA)</li>
                  </ul>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">⚡ Performance e Otimização</h3>
                <div class="content">
                  <p class="mb-3">Sites rápidos convertem mais e ranqueiam melhor no Google:</p>
                  <ul>
                    <li>Lazy Loading de imagens</li>
                    <li>Code Splitting</li>
                    <li>Otimização de assets (imagens, fontes)</li>
                    <li>Lighthouse e Web Vitals</li>
                  </ul>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🔐 Autenticação e Segurança</h3>
                <div class="content">
                  <p class="mb-3">Essencial para qualquer aplicação real:</p>
                  <ul>
                    <li>JWT (JSON Web Tokens)</li>
                    <li>OAuth e login social</li>
                    <li>Proteção contra XSS e CSRF</li>
                    <li>HTTPS e certificados SSL</li>
                  </ul>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🎨 UI/UX e Design</h3>
                <div class="content">
                  <p class="mb-3">Um bom desenvolvedor front-end tem noção de design:</p>
                  <ul>
                    <li>Princípios de design (contraste, hierarquia, espaçamento)</li>
                    <li>Figma (ferramenta de design colaborativa)</li>
                    <li>Acessibilidade (a11y)</li>
                    <li>Paletas de cores e tipografia</li>
                  </ul>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🚀 Deploy e DevOps Básico</h3>
                <div class="content">
                  <p class="mb-3">Publique seus projetos no ar:</p>
                  <ul>
                    <li><strong>Vercel:</strong> Perfeito para Next.js (deploy com 1 clique)</li>
                    <li><strong>Netlify:</strong> Ótimo para sites estáticos</li>
                    <li><strong>GitHub Pages:</strong> Hospedagem gratuita</li>
                    <li><strong>Railway/Render:</strong> Para APIs e backends</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-6" id="roteiro-estudo">
              <h2 class="title is-4 section-title mb-5">6. 🗺️ Roteiro de Estudo Recomendado</h2>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Ordem Sugerida para Máximo Aprendizado:</h3>
                <div class="content">
                  <div class="timeline">
                    <div class="notification is-primary is-light mb-3">
                      <strong>Mês 1-2:</strong> Next.js (foco total! Faça o curso recomendado)
                    </div>
                    <div class="notification is-info is-light mb-3">
                      <strong>Mês 3:</strong> Bulma ou Tailwind CSS + projetos práticos
                    </div>
                    <div class="notification is-success is-light mb-3">
                      <strong>Mês 4:</strong> Praticar com APIs públicas (3-4 projetos completos)
                    </div>
                    <div class="notification is-warning is-light mb-3">
                      <strong>Mês 5:</strong> TypeScript básico
                    </div>
                    <div class="notification is-danger is-light mb-3">
                      <strong>Mês 6:</strong> Testes, performance e deploy
                    </div>
                  </div>
                  <div class="notification is-dark mt-5">
                    <strong>Durante TODOS os meses:</strong> Construa projetos reais e coloque no GitHub! Isso será seu portfólio.
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="dicas-finais">
              <h2 class="title is-4 section-title mb-5">7. 💎 Dicas de Ouro para Sua Jornada</h2>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-success">✅ Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Pratique TODOS OS DIAS (mesmo que 30 min)</li>
                        <li>Construa projetos do zero</li>
                        <li>Leia documentação oficial</li>
                        <li>Participe de comunidades (Discord, Stack Overflow)</li>
                        <li>Faça code review de outros</li>
                        <li>Mantenha um portfólio no GitHub</li>
                        <li>Aprenda inglês técnico</li>
                        <li>Seja paciente consigo mesmo</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-danger">❌ Evite</h3>
                    <div class="content">
                      <ul>
                        <li>Pular fundamentos</li>
                        <li>Só assistir tutoriais sem praticar</li>
                        <li>Aprender muitas coisas ao mesmo tempo</li>
                        <li>Comparar seu progresso com outros</li>
                        <li>Desistir nos primeiros erros</li>
                        <li>Copiar código sem entender</li>
                        <li>Não fazer projetos próprios</li>
                        <li>Ignorar boas práticas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao">
              <h2 class="title is-4 section-title mb-5">8. Mensagem Final</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-4 mb-3 has-text-centered">Você Está Pronto para Decolar! 🚀</h3>
                <div class="content is-size-5">
                  <p class="mb-4">
                    A jornada de desenvolvedor é de <strong>aprendizado contínuo</strong>. A tecnologia evolui rápido, e isso é emocionante! Você já deu os primeiros passos mais importantes: aprendeu os fundamentos sólidos.
                  </p>
                  
                  <p class="mb-4">
                    Agora é hora de <span class="highlight-pink">escolher um caminho e se aprofundar</span>. Nossa recomendação? Comece com Next.js, faça o curso indicado, construa 3-4 projetos práticos integrando com APIs, e você estará pronto para o mercado!
                  </p>

                  <div class="notification is-warning is-light my-5">
                    <h4 class="title is-5 mb-3">📌 Checklist de Ação Imediata:</h4>
                    <ul class="mb-0">
                      <li>☐ Assistir o curso de Next.js completo</li>
                      <li>☐ Criar seu primeiro projeto em Next.js</li>
                      <li>☐ Escolher 2 APIs públicas e construir apps com elas</li>
                      <li>☐ Aprender Bulma ou Tailwind CSS</li>
                      <li>☐ Fazer deploy de pelo menos 1 projeto na Vercel</li>
                      <li>☐ Atualizar seu GitHub com projetos novos</li>
                      <li>☐ Começar a estudar TypeScript (após Next.js)</li>
                    </ul>
                  </div>

                  <p class="mb-4 has-text-centered is-size-4 mt-6">
                    <strong>Lembre-se:</strong> Todo desenvolvedor experiente já foi iniciante um dia. A diferença está em <span class="highlight-pink">não desistir e praticar consistentemente</span>.
                  </p>

                  <div class="has-text-centered mt-6">
                    <p class="is-size-3 mb-3">🎯</p>
                    <p class="is-size-5"><strong>Seu próximo passo?</strong></p>
                    <p class="is-size-5">Abra o curso de Next.js e comece AGORA!</p>
                    <a href="https://www.youtube.com/watch?v=e6FigV2fLC8&themeRefresh=1" target="_blank" class="button is-primary is-large mt-4">
                      <span class="icon">
                        <i class="fab fa-youtube"></i>
                      </span>
                      <span>Começar a Aprender Next.js</span>
                    </a>
                  </div>

                  <p class="has-text-centered mt-6 is-size-4">
                    <strong>Boa sorte na sua jornada! 🚀✨</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          id: 46,
          titulo: "O Uso Consciente da IA",
          subtitulo: "Aula 11.1",
          descricao: "Aprenda a usar a IA de forma consciente para aprender HTML, CSS e JavaScript, além de criar projetos front-end para suas APIs",
          icone: "fa-brain",
          conteudo: `
          <div class="container">
            <div class="mb-6" id="introducao">
              <h2 class="title is-4 section-title mb-5">1. A IA como Ferramenta de Aprendizado</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  A Inteligência Artificial revolucionou a forma como aprendemos a programar. Ferramentas como ChatGPT, Claude, e GitHub Copilot podem ser <strong>professores particulares disponíveis 24/7</strong>, mas é fundamental usá-las de forma consciente e estratégica.
                </p>
                <div class="box box-dark border-left-pink">
                  <h3 class="title is-5 mb-3">⚠️ Princípio Fundamental</h3>
                  <p>A IA é uma <strong>ferramenta de aprendizado</strong>, não um substituto para o aprendizado. O objetivo é <span class="highlight-pink">aprender e entender</span>, não apenas copiar e colar.</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="aprendendo-html">
              <h2 class="title is-4 section-title mb-5">2. Usando IA para Aprender HTML</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  HTML é a base de toda página web. Veja como usar a IA para dominar essa linguagem de forma efetiva:
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📝 Prompt 1: Entendendo Tags e Estrutura</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Explique como funciona a tag &lt;section&gt; em HTML. 
Qual a diferença entre ela e a tag &lt;div&gt;? 
Quando devo usar cada uma? 
Me dê 3 exemplos práticos de uso.</code></pre>
                  <p><strong>Por que funciona:</strong> Pede explicação conceitual + comparação + exemplos práticos</p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📝 Prompt 2: Aprendendo com Exercícios</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Crie 5 exercícios progressivos para eu praticar formulários HTML.
Comece do básico e vá aumentando a dificuldade.
Para cada exercício, me dê:
1. O desafio
2. Dicas (sem dar a resposta completa)
3. A solução comentada</code></pre>
                  <p><strong>Por que funciona:</strong> Cria um caminho de aprendizado estruturado com prática ativa</p>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">📝 Prompt 3: Revisão e Feedback</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Aqui está meu código HTML para um formulário de contato:
[cole seu código]

Analise meu código e me dê:
1. O que está bom
2. O que pode ser melhorado
3. Boas práticas que não estou seguindo
4. Sugestões de acessibilidade</code></pre>
                  <p><strong>Por que funciona:</strong> Obtém feedback personalizado e aprende com seus próprios erros</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="aprendendo-css">
              <h2 class="title is-4 section-title mb-5">3. Usando IA para Aprender CSS</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  CSS pode ser desafiador no início. A IA pode ajudar a visualizar conceitos e entender o porquê das coisas funcionarem:
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🎨 Prompt 1: Entendendo Conceitos</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Explique Flexbox como se eu fosse uma criança de 10 anos.
Depois, me mostre um exemplo prático de um layout de 3 colunas.
Por fim, me diga quando NÃO devo usar Flexbox.</code></pre>
                  <p><strong>Por que funciona:</strong> Simplifica conceitos complexos e mostra aplicações práticas</p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🎨 Prompt 2: Debugando Problemas</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Meu elemento não está centralizando. Aqui está meu CSS:
[cole seu código CSS]

Me explique:
1. Por que não está funcionando
2. Quais são as diferentes formas de centralizar elementos
3. Qual seria a melhor solução para este caso específico
4. Me ensine a pensar sobre centralização no futuro</code></pre>
                  <p><strong>Por que funciona:</strong> Resolve o problema atual e ensina a prevenir problemas futuros</p>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🎨 Prompt 3: Desafios Práticos</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Crie um desafio CSS para eu recriar este layout:
[descreva o layout ou cole uma imagem]

Me dê:
1. O HTML básico para começar
2. Dicas de quais propriedades CSS usar
3. Deixe EU tentar resolver primeiro
4. Depois me mostre a solução comentada</code></pre>
                  <p><strong>Por que funciona:</strong> Incentiva tentativa e erro antes de ver a resposta</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="aprendendo-javascript">
              <h2 class="title is-4 section-title mb-5">4. Usando IA para Aprender JavaScript</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  JavaScript é onde a lógica de programação realmente entra em jogo. Use a IA para entender conceitos e praticar:
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">⚡ Prompt 1: Conceitos Fundamentais</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Explique o conceito de "closure" em JavaScript.
Use analogias do mundo real para me ajudar a entender.
Depois me dê 3 exemplos práticos de quando usar closures.
Por fim, me dê um exercício para praticar.</code></pre>
                  <p><strong>Por que funciona:</strong> Vai do conceito à prática de forma estruturada</p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">⚡ Prompt 2: Debugando Lógica</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Este código deveria filtrar números pares, mas não está funcionando:
[cole seu código]

Me ajude a:
1. Identificar o erro
2. Entender POR QUE é um erro
3. Corrigir de forma que EU aprenda
4. Me ensinar a debugar problemas similares sozinho</code></pre>
                  <p><strong>Por que funciona:</strong> Foca em ensinar a debugar, não apenas corrigir</p>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">⚡ Prompt 3: Projeto Guiado</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Quero criar um cronômetro em JavaScript puro.
Me guie através do processo:
1. Quebre o projeto em pequenas tarefas
2. Para cada tarefa, me dê dicas (não a solução completa)
3. Deixe eu implementar
4. Depois revise meu código e me dê feedback
5. Mostre formas de melhorar</code></pre>
                  <p><strong>Por que funciona:</strong> Simula um mentor que guia sem fazer por você</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="criando-frontend-api">
              <h2 class="title is-4 section-title mb-5">5. Criando um Front-end para sua API</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Um dos usos mais práticos da IA é criar interfaces para suas APIs. Aqui está um passo a passo completo:
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🚀 Passo 1: Planejamento da Interface</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Tenho uma API REST que gerencia tarefas (To-Do List) com estes endpoints:
- GET /tasks - Lista todas as tarefas
- POST /tasks - Cria nova tarefa
- PUT /tasks/:id - Atualiza tarefa
- DELETE /tasks/:id - Deleta tarefa

Me ajude a planejar o front-end:
1. Que telas/componentes preciso criar?
2. Qual a melhor estrutura de pastas?
3. Que funcionalidades a interface deve ter?
4. Como organizar o código para ser escalável?</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🚀 Passo 2: Estrutura HTML</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Com base no planejamento anterior, crie a estrutura HTML para:
1. Um formulário para adicionar novas tarefas
2. Uma lista para exibir as tarefas existentes
3. Botões para editar e deletar cada tarefa

Use HTML semântico e pense em acessibilidade.
Me explique suas escolhas de tags.</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🚀 Passo 3: Estilização Moderna</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Preciso estilizar a interface do To-Do List.
Quero um design moderno e responsivo.

Me ajude a criar:
1. Uma paleta de cores profissional
2. Layout responsivo com Flexbox ou Grid
3. Animações sutis para interações
4. Estados visuais (hover, active, disabled)

Use CSS moderno com variáveis e boas práticas.</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🚀 Passo 4: Conectando com a API</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Me ensine a conectar o front-end com minha API:
1. Como usar fetch() para fazer requisições
2. Como lidar com promessas e async/await
3. Como tratar erros de forma elegante
4. Como atualizar a interface quando os dados mudam

Para cada funcionalidade (criar, listar, atualizar, deletar):
- Me explique a lógica
- Me dê o código comentado
- Me mostre como debugar problemas comuns</code></pre>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🚀 Passo 5: Melhorias e Otimizações</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code>Meu To-Do List está funcionando! Agora quero melhorar:
1. Adicionar loading states (spinners)
2. Implementar validação de formulário
3. Adicionar confirmação antes de deletar
4. Melhorar a UX com feedback visual
5. Otimizar performance

Para cada melhoria:
- Explique por que é importante
- Me guie na implementação
- Me mostre o antes e depois</code></pre>
                </div>
              </div>
            </div>

            <div class="mb-6" id="template-projeto-completo">
              <h2 class="title is-4 section-title mb-5">6. Template: Prompt Completo para Projeto Front-end</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">📋 Prompt Master para Criar Front-end de API</h3>
                <div class="content">
                  <pre class="p-4"><code>Atue como um mentor de desenvolvimento front-end experiente.

CONTEXTO:
Tenho uma API [descreva sua API] com os seguintes endpoints:
[liste os endpoints e o que cada um faz]

OBJETIVO:
Criar uma interface web moderna, responsiva e user-friendly.

REQUISITOS:
1. HTML semântico e acessível
2. CSS moderno com Flexbox/Grid
3. JavaScript vanilla (sem frameworks por enquanto)
4. Design responsivo (mobile-first)
5. Boas práticas de UX

PROCESSO:
Me guie passo a passo:

Fase 1 - Planejamento:
- Análise dos endpoints e funcionalidades necessárias
- Wireframe da interface (descrição textual)
- Estrutura de pastas e arquivos

Fase 2 - HTML:
- Estrutura semântica de cada componente
- Formulários e inputs necessários
- Elementos de lista/visualização de dados

Fase 3 - CSS:
- Sistema de design (cores, tipografia, espaçamentos)
- Layout responsivo
- Componentes reutilizáveis
- Estados e animações

Fase 4 - JavaScript:
- Funções para cada operação CRUD
- Manipulação do DOM
- Tratamento de erros
- Validações

Fase 5 - Integração:
- Conexão com a API usando fetch
- Gerenciamento de estado
- Feedback visual para o usuário

Fase 6 - Polimento:
- Melhorias de UX
- Otimizações de performance
- Testes manuais

IMPORTANTE:
- Explique o PORQUÊ de cada decisão
- Me dê dicas, mas deixe EU implementar primeiro
- Quando eu pedir, revise meu código
- Me ensine a debugar problemas
- Sugira recursos para aprender mais

Está pronto para me guiar? Vamos começar pela Fase 1!</code></pre>
                </div>
              </div>
            </div>

            <div class="mb-6" id="boas-praticas">
              <h2 class="title is-4 section-title mb-5">7. Boas Práticas no Uso da IA</h2>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-success">✅ Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Peça explicações, não apenas código</li>
                        <li>Tente resolver antes de pedir a solução</li>
                        <li>Peça para a IA explicar o código gerado</li>
                        <li>Use para aprender conceitos novos</li>
                        <li>Peça exercícios para praticar</li>
                        <li>Solicite revisão do seu código</li>
                        <li>Pergunte o "porquê" das coisas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-danger">❌ Não Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Copiar e colar sem entender</li>
                        <li>Usar a IA como substituto do aprendizado</li>
                        <li>Aceitar código sem questionar</li>
                        <li>Pular a parte de tentar sozinho</li>
                        <li>Ignorar as explicações</li>
                        <li>Usar apenas para "fazer por você"</li>
                        <li>Esquecer de testar e validar o código</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao">
              <h2 class="title is-4 section-title mb-5">8. Conclusão</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">O Equilíbrio Perfeito</h3>
                <div class="content">
                  <p class="mb-4">
                    A IA é uma ferramenta poderosa que pode <strong>acelerar seu aprendizado</strong>, mas nunca deve substituir o processo de aprender. Use-a como um mentor sempre disponível, que te guia, explica e desafia, mas deixa você fazer o trabalho pesado de realmente entender e praticar.
                  </p>
                  <p class="mb-4">
                    Lembre-se: o objetivo não é ter código pronto, mas sim <span class="highlight-pink">desenvolver a habilidade de criar código por conta própria</span>. A IA te ajuda a chegar lá mais rápido, mas o caminho ainda precisa ser percorrido por você.
                  </p>
                  <div class="notification is-info is-light mt-5">
                    <strong>💡 Dica Final:</strong> Sempre que a IA te der uma solução, desafie-se a recriar sem olhar. Se conseguir, você realmente aprendeu. Se não conseguir, peça mais explicações e tente novamente.
                  </div>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          id: 47,
          titulo: "Construindo uma Mini API com Express.js",
          subtitulo: "Aula 11.2",
          descricao: "Aprenda a criar uma API REST do zero usando Express.js e a arquitetura MSC (Model, Service, Controller)",
          icone: "fa-server",
          conteudo: `
          <div class="container">
            <div class="mb-6" id="o-que-e-api">
              <h2 class="title is-4 section-title mb-5">1. O que é uma API?</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  <strong>API</strong> significa <strong>Application Programming Interface</strong> (Interface de Programação de Aplicações). Em termos simples, é um <span class="highlight-pink">intermediário que permite que diferentes aplicações conversem entre si</span>.
                </p>
                <div class="box box-dark">
                  <h3 class="title is-5 mb-4">🍕 Analogia do Restaurante</h3>
                  <div class="content">
                    <p class="mb-3">Imagine que você está em um restaurante:</p>
                    <ul>
                      <li><strong>Você (Cliente/Front-end):</strong> Quer comer uma pizza</li>
                      <li><strong>Garçom (API):</strong> Anota seu pedido e leva para a cozinha</li>
                      <li><strong>Cozinha (Servidor/Back-end):</strong> Prepara a pizza</li>
                      <li><strong>Garçom (API):</strong> Traz a pizza pronta de volta para você</li>
                    </ul>
                    <p class="mt-4">A API funciona exatamente assim: ela recebe solicitações, processa (ou encaminha para processamento) e retorna uma resposta.</p>
                  </div>
                </div>
              </div>

              <div class="columns mt-5">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">API REST</h3>
                    <p>É um estilo de arquitetura que usa o protocolo HTTP para comunicação. Cada operação é representada por um método HTTP (GET, POST, PUT, DELETE).</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">Endpoint</h3>
                    <p>É uma URL específica que representa um recurso. Ex: <code>/api/users</code> ou <code>/api/products/1</code></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="fluxo-requisicao">
              <h2 class="title is-4 section-title mb-5">2. O Fluxo Completo de uma Requisição</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Vamos entender o caminho que uma requisição percorre desde o momento que o cliente faz o pedido até receber a resposta:
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4 has-text-centered">📊 Fluxo da Requisição</h3>
                <div class="content">
                  <div class="notification is-info is-light mb-4">
                    <strong>1. Cliente faz a requisição</strong><br>
                    O front-end (navegador, app mobile, etc.) faz uma chamada HTTP para um endpoint.<br>
                    Exemplo: <code>GET http://localhost:3000/api/users</code>
                  </div>
                  
                  <div class="has-text-centered mb-4">⬇️</div>
                  
                  <div class="notification is-primary is-light mb-4">
                    <strong>2. Express recebe a requisição</strong><br>
                    O servidor Express captura a requisição e identifica qual rota deve ser acionada baseado na URL e no método HTTP.
                  </div>
                  
                  <div class="has-text-centered mb-4">⬇️</div>
                  
                  <div class="notification is-success is-light mb-4">
                    <strong>3. Controller (Controlador)</strong><br>
                    Recebe a requisição, extrai os dados necessários (params, query, body) e chama a camada de serviço.<br>
                    <em>Responsabilidade: Gerenciar a entrada e saída de dados.</em>
                  </div>
                  
                  <div class="has-text-centered mb-4">⬇️</div>
                  
                  <div class="notification is-warning is-light mb-4">
                    <strong>4. Service (Serviço)</strong><br>
                    Contém a lógica de negócio. Valida dados, aplica regras e chama a camada de modelo quando necessário.<br>
                    <em>Responsabilidade: Implementar as regras de negócio.</em>
                  </div>
                  
                  <div class="has-text-centered mb-4">⬇️</div>
                  
                  <div class="notification is-danger is-light mb-4">
                    <strong>5. Model (Modelo)</strong><br>
                    Interage diretamente com o banco de dados ou fonte de dados. Executa queries e retorna os dados brutos.<br>
                    <em>Responsabilidade: Acesso e manipulação de dados.</em>
                  </div>
                  
                  <div class="has-text-centered mb-4">⬆️ <small>(Dados retornam pelo mesmo caminho)</small></div>
                  
                  <div class="notification is-light mb-4">
                    <strong>6. Resposta ao Cliente</strong><br>
                    O Express envia a resposta HTTP de volta ao cliente com o status code apropriado e os dados (geralmente em JSON).
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="arquitetura-msc">
              <h2 class="title is-4 section-title mb-5">3. Arquitetura MSC (Model-Service-Controller)</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  A arquitetura MSC separa as responsabilidades em três camadas distintas, tornando o código mais organizado, testável e escalável:
                </p>
              </div>

              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">📋 Controller</h3>
                    <div class="content">
                      <p class="mb-3"><strong>Responsabilidade:</strong></p>
                      <ul>
                        <li>Receber requisições HTTP</li>
                        <li>Extrair dados (params, query, body)</li>
                        <li>Chamar o Service</li>
                        <li>Retornar resposta HTTP</li>
                      </ul>
                      <p class="mt-3"><strong>NÃO deve:</strong> Ter lógica de negócio ou acessar banco de dados diretamente.</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">⚙️ Service</h3>
                    <div class="content">
                      <p class="mb-3"><strong>Responsabilidade:</strong></p>
                      <ul>
                        <li>Implementar lógica de negócio</li>
                        <li>Validar dados</li>
                        <li>Orquestrar chamadas ao Model</li>
                        <li>Aplicar regras da aplicação</li>
                      </ul>
                      <p class="mt-3"><strong>NÃO deve:</strong> Lidar com requisições HTTP ou queries SQL diretas.</p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">🗄️ Model</h3>
                    <div class="content">
                      <p class="mb-3"><strong>Responsabilidade:</strong></p>
                      <ul>
                        <li>Interagir com banco de dados</li>
                        <li>Executar queries</li>
                        <li>Mapear dados</li>
                        <li>Retornar dados brutos</li>
                      </ul>
                      <p class="mt-3"><strong>NÃO deve:</strong> Conter lógica de negócio ou validações complexas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="configurando-projeto">
              <h2 class="title is-4 section-title mb-5">4. Configurando o Projeto</h2>
              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 1: Inicializar o Projeto</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code># Criar pasta do projeto
mkdir api-tarefas
cd api-tarefas

# Inicializar projeto Node.js
npm init -y

# Instalar dependências
npm install express
npm install --save-dev nodemon</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 2: Estrutura de Pastas</h3>
                <div class="content">
                  <pre class="p-4"><code>api-tarefas/
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── services/
│   │   └── taskService.js
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── app.js
├── server.js
├── package.json
└── .gitignore</code></pre>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Passo 3: Configurar Scripts no package.json</h3>
                <div class="content">
                  <pre class="p-4"><code>{
  "name": "api-tarefas",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}</code></pre>
                </div>
              </div>
            </div>

            <div class="mb-6" id="implementando-api">
              <h2 class="title is-4 section-title mb-5">5. Implementando a API</h2>
              
              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📄 server.js - Ponto de Entrada</h3>
                <div class="content">
                  <pre class="p-4"><code>const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`🚀 Servidor rodando na porta \${PORT}\`);
});</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📄 src/app.js - Configuração do Express</h3>
                <div class="content">
                  <pre class="p-4"><code>const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Rotas
app.use('/api/tasks', taskRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API de Tarefas está funcionando!' });
});

module.exports = app;</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📄 src/models/taskModel.js - Camada de Dados</h3>
                <div class="content">
                  <p class="mb-3">Por simplicidade, vamos usar um array em memória (em produção, seria um banco de dados real):</p>
                  <pre class="p-4"><code>// Simulando um banco de dados
let tasks = [
  { id: 1, title: 'Estudar Express', completed: false },
  { id: 2, title: 'Criar API', completed: true },
];

let nextId = 3;

const taskModel = {
  // Buscar todas as tarefas
  findAll: async () => {
    return tasks;
  },

  // Buscar tarefa por ID
  findById: async (id) => {
    return tasks.find(task => task.id === parseInt(id));
  },

  // Criar nova tarefa
  create: async (taskData) => {
    const newTask = {
      id: nextId++,
      title: taskData.title,
      completed: false,
    };
    tasks.push(newTask);
    return newTask;
  },

  // Atualizar tarefa
  update: async (id, taskData) => {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) return null;
    
    tasks[index] = { ...tasks[index], ...taskData };
    return tasks[index];
  },

  // Deletar tarefa
  delete: async (id) => {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) return false;
    
    tasks.splice(index, 1);
    return true;
  },
};

module.exports = taskModel;</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📄 src/services/taskService.js - Lógica de Negócio</h3>
                <div class="content">
                  <pre class="p-4"><code>const taskModel = require('../models/taskModel');

const taskService = {
  // Listar todas as tarefas
  getAllTasks: async () => {
    const tasks = await taskModel.findAll();
    return tasks;
  },

  // Buscar tarefa por ID
  getTaskById: async (id) => {
    const task = await taskModel.findById(id);
    if (!task) {
      throw new Error('Tarefa não encontrada');
    }
    return task;
  },

  // Criar nova tarefa
  createTask: async (taskData) => {
    // Validação
    if (!taskData.title || taskData.title.trim() === '') {
      throw new Error('O título é obrigatório');
    }

    if (taskData.title.length < 3) {
      throw new Error('O título deve ter pelo menos 3 caracteres');
    }

    const newTask = await taskModel.create(taskData);
    return newTask;
  },

  // Atualizar tarefa
  updateTask: async (id, taskData) => {
    // Verifica se a tarefa existe
    await taskService.getTaskById(id);

    // Validação se título foi fornecido
    if (taskData.title !== undefined) {
      if (taskData.title.trim() === '') {
        throw new Error('O título não pode ser vazio');
      }
      if (taskData.title.length < 3) {
        throw new Error('O título deve ter pelo menos 3 caracteres');
      }
    }

    const updatedTask = await taskModel.update(id, taskData);
    return updatedTask;
  },

  // Deletar tarefa
  deleteTask: async (id) => {
    // Verifica se a tarefa existe
    await taskService.getTaskById(id);

    const deleted = await taskModel.delete(id);
    return deleted;
  },
};

module.exports = taskService;</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📄 src/controllers/taskController.js - Gerenciador de Requisições</h3>
                <div class="content">
                  <pre class="p-4"><code>const taskService = require('../services/taskService');

const taskController = {
  // GET /api/tasks - Listar todas as tarefas
  getAllTasks: async (req, res) => {
    try {
      const tasks = await taskService.getAllTasks();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // GET /api/tasks/:id - Buscar tarefa por ID
  getTaskById: async (req, res) => {
    try {
      const { id } = req.params;
      const task = await taskService.getTaskById(id);
      return res.status(200).json(task);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  },

  // POST /api/tasks - Criar nova tarefa
  createTask: async (req, res) => {
    try {
      const taskData = req.body;
      const newTask = await taskService.createTask(taskData);
      return res.status(201).json(newTask);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // PUT /api/tasks/:id - Atualizar tarefa
  updateTask: async (req, res) => {
    try {
      const { id } = req.params;
      const taskData = req.body;
      const updatedTask = await taskService.updateTask(id, taskData);
      return res.status(200).json(updatedTask);
    } catch (error) {
      const statusCode = error.message === 'Tarefa não encontrada' ? 404 : 400;
      return res.status(statusCode).json({ error: error.message });
    }
  },

  // DELETE /api/tasks/:id - Deletar tarefa
  deleteTask: async (req, res) => {
    try {
      const { id } = req.params;
      await taskService.deleteTask(id);
      return res.status(204).send();
    } catch (error) {
      const statusCode = error.message === 'Tarefa não encontrada' ? 404 : 500;
      return res.status(statusCode).json({ error: error.message });
    }
  },
};

module.exports = taskController;</code></pre>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">📄 src/routes/taskRoutes.js - Definição de Rotas</h3>
                <div class="content">
                  <pre class="p-4"><code>const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Rotas CRUD
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;</code></pre>
                </div>
              </div>
            </div>

            <div class="mb-6" id="testando-api">
              <h2 class="title is-4 section-title mb-5">6. Testando a API</h2>
              
              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Iniciar o Servidor</h3>
                <div class="content">
                  <pre class="p-4"><code>npm run dev</code></pre>
                  <p class="mt-3">Você deve ver: <code>🚀 Servidor rodando na porta 3000</code></p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Testando os Endpoints</h3>
                <div class="content">
                  <p class="mb-4">Você pode usar ferramentas como Insomnia, Postman ou até o próprio navegador para algumas rotas. Aqui estão exemplos com cURL:</p>
                  
                  <h4 class="title is-6 mt-5 mb-3">1. Listar todas as tarefas (GET)</h4>
                  <pre class="p-4"><code>curl http://localhost:3000/api/tasks</code></pre>
                  
                  <h4 class="title is-6 mt-5 mb-3">2. Buscar tarefa por ID (GET)</h4>
                  <pre class="p-4"><code>curl http://localhost:3000/api/tasks/1</code></pre>
                  
                  <h4 class="title is-6 mt-5 mb-3">3. Criar nova tarefa (POST)</h4>
                  <pre class="p-4"><code>curl -X POST http://localhost:3000/api/tasks \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Aprender Node.js"}'</code></pre>
                  
                  <h4 class="title is-6 mt-5 mb-3">4. Atualizar tarefa (PUT)</h4>
                  <pre class="p-4"><code>curl -X PUT http://localhost:3000/api/tasks/1 \\
  -H "Content-Type: application/json" \\
  -d '{"completed":true}'</code></pre>
                  
                  <h4 class="title is-6 mt-5 mb-3">5. Deletar tarefa (DELETE)</h4>
                  <pre class="p-4"><code>curl -X DELETE http://localhost:3000/api/tasks/1</code></pre>
                </div>
              </div>
            </div>

            <div class="mb-6" id="status-codes">
              <h2 class="title is-4 section-title mb-5">7. Status Codes HTTP</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Entender os códigos de status HTTP é fundamental para APIs REST. Aqui estão os mais comuns:
                </p>
              </div>

              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3 has-text-success">2xx - Sucesso</h3>
                    <div class="content">
                      <ul>
                        <li><code>200 OK</code> - Requisição bem-sucedida</li>
                        <li><code>201 Created</code> - Recurso criado com sucesso</li>
                        <li><code>204 No Content</code> - Sucesso, sem conteúdo para retornar</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3 has-text-warning">4xx - Erro do Cliente</h3>
                    <div class="content">
                      <ul>
                        <li><code>400 Bad Request</code> - Dados inválidos</li>
                        <li><code>404 Not Found</code> - Recurso não encontrado</li>
                        <li><code>401 Unauthorized</code> - Não autenticado</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3 has-text-danger">5xx - Erro do Servidor</h3>
                    <div class="content">
                      <ul>
                        <li><code>500 Internal Server Error</code> - Erro interno</li>
                        <li><code>503 Service Unavailable</code> - Serviço indisponível</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="boas-praticas">
              <h2 class="title is-4 section-title mb-5">8. Boas Práticas</h2>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-success">✅ Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Use verbos HTTP corretamente (GET, POST, PUT, DELETE)</li>
                        <li>Retorne status codes apropriados</li>
                        <li>Valide dados de entrada</li>
                        <li>Use try/catch para erros</li>
                        <li>Mantenha as camadas separadas</li>
                        <li>Use nomes de rotas claros e consistentes</li>
                        <li>Documente sua API</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-danger">❌ Não Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Misturar lógica de negócio no Controller</li>
                        <li>Acessar banco de dados diretamente no Controller</li>
                        <li>Ignorar tratamento de erros</li>
                        <li>Usar apenas GET e POST para tudo</li>
                        <li>Expor erros sensíveis ao cliente</li>
                        <li>Deixar rotas sem validação</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao">
              <h2 class="title is-4 section-title mb-5">9. Conclusão e Próximos Passos</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Você criou sua primeira API! 🎉</h3>
                <div class="content">
                  <p class="mb-4">
                    Parabéns! Agora você entende o fluxo completo de uma requisição, desde o cliente até o banco de dados e de volta. A arquitetura MSC mantém seu código organizado e fácil de manter.
                  </p>
                  
                  <h4 class="title is-6 mt-5 mb-3">📚 O que você aprendeu:</h4>
                  <ul class="mb-4">
                    <li>O que é uma API e como ela funciona</li>
                    <li>O fluxo completo de uma requisição HTTP</li>
                    <li>Arquitetura MSC (Model-Service-Controller)</li>
                    <li>Implementação prática com Express.js</li>
                    <li>CRUD completo (Create, Read, Update, Delete)</li>
                    <li>Status codes HTTP</li>
                    <li>Boas práticas de desenvolvimento de APIs</li>
                  </ul>
                  
                  <h4 class="title is-6 mt-5 mb-3">🚀 Próximos passos para evoluir:</h4>
                  <ul>
                    <li>Integrar com um banco de dados real (MongoDB, PostgreSQL)</li>
                    <li>Adicionar autenticação e autorização (JWT)</li>
                    <li>Implementar middleware de validação (express-validator)</li>
                    <li>Adicionar documentação (Swagger)</li>
                    <li>Implementar testes automatizados</li>
                    <li>Deploy em produção (Heroku, Railway, Render)</li>
                  </ul>
                  
                  <div class="notification is-info is-light mt-5">
                    <strong>💡 Dica:</strong> Agora que você tem uma API funcionando, use os conhecimentos da aula anterior (11.1) para criar um front-end consumindo esta API! Você terá uma aplicação full-stack completa.
                  </div>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          id: 48,
          titulo: "Pacotes NPM e Como Utilizá-los",
          subtitulo: "Aula 11.3",
          descricao: "Aprenda o que é NPM, como instalar e usar pacotes em seus projetos, com exemplos práticos para HTML e CSS",
          icone: "fa-box",
          conteudo: `
          <div class="container">
            <div class="mb-6" id="o-que-e-npm">
              <h2 class="title is-4 section-title mb-5">1. O que é NPM?</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  <strong>NPM</strong> significa <strong>Node Package Manager</strong> (Gerenciador de Pacotes do Node). É o maior ecossistema de bibliotecas e ferramentas de código aberto do mundo, permitindo que você use código criado por outros desenvolvedores em seus projetos.
                </p>
                <div class="box box-dark">
                  <h3 class="title is-5 mb-4">🎁 Analogia da Loja de Ferramentas</h3>
                  <div class="content">
                    <p class="mb-3">Imagine que você está construindo uma casa:</p>
                    <ul>
                      <li><strong>Sem NPM:</strong> Você teria que fabricar cada ferramenta do zero (martelo, serra, furadeira)</li>
                      <li><strong>Com NPM:</strong> Você vai à loja e compra ferramentas prontas e testadas</li>
                    </ul>
                    <p class="mt-4">NPM é essa "loja" onde você encontra milhões de "ferramentas" (pacotes) prontas para usar!</p>
                  </div>
                </div>
              </div>

              <div class="columns mt-5">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">📦 Pacote (Package)</h3>
                    <p>Uma biblioteca ou ferramenta reutilizável. Ex: <code>express</code>, <code>axios</code>, <code>lodash</code></p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">📄 package.json</h3>
                    <p>Arquivo que gerencia as dependências do seu projeto, como uma "lista de compras" de pacotes</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">📁 node_modules</h3>
                    <p>Pasta onde todos os pacotes instalados ficam armazenados</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="instalando-npm">
              <h2 class="title is-4 section-title mb-5">2. Instalando e Verificando o NPM</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  O NPM já vem instalado automaticamente quando você instala o Node.js. Vamos verificar se está tudo certo:
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Verificar Instalação</h3>
                <div class="content">
                  <pre class="p-4"><code># Verificar versão do Node.js
node --version

# Verificar versão do NPM
npm --version</code></pre>
                  <p class="mt-3">Se ambos os comandos retornarem versões, está tudo pronto!</p>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Inicializar um Projeto NPM</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code># Criar o arquivo package.json
npm init -y</code></pre>
                  <p>O comando <code>npm init -y</code> cria um arquivo <code>package.json</code> com configurações padrão. Esse arquivo é o coração do seu projeto Node.js.</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="comandos-basicos">
              <h2 class="title is-4 section-title mb-5">3. Comandos Básicos do NPM</h2>
              
              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📥 Instalar Pacotes</h3>
                <div class="content">
                  <pre class="p-4 mb-4"><code># Instalar um pacote (adiciona às dependências de produção)
npm install nome-do-pacote

# Forma abreviada
npm i nome-do-pacote

# Instalar como dependência de desenvolvimento
npm install --save-dev nome-do-pacote
npm i -D nome-do-pacote

# Instalar globalmente (disponível em todo o sistema)
npm install -g nome-do-pacote

# Instalar múltiplos pacotes de uma vez
npm install pacote1 pacote2 pacote3</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🗑️ Remover Pacotes</h3>
                <div class="content">
                  <pre class="p-4"><code># Desinstalar um pacote
npm uninstall nome-do-pacote

# Forma abreviada
npm un nome-do-pacote</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🔄 Outros Comandos Úteis</h3>
                <div class="content">
                  <pre class="p-4"><code># Instalar todas as dependências listadas no package.json
npm install

# Atualizar pacotes
npm update

# Listar pacotes instalados
npm list

# Ver informações de um pacote
npm info nome-do-pacote

# Limpar cache do NPM
npm cache clean --force</code></pre>
                </div>
              </div>
            </div>

            <div class="mb-6" id="package-json">
              <h2 class="title is-4 section-title mb-5">4. Entendendo o package.json</h2>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Exemplo de package.json</h3>
                <div class="content">
                  <pre class="p-4"><code>{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Projeto incrível com NPM",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --mode production"
  },
  "keywords": ["html", "css", "javascript"],
  "author": "Seu Nome",
  "license": "MIT",
  "dependencies": {
    "axios": "^1.6.0",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "webpack": "^5.89.0"
  }
}</code></pre>
                </div>
              </div>

              <div class="columns mt-5">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">dependencies</h3>
                    <p>Pacotes necessários para o projeto funcionar em produção</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">devDependencies</h3>
                    <p>Pacotes usados apenas durante o desenvolvimento (testes, build, etc.)</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">scripts</h3>
                    <p>Comandos personalizados que podem ser executados com <code>npm run nome-do-script</code></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="pacotes-html-css">
              <h2 class="title is-4 section-title mb-5">5. Pacotes NPM para Projetos HTML e CSS</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Vamos explorar 5 pacotes simples e úteis que podem melhorar significativamente seus projetos front-end. Todos são fáceis de usar, perfeitos para iniciantes!
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🎨 1. Bootstrap - Framework CSS Completo</h3>
                <div class="content">
                  <p class="mb-3">Framework CSS mais popular do mundo, agora via NPM.</p>
                  <pre class="p-4 mb-4"><code># Instalar
npm install bootstrap

# Importar no seu arquivo JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

# Ou linkar no HTML
&lt;link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"&gt;</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🎨 1. Bootstrap - Framework CSS Completo</h3>
                <div class="content">
                  <p class="mb-3">Framework CSS mais popular do mundo com componentes prontos para usar.</p>
                  <pre class="p-4 mb-4"><code># Instalar
npm install bootstrap

# Linkar no HTML
&lt;link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"&gt;
&lt;script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</code></pre>

                  <p class="mb-3 mt-4"><strong>Exemplo de uso:</strong></p>
                  <pre class="p-4"><code>&lt;button class="btn btn-primary"&gt;Botão Azul&lt;/button&gt;
&lt;div class="alert alert-success"&gt;Sucesso!&lt;/div&gt;
&lt;div class="card"&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Título do Card&lt;/h5&gt;
    &lt;p class="card-text"&gt;Conteúdo do card&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                  <p class="mt-3"><strong>Benefício:</strong> Componentes prontos sem precisar escrever CSS!</p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🎭 2. Animate.css - Animações CSS Prontas</h3>
                <div class="content">
                  <p class="mb-3">Biblioteca com dezenas de animações CSS prontas para usar. Basta adicionar classes!</p>
                  <pre class="p-4 mb-4"><code># Instalar
npm install animate.css

# Linkar no HTML
&lt;link rel="stylesheet" href="node_modules/animate.css/animate.min.css"&gt;</code></pre>

                  <p class="mb-3 mt-4"><strong>Exemplos de animações:</strong></p>
                  <pre class="p-4"><code>&lt;!-- Bounce (pular) --&gt;
&lt;h1 class="animate__animated animate__bounce"&gt;Título Pulando&lt;/h1&gt;

&lt;!-- Fade In (aparecer suavemente) --&gt;
&lt;div class="animate__animated animate__fadeIn"&gt;Aparece suavemente&lt;/div&gt;

&lt;!-- Slide In (deslizar) --&gt;
&lt;p class="animate__animated animate__slideInLeft"&gt;Desliza da esquerda&lt;/p&gt;

&lt;!-- Zoom In (aumentar) --&gt;
&lt;img class="animate__animated animate__zoomIn" src="foto.jpg"&gt;</code></pre>
                  <p class="mt-3"><strong>Benefício:</strong> Animações profissionais sem escrever JavaScript!</p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🎨 3. Font Awesome - Ícones Prontos</h3>
                <div class="content">
                  <p class="mb-3">Biblioteca com milhares de ícones prontos para usar.</p>
                  <pre class="p-4 mb-4"><code># Instalar
npm install @fortawesome/fontawesome-free

# Importar no CSS
@import "~@fortawesome/fontawesome-free/css/all.css";

# Ou linkar no HTML
&lt;link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css"&gt;</code></pre>

                  <p class="mb-3 mt-4"><strong>Exemplo de uso:</strong></p>
                  <pre class="p-4"><code>&lt;i class="fas fa-heart"&gt;&lt;/i&gt;
&lt;i class="fab fa-github"&gt;&lt;/i&gt;
&lt;i class="fas fa-shopping-cart"&gt;&lt;/i&gt;</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🎨 3. Font Awesome - Ícones Prontos</h3>
                <div class="content">
                  <p class="mb-3">Biblioteca com milhares de ícones prontos para usar.</p>
                  <pre class="p-4 mb-4"><code># Instalar
npm install @fortawesome/fontawesome-free

# Linkar no HTML
&lt;link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css"&gt;</code></pre>

                  <p class="mb-3 mt-4"><strong>Exemplo de uso:</strong></p>
                  <pre class="p-4"><code>&lt;i class="fas fa-heart"&gt;&lt;/i&gt; Coração
&lt;i class="fab fa-github"&gt;&lt;/i&gt; GitHub
&lt;i class="fas fa-shopping-cart"&gt;&lt;/i&gt; Carrinho
&lt;i class="fas fa-star"&gt;&lt;/i&gt; Estrela
&lt;i class="fas fa-user"&gt;&lt;/i&gt; Usuário</code></pre>
                  <p class="mt-3"><strong>Benefício:</strong> Ícones profissionais sem precisar baixar imagens!</p>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">✨ 4. AOS (Animate On Scroll) - Animações ao Rolar a Página</h3>
                <div class="content">
                  <p class="mb-3">Crie animações incríveis que aparecem quando o usuário rola a página para baixo.</p>
                  <pre class="p-4 mb-4"><code># Instalar
npm install aos

# Linkar no HTML
&lt;link rel="stylesheet" href="node_modules/aos/dist/aos.css"&gt;
&lt;script src="node_modules/aos/dist/aos.js"&gt;&lt;/script&gt;

# Inicializar (adicione no final do HTML)
&lt;script&gt;
  AOS.init();
&lt;/script&gt;</code></pre>

                  <p class="mb-3 mt-4"><strong>Exemplos de animações:</strong></p>
                  <pre class="p-4"><code>&lt;!-- Fade (aparecer) --&gt;
&lt;div data-aos="fade-up"&gt;Aparece de baixo para cima&lt;/div&gt;

&lt;!-- Zoom --&gt;
&lt;img data-aos="zoom-in" src="foto.jpg"&gt;

&lt;!-- Flip (virar) --&gt;
&lt;div data-aos="flip-left"&gt;Vira da esquerda&lt;/div&gt;

&lt;!-- Com delay (atraso) --&gt;
&lt;p data-aos="fade-right" data-aos-delay="300"&gt;Aparece depois&lt;/p&gt;</code></pre>
                  <p class="mt-3"><strong>Benefício:</strong> Efeito "wow" quando o usuário rola a página!</p>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">� 5. Typed.js - Efeito de Digitação</h3>
                <div class="content">
                  <p class="mb-3">Cria um efeito de texto sendo digitado, perfeito para títulos e chamadas de atenção.</p>
                  <pre class="p-4 mb-4"><code># Instalar
npm install typed.js

# Linkar no HTML
&lt;script src="node_modules/typed.js/dist/typed.umd.js"&gt;&lt;/script&gt;</code></pre>

                  <p class="mb-3 mt-4"><strong>Exemplo de uso:</strong></p>
                  <pre class="p-4"><code>&lt;!-- HTML --&gt;
&lt;h1&gt;Eu sou &lt;span id="typed"&gt;&lt;/span&gt;&lt;/h1&gt;

&lt;!-- JavaScript --&gt;
&lt;script&gt;
  var typed = new Typed('#typed', {
    strings: [
      'Desenvolvedor Front-end',
      'Designer',
      'Criativo'
    ],
    typeSpeed: 50,      // Velocidade de digitação
    backSpeed: 30,      // Velocidade de apagar
    loop: true          // Repetir infinitamente
  });
&lt;/script&gt;</code></pre>
                  <p class="mt-3"><strong>Benefício:</strong> Títulos dinâmicos e chamativos com pouquíssimo código!</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="projeto-completo">
              <h2 class="title is-4 section-title mb-5">6. Projeto Prático Completo</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Vamos criar um projeto HTML/CSS moderno usando vários pacotes NPM:
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 1: Estrutura do Projeto</h3>
                <div class="content">
                  <pre class="p-4"><code>meu-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── package.json
└── .gitignore</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 2: Instalar Pacotes</h3>
                <div class="content">
                  <pre class="p-4"><code># Inicializar projeto
npm init -y

# Instalar pacotes
npm install bootstrap animate.css @fortawesome/fontawesome-free aos typed.js</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 3: HTML (index.html)</h3>
                <div class="content">
                  <pre class="p-4"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Meu Site com NPM&lt;/title&gt;
  
  &lt;!-- Bootstrap --&gt;
  &lt;link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"&gt;
  
  &lt;!-- Animate.css --&gt;
  &lt;link rel="stylesheet" href="node_modules/animate.css/animate.min.css"&gt;
  
  &lt;!-- Font Awesome --&gt;
  &lt;link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css"&gt;
  
  &lt;!-- AOS --&gt;
  &lt;link rel="stylesheet" href="node_modules/aos/dist/aos.css"&gt;
  
  &lt;!-- Seu CSS --&gt;
  &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- Header com animação --&gt;
  &lt;header class="bg-dark text-white text-center py-5 animate__animated animate__fadeInDown"&gt;
    &lt;div class="container"&gt;
      &lt;h1&gt;
        &lt;i class="fas fa-rocket"&gt;&lt;/i&gt; 
        &lt;span id="typed"&gt;&lt;/span&gt;
      &lt;/h1&gt;
      &lt;p class="lead"&gt;Usando Bootstrap, Animate.css, Font Awesome, AOS e Typed.js&lt;/p&gt;
    &lt;/div&gt;
  &lt;/header&gt;

  &lt;!-- Seção com cards animados ao rolar --&gt;
  &lt;section class="container my-5"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-md-4" data-aos="fade-up"&gt;
        &lt;div class="card"&gt;
          &lt;div class="card-body text-center"&gt;
            &lt;i class="fas fa-heart fa-3x text-danger mb-3"&gt;&lt;/i&gt;
            &lt;h5 class="card-title"&gt;Design Moderno&lt;/h5&gt;
            &lt;p class="card-text"&gt;Interface bonita com Bootstrap&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      &lt;div class="col-md-4" data-aos="fade-up" data-aos-delay="200"&gt;
        &lt;div class="card"&gt;
          &lt;div class="card-body text-center"&gt;
            &lt;i class="fas fa-star fa-3x text-warning mb-3"&gt;&lt;/i&gt;
            &lt;h5 class="card-title"&gt;Animações Incríveis&lt;/h5&gt;
            &lt;p class="card-text"&gt;Efeitos com Animate.css e AOS&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      &lt;div class="col-md-4" data-aos="fade-up" data-aos-delay="400"&gt;
        &lt;div class="card"&gt;
          &lt;div class="card-body text-center"&gt;
            &lt;i class="fas fa-code fa-3x text-primary mb-3"&gt;&lt;/i&gt;
            &lt;h5 class="card-title"&gt;Fácil de Usar&lt;/h5&gt;
            &lt;p class="card-text"&gt;Tudo com pacotes NPM&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;!-- Bootstrap JS --&gt;
  &lt;script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
  
  &lt;!-- AOS --&gt;
  &lt;script src="node_modules/aos/dist/aos.js"&gt;&lt;/script&gt;
  
  &lt;!-- Typed.js --&gt;
  &lt;script src="node_modules/typed.js/dist/typed.umd.js"&gt;&lt;/script&gt;
  
  &lt;!-- Seu JavaScript --&gt;
  &lt;script src="js/script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 4: CSS (css/style.css)</h3>
                <div class="content">
                  <pre class="p-4"><code>body {
  font-family: 'Arial', sans-serif;
}

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card {
  transition: transform 0.3s;
  height: 100%;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">Passo 5: JavaScript (js/script.js)</h3>
                <div class="content">
                  <pre class="p-4"><code>// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Inicializar Typed.js (efeito de digitação)
var typed = new Typed('#typed', {
  strings: [
    'Bem-vindo ao meu site!',
    'Projeto com NPM',
    'Fácil e Profissional!'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});</code></pre>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Passo 6: Abrir no Navegador</h3>
                <div class="content">
                  <p class="mb-3">Simplesmente abra o arquivo <code>index.html</code> no seu navegador!</p>
                  <div class="notification is-info is-light mt-4">
                    <strong>💡 Dica:</strong> Use a extensão "Live Server" do VS Code para abrir com reload automático, ou simplesmente clique duas vezes no arquivo HTML.
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="gitignore">
              <h2 class="title is-4 section-title mb-5">7. Importante: .gitignore</h2>
              <div class="box box-dark">
                <h3 class="title is-5 mb-4">Nunca commite node_modules!</h3>
                <div class="content">
                  <p class="mb-3">A pasta <code>node_modules</code> pode ter milhares de arquivos. Sempre adicione ao .gitignore:</p>
                  <pre class="p-4"><code># .gitignore
node_modules/
*.log</code></pre>
                  <div class="notification is-warning is-light mt-4">
                    <strong>⚠️ Importante:</strong> Quando clonar um projeto, sempre execute <code>npm install</code> para instalar as dependências listadas no package.json.
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="boas-praticas">
              <h2 class="title is-4 section-title mb-5">8. Boas Práticas com NPM</h2>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-success">✅ Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Sempre use <code>package.json</code> para gerenciar dependências</li>
                        <li>Adicione <code>node_modules</code> ao .gitignore</li>
                        <li>Use versões específicas ou ranges controlados</li>
                        <li>Mantenha as dependências atualizadas</li>
                        <li>Leia a documentação dos pacotes</li>
                        <li>Prefira pacotes bem mantidos e populares</li>
                        <li>Use scripts do NPM para automatizar tarefas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-danger">❌ Não Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Instalar pacotes sem necessidade</li>
                        <li>Commitar a pasta node_modules</li>
                        <li>Ignorar avisos de segurança</li>
                        <li>Usar pacotes desatualizados ou abandonados</li>
                        <li>Instalar tudo globalmente</li>
                        <li>Modificar arquivos dentro de node_modules</li>
                        <li>Copiar código sem entender as dependências</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao">
              <h2 class="title is-4 section-title mb-5">9. Conclusão</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">O Poder do Ecossistema NPM 🚀</h3>
                <div class="content">
                  <p class="mb-4">
                    O NPM abre um mundo de possibilidades para seus projetos! Com milhões de pacotes disponíveis, você pode construir aplicações profissionais sem reinventar a roda.
                  </p>
                  
                  <h4 class="title is-6 mt-5 mb-3">📚 O que você aprendeu:</h4>
                  <ul class="mb-4">
                    <li>O que é NPM e como funciona</li>
                    <li>Comandos essenciais do NPM</li>
                    <li>Como gerenciar dependências com package.json</li>
                    <li>5 pacotes úteis para projetos HTML/CSS</li>
                    <li>Como criar um projeto moderno do zero</li>
                    <li>Boas práticas de gerenciamento de pacotes</li>
                  </ul>
                  
                  <h4 class="title is-6 mt-5 mb-3">🎯 Pacotes Que Você Aprendeu a Usar:</h4>
                  <ul class="mb-4">
                    <li><strong>Bootstrap:</strong> Framework CSS com componentes prontos</li>
                    <li><strong>Animate.css:</strong> Animações CSS prontas</li>
                    <li><strong>Font Awesome:</strong> Biblioteca de ícones</li>
                    <li><strong>AOS:</strong> Animações ao rolar a página</li>
                    <li><strong>Typed.js:</strong> Efeito de digitação em textos</li>
                  </ul>
                  
                  <div class="notification is-info is-light mt-5">
                    <strong>💡 Próximo Passo:</strong> Explore o site <a href="https://www.npmjs.com" target="_blank">npmjs.com</a> para descobrir mais pacotes! Use a busca para encontrar soluções para problemas específicos do seu projeto.
                  </div>
                </div>
              </div>
            </div>
          </div>
          `
        },
        {
          id: 49,
          titulo: "Introdução a Banco de Dados",
          subtitulo: "Aula 11.4",
          descricao: "Aprenda os conceitos fundamentais de banco de dados: tabelas, colunas, relacionamentos e como estruturar dados de forma eficiente",
          icone: "fa-database",
          conteudo: `
          <div class="container">
            <div class="mb-6" id="o-que-e-bd">
              <h2 class="title is-4 section-title mb-5">1. O que é um Banco de Dados?</h2>
              <div class="content is-size-5">
                <p class="mb-5">
                  Um <strong>Banco de Dados</strong> é um sistema organizado para armazenar, gerenciar e recuperar informações. Pense nele como um <span class="highlight-pink">arquivo digital gigante e super organizado</span> que permite guardar e encontrar dados rapidamente.
                </p>
                <div class="box box-dark">
                  <h3 class="title is-5 mb-4">📚 Analogia da Biblioteca</h3>
                  <div class="content">
                    <p class="mb-3">Imagine uma biblioteca bem organizada:</p>
                    <ul>
                      <li><strong>Biblioteca:</strong> É o Banco de Dados completo</li>
                      <li><strong>Estantes:</strong> São as Tabelas</li>
                      <li><strong>Livros:</strong> São os Registros (linhas)</li>
                      <li><strong>Características dos livros (título, autor, ano):</strong> São as Colunas</li>
                      <li><strong>Sistema de catalogação:</strong> São os Relacionamentos</li>
                    </ul>
                    <p class="mt-4">Assim como você pode encontrar qualquer livro rapidamente usando o sistema da biblioteca, um banco de dados permite encontrar qualquer informação de forma eficiente!</p>
                  </div>
                </div>
              </div>

              <div class="columns mt-5">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">💾 Banco de Dados Relacional</h3>
                    <p>Organiza dados em tabelas com linhas e colunas. Exemplos: MySQL, PostgreSQL, SQL Server.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-3">🔗 SQL</h3>
                    <p>Linguagem padrão para comunicar com bancos de dados relacionais (Structured Query Language).</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="tabelas">
              <h2 class="title is-4 section-title mb-5">2. Tabelas - A Estrutura Fundamental</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Uma <strong>tabela</strong> é a estrutura básica onde os dados são armazenados. Ela é organizada em <strong>linhas</strong> (registros) e <strong>colunas</strong> (campos).
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📋 Exemplo de Tabela: Clientes</h3>
                <div class="content">
                  <table class="table is-bordered is-striped is-fullwidth">
                    <thead>
                      <tr class="has-background-dark has-text-white">
                        <th>id</th>
                        <th>nome</th>
                        <th>email</th>
                        <th>telefone</th>
                        <th>data_cadastro</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Maria Silva</td>
                        <td>maria@email.com</td>
                        <td>(11) 98888-8888</td>
                        <td>2025-01-15</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>João Santos</td>
                        <td>joao@email.com</td>
                        <td>(21) 97777-7777</td>
                        <td>2025-02-20</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Ana Costa</td>
                        <td>ana@email.com</td>
                        <td>(31) 96666-6666</td>
                        <td>2025-03-10</td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="mt-4">Cada <strong>linha</strong> representa um cliente. Cada <strong>coluna</strong> representa uma característica do cliente.</p>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">Linha (Registro)</h3>
                    <p>Cada linha representa <strong>uma entrada</strong> completa na tabela. No exemplo, cada cliente é uma linha.</p>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-6 mb-3">Coluna (Campo)</h3>
                    <p>Cada coluna armazena <strong>um tipo específico</strong> de informação. Ex: nome, email, telefone.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="colunas-tipos">
              <h2 class="title is-4 section-title mb-5">3. Colunas e Tipos de Dados</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Cada coluna tem um <strong>tipo de dado</strong> que define que tipo de informação pode ser armazenada nela:
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🔢 Tipos de Dados Mais Comuns</h3>
                <div class="content">
                  <table class="table is-bordered is-fullwidth">
                    <thead>
                      <tr class="has-background-dark has-text-white">
                        <th>Tipo</th>
                        <th>Descrição</th>
                        <th>Exemplo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>INT</code></td>
                        <td>Números inteiros</td>
                        <td>1, 100, -50</td>
                      </tr>
                      <tr>
                        <td><code>VARCHAR(n)</code></td>
                        <td>Texto de tamanho variável (até n caracteres)</td>
                        <td>'Maria Silva'</td>
                      </tr>
                      <tr>
                        <td><code>TEXT</code></td>
                        <td>Texto longo (sem limite definido)</td>
                        <td>Descrições, comentários</td>
                      </tr>
                      <tr>
                        <td><code>DATE</code></td>
                        <td>Data (ano-mês-dia)</td>
                        <td>2025-12-01</td>
                      </tr>
                      <tr>
                        <td><code>DATETIME</code></td>
                        <td>Data e hora</td>
                        <td>2025-12-01 14:30:00</td>
                      </tr>
                      <tr>
                        <td><code>DECIMAL(n,d)</code></td>
                        <td>Números decimais (n dígitos, d após vírgula)</td>
                        <td>199.99, 1500.50</td>
                      </tr>
                      <tr>
                        <td><code>BOOLEAN</code></td>
                        <td>Verdadeiro ou Falso</td>
                        <td>TRUE, FALSE</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🔑 Conceitos Importantes</h3>
                <div class="columns">
                  <div class="column">
                    <div class="content">
                      <h4 class="title is-6 mb-3">Primary Key (Chave Primária)</h4>
                      <p>Identificador <strong>único</strong> de cada registro. Geralmente é a coluna <code>id</code>. Não pode repetir e não pode ser vazio.</p>
                    </div>
                  </div>
                  <div class="column">
                    <div class="content">
                      <h4 class="title is-6 mb-3">NOT NULL</h4>
                      <p>Indica que a coluna <strong>não pode ficar vazia</strong>. Obriga o preenchimento do campo.</p>
                    </div>
                  </div>
                  <div class="column">
                    <div class="content">
                      <h4 class="title is-6 mb-3">AUTO_INCREMENT</h4>
                      <p>Incrementa automaticamente o valor da coluna. Usado geralmente no <code>id</code>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="relacionamentos">
              <h2 class="title is-4 section-title mb-5">4. Relacionamentos entre Tabelas</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  O poder real dos bancos de dados relacionais está na capacidade de <strong>conectar informações entre diferentes tabelas</strong>. Isso evita repetição de dados e mantém tudo organizado.
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🔗 Tipos de Relacionamentos</h3>
                <div class="content">
                  <div class="mb-5">
                    <h4 class="title is-6 mb-3">1. Um para Muitos (1:N) - Mais Comum</h4>
                    <p class="mb-3">Um registro de uma tabela pode estar relacionado a <strong>vários registros</strong> de outra tabela.</p>
                    <p><strong>Exemplo:</strong> Um cliente pode fazer vários pedidos, mas cada pedido pertence a apenas um cliente.</p>
                  </div>

                  <div class="mb-5">
                    <h4 class="title is-6 mb-3">2. Um para Um (1:1)</h4>
                    <p class="mb-3">Um registro de uma tabela está relacionado a <strong>apenas um registro</strong> de outra tabela.</p>
                    <p><strong>Exemplo:</strong> Um cliente tem apenas um endereço de entrega principal.</p>
                  </div>

                  <div>
                    <h4 class="title is-6 mb-3">3. Muitos para Muitos (N:N)</h4>
                    <p class="mb-3">Vários registros de uma tabela podem estar relacionados a <strong>vários registros</strong> de outra.</p>
                    <p><strong>Exemplo:</strong> Um produto pode estar em vários pedidos, e um pedido pode conter vários produtos.</p>
                  </div>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🔑 Foreign Key (Chave Estrangeira)</h3>
                <div class="content">
                  <p class="mb-3">É a coluna que cria o relacionamento entre tabelas. Ela armazena o <code>id</code> (chave primária) de outra tabela.</p>
                  <p><strong>Exemplo:</strong> Na tabela de Pedidos, a coluna <code>cliente_id</code> é uma chave estrangeira que aponta para o <code>id</code> da tabela Clientes.</p>
                </div>
              </div>
            </div>

            <div class="mb-6" id="exemplo-completo">
              <h2 class="title is-4 section-title mb-5">5. Exemplo Completo: Sistema de Cadastro de Clientes</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  Vamos criar um sistema completo com 3 tabelas relacionadas: Clientes, Endereços e Pedidos.
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📊 Diagrama do Relacionamento</h3>
                <div class="content has-text-centered">
                  <pre class="p-4 has-text-left"><code>┌─────────────────┐          ┌──────────────────┐
│    CLIENTES     │          │    ENDERECOS     │
├─────────────────┤          ├──────────────────┤
│ id (PK)         │──┐   ┌──│ id (PK)          │
│ nome            │  │   │  │ cliente_id (FK)  │
│ email           │  │   │  │ rua              │
│ telefone        │  │   │  │ numero           │
│ data_cadastro   │  │   │  │ cidade           │
└─────────────────┘  │   │  │ estado           │
                     │   │  │ cep              │
         1           │   │  └──────────────────┘
         :           │   │           1
         :           │   │
         N           │   │
                     │   │
┌─────────────────┐  │   │
│     PEDIDOS     │  │   │
├─────────────────┤  │   │
│ id (PK)         │  │   │
│ cliente_id (FK) │──┘   │
│ data_pedido     │      │
│ valor_total     │      │
│ status          │      │
└─────────────────┘      │
                         │
         1:N = Um cliente pode ter vários pedidos
         1:1 = Um cliente tem um endereço principal</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📝 SQL: Criando a Tabela CLIENTES</h3>
                <div class="content">
                  <pre class="p-4"><code>CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    data_cadastro DATE NOT NULL
);

-- Inserindo dados de exemplo
INSERT INTO clientes (nome, email, telefone, data_cadastro) VALUES
('Maria Silva', 'maria@email.com', '(11) 98888-8888', '2025-01-15'),
('João Santos', 'joao@email.com', '(21) 97777-7777', '2025-02-20'),
('Ana Costa', 'ana@email.com', '(31) 96666-6666', '2025-03-10');</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📝 SQL: Criando a Tabela ENDERECOS</h3>
                <div class="content">
                  <pre class="p-4"><code>CREATE TABLE enderecos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    rua VARCHAR(200) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    complemento VARCHAR(100),
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Inserindo dados de exemplo
INSERT INTO enderecos (cliente_id, rua, numero, bairro, cidade, estado, cep) VALUES
(1, 'Rua das Flores', '123', 'Centro', 'São Paulo', 'SP', '01234-567'),
(2, 'Av. Brasil', '456', 'Copacabana', 'Rio de Janeiro', 'RJ', '22070-000'),
(3, 'Rua Minas Gerais', '789', 'Savassi', 'Belo Horizonte', 'MG', '30140-000');</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📝 SQL: Criando a Tabela PEDIDOS</h3>
                <div class="content">
                  <pre class="p-4"><code>CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    data_pedido DATETIME NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Inserindo dados de exemplo
INSERT INTO pedidos (cliente_id, data_pedido, valor_total, status) VALUES
(1, '2025-11-01 14:30:00', 299.90, 'entregue'),
(1, '2025-11-15 10:00:00', 150.00, 'em_transito'),
(2, '2025-11-20 16:45:00', 450.50, 'processando'),
(3, '2025-11-25 09:15:00', 89.90, 'entregue');</code></pre>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🔍 SQL: Consultando Dados com Relacionamento</h3>
                <div class="content">
                  <p class="mb-3">Para buscar dados de tabelas relacionadas, usamos <code>JOIN</code>:</p>
                  
                  <h4 class="title is-6 mt-5 mb-3">Listar todos os pedidos com nome do cliente:</h4>
                  <pre class="p-4"><code>SELECT 
    pedidos.id,
    clientes.nome AS cliente,
    pedidos.data_pedido,
    pedidos.valor_total,
    pedidos.status
FROM pedidos
INNER JOIN clientes ON pedidos.cliente_id = clientes.id
ORDER BY pedidos.data_pedido DESC;</code></pre>

                  <h4 class="title is-6 mt-5 mb-3">Buscar cliente com seu endereço:</h4>
                  <pre class="p-4"><code>SELECT 
    clientes.nome,
    clientes.email,
    enderecos.rua,
    enderecos.numero,
    enderecos.cidade,
    enderecos.estado
FROM clientes
INNER JOIN enderecos ON clientes.id = enderecos.cliente_id
WHERE clientes.id = 1;</code></pre>

                  <h4 class="title is-6 mt-5 mb-3">Contar quantos pedidos cada cliente fez:</h4>
                  <pre class="p-4"><code>SELECT 
    clientes.nome,
    COUNT(pedidos.id) AS total_pedidos,
    SUM(pedidos.valor_total) AS valor_total_gasto
FROM clientes
LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
GROUP BY clientes.id, clientes.nome;</code></pre>
                </div>
              </div>
            </div>

            <div class="mb-6" id="mysql-workbench">
              <h2 class="title is-4 section-title mb-5">6. Ferramentas: MySQL Workbench</h2>
              <div class="content is-size-5 mb-5">
                <p class="mb-5">
                  O <strong>MySQL Workbench</strong> é uma ferramenta visual gratuita para trabalhar com bancos de dados MySQL. Com ela, você pode criar tabelas, executar consultas, visualizar relacionamentos e muito mais!
                </p>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📥 Download do MySQL Workbench</h3>
                <div class="content">
                  <div class="notification is-info is-light mb-4">
                    <strong>🔗 Link oficial:</strong> 
                    <a href="https://dev.mysql.com/downloads/workbench/" target="_blank" class="is-size-5">
                      https://dev.mysql.com/downloads/workbench/
                    </a>
                  </div>
                  
                  <p class="mb-3"><strong>O que você vai precisar:</strong></p>
                  <ol>
                    <li class="mb-2"><strong>MySQL Server:</strong> O banco de dados em si</li>
                    <li class="mb-2"><strong>MySQL Workbench:</strong> A interface visual para gerenciar o banco</li>
                  </ol>
                  
                  <div class="notification is-warning is-light mt-4">
                    <strong>💡 Dica:</strong> Baixe o pacote completo "MySQL Installer" que já inclui o Server e o Workbench juntos! Disponível para Windows, macOS e Linux.
                  </div>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🎯 Principais Recursos do Workbench</h3>
                <div class="columns">
                  <div class="column">
                    <div class="content">
                      <ul>
                        <li>✅ Editor visual de tabelas</li>
                        <li>✅ Executor de queries SQL</li>
                        <li>✅ Diagrama de relacionamentos (ERD)</li>
                        <li>✅ Importar/Exportar dados</li>
                      </ul>
                    </div>
                  </div>
                  <div class="column">
                    <div class="content">
                      <ul>
                        <li>✅ Gerenciamento de usuários</li>
                        <li>✅ Backup e restore</li>
                        <li>✅ Monitoramento de performance</li>
                        <li>✅ Interface intuitiva e visual</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="comandos-sql">
              <h2 class="title is-4 section-title mb-5">7. Comandos SQL Essenciais</h2>
              
              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">📝 CREATE - Criar Tabela</h3>
                <div class="content">
                  <pre class="p-4"><code>CREATE TABLE nome_tabela (
    coluna1 TIPO,
    coluna2 TIPO,
    ...
);</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">➕ INSERT - Inserir Dados</h3>
                <div class="content">
                  <pre class="p-4"><code>INSERT INTO nome_tabela (coluna1, coluna2) 
VALUES ('valor1', 'valor2');</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">🔍 SELECT - Consultar Dados</h3>
                <div class="content">
                  <pre class="p-4"><code>-- Buscar todos os registros
SELECT * FROM nome_tabela;

-- Buscar colunas específicas
SELECT coluna1, coluna2 FROM nome_tabela;

-- Buscar com filtro
SELECT * FROM nome_tabela WHERE coluna1 = 'valor';</code></pre>
                </div>
              </div>

              <div class="box box-dark mb-5">
                <h3 class="title is-5 mb-4">✏️ UPDATE - Atualizar Dados</h3>
                <div class="content">
                  <pre class="p-4"><code>UPDATE nome_tabela 
SET coluna1 = 'novo_valor' 
WHERE id = 1;</code></pre>
                </div>
              </div>

              <div class="box box-dark">
                <h3 class="title is-5 mb-4">🗑️ DELETE - Deletar Dados</h3>
                <div class="content">
                  <pre class="p-4"><code>DELETE FROM nome_tabela 
WHERE id = 1;</code></pre>
                  <div class="notification is-danger is-light mt-4">
                    <strong>⚠️ Atenção:</strong> Sempre use WHERE no DELETE, senão todos os registros serão apagados!
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="boas-praticas">
              <h2 class="title is-4 section-title mb-5">8. Boas Práticas com Banco de Dados</h2>
              <div class="columns">
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-success">✅ Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Use nomes descritivos para tabelas e colunas</li>
                        <li>Sempre defina uma chave primária</li>
                        <li>Use tipos de dados apropriados</li>
                        <li>Defina relacionamentos com foreign keys</li>
                        <li>Use índices para melhorar performance</li>
                        <li>Faça backups regulares</li>
                        <li>Normalize seus dados (evite repetição)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="box box-dark">
                    <h3 class="title is-5 mb-4 has-text-danger">❌ Não Faça</h3>
                    <div class="content">
                      <ul>
                        <li>Usar SELECT * em produção</li>
                        <li>Esquecer o WHERE em UPDATE/DELETE</li>
                        <li>Armazenar senhas sem criptografia</li>
                        <li>Criar tabelas sem planejamento</li>
                        <li>Ignorar relacionamentos entre dados</li>
                        <li>Usar apenas uma tabela gigante</li>
                        <li>Deixar dados sensíveis desprotegidos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao">
              <h2 class="title is-4 section-title mb-5">9. Conclusão</h2>
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-3">Você Dominou os Fundamentos de Banco de Dados! 🎉</h3>
                <div class="content">
                  <p class="mb-4">
                    Agora você entende como os dados são organizados, armazenados e relacionados em um banco de dados. Esse conhecimento é fundamental para qualquer desenvolvedor!
                  </p>
                  
                  <h4 class="title is-6 mt-5 mb-3">📚 O que você aprendeu:</h4>
                  <ul class="mb-4">
                    <li>O que é um banco de dados e como funciona</li>
                    <li>Estrutura de tabelas, linhas e colunas</li>
                    <li>Tipos de dados e constraints (NOT NULL, PRIMARY KEY, etc.)</li>
                    <li>Relacionamentos entre tabelas (1:1, 1:N, N:N)</li>
                    <li>Foreign Keys e como conectar dados</li>
                    <li>Sistema completo de cadastro de clientes</li>
                    <li>Comandos SQL essenciais (CREATE, INSERT, SELECT, UPDATE, DELETE)</li>
                    <li>Como usar JOIN para consultar dados relacionados</li>
                    <li>MySQL Workbench como ferramenta visual</li>
                  </ul>
                  
                  <h4 class="title is-6 mt-5 mb-3">🚀 Próximos passos:</h4>
                  <ul class="mb-4">
                    <li>Instale o MySQL Workbench e pratique criando as tabelas</li>
                    <li>Experimente os comandos SQL apresentados</li>
                    <li>Crie seus próprios relacionamentos</li>
                    <li>Conecte seu banco de dados com a API da aula 11.2</li>
                    <li>Explore índices e otimização de queries</li>
                  </ul>
                  
                  <div class="notification is-info is-light mt-5">
                    <strong>💡 Projeto Prático:</strong> Combine esta aula com a aula 11.2 (Express.js) para criar uma API completa que salva dados em um banco MySQL real! Você terá um sistema full-stack funcional.
                  </div>
                </div>
              </div>
            </div>
          </div>
          `
        },
      ]
    }
  ]
}

export default weeks;