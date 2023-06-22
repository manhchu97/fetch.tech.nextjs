import qs from 'query-string'

function path(root: string, sublink: string): string {
  return `${root}${sublink}`
}

export const ROOT_PATH = '/'

export const PATH_CONFIG = {
  root: ROOT_PATH,
  company: path(ROOT_PATH, 'company'),
  employees: path(ROOT_PATH, 'employees'),
  services: {
    root: path(ROOT_PATH, 'services'),
    salary: path(ROOT_PATH, 'services/salary'),
    view: (id: number): string => path(ROOT_PATH, `services/${id}`),
  },
  resources: {
    root: path(ROOT_PATH, 'resources'),
    ourStory: path(ROOT_PATH, 'resources/ourstory'),
    caseStudies: {
      root: path(ROOT_PATH, 'resources/case-studies'),
      view: (slug: string): string =>
        path(ROOT_PATH, `resources/case-studies/${slug}`),
    },
    calculator: path(ROOT_PATH, 'resources/calculator'),
  },
  contact: path(ROOT_PATH, 'contact'),
  faq: path(ROOT_PATH, 'faq'),
  successStories: path(ROOT_PATH, 'successstories'),
  blog: {
    root: path(ROOT_PATH, 'blog'),
    query: (options: { page?: number | string; tags?: string }): string =>
      path(ROOT_PATH, `blog?${qs.stringify(options)}`),
    view: (slug: string): string => path(ROOT_PATH, `blog/${slug}`),
  },
  careers: {
    root: path(ROOT_PATH, 'careers'),
    view: (slug: string): string => path(ROOT_PATH, `careers/${slug}`),
  },
  privacyPolicy: path(ROOT_PATH, 'privacy-policy'),
  serviceAgreement: path(ROOT_PATH, 'service-agreement'),
  fetchunt: path(ROOT_PATH, 'fetchunt'),
  frequentlyQuestions: path(ROOT_PATH, 'frequently-questions'),
}
