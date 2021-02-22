function matchMinMedia(size) {
  const mql = window.matchMedia(`(min-width: ${size}px)`);
  return mql.matches;
}

export default matchMinMedia;
