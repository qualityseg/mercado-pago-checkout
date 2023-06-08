import Link from "next/link";
import styles from "./styles.module.scss";

export const Button = ({ children, link = "/", dark = false, ...props }) => {
  return (
    <>
      {!dark ? (
        <Link legacyBehavior href={link}>
          <a className={styles.button} target="_blank" {...props}>
            {children}
          </a>
        </Link>
      ) : (
        <Link legacyBehavior href={link}>
          <a
            className={`${styles.button} ${styles.buttonDark}`}
            target="_blank"
            {...props}
          >
            {children}
          </a>
        </Link>
      )}
    </>
  );
};
