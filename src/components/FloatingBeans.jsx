import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import './FloatingBeans.css';

const beans = [
  { id: 1, size: 38, left: 5, delay: 0, duration: 18, rotate: 45, depth: 0.8 },
  { id: 2, size: 28, left: 15, delay: 2, duration: 22, rotate: -30, depth: 0.4 },
  { id: 3, size: 44, left: 25, delay: 5, duration: 16, rotate: 120, depth: 1.2 },
  { id: 4, size: 22, left: 35, delay: 1, duration: 24, rotate: -90, depth: 0.3 },
  { id: 5, size: 34, left: 48, delay: 3, duration: 20, rotate: 60, depth: 0.7 },
  { id: 6, size: 26, left: 58, delay: 7, duration: 19, rotate: -150, depth: 0.5 },
  { id: 7, size: 40, left: 68, delay: 4, duration: 17, rotate: 30, depth: 1.1 },
  { id: 8, size: 30, left: 78, delay: 6, duration: 21, rotate: -60, depth: 0.6 },
  { id: 9, size: 36, left: 88, delay: 2, duration: 23, rotate: 100, depth: 0.9 },
  { id: 10, size: 24, left: 95, delay: 8, duration: 15, rotate: -120, depth: 0.4 },
  { id: 11, size: 32, left: 42, delay: 9, duration: 26, rotate: 170, depth: 0.6 },
  { id: 12, size: 20, left: 72, delay: 11, duration: 14, rotate: -45, depth: 0.3 },
];

export default function FloatingBeans() {
  const { scrollY } = useScroll();

  return (
    <div className="floating-beans-container" aria-hidden="true">
      {beans.map((bean) => {
        // Create parallax effect based on depth
        // Deeper beans move slower
        const parallaxY = useTransform(scrollY, [0, 5000], [0, -500 * bean.depth]);

        return (
          <motion.div
            key={bean.id}
            className="floating-bean"
            style={{
              width: bean.size,
              height: bean.size,
              left: `${bean.left}%`,
              y: parallaxY,
              filter: `blur(${Math.max(0, (1 - bean.depth) * 4)}px) brightness(${0.4 + bean.depth * 0.4})`,
              zIndex: Math.floor(bean.depth * 10),
            }}
            initial={{
              y: '110vh',
              rotate: bean.rotate,
              opacity: 0,
              scale: 0.5 * bean.depth,
            }}
            animate={{
              y: '-10vh',
              rotate: bean.rotate + 360,
              opacity: [0, 0.35 * bean.depth, 0.35 * bean.depth, 0],
              scale: bean.depth,
            }}
            transition={{
              y: {
                duration: bean.duration,
                delay: bean.delay,
                repeat: Infinity,
                ease: 'linear',
              },
              rotate: {
                duration: bean.duration * 2,
                delay: bean.delay,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: bean.duration,
                delay: bean.delay,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 2,
                delay: bean.delay,
              }
            }}
          />
        );
      })}
    </div>
  );
}
