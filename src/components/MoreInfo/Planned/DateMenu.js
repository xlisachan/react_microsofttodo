import moment from 'moment';

const getDay = (num) => {
    return moment(new Date()).add(num, 'days').format('ddd')
}

const plannedMenu = [
    {
        "id": "today",
        "icon": "today",
        "caption": "Today",
        "size": ".8rem",
        "num": 0,
        "day": getDay(0)
    },
    {
        "id": "tomorrow",
        "icon": "event",
        "caption": "Tomorrow",
        "size": ".8rem",
        "num": 1,
        "day": getDay(1)
    },
    {
        "id": "nextWeek",
        "icon": "event_note",
        "caption": "Next Week",
        "size": ".8rem",
        "num": 2,
        "day": getDay(2)
    },
    {
        "id":"pickDate",
        "icon": "calendar_today",
        "caption": "Pick a Date",
        "children": "children"
    }
]

export default plannedMenu;