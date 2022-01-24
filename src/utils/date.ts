import dayjs from 'dayjs';

/**
 * Parses a date into a date formatted as "MMMM DD, YYYY" e.g. "September 14, 2021"
 * @param date Date to parse.
 */
export const stringToLongDate = (date: string | Date) => {
    return dayjs(date).format('MMMM DD, YYYY');
};

/**
 * Parses a date into a date formatted as "MMMM YYYY".
 * @param date Date to parse.
 * @returns 
 */
export const stringToMonthYear = (date: string | Date) => {
    return dayjs(date).format('MMMM YYYY');
}
