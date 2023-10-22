import React from 'react';
import BreadcrumbItem, { BreadcrumbItemProps } from './BreadcrumItem';

type BreadcrumbProps = {
  items: Array<BreadcrumbItemProps & { id?: number }>;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav className="py-4 text-start md:text-lg" aria-label="Breadcrumb">
    <ul>
      <li className="border border-slate-100  list-none p-4">
        {items?.map((item, index) => (
          <BreadcrumbItem
            key={item.id}
            href={item.href}
            label={item.label}
            isCurrent={index === items.length - 1}
          />
        ))}
      </li>
    </ul>
  </nav>
);

export default Breadcrumb;
