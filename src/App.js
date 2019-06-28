import React, { Component } from 'react';
import data from './data.json';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import uuid from 'uuid';

class App extends Component {
    state = data

    componentDidMount(){
      const weekdays = {
        '0': 'Sunday',
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday',
        '7': 'Sunday'
      }

      const months = {
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
      }

      const newDate = new Date();
      const weekday = newDate.getDay();
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate();
      const date = weekdays[weekday] + ', ' + months[month] + ' ' + day;

      this.setState({
          todays_date: date
      });
    }

    toggleCompleted = id => {
      this.setState({
          tasks: this.state.tasks.map(task => {
              if (task.task_id === id) {
                  task.completed = !task.completed
              }
              return task;
          })
      })
    }

    toggleImportant = id => {
      this.setState({
          tasks: this.state.tasks.map(task => {
              if (task.task_id === id) {
                  task.important = !task.important
              }
              return task;
          })
      })
    }

    toggleMoreInfo = task => {
      this.setState({
          moreInfo: task
      })
    }

    addTask = item => {
      this.setState(prevState => ({
        tasks: [
          ...prevState.tasks,
          {
            "task_id": uuid.v4(),
            item,
            "list": "Tasks",
            "completed": false,
            "moreInfo": false,
            "date_created": "",
            "date_due": "",
            "my_day": true,
            "planned": false,
            "important": false,
            "tasks": false
          }
        ]
      }))
    }

    render() {
        return (
            <ResponsiveDrawer 
                listTitle={ this.state.listTitle }
                date={ this.state.todays_date }
                tasks={ this.state.tasks }
                moreInfo={ this.state.moreInfo }
                toggleCompleted={ this.toggleCompleted }
                toggleImportant={ this.toggleImportant }
                toggleMoreInfo={ this.toggleMoreInfo }
                addTask={ this.addTask }
          />
        );
    }
}
 
export default App;