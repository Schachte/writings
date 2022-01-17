import styles from "../styles/Footer.module.scss";

export default function Footer({ children }) {
  return (
    <div className={styles["footer"]}>
      <span>{children}</span> 
      <span>You may use all this code without my permission.</span>
      <span style={{marginTop: '15px', fontFamily: 'Courier New', fontWeight: 300, color: 'limegreen'}}>PGP Key: 6F9E 9840 2F8F 48BE 6D75  0C03 E236 02B0 D9AD D57C</span>
      <span style={{color: "#20C20a", opacity: ".9"}}><span className={styles["copyleft"]}/> Copyleft - {new Date().getFullYear()}</span> 
    </div>
  );
}
