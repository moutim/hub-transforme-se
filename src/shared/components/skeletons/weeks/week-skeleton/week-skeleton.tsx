export default function WeekSkeleton() {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48 is-skeleton">
                <img
                  src="https://bulma.io/assets/images/placeholders/96x96.png"
                  alt="Loading"
                  className="is-rounded"
                />
              </figure>
            </div>
          </div>

          <div className="media-content">
            <p className="title is-4 mb-1 has-skeleton">Carregando...</p>
            <p className="subtitle is-6 has-skeleton">Aguarde um momento</p>
            <p className="subtitle is-6 has-skeleton">0/0 dias</p>
          </div>

          <div className="content mt-2">
            <progress className="progress is-skeleton" value="0" max="100">
              0%
            </progress>
          </div>
        </div>
      </div>
    </div>
  )
}