import React from "react"
import { Post } from "@sections/blog/config"
import BlogItem from "@sections/blog/item"

import styles from "./ListBlog.module.scss"
import clsx from "clsx"


interface ListBlogProps {
    posts: Post[]
}

const ListBlog = ({ posts }: ListBlogProps): React.ReactElement => {
    return <section id='content' className={styles["blog-section"]}>
        <div className={clsx("container", styles["blog-section-list"])}>
            <div className={styles["blog-section-header"]}>
                <h1>Blog</h1>
            </div>

            <div className='row pt-5'>
                <main className='col-md-12'>
                    {posts.map((post) => <BlogItem key={post.id} post={post} />)}
                </main>
            </div>

            <nav aria-label='Blog Pagination' className='blog-section-pagination'>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a className='page-link' href='#' aria-label='Previous'>
                            <span aria-hidden='true'>&laquo;</span>
                        </a>
                    </li>
                    <li className='page-item'><a className='page-link' href='#'>1</a></li>
                    <li className='page-item'><a className='page-link' href='#'>2</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>

                    <li className='page-item'>
                        <a className='page-link' href='#' aria-label='Next'>
                            <span aria-hidden='true'>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
}

export default ListBlog