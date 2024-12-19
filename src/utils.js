export const getImageUrl = (path) => {
  return new URL(`/public/assets/${path}`, import.meta.url).href;
};

