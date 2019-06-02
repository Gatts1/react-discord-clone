function compareDate(newDate, previousDate) {
  return new Date(newDate).getDate() !== new Date(previousDate).getDate();
}

function separatorDate(time) {
  const date = new Date(time);
  const currentTime = new Date();
  if (
    date.getDate() === currentTime.getDate() &&
    date.getMonth() === currentTime.getMonth() &&
    date.getFullYear() === currentTime.getFullYear()
  ) {
    return "Today";
  }

  if (
    date.getDate() === currentTime.getDate() - 1 &&
    date.getMonth() === currentTime.getMonth() &&
    date.getFullYear() === currentTime.getFullYear()
  ) {
    return "Yesterday";
  }

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const monthNames = [
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
    "December"
  ];

  return `${dayNames[date.getDay()]}, ${date.getDate()} of ${
    monthNames[date.getMonth()]
  }`;
}

function formatAMPM(date) {
  return new Date(date).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit"
  });
}

export { compareDate, separatorDate, formatAMPM };
