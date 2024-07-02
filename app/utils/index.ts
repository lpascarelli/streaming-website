import { MAX_STR_LENGTH } from "@/constants";

export function percentageFormatter(num: number) {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num / 10);
};

export function formatDate(date: string) {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

  return newDate.toLocaleDateString('en-GB', options);
}

export function truncateString(str: string) {
  if (str.length <= MAX_STR_LENGTH) {
    return str;
  }

  return str.slice(0, MAX_STR_LENGTH - 3) + '...';
}