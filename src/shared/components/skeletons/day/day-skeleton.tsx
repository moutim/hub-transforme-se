export default function DaySkeleton() {
  return (
    <section>
      <h4 className="title is-2 has-skeleton">Carregando</h4>
      <div className="">
        <div className="box box-dark p-4 mb-5">
          <div className="has-skeleton mb-2" style={{ height: 18, width: '80%' }}></div>
          <div className="has-skeleton mb-2" style={{ height: 18, width: '90%' }}></div>
          <div className="has-skeleton mb-2" style={{ height: 18, width: '70%' }}></div>
          <div className="has-skeleton mb-2" style={{ height: 18, width: '60%' }}></div>
        </div>

        <div className="mb-6">
          <div className="has-skeleton mb-4" style={{ height: 32, width: '100%' }}></div>
          <div className="has-skeleton mb-2" style={{ height: 20, width: '100%' }}></div>
        </div>

        <div className="content is-size-5 mb-6">
          <div className="has-skeleton mb-3" style={{ height: 16, width: '90%' }}></div>
          <div className="has-skeleton mb-3" style={{ height: 16, width: '80%' }}></div>
          <div className="has-skeleton mb-3" style={{ height: 16, width: '60%' }}></div>
        </div>

        <div className="columns mt-4">
          {[...Array(4)].map((_, i) => (
            <div className="column" key={i}>
              <div className="box box-dark">
                <div className="has-skeleton mb-3" style={{ height: 18, width: '60%' }}></div>
                <div className="has-skeleton mb-2" style={{ height: 14, width: '80%' }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="content is-size-5 mb-6">
          <div className="has-skeleton mb-3" style={{ height: 16, width: '85%' }}></div>
          <div className="has-skeleton mb-3" style={{ height: 16, width: '70%' }}></div>
          <div className="has-skeleton mb-3" style={{ height: 16, width: '60%' }}></div>
        </div>
        <ul className="mb-6">
          <li><div className="has-skeleton mb-2" style={{ height: 14, width: '50%' }}></div></li>
          <li><div className="has-skeleton mb-2" style={{ height: 14, width: '40%' }}></div></li>
          <li><div className="has-skeleton mb-2" style={{ height: 14, width: '60%' }}></div></li>
        </ul>
        <div className="box box-dark border-left-pink">
          <div className="has-skeleton mb-3" style={{ height: 18, width: '40%' }}></div>
          <div className="has-skeleton mb-2" style={{ height: 14, width: '70%' }}></div>
          <div className="has-skeleton mb-2" style={{ height: 14, width: '60%' }}></div>
        </div>
      </div>
    </section>
  );
}
