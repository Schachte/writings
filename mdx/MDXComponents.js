import styles from "../styles/MDX.module.scss";
import Image from "next/image";

const MDXComponents = {
  h1: (props) => <h1 className={styles["header__container"]} {...props} />,
  img: (props) => <div className={styles["image-container"]}><Image className={styles["image"]} src={props.src} layout="fill" /></div>,
};

export default MDXComponents;
