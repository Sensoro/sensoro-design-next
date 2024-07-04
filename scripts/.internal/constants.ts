import { join } from 'node:path'
import { __dirname } from '../helpers/utils/url'

const ROOT = join(__dirname, '../../')

export const PATHS = {
  ROOT,
  PACKAGES: join(ROOT, 'packages'),
  DESIGN: join(ROOT, 'packages', '@lotus-design/react'),
} as const
