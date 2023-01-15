export interface IUser {
  email: string
  name: string
  linkAvatar: string
}

export interface IMeta {
  title: string
  description: string
  keyword: string
}

export interface ITag {
  id?: string
  title: string
}

export interface IBlogItem {
  id: string
  title: string
  slug: string
  userId: string
  imageCover: string
  description: string
  content: string
  status: string
  view: number
  deletedTimestamp?: string | null
  createdTimestamp: string
  updatedTimestamp: string
  user: IUser
  meta: IMeta
  tags: ITag[]
}

interface IData {
  list: IBlogItem[]
  success: boolean
  total: number
}
export interface IListPostsResponse {
  code: number
  data?: IData
}

interface IDetailData {
  success: boolean
  blog: IBlogItem
}

export interface IDetailPostResponse {
  code: number
  data?: IDetailData
}
