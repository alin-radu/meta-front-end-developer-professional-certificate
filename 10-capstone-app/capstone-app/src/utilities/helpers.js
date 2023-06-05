export const getFormatedDate = (obj) => {
  if (!(obj instanceof Date)) {
    return;
  }

  const date = obj
    .toLocaleString('sv', {
      timeZone: 'Europe/Bucharest',
    })
    .slice(0, 10);

  return date;
};
