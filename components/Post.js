import styles from '../styles/Post.module.scss';
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from '@/mdx/MDXComponents';

export default function Post({ content, metadata, toc }) {
    console.log(metadata)
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
                <MDXRemote {...content} components={MDXComponents} />
            </div>
        </div>
    )
}
