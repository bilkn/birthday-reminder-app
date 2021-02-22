function isScreenLarge() {
  const mql = window.matchMedia('(min-width: 769px)');
  return mql.matches;
}

export default isScreenLarge;
