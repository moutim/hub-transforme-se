import { getGroups } from '../../features/groups/api/api';
import GroupsSkeleton from '../../shared/components/skeletons/groups/groups-skeleton';
import { Suspense } from 'react';
import { Grupo } from '../../shared/mocks/groups.mock';

async function GroupsContent() {
  const grupos = await getGroups();

  return (
    <div className="container">
      <h1 className="title is-2 mb-6">Grupos da Sala</h1>
      <div className="columns is-multiline">
        {grupos.map((grupo: Grupo) => (
          <div className="column is-6" key={grupo.nome}>
            <div className={`box p-5`}>
              <h2 className="title is-4 mb-4">
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{grupo.emoji}</span>
                {grupo.nome}
              </h2>
              <ul className="content">
                {grupo.integrantes.map((nome) => (
                  <li key={nome} style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                    {nome}
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

export default function Groups() {
  return (
    <Suspense fallback={<GroupsSkeleton />}>
      <GroupsContent />
    </Suspense>
  );
}