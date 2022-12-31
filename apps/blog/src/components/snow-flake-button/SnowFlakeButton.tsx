import { letItSnow } from '@utils/letItSnow';
import { motion } from 'framer-motion';
import { SnowflakeIcon } from 'public/assets/icon/SnowFlake';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export function SnowFlakeButton({ style, ...props }: Props) {
  return (
    <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 3 }}>
      <button
        onClick={letItSnow}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          border: 'none',
          width: 'fit-content',
          ...style,
        }}
        {...props}
      >
        <SnowflakeIcon title="Let it snow" />
      </button>
    </motion.div>
  );
}
