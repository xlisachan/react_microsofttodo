const todoMenu = [
    {
        "id": "sortTasks",
        "size": '21px',
        "icon": "format_line_spacing",
        "caption": "Sort",
        "children": [
            {
                "id": "importantStatus",
                "size": '21px',
                "icon": "star_border",
                "caption": "Importance"
            },
            {
                "id": "item",
                "size": '21px',
                "icon": "sort_by_alpha",
                "caption": "Alphabetically"
            },
            {
                "id": "date_due",
                "size": '21px',
                "icon": "event",
                "caption": "Due date"
            },
            {
                "id": "date_created",
                "size": '21px',
                "icon": "library_add",
                "caption": "Creation date"
            },
            {
                "id": "completedStatus",
                "size": '21px',
                "icon": "check_circle_outline",
                "caption": "Completed"
            },
            {
                "id": "my_day",
                "size": '21px',
                "icon": "wb_sunny",
                "caption": "Added to My Day"
            }
        ]
    },
    {
        "id": "changeTheme",
        "size": '21px',
        "icon": "color_lens",
        "caption": "Change theme",
        "children": [
            {
                "id": "blue",
                "size": '32px',
                "icon": "lens",
                "color": [80,40,250]
            },
            {
                "id": "red",
                "size": '32px',
                "icon": "lens",
                "color": [250,70,60]
            },
            {
                "id": "purple",
                "size": '32px',
                "icon": "lens",
                "color": [100,30,150]
            },
            {
                "id": "green",
                "size": '32px',
                "icon": "lens",
                "color": [80,160,50]
            },
            {
                "id": "ltblue",
                "size": '32px',
                "icon": "lens",
                "color": [0,120,255]
            },
        ]
    },
    {
        "id": "hideTasks",
        "size": '21px',
        "icon": "check_circle_outline",
        "caption": "Hide completed tasks"
    },
    {
        "id": "showTasks",
        "size": '21px',
        "icon": "check_circle_outline",
        "caption": "Show completed tasks"
    }
]

export default todoMenu;