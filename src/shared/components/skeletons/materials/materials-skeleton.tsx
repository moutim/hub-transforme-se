import MaterialSkeleton from "./material-skeleton";

export default function MaterialsSkeleton() {
  return (
    <>
      <h2 className="title is-2 has-skeleton">Materiais Complementares</h2>
      <div className="columns is-multiline is-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <MaterialSkeleton key={index} />
        ))}
      </div>
    </>
  );
}