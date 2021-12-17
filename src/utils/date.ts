import dayjs from 'dayjs';

/**
 * Parses a date string into a date formatted as "MMMM DD, YYYY" e.g. "September 14, 2021"
 * @param date Date to parse.
 */
export const stringToLongDate = (date: string) => {
    return dayjs(date).format('MMMM DD, YYYY');
};
