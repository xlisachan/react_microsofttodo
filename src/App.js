import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTasks } from './actions';
import ResponsiveDrawer from './components/ResponsiveDrawer';

class App extends Component {
    componentDidMount() {
        this.props.loadTasks();
    }
    
    render() {
        return (
            <ResponsiveDrawer />
        );
    }
}

export default connect(null, { loadTasks })(App);