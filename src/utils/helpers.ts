const MONTHS = [
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
    "December"];

export const getDate = () => {
    const
        dateObj = new Date(),
        month = MONTHS[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();

    return `${month} ${day}, ${year}`;
};
