const formatDateID = (isoDate) => {
  const date = new Date(isoDate);

  const formatted = date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });

  return `${formatted.replace(",", " •")} WIB`;
};

export { formatDateID };
