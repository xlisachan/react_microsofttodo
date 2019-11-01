import React from 'react';
import { connect } from 'react-redux';
import { toggleMyDay } from '../../../actions';
import { FaRegSun, FaTimes } from 'react-icons/fa';
import MoreMyDay from './MoreMyDay';

const MoreMyDayContainer = ({currentList, selectedTask, onClose=f=>f, onToggleMyDay=f=>f}) => {
    if (!selectedTask[0]) return null;

    const handleClick = () => {
        if (currentList === "My Day"){
            onClose();
        }
        onToggleMyDay(selectedTask[0].task_id);
    }

    const removeMyDay = 
        <div className="align-center space-between">
            <div className="align-center blue">
                <FaRegSun className="list-icon list-icon-left"/>
                Added to My Day 
            </div>
            
            <FaTimes style={{color: 'dimgray'}}/>
        </div>

    const addMyDay =
        <div className="align-center" style={{color: 'dimgray'}}>
            <FaRegSun className="list-icon list-icon-left" />
            <span>Add to My Day</span>
        </div>

    const renderMyDay = {
        removeMyDay,
        addMyDay
    }

    return (
        <MoreMyDay 
            renderMyDay={ renderMyDay }
            selectedTask={ selectedTask }
            onClick={ handleClick }
        />
    );
}

const mapStateToProps = state => ({
    currentList: state.current.list["title"],
})

const mapDispatchToProps = dispatch => ({
    
    onToggleMyDay(id) {
        dispatch(
            toggleMyDay(id)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MoreMyDayContainer);