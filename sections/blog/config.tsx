export interface Tags {
    title: string,
}

export interface Post {
    id: string,
    title: string,
    slug: string,
    imageCover: string,
    description: string,
    content: string,
    view: number,
    createdTimestamp: string,
    user: {
        email: string,
        name: string,
        linkAvatar: string,
    },
    meta: {
        title: string,
        description: string,
        keyword: string,

    }
    tags: Tags[]
}

