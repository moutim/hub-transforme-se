export default function MaterialItem({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <li className="mb-3">
      <a href={subtitle} target="_blank" rel="noopener noreferrer" className="has-text-link">
        {title}
      </a>
    </li>
  );
}