import dayjs from 'dayjs';

export const stringToLongDate = (date: string) => {
    return dayjs(date).format('MMMM DD, YYYY');
};
