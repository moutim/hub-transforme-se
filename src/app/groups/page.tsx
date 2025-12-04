import { getGroups } from '../../features/groups/api/api';
import GroupsSkeleton from '../../shared/components/skeletons/groups/groups-skeleton';
import { Suspense } from 'react';
import { Grupo } from '../../shared/mocks/groups.mock';

async function GroupsContent() {
  const grupos = await getGroups();

  return (
    <div className="container">
      <h1 className="title is-2 mb-6">Projetos desenvolvidos</h1>
      
      {grupos.map((grupo: Grupo) => (
        <div className=" mb-6" key={grupo.nome}>
          <div className="block">
            <h2 className="title is-3">
              {grupo.nome}
            </h2>
          </div>

          <div className="block">
            <p className="is-size-5">{grupo.resumo}</p>
          </div>

          <div className="block">
            <h3 className="title is-4 mb-4">Integrantes</h3>
            <div className="columns is-multiline">
              {grupo.integrantes.map((nome) => (
                <div className="column is-6-tablet is-4-desktop" key={nome}>
                  <p className="">
                    {nome.toLowerCase().replace(/\b\w/g, (letra) => letra.toUpperCase())}
                  </p>
                </div>
              ))}
            </div>
          </div>

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
              <a 
                href={grupo.links.linktree} 
                target="_blank" 
                rel="noopener noreferrer"
                className="button is-medium"
                style={{ backgroundColor: '#43E55E', color: 'white', borderColor: '#43E55E' }}
              >
                <span>Linktree</span>
              </a>
            </div>
          </div>
        </div>
      ))}
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