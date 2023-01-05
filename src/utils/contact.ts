import { ISkillParentFormat, ISkillTreeData } from '@/types/contact'

import { replaceAll } from './replace'

export function formatSkillTree(
  tree: ISkillTreeData | undefined,
): ISkillParentFormat[] | null {
  if (!tree) return null

  const keys = Object.keys(tree)

  if (keys.length) {
    return keys.map((key) => ({
      id: `${replaceAll(key.trim().toLowerCase(), ' ', '-')}`,
      title: key,
      children: {
        parentTitle: key,
        data: formatSkillTree(tree[key]),
      },
    }))
  }

  return null
}
