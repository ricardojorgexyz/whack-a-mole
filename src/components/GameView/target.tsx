import React from 'react';
import { Box } from '@mui/material';
import { useSettings } from '@/hooks/useSettings';

interface SubProps {
  active?: boolean;
  incrementScore: () => void;
  switchTarget: () => void;
}

const sizings = {
  height: '60px',
  width: '60px',
  cursor: 'pointer',
};

const bgs = {
  ...sizings,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
};

export const Target = ({ active, incrementScore, switchTarget }: SubProps) => {
  const { showProto } = useSettings();

  return (
    <Box
      sx={
        showProto
          ? {
              ...bgs,
              backgroundColor: active ? 'red' : 'blue',
            }
          : active
          ? {
              ...bgs,
              backgroundImage: 'url("/static/WAM_Mole.png")',
            }
          : {
              ...bgs,
              backgroundImage: 'url("/static/WAM_Hole.png")',
            }
      }
      onClick={() => {
        if (active) {
          incrementScore();
          switchTarget();
        }
      }}
    />
  );
};
