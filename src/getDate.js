export const getCurrentDate = () => {
    let newDate = new Date(),
        month = newDate.getMonth() + 1,
        day = newDate.getDate(),
        year = newDate.getFullYear();

    if (month < 10) month = "0"+ month;
    if (day < 10) day = "0" + day;

    return year + '-' + month + '-' + day;
}