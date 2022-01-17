import styles from "../styles/AllPosts.module.scss";
import Link from "next/link";

const slugify = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

// TODO Extract to diff file
const pastPublications = {
  "Visually Understanding DNS": "https://www.youtube.com/watch?v=vrxwXXytEuI",
  "NATs and CIDR Blocks For Networking":
    "https://www.youtube.com/watch?v=z07HTSzzp3o",
  "Database Indexing & Performance Explained":
    "https://www.youtube.com/watch?v=VcLfF7TwII8",
  "Algorithmic Mental Models for Sliding Window":
    "https://www.youtube.com/watch?v=MK-NZ4hN7rs",
  "Quicksort Time Complexity Analysis":
    "https://www.youtube.com/watch?v=UPyYcRW5a8o",
  "Understanding How To Solve Recurrence Relations":
    "https://www.youtube.com/watch?v=zVeNqLg2uUc",
  "[Live Stream] Building Big Data Pipelines on AWS":
    "https://www.youtube.com/watch?v=w8nKMl2CP7o",
  "Introduction to Docker": "https://www.youtube.com/watch?v=JSLpG_spOBM",
  "Diving Deeper Into Docker": "https://www.youtube.com/watch?v=CcxbHkqzJuI",
  "Theory & Implementation of Stable Marriage Algorithm":
    "https://www.youtube.com/watch?v=FhRf0j068ZA",
  "Dependency Injection Simplified":
    "https://www.youtube.com/watch?v=EPv9-cHEmQw",
  "Async In Javascript & The Event Loop":
    "https://www.youtube.com/watch?v=vKEnzwhE4S4",
  "Prolog Programming Course - 5 parts":
    "https://www.youtube.com/watch?v=gJOZZvYijqk",
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
              <li className={styles["entry"]}>
                {`${icon} ${post["title"]}`}
                {isNewPost && (
                  <span style={{ color: "orange" }}> [new] </span>
                )}{" "}
              </li>
            </Link>
          );
          isNewPost = false;
          return component;
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

const generatePastPublicationsJsx = (entries) => {
  let publicationList = [];
  Object.entries(entries).forEach(([k, v]) => {
    publicationList = [
      ...publicationList,
      <Link href={v}>
        <li className={styles["entry"]}>{`🎥 ${k}`}</li>
      </Link>,
    ];
  });
  return publicationList;
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

      <div className={styles["month"]}>
        <span className={styles["month_heading"]}>Past Publications</span>
        <ul className={styles["month_posts"]}>
          {generatePastPublicationsJsx(pastPublications)}
        </ul>
      </div>
    </div>
  );
}
