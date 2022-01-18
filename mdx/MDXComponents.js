import styles from "../styles/MDX.module.scss";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return src;
};

const genId = (props) => {
  try {
    if (props.children === undefined || props.children === "") return "";
    return props.children.trim();
  } catch (e) {
    return props.children;
  }
};

const MDXComponents = {
  h1: (props) => (
    <h1 id={genId(props)} className={styles["header__container"]} {...props} />
  ),
  h2: (props) => <h2 id={genId(props)} {...props} />,
  h3: (props) => <h3 id={genId(props)} {...props} />,
  h4: (props) => <h4 id={genId(props)} {...props} />,
  a: (props) => <a {...props} style={{ color: "orange" }} />,
  img: (props) => (
    <div className={styles["image-container"]}>
      <Link href={props.src}>
        <Image
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          src={props.src}
          layout="intrinsic"
          layout="fill"
          objectFit="contain"
        />
      </Link>
    </div>
  ),
  li: (props) => (
    <li {...props} style={{ fontSize: "1rem", marginLeft: "1.5rem", lineHeight: "2.0rem" }} />
  ),
};

export default MDXComponents;
