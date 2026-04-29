import { motion } from 'motion/react';
import './FloatingBeans.css';

const beans = [
  { id: 1, size: 38, left: 5, delay: 0, duration: 18, rotate: 45 },
  { id: 2, size: 28, left: 15, delay: 2, duration: 22, rotate: -30 },
  { id: 3, size: 44, left: 25, delay: 5, duration: 16, rotate: 120 },
  { id: 4, size: 22, left: 35, delay: 1, duration: 24, rotate: -90 },
  { id: 5, size: 34, left: 48, delay: 3, duration: 20, rotate: 60 },
  { id: 6, size: 26, left: 58, delay: 7, duration: 19, rotate: -150 },
  { id: 7, size: 40, left: 68, delay: 4, duration: 17, rotate: 30 },
  { id: 8, size: 30, left: 78, delay: 6, duration: 21, rotate: -60 },
  { id: 9, size: 36, left: 88, delay: 2, duration: 23, rotate: 100 },
  { id: 10, size: 24, left: 95, delay: 8, duration: 15, rotate: -120 },
  { id: 11, size: 32, left: 42, delay: 9, duration: 26, rotate: 170 },
  { id: 12, size: 20, left: 72, delay: 11, duration: 14, rotate: -45 },
];

export default function FloatingBeans() {
  return (
    <div className="floating-beans-container" aria-hidden="true">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className="floating-bean"
          style={{
            width: bean.size,
            height: bean.size,
            left: `${bean.left}%`,
          }}
          initial={{
            y: '110vh',
            rotate: bean.rotate,
            opacity: 0,
          }}
          animate={{
            y: '-10vh',
            rotate: bean.rotate + 360,
            opacity: [0, 0.35, 0.35, 0],
          }}
          transition={{
            duration: bean.duration,
            delay: bean.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
