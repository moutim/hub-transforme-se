import { materialsMock } from '../../../shared/mocks/materials.mock';

export async function getMaterials() {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 1000));
  return materialsMock;
}