import styles from "./styles.module.scss";

export const Title = ({ title, subtitle, header = false }) => {
  return (
    <>
      {header ? (
        <div className={styles.myTitle}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h2 className="title">{title}</h2>
        </div>
      ) : (
        <div className={styles.myTitle}>
          <p>{subtitle}</p>
          <h2 className="title">{title}</h2>
        </div>
      )}
    </>
  );
};
