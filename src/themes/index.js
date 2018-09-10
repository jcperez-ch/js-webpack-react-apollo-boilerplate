import standard from './standard';

const get = (ref, selector, def) => {
  if (typeof ref === 'object' && Object.keys(ref).length) {
    if (ref[selector]) {
      return ref[selector];
    }
    const [token, ...newSelector] = selector.split('.');
    const newRef = ref[token];
    if (typeof newRef === 'object' && Object.keys(newRef).length) {
      return get(newRef, newSelector.join('.'), def);
    }
    return def;
  }
  return def;
};

const theme = {
  bodyBackgroundColor: ({ theme: t = {} } = {}) => t.bodyBackgroundColor,
  btnColor: ({ theme: t = {} } = {}) => t.btnColor,
  btnBackgroundColor: ({ theme: t = {} } = {}) => t.btnBackgroundColor,
  anchorColor: ({ theme: t = {} } = {}) => t.anchorColor,
  breakpoints: {
    xs: ({ theme: t = {} } = {}) => get(t.breakpoints, 'xs', 0),
    sm: ({ theme: t = {} } = {}) => get(t.breakpoints, 'sm', 0),
    md: ({ theme: t = {} } = {}) => get(t.breakpoints, 'md', 0),
    lg: ({ theme: t = {} } = {}) => get(t.breakpoints, 'lg', 0),
  },
};

export { standard, theme };
