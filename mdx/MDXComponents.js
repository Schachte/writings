import styles from "../styles/MDX.module.scss";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return src;
};

const MDXComponents = {
  h1: (props) => <h1 className={styles["header__container"]} {...props} />,
  img: (props) => (
    <div className={styles["image-container"]}>
      <Link href={props.src}>
        <Image
          loader={myLoader}
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
  li: (props) => <li {...props} style={{padding: "1rem", lineHeight: "2rem"}}/>
};

export default MDXComponents;
