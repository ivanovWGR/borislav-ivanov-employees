export function getDaysFromDates(firstDate, secondDate) {
    let gt2 = firstDate.getTime();
    let gt1 = secondDate.getTime();

    return parseInt((gt2 - gt1) / (24 * 3600 * 1000));
}