import { paramCase } from 'param-case'

import { ISkillParentFormat, ISkillTreeData } from '@/types/contact'

export function formatSkillTree(
  tree: ISkillTreeData | undefined,
): ISkillParentFormat[] | null {
  if (!tree) return null

  const keys = Object.keys(tree)

  if (keys.length) {
    return keys.map((key) => ({
      id: paramCase(key),
      title: key,
      children: {
        parentTitle: key,
        data: formatSkillTree(tree[key]),
      },
    }))
  }

  return null
}
