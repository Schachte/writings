import styles from "../styles/AllPosts.module.scss";
import Link from "next/link";

const slugify = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

const renderMonthlyPosts = (year, data) => {
  const availableMonths = Object.keys(data);

  let isNewPost = true;
  return (
    <div className={styles["month"]}>
      {availableMonths.map((currentMonth) => {
        let monthPosts = data[currentMonth].sort((date1, date2) => {
          return new Date(date1.dateMetadata) > new Date(date2.dateMetadata)
            ? -1
            : 1;
        });
        const month = (
          <span className={styles["month_heading"]}>
            {currentMonth} {year}
          </span>
        );

        const formattedPostings = monthPosts.map((post) => {
          let icon = post["type"] == "video" ? "🎥" : "📝";
          const component = (
            <Link key={post.title} href={`/posts/${slugify(post.title)}`}>
              <li className={styles["entry"]}>{`${icon} ${post["title"]}`}{isNewPost && <span style={{color: "orange"}}> [new] </span>} </li>
            </Link>
          );
          isNewPost = false
          return component
        });
        return (
          <>
            {month}
            <ul className={styles["month_posts"]}>{formattedPostings}</ul>
          </>
        );
      })}
    </div>
  );
};

export default function AllPosts({ postMetadata }) {
  const final = postMetadata.reduce((prev, next) => {
    next = { slug: slugify(next["title"]), ...next };
    const dateData = next["date"].split(" ");
    const month = dateData[0];
    const year = dateData[2];
    prev[year] = prev[year] || {};
    prev[year][month] = prev[year][month] || [];
    prev[year][month] = [next, ...prev[year][month]];
    return prev;
  }, {});

  const sortedPosts = Object.entries(final).sort((prev, next) => {
    return prev[0] > next[0] ? -1 : 1;
  });

  return (
    <div className={styles["posts-container"]}>
      {sortedPosts.map((post) => renderMonthlyPosts(post[0], post[1]))}
    </div>
  );
}
