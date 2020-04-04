import React from 'react';
import PropTypes from 'prop-types';
import ResultsContainer from './Results/ResultsContainer';
import TodoList from './Todolist/TodoList';

const Main = React.forwardRef(({filteredTasks, open, query, selectedList, onOpen=f=>f, onClose=f=>f}, ref) => (
    query ? 
        <ResultsContainer
            filteredTasks={filteredTasks}
            open={open}
            selectedList={selectedList}
            onOpen={onOpen}
            onClose={onClose}
        /> 
        : 
        <TodoList
            ref={ref}
            filteredTasks={filteredTasks}
            open={open}
            selectedList={selectedList}
            onOpen={onOpen}
            onClose={onClose}
        />
));

Main.propTypes = {
    filteredTasks: PropTypes.array,
    open: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    selectedList: PropTypes.array,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Main;