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
  ourStory: path(ROOT_PATH, 'ourstory'),
  salary: path(ROOT_PATH, 'salary'),
  caseStudy: {
    root: path(ROOT_PATH, 'case-studies'),
    view: (slug: string): string => path(ROOT_PATH, `case-studies/${slug}`),
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
  job: {
    root: path(ROOT_PATH, 'job'),
    view: (slug: string): string => path(ROOT_PATH, `job/${slug}`),
  },
}
