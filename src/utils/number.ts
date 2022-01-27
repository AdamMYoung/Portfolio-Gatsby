export const limitNumberWithinRange = (amount: number, start = 0, end = 100) => {
    let percentage: number;

    if (amount < start) {
        percentage = 0;
    } else if (amount > end) {
        percentage = 100;
    } else {
        percentage = amount;
    }

    return parseInt(`${percentage}`);
};
