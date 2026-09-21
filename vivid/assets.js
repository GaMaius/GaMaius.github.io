// Both designs use the current content database; local images live at the site root.
for (const item of [...(window.PORTFOLIO_DATA?.projects || []), ...(window.PORTFOLIO_DATA?.specs || [])]) {
  const resolve = value => value && !/^(?:[a-z]+:|\/|#)/i.test(value) ? '../' + value.replace(/^\.\//, '') : value;
  if (Array.isArray(item.image)) item.image = item.image.map(resolve);
  else if (item.image) item.image = resolve(item.image);
}
