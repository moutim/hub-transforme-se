export default function MaterialItem({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="box">
      <h4 className="title is-4">{title}</h4>
      <a href={subtitle} target="_blank" rel="noopener noreferrer">{subtitle}</a>
    </div>
  );
}