export const getCurrentDateObj = () => {
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
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    }

    let newDate = new Date(),
        weekday = newDate.getDay(),
        month = newDate.getMonth() + 1,
        day = newDate.getDate(),
        year = newDate.getFullYear();

    const date = {
        weekday: weekdays[weekday],
        month: months[month],
        monthNum: month,
        day,
        year
    };

    return date;
}

export const headerFormat = date => {
    return date.weekday + ', ' + date.month + ' ' + date.day ;
}

export const numFormat = date => {
    let setMonth = '0' + date.monthNum
    return date.year + '-' + setMonth + '-' + date.day;
}

export const displayFormat = date => {
    return date.weekday.substr(0,3) + ', ' + date.month.substr(0,3) + ' ' + date.day; 
}