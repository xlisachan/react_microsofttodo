import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import moment from 'moment';

const MaterialUIPickers = ({selectedTask, tasks, onAddDateDue=f=>f, onClose=f=>f}) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        
        const arr = tasks.filter(task => task.task_id === selectedTask[0].task_id);
        const taskId = arr[0].task_id;
        const newDate = moment(date).format('YYYY-MM-DD');

        onAddDateDue(taskId, newDate);
        onClose();
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Pick a Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
};

MaterialUIPickers.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
    onAddDateDue: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default MaterialUIPickers;