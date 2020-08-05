export const variants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

export const transitions = {
  type: 'spring',
  duration: 0.5,
};

export const pageStyle = {
  // position: 'absolute',
};
