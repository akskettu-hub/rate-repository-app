const formatDate = (date) => {
  const isoDate = new Date(date);
  const localDateFormat = isoDate.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return localDateFormat;
};

export default formatDate;
