import Link from 'next/link';

interface BreadcrumbsProps {
  currentPage: string;
}

export default function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
          <li className="breadcrumb-item">
            <span className="breadcrumb-current">{currentPage}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
