import React, { useMemo } from 'react';
import { useRouteMeta, useSiteData, Helmet } from 'dumi';

export const CommonHelmet: React.FC = () => {
  const meta = useRouteMeta();
  const { themeConfig } = useSiteData();

  const getTitle = (title, subtitle) => {
    const name = themeConfig.name;
    const helmetTitleSuffix = `${name ? ' - ' + name : ''}`

    if (!title && !subtitle) {
      return `404 Not Found${helmetTitleSuffix}`;
    } else {
      return `${subtitle || ''} ${title || ''}${helmetTitleSuffix}`;
    }
  }

  const [title, description] = useMemo(() => {
    let helmetTitle = getTitle(meta.frontmatter.title, meta.frontmatter.subtitle);;
    const helmetDescription = meta.frontmatter.description || '';
    return [helmetTitle, helmetDescription];
  }, [meta]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default CommonHelmet;
