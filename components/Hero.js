import styles from '../styles/Hero.module.scss';

export default function Hero() {
    return (
        <div className={styles["hero"]}>
            <img
                className={styles["hero__image"]}
                src={"/images/tuff_transparent.png"} 
                width={"200px"}
                height={"auto"}
            />
            <div className={styles["hero__welcome-text"]}>
                <span className={styles["hero__name"]}>👋 I'm <span className={styles["marker"]}>Ryan Schachte</span></span>
                {/* <span className={styles["hero__name"]}>👋 I'm Ryan Schachte</span> */}
                <span className={styles["hero__links"]}>A 
                    <span className={`${styles["hero__link"]} ${styles["hero__linkorange"]}`}>runner</span>, 
                    <span className={`${styles["hero__link"]} ${styles["hero__linkred"]}`}>educator</span>, 
                    <span className={`${styles["hero__link"]} ${styles["hero__linkblue"]}`}>engineer</span> &amp; 
                    <span className={`${styles["hero__link"]} ${styles["hero__linktan"]}`}>occasional blogger</span>.</span>
                <span className={styles["hero__summary"]}>This is my digital oasis, where I like to share things I've <span className={`${styles["hero__link"]} ${styles["hero__linkyellow"]}`}>learned or developed</span>. with the broader internet community.</span>
                <div className={styles["hero__newsletter"]}>
                    <input className={styles["hero__newsletter_input"]} type="text" placeholder="Sign up for my occasional newsletter" />
                    <button className={styles["hero__newsletter_inputbutton"]} type="submit">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
