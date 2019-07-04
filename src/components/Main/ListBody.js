import React from 'react';
import ListItem from '../../containers/Main/ListItem';
import AddItem from '../../containers/Main/AddItem';

const ListBody = ({tasks, listTitle}) => {
    return (
        <div className="main-container">
            { tasks.filter(task => {
                        return task[`${ listTitle.toLowerCase().replace(/ /g,"_") }`]
                    })
                    .map(task => {
                        return (
                            <ListItem 
                                key={ task.task_id }
                                task={ task }                            
                            />
                        )
                    })
            }

            <AddItem />
        </div>
    );
}

export default ListBody;