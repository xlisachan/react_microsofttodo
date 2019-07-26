const todoMenu = [
    {
        "id": "sortTasks",
        "icon": "format_line_spacing",
        "caption": "Sort",
        "children": [
            {
                "id": "importantStatus",
                "icon": "star_border",
                "caption": "Importance"
            },
            {
                "id": "item",
                "icon": "sort_by_alpha",
                "caption": "Alphabetically"
            },
            {
                "id": "date_due",
                "icon": "event",
                "caption": "Due date"
            },
            {
                "id": "date_created",
                "icon": "library_add",
                "caption": "Creation date"
            },
            {
                "id": "completedStatus",
                "icon": "check_circle_outline",
                "caption": "Completed"
            },
            {
                "id": "my_day",
                "icon": "wb_sunny",
                "caption": "Added to My Day"
            }
        ]
    },
    {
        "id": "changeTheme",
        "icon": "color_lens",
        "caption": "Change theme",
        "children": [
            {
                "id": "color-red",
                "color": "[250,70,60]"
            }
        ]
    },
    {
        "id": "hideTasks",
        "icon": "check_circle_outline",
        "caption": "Hide completed tasks"
    },
    {
        "id": "showTasks",
        "icon": "check_circle_outline",
        "caption": "Show completed tasks"
    }
]

export default todoMenu;