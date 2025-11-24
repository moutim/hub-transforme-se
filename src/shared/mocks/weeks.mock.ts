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
        }
      ]
    },
    {
      "id": 2,
      "titulo": "Semana 2",
      "subtitulo": "2/2 dias",
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
                <p class="mb-3">Para os exercícios abaixo, você vai aplicar os estilos em um arquivo CSS externo. Siga os passos:</p>
                <ol class="has-text-left mb-3">
                  <li>Crie um novo arquivo e salve-o como <code>estilos.css</code>.</li>
                  <li>Em cada um dos seus arquivos dos exercícios de HTML, adicione a seguinte linha dentro da tag <code>&lt;head&gt;</code> para lincar seu CSS:</li>
                </ol>
                <pre class="box-dark p-4"><code>&lt;link rel="stylesheet" href="estilos.css"&gt;</code></pre>
                <p class="mt-3">Agora, escreva todas as suas regras de CSS apenas no arquivo <code>estilos.css</code>.</p>
              </div>
            </div>
            
            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 1: Estilizando o Post</h3>
                <div class="content mb-4">
                  <p>Para a sua página do "Post de Blog", crie regras no seu arquivo CSS para:</p>
                  <ol>
                    <li>Centralizar o texto dos elementos \`&lt;h1&gt;\` e \`&lt;h2&gt;\`.</li>
                    <li>Mudar a cor do \`&lt;h1&gt;\` para \`#e80170\`.</li>
                  </ol>
                </div>
                <div class="box-dark p-4 content">

                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 2: Criando um Card de Verdade</h3>
                <div class="content mb-4">
                  <p>No seu HTML do "Cartão de Apresentação", adicione uma classe \`card\` à \`&lt;div&gt;\` principal. No CSS, estilize essa classe para ter:</p>
                  <ol>
                    <li>Largura de \`300px\`.</li>
                    <li>Cor de fundo \`#374151\`.</li>
                    <li>\`20px\` de padding.</li>
                    <li>Borda arredondada de \`10px\`.</li>
                  </ol>
                </div>
                <div class="box-dark p-4 content">

                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 3: Melhorando a Receita</h3>
                <div class="content mb-4">
                  <p>Para a página da "Receita de Bolo":</p>
                  <ol>
                    <li>Remova os marcadores padrão da lista de ingredientes (\`&lt;ul&gt;\`).</li>
                    <li>Mude a cor do texto de todos os \`&lt;h2&gt;\` para \`#e80170\`.</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 4: Links sem Sublinhado</h3>
                <div class="content mb-4">
                  <p>Na sua "Página de Links Favoritos":</p>
                  <ol>
                    <li>Remova o sublinhado de todos os links (\`&lt;a&gt;\`).</li>
                    <li>Mude a cor do texto dos links para \`#e80170\`.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 5: Formulário Agradável</h3>
                <div class="content mb-4">
                  <p>Para o "Formulário de Contato", estilize todos os campos \`&lt;input&gt;\` para que eles tenham:</p>
                  <ol>
                    <li>\`10px\` de padding.</li>
                    <li>Uma borda de \`1px solid gray\`.</li>
                    <li>Cantos arredondados de \`5px\`.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="box box-dark border-left-pink">
                <h3 class="title is-5 mb-4">Exercício 6: Estilizando o Botão</h3>
                <div class="content mb-4">
                  <p>Na estrutura do exercício "Juntando Tudo", adicione a classe \`botao\` ao link. No CSS, estilize essa classe para que o link pareça um botão:</p>
                  <ol>
                    <li>Cor de fundo \`#e80170\`.</li>
                    <li>Cor do texto \`white\`.</li>
                    <li>\`10px\` de padding.</li>
                    <li>Sem sublinhado (\`text-decoration: none\`).</li>
                    <li>Borda arredondada de \`5px\`.</li>
                  </ol>
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
                    <h4 class="title is-5 has-text-white">Clone do Spotify</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 has-text-white">Site de Notícias</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 has-text-white">Clone do Tinder 🥵</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 has-text-white">Login do Facebook</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 has-text-white">Site da Starbucks</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 has-text-white">Clone site da Tesla</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 has-text-white">Clone do Youtube</h4>
                  </div>
                </div>
                <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                  <div class="box box-dark has-text-centered">
                    <h4 class="title is-5 has-text-white">Clone da Netflix</h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6" id="conclusao-semana">
              <h2 class="title is-3 section-title mb-6">3. Conclusão e Próximos Passos</h2>
              <div class="box box-dark border-left-pink p-6">
                <h4 class="title is-5 has-text-white mb-3">Parabéns pela dedicação!</h4>
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