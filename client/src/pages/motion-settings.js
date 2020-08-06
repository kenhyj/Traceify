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
  stiffness: 50,
  transition: 'linear',
};
