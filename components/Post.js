import styles from '../styles/Post.module.scss';
import {getMDXComponent} from 'mdx-bundler/client'
import React from "react"


import MDXComponents from '@/mdx/MDXComponents';

export default function Post({ content, metadata, toc }) {

    const Component = React.useMemo(() => getMDXComponent(content), [content])
    return (
        <div className={styles["post__wrapper"]}>
            <div className={styles["post__wrappertitle"]}>
                <span className={styles["post__wrappertitle_header"]}>{metadata.title}</span>
                <span className={styles["post__wrappertitle_description"]}>{metadata.description}</span>
            </div>
            <div className={styles["post__wrapperauthor"]}>
                <div className={styles["post__wrapperauthor_name"]}></div>
                <div className={styles["post__wrapperauthor_description"]}>
                    <span className={styles["post__wrapperauthor_description_preamble"]}>Written By</span>
                    <span className={styles["post__wrapperauthor_description_name"]}>{metadata.author}</span>
                    <span className={styles["post__wrapperauthor_description_date"]}>{metadata.date}</span>
                </div>
            </div>
            <div className={styles["post__wrappertableofcontents"]}>
                <span className={styles["post__wrappertableofcontents_heading"]}>Table of Contents</span>
                <div className={styles["post__wrappertableofcontents_content"]} dangerouslySetInnerHTML={{ __html: toc}}>
                </div>
            </div>
            <div className={styles["post__wrappercontent"]}>
                <Component components={MDXComponents}/>
            </div>
        </div>
    )
}
