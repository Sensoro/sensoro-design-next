import * as React from 'react';
import { allDocs } from 'contentlayer/generated';
import type { Metadata } from 'next';

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || '';
  const doc = allDocs.find(doc => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  return allDocs.map(doc => ({
    slug: doc.slugAsParams.split('/'),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return null;
  }

  return (
    <span>
      {doc.title}
    </span>
  );
}
