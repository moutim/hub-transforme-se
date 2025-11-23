export default function DaySkeleton() {
  return (
    <section className="section">
      <div className="container">
        
        {/* Título */}
        <div className="mb-6">
          <div className="has-skeleton mb-4"></div>
          <div className="has-skeleton"></div>
        </div>

        {/* Blocos de conteúdo */}
        <div className="box mb-5">
          <div className="has-skeleton mb-4"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton"></div>
        </div>

        <div className="box mb-5">
          <div className="has-skeleton mb-4"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton"></div>
        </div>

        <div className="box mb-5">
          <div className="has-skeleton mb-4"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton"></div>
        </div>

        <div className="box">
          <div className="has-skeleton mb-4"></div>
          <div className="has-skeleton mb-3"></div>
          <div className="has-skeleton"></div>
        </div>

      </div>
    </section>
  );
}
