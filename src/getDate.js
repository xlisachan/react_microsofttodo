const getDate = () => {
    const weekdays = {
        '0': 'Sunday',
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday',
        '7': 'Sunday'
    }

    const months = {
        '0': 'January',
        '1': 'February',
        '2': 'March',
        '3': 'April',
        '4': 'May',
        '5': 'June',
        '6': 'July',
        '7': 'August',
        '8': 'September',
        '9': 'October',
        '10': 'November',
        '11': 'December'
    }

    const newDate = new Date();
    const weekday = newDate.getDay();
    const month = newDate.getMonth();
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    const date = {
        weekday: weekdays[weekday],
        month: months[month],
        day,
        year
    };

    return date;
}

export default getDate;