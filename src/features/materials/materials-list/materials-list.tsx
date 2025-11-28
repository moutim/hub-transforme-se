import MaterialItem from '../material-item/material-item';

interface IMaterials {
  materials: Array<{ title: string; url: string; note?: string }>;
}

export default function MaterialsList({ materials }: IMaterials) {
  return (
    <>
      <h2 className="title is-2">Materiais Complementares</h2>
      <div className="columns is-multiline is-4">
        {materials.map((material, index) => (
          <div key={index} className="column">
            <MaterialItem title={material.title} subtitle={material.url} />
          </div>
        ))}
      </div>
    </>
  );
}