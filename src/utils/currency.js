const parseIDR = (value) => Number(value.replace(/\D/g, ""));
const formatIDR = (value) => (value ? value.toLocaleString("id-ID") : "");

export { parseIDR, formatIDR };
