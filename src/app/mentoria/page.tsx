export default function MentoriaPage() {
  const canais = [
    {
      titulo: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rafael-mauricio-dev/',
      cor: '#0A66C2',
      icone: 'fab fa-linkedin',
    },
    {
      titulo: 'GitHub',
      url: 'https://github.com/rafael-m-silva',
      cor: '#333333',
      icone: 'fab fa-github',
    },
    {
      titulo: 'YouTube',
      url: 'https://www.youtube.com/@Raf4Mauricio',
      cor: '#FF0000',
      icone: 'fab fa-youtube',
    },
    {
      titulo: 'YouTube (Bigode Ensina)',
      url: 'https://www.youtube.com/@BigodeEnsina',
      cor: '#FF0000',
      icone: 'fab fa-youtube',
    },
  ];

  return (
    <div className="mt-6">
      <h1 className="title is-2 mb-6">Tutoria Técnica</h1>

      {/* Sobre o Mentor */}
      <section className="mb-6">
        <h2 className="title is-4 mb-3">Quem é o Bigode?</h2>
        <p className="is-size-5 mb-4">
          O <strong>Bigode</strong> (Rafael Maurício) é o tutor técnico do curso Transforme-se, 
          responsável por te ajudar nas dúvidas de programação e direcionar sua carreira na área de tecnologia.
        </p>
      </section>

      {/* Como Marcar Mentoria */}
      <section className="mb-6">
        <h2 className="title is-4 mb-3">Agendar Tutoria</h2>
        <p className="is-size-5 mb-4">
          As tutorias técnicas são encontros <strong>online</strong> para tirar dúvidas sobre código, 
          projetos e carreira. Clique no botão abaixo para agendar:
        </p>
        
        <a 
          href="https://calendly.com/instituto-proa/tutoria-tecnica-transforme-se" 
          target="_blank" 
          rel="noopener noreferrer"
          className="button is-medium"
          style={{ backgroundColor: '#e8026e', color: 'white', borderColor: '#e8026e' }}
        >
          <span className="icon">
            <i className="fas fa-calendar-check"></i>
          </span>
          <span>Agendar Tutoria Técnica</span>
        </a>
      </section>

      {/* Redes do Bigode */}
      <section className="mb-6">
        <h2 className="title is-4 mb-3">Redes do Bigode</h2>
        <p className="is-size-5 mb-4">
          Acompanhe o Bigode nas redes sociais:
        </p>

        <div className="buttons">
          {canais.map((canal, index) => (
            <a 
              key={index}
              href={canal.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="button is-medium"
              style={{ backgroundColor: canal.cor, color: 'white', borderColor: canal.cor }}
            >
              <span className="icon">
                <i className={canal.icone}></i>
              </span>
              <span>{canal.titulo}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Dicas */}
      <section>
        <h2 className="title is-4 mb-3">Dicas para a Tutoria</h2>
        <ul className="is-size-5">
          <li className="mb-2">✅ Anote suas dúvidas antes da tutoria</li>
          <li className="mb-2">📝 Tenha o código pronto para compartilhar a tela</li>
          <li>📚 Pratique o que aprendeu logo depois</li>
        </ul>
      </section>
    </div>
  );
}
