import React from 'react';
import Link from 'next/link';
import { Url } from 'url';

export interface BreadcrumbItemProps {
  href: string | Url;
  label?: string;
  isCurrent?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ href, label, isCurrent = false }) => {
  const linkClass = isCurrent
    ? 'text-gray-500 text-xl cursor-default'
    : 'text-blue-600 text-xl hover:text-blue-800';

  return (
    <div className="inline-flex items-center">
      {!isCurrent && (
        <>
          <Link href={href}>
            <p className={linkClass}>{label}</p>
          </Link>
          <span className="mx-2 text-gray-400">/</span>
        </>
      )}
      {isCurrent && <span className={linkClass}>{label}</span>}
    </div>
  );
};

export default BreadcrumbItem;
