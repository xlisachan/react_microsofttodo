import PropTypes from 'prop-types';

const PlannedButton = ({renderDateDue, selectedTask}) => {
    return !selectedTask[0].date_due ? renderDateDue.add : renderDateDue.show
}

PlannedButton.propTypes = {
    renderDateDue: PropTypes.object.isRequired,
    selectedTask: PropTypes.array.isRequired,
}
 
export default PlannedButton;