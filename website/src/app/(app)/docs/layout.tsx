import React from 'react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b">
      {children}
    </div>
  );
}
