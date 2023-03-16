import * as TypeDoc from 'typedoc';
import { fsExtra } from '@umijs/utils';

interface TokenMeta {
  source: string;
  token: string;
  type: string;
  name: string;
  nameEn: string;
  desc: string;
  descEn: string;
}

const getTokenList = (list: TypeDoc.DeclarationReflection[], source: string) => {
  return list
    .filter(
      (item) =>
        !item.comment?.blockTags.some((tag) => tag.tag === '@internal' || tag.tag === '@private'),
    )
    .map((item) => ({
      source,
      token: item.name,
      type: item.type!.toString(),
      desc:
        item.comment?.blockTags
          ?.find((tag) => tag.tag === '@desc')
          ?.content.reduce((result, str) => result.concat(str.text), '') || '',
      descEn:
        item.comment?.blockTags
          ?.find((tag) => tag.tag === '@descEN')
          ?.content.reduce((result, str) => result.concat(str.text), '') || '',
      name:
        item.comment?.blockTags
          ?.find((tag) => tag.tag === '@name')
          ?.content.reduce((result, str) => result.concat(str.text), '') || '',
      nameEn:
        item.comment?.blockTags
          ?.find((tag) => tag.tag === '@nameEN')
          ?.content.reduce((result, str) => result.concat(str.text), '') || '',
    }))
}

(() => {
  const app = new TypeDoc.Application();

  // If you want TypeDoc to load tsconfig.json / typedoc.json files
  app.options.addReader(new TypeDoc.TSConfigReader());
  app.options.addReader(new TypeDoc.TypeDocReader());

  app.bootstrap({
    // typedoc options here
    entryPoints: ['components/theme/interface/index.ts'],
  });

  const project = app.convert();

  if (project) {
    // Project may not have converted correctly
    const output = 'components/version/token-meta.json';
    const tokenMeta: Record<string, TokenMeta[]> = {};
    let presetColors: string[] = [];

    project.children!.forEach((type) => {
      if (type.name === 'SeedToken') {
        tokenMeta.seed = getTokenList(type.children!, 'seed');
      }

      if (type.name === 'MapToken') {
        tokenMeta.map = getTokenList(type.children!, 'map');
      }

      if (type.name === 'AliasToken') {
        tokenMeta.alias = getTokenList(type.children!, 'alias');
      }

      if (type.name === 'PresetColors') {
        const target = (type.type as TypeDoc.TypeOperatorType).target as TypeDoc.TupleType;
        presetColors = target.elements.map((item: TypeDoc.LiteralType) => item.value) as string[];
      }
    });

    // Exclude preset colors
    tokenMeta.seed = tokenMeta.seed.filter(
      (item) => !presetColors.some((color) => item.token.startsWith(color)),
    );
    tokenMeta.map = tokenMeta.map.filter(
      (item) => !presetColors.some((color) => item.token.startsWith(color)),
    );
    tokenMeta.alias = tokenMeta.alias.filter(
      (item) => !presetColors.some((color) => item.token.startsWith(color)),
    );

    tokenMeta.alias = tokenMeta.alias.filter(
      (item) => !tokenMeta.map.some((mapItem) => mapItem.token === item.token),
    );
    tokenMeta.map = tokenMeta.map.filter(
      (item) => !tokenMeta.seed.some((seedItem) => seedItem.token === item.token),
    );

    const finalMeta = Object.entries(tokenMeta).reduce<Record<string, Omit<TokenMeta, 'token'>>>((acc, [key, value]) => {
      value.forEach((item) => {
        acc[item.token] = {
          name: item.name,
          nameEn: item.nameEn,
          desc: item.desc,
          descEn: item.descEn,
          type: item.type,
          source: key,
        };
      });
      return acc;
    }, {});

    fsExtra.writeJsonSync(output, finalMeta, {
      encoding: 'utf8',
      spaces: 2,
    });
    // eslint-disable-next-line no-console
    console.log(`✅  Token Meta has been written to ${output}`);
  }
})();
