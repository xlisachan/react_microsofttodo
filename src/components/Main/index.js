import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';

const MainContainer = React.forwardRef(({lists, query, selectedListId, tasks, open, onClose=f=>f, onOpen=f=>f}, ref) => {
    let filteredTasks = [],
        order,
        selectedList = lists.filter(list => list.id === selectedListId),
        name = selectedList[0].name,
        orderBy = selectedList[0].orderBy,
        orderDir = selectedList[0].orderDir,
        hideCompleted = selectedList[0].hideCompleted;

    orderDir === 'asc' ? order = 1 : order = -1;

    query ?
        tasks.forEach(task => {
            if (
                (task.item.toLowerCase().indexOf(query) !== -1) ||
                (task.note.toLowerCase().indexOf(query) !== -1)
            ){
                filteredTasks.push(task);
            }
        })
        :
        filteredTasks = tasks.filter(task => {
            return task[`${ name.toLowerCase().replace(/ /g,"_") }`] || task.list_id === selectedListId
        })
        .sort((a,b) => {
            return (orderBy === 'item' || orderBy === 'date_due' || orderBy === 'date_created') ?
                (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) ? -1 * order : 1 * order
                :
                (orderDir === 'asc') ?
                    b[orderBy] - a[orderBy] : a[orderBy] - b[orderBy]
        })
        .filter(task => hideCompleted ? !task.completedStatus : task)
    
    return (
        <Main
            ref={ref}
            filteredTasks={filteredTasks}
            selectedList={selectedList}
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            query={ query }
        />
    )
})

const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedListId: state.current.list["id"],
    tasks: state.tasks,
})

export default connect(mapStateToProps, null, null, {forwardRef: true})(MainContainer);