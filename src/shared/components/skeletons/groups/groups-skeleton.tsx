export default function GroupsSkeleton() {
  return (
    <div className="container">
      <h1 className="title is-2 mb-6 has-skeleton">Grupos da Sala</h1>
      <div className="columns is-multiline">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="column is-6" key={index}>
            <div className="box p-5">
              <h2 className="title is-4 mb-4 has-skeleton">
                <span className="has-skeleton">Carregando...</span>
              </h2>
              <ul className="content">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i} className="has-skeleton" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                    Aguarde um momento
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}