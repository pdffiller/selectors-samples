import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1100,
  },
  progress: {
    position: 'relative',
    top: '50%',
    left: '50%',
  },
};

export const Loader = () => (
  <div style={style.container} >
    <CircularProgress
      mode="indeterminate"
      style={style.progress}
      size={60}
      thickness={6}
    />
  </div>
);
