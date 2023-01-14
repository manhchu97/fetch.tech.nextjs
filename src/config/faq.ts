import { IListTopic } from '@/types/faq'

interface ObjProps {
  [key: string]: string
}

export const COMPONENT_TYPE: ObjProps = {
  GENERAL: 'general',
  DETAIL: 'detail',
  ARTICLE: 'article',
}

export const LIST_TOPIC: IListTopic[] = [
  {
    title: 'General FAQs',
    desc: 'Learn more about Fetch',
    hiddenAction: false,
  },
  {
    title: 'For companies',
    desc: 'Learn more about partnership-related matters',
    hiddenAction: false,
  },
  {
    title: 'For jobseekers',
    desc: 'Learn more about being employed by Fetch',
    hiddenAction: false,
  },
  {
    title: 'Other topics',
    desc: 'Learn more about other concerns',
    hiddenAction: false,
  },
]

export const LIST_SUB_TOPIC: IListTopic[] = [
  {
    title: 'What is Fetch?',
    desc: 'Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.',
    hiddenAction: true,
  },
  {
    title: 'Past works and partnerships',
    desc: 'Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.',
    hiddenAction: true,
  },
  {
    title: 'Location of offices in Singapore & Vietnam',
    desc: 'Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.',
    hiddenAction: true,
  },
]
