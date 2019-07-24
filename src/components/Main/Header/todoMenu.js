const todoMenu = [
    {
        "id": "sortTasks",
        "caption": "Sort",
        "children": [
            {
                "id": "importantStatus",
                "caption": "Importance"
            },
            {
                "id": "item",
                "caption": "Alphabetically"
            },
            {
                "id": "date_due",
                "caption": "Due date"
            },
            {
                "id": "date_created",
                "caption": "Creation date"
            },
            {
                "id": "completedStatus",
                "caption": "Completed"
            },
            {
                "id": "my_day",
                "caption": "Added to My Day"
            }
        ]
    },
    {
        "id": "changeTheme",
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
        "caption": "Hide completed tasks"
    },
    {
        "id": "showTasks",
        "caption": "Show completed tasks"
    }
]

export default todoMenu;