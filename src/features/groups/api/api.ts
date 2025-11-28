import grupos from '../../../shared/mocks/groups.mock';

export async function getGroups() {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 1000));
  return grupos;
}