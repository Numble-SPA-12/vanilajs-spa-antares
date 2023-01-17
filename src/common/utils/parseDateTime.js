const parseDateTime = (
  dateString,
  {
    year = undefined,
    month = undefined,
    day = undefined,
    hour = undefined,
    minute = undefined,
  } = {}
) => {
  const date = new Date(dateString);
  const options = {
    year,
    month,
    day,
    hour,
    minute,
  };
  return date.toLocaleDateString("en-US", options);
};

export default parseDateTime;
