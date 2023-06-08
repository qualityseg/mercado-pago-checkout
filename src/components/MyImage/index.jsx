import Image from "next/image";
import styles from "./styles.module.scss";

export const MyImage = ({ src, alt, width, height, left = false }) => {
  return (
    <>
      {left ? (
        <div className={`${styles.image} ${styles.left}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsufQ0AQAGegKNXXg+LgAAAABJRU5ErkJggg=="
          />
        </div>
      ) : (
        <div className={`${styles.image} ${styles.right}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsufQ0AQAGegKNXXg+LgAAAABJRU5ErkJggg=="
          />
        </div>
      )}
    </>
  );
};
