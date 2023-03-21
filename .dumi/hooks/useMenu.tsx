import React, { useMemo } from 'react';
import { Link, useFullSidebarData, useSidebarData, useLocation } from 'dumi';

import type { MenuProps } from 'antd';

export type UseMenuOptions = {
  before?: React.ReactNode;
  after?: React.ReactNode;
};

export const useMenu = (options: UseMenuOptions = {}): [MenuProps['items'], string] => {
  const { before, after } = options;
  const fullData = useFullSidebarData();
  const sidebarData = useSidebarData();
  const { pathname, search } = useLocation();

  const menuItems = useMemo<MenuProps['items']>(
    () => {
      const sidebarItems = [...(sidebarData ?? [])];

      return (
        sidebarItems?.reduce<Exclude<MenuProps['items'], undefined>>((result, group) => {
          if (group?.title) {
            result.push({
              type: 'group',
              label: group?.title,
              key: group?.title,
              children: group.children?.map((item) => ({
                label: (
                  <Link to={`${item.link}${search}`}>
                    {before}
                    <span key="english">{item?.title}</span>
                    <span className="chinese" key="chinese">
                      {(item.frontmatter as any).subtitle}
                    </span>
                    {after}
                  </Link>
                ),
                key: item.link.replace(/(-cn$)/g, ''),
              })),
            });
          } else {
            const list = group.children || [];

            // 如果有 date 字段，我们就对其进行排序
            if (list.every((info) => info?.frontmatter?.date)) {
              list.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));
            }

            result.push(
              ...list.map((item) => ({
                label: (
                  <Link to={`${item.link}${search}`}>
                    {before}
                    {item?.title}
                    {after}
                  </Link>
                ),
                key: item.link.replace(/(-cn$)/g, ''),
              })),
            );
          }

          return result;
        }, []) ?? []
      )
    },
    [sidebarData, fullData, pathname, search]
  );

  return [menuItems, pathname];
}
