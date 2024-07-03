interface Options {
  basename?: string;
  extname?: string;
}

export function rename(
  filePath: string,
  options: Options = {}
) {
  const dirname = path.dirname(filePath);
  const basename = path.basename(filePath, path.extname(filePath));
  const extname = path.extname(filePath);

  const fileName = `${options.basename || basename}${options.extname || extname}`;

  return path.join(dirname, fileName);
}
