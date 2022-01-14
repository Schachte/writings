import styles from "../styles/Footer.module.scss";

export default function Footer({ children }) {
  return (
    <div className={styles["footer"]}>
      <span>{children}</span> 
      <span>You may use all this code without my permission.</span>
      <span style={{color: "#20C20a", opacity: ".9"}}><span className={styles["copyleft"]}/> Copyleft - {new Date().getFullYear()}</span> 
    </div>
  );
}
