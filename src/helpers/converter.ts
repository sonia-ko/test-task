export const convertDates = (date: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fullDate = new Date(date);
  const day = fullDate.getDate();
  const month = months[fullDate.getMonth()];
  const year = fullDate.getFullYear();

  return `${day} ${month}, ${year} year.`;
};
