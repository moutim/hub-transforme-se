import { getGroups } from '../../features/groups/api/api';
import GroupsSkeleton from '../../shared/components/skeletons/groups/groups-skeleton';
import { Suspense } from 'react';
import { Grupo } from '../../shared/mocks/groups.mock';

function GrupoCard({ grupo }: { grupo: Grupo }) {
  return (
    <div className="mb-6" key={grupo.nome}>
      <div className="block">
        <h2 className="title is-3">
          {grupo.nome}
        </h2>
      </div>

      <div className="block">
        <p className="is-size-5">{grupo.resumo}</p>
      </div>

      {grupo.integrantes.length > 0 && (
        <div className="block">
          <h3 className="title is-4 mb-4">Integrantes</h3>
          <div className="columns is-multiline">
            {grupo.integrantes.map((nome) => (
              <div className="column is-6-tablet is-4-desktop" key={nome}>
                <p>
                  {nome.toLowerCase().replace(/\b\w/g, (letra) => letra.toUpperCase())}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="block">
        <h3 className="title is-4 mb-4">Links do Projeto</h3>
        <div className="buttons">
          <a 
            href={grupo.links.dossie} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button is-medium"
            style={{ backgroundColor: '#e8026e', color: 'white', borderColor: '#e8026e' }}
          >
            <span>Dossiê</span>
          </a>
          <a 
            href={grupo.links.projeto} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button is-medium"
            style={{ backgroundColor: '#77137a', color: 'white', borderColor: '#77137a' }}
          >
            <span>Projeto Publicado</span>
          </a>
          <a 
            href={grupo.links.repositorio} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button is-medium"
            style={{ backgroundColor: '#4d5e98', color: 'white', borderColor: '#4d5e98' }}
          >
            <span>Repositório</span>
          </a>
          {grupo.links.linktree && (
            <a 
              href={grupo.links.linktree} 
              target="_blank" 
              rel="noopener noreferrer"
              className="button is-medium"
              style={{ backgroundColor: '#43E55E', color: 'white', borderColor: '#43E55E' }}
            >
              <span>Linktree</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

async function GroupsContent() {
  const grupos = await getGroups();

  const turma02 = grupos.filter((g: Grupo) => g.turma === 'Turma 02');
  const turma06 = grupos.filter((g: Grupo) => g.turma === 'Turma 06');

  return (
    <div className="container">
      <h1 className="title is-2 mb-6">Projetos desenvolvidos</h1>

      <section className="mb-6">
        <h2 className="title is-2 mb-5" style={{ borderBottom: '3px solid #77137a', paddingBottom: '0.5rem' }}>
          Turma 06
        </h2>
        {turma06.map((grupo: Grupo) => (
          <GrupoCard key={grupo.nome} grupo={grupo} />
        ))}
      </section>

      <section className="mb-6">
        <h2 className="title is-2 mb-5" style={{ borderBottom: '3px solid #e8026e', paddingBottom: '0.5rem' }}>
          Turma 02
        </h2>
        {turma02.map((grupo: Grupo) => (
          <GrupoCard key={grupo.nome} grupo={grupo} />
        ))}
      </section>
    </div>
  );
}

export default function Groups() {
  return (
    <Suspense fallback={<GroupsSkeleton />}>
      <GroupsContent />
    </Suspense>
  );
}