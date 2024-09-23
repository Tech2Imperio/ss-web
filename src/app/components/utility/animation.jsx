export const sidebarAnimationOpen = () => {
  return {
    initial: false,
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: 1, ease: "easeInOut" },
  };
};

export const sidebarAnimationClose = () => {
  return {
    initial: false,
    animate: { y: "-100%" },
    exit: { y: "100%" },
    transition: { duration: 1, ease: "easeInOut" },
  };
};

export const dropdownAnimationOpen = () => {
  return {
    initial: false,
    animate: { y: "-2%" },
    exit: { y: "-50%" },
    transition: { duration: 0.8, ease: "easeInOut" },
  };
};

export const dropdownAnimationOpen2 = () => {
  return {
    initial: { x: "-50%" },
    animate: { x: "0%" },
    exit: { x: "-50%" },
    transition: { duration: 0.8, ease: "easeInOut" },
  };
};

export const FadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const FadeLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const FadeRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const FadeDown = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};
