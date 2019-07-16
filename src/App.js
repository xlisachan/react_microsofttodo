import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from './actions';
import ResponsiveDrawer from './components/ResponsiveDrawer';

class App extends Component {
    componentDidMount() {
        this.props.loadTasks();
    }
    
    render() {
        const { query, tasks, listTitle} = this.props;
        let filteredTasks = [];

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
    listTitle: state.listTitle
})

export default connect(mapStateToProps, { loadTasks })(App);