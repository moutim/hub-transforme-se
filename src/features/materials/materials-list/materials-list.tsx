import MaterialItem from '../material-item/material-item';

interface IMaterials {
  materials: Array<{ title: string; url: string; note?: string }>;
}

export default function MaterialsList({ materials }: IMaterials) {
  return (
    <>
      <h2 className="title is-2">Materiais Complementares</h2>
      <ul className="list">
        {materials.map((material, index) => (
          <MaterialItem key={index} title={material.title} subtitle={material.url} />
        ))}
      </ul>
    </>
  );
}