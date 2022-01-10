import styles from '../styles/AllPosts.module.scss';

export default function AllPosts() {
    return (
        <div className={styles["posts-container"]}>
            <div className={styles["month"]}>
                <span className={styles["month_heading"]}>January 2022</span>
                <ul className={styles["month_posts"]}>
                    <li>📝 Implementing OAuth V2 Protocol From Scratch</li>
                    <li>📝 Webserver Implementation in C</li>
                </ul>
            </div>
            <div className={styles["month"]}>
                <span className={styles["month_heading"]}>December 2021</span>
                <ul className={styles["month_posts"]}>
                    <li>📝 Implementing OAuth V2 Protocol From Scratch</li>
                    <li>📝 Webserver Implementation in C</li>
                </ul>
            </div>
            <div className={styles["month"]}>
                <span className={styles["month_heading"]}>December 2021</span>
                <ul className={styles["month_posts"]}>
                    <li>📝 Implementing OAuth V2 Protocol From Scratch</li>
                    <li>📝 Webserver Implementation in C</li>
                </ul>
            </div>
            <div className={styles["month"]}>
                <span className={styles["month_heading"]}>December 2021</span>
                <ul className={styles["month_posts"]}>
                    <li>📝 Implementing OAuth V2 Protocol From Scratch</li>
                    <li>📝 Webserver Implementation in C</li>
                </ul>
            </div>
        </div>
    )
}
