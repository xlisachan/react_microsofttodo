import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from './actions';
import ResponsiveDrawer from './components/ResponsiveDrawer';

class App extends Component {
    componentDidMount() {
        this.props.loadTasks();
    }
    
    render() {
        const { query, tasks, listTitle, orderDir, orderBy} = this.props;
        let filteredTasks = [];
        let order;

        orderDir === 'asc' ? order = 1 : order = -1;

        query ?
            tasks.forEach(task => {
                if (task.item.toLowerCase().indexOf(query) !== -1) {
                    filteredTasks.push(task);
                }
            })
            :
            filteredTasks = tasks.filter(task =>
                task[`${ listTitle.toLowerCase().replace(/ /g,"_") }`]
            )
            .sort((a,b) => {
                if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
                    return -1 * order
                } else {
                    return 1 * order
                }
            })

        return (
            <ResponsiveDrawer
                query={ query }
                tasks={ filteredTasks }
            />
        );
    }
}

const mapStateToProps = state => ({
    query: state.query,
    tasks: state.tasks,
    listTitle: state.listTitle,
    orderDir: state.orderDir,
    orderBy: state.orderBy
})

export default connect(mapStateToProps, { loadTasks })(App);