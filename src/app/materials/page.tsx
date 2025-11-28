import MaterialsList from '../../features/materials/materials-list/materials-list';
import { getMaterials } from '../../features/materials/api/api';
import MaterialsSkeleton from '../../shared/components/skeletons/materials/materials-skeleton';
import { Suspense } from 'react';

async function MaterialsContent() {
  const materials = await getMaterials();

  return (
    <MaterialsList materials={materials} />
  );
}

export default function MaterialsPage() {
  return (
    <div className="container mt-6">
      <Suspense fallback={<MaterialsSkeleton />}>
        <MaterialsContent />
      </Suspense>
    </div>
  );
}