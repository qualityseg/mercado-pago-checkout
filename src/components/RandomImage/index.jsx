import Image from 'next/image';
import { useState, useEffect } from 'react';

 function RandomImage({ images, animationDuration }) {
  const [index, setIndex] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return nextIndex;
      });
    }, animationDuration);
    return () => clearInterval(interval);
  }, [images.length, animationDuration]);
   return (
    <div className="random-image">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
         .random-image {
          position: relative;
          width: 100%;
          height: 100%;
        }
         .random-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: fade-in ${animationDuration / 2}s ease-out;
        }
         .random-image img:nth-child(n + 2) {
          opacity: 0;
        }
      `}</style>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          layout="fill"
          objectFit="cover"
          style={{ zIndex: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
 export default RandomImage;