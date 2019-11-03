import React from 'react';
import PropTypes from 'prop-types';
import { Match, NoMatch } from './Results';

const ResultsContainer = ({filteredTasks, selectedList, open, onOpen=f=>f, onClose=f=>f}) => {
    return (
        <div style={{flexGrow: 1}}>
            { filteredTasks.length > 0 ? 
                <Match 
                    filteredTasks={filteredTasks}
                    selectedList={selectedList}
                    open={open}
                    onOpen={onOpen}
                    onClose={onClose}
                />
                :
                <NoMatch />
            }
        </div>
    );
}

ResultsContainer.propTypes = {
    filteredTasks: PropTypes.array,
    selectedList: PropTypes.array,
    open: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}
 
export default ResultsContainer;