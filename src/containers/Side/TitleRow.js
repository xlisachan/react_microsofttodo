import React from 'react';
import { connect } from 'react-redux';
import { setList } from '../../actions';
import { FaRegSun, FaRegStar, FaRegCalendar, FaRegCalendarCheck } from 'react-icons/fa';
import TitleRow from '../../components/Side/TitleRow';

const listIcons = [<FaRegSun />, <FaRegStar />, <FaRegCalendar />, <FaRegCalendarCheck />];

const TitleRowContainer = ({list, index, lists, query, selectedListId, tasks, onClick=f=>f, onClose=f=>f, onSetList=f=>f}) => {
    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name;

    const headerStyle = text => {
        return {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            backgroundColor: name === text ? 'gainsboro' : null
        }
    }

    const iconStyle = color => {
        return {
            marginRight: -25, 
            fontSize: '1.2rem',
            color: 'rgb(' + color.join(',') + ')'
        }
    }

    const handleClick = () => {
        if (query) {
            onClick()
        }

        onSetList(list.id, list.name);
        onClose();
    }

    const numberOfTasks = (id, name) => {
        const numOfTasks = tasks.filter(task =>
            ((task[`${name.toLowerCase().replace(/ /g,"_") }`] || task.list_id === id) && !task.completedStatus)
        ).length
        
        return numOfTasks > 0 ?
            <div style={{color: 'gray'}}>
                { numOfTasks }
            </div>
            :
            null
    }

    return (
        <TitleRow
            list={ list }
            index={ index }
            listIcons={ listIcons }
            headerStyle={ headerStyle }
            iconStyle={ iconStyle }
            numberOfTasks={ numberOfTasks }
            onClick={ handleClick }
        />
    );
}

const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedListId: state.current.list["id"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onSetList(id, title) {
        dispatch(
            setList(id, title)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TitleRowContainer);