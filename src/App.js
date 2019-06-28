import React, { Component } from 'react';
import data from './data.json';
import TDHeader from './components/TDHeader';
import ToDoListItem from './components/ToDoListItem';
import ToDoAddItem from './components/ToDoAddItem';

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

    nextId = () => {
      this.uniqueId = this.uniqueId || 4
      return this.uniqueId++
    }

    addTask = item => {
      this.setState(prevState => ({
        tasks: [
          ...prevState.tasks,
          {
            "task_id": this.nextId(),
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
            <div>
                <TDHeader
                    listTitle={ this.state.listTitle }
                    date={ this.state.todays_date }
                />

                <div style={{position: 'relative', top: '10px', fontSize: '1rem'}}>
                    { 
                        this.state.tasks.map(task => {
                            return (
                                <ToDoListItem 
                                    key={ task.task_id }
                                    { ... task }
                                    moreInfo={ this.state.moreInfo }
                                    toggleCompleted={ this.toggleCompleted }
                                    toggleImportant={ this.toggleImportant }
                                    toggleMoreInfo={ this.toggleMoreInfo }
                                />
                            )
                        })
                    }
                </div>

            <ToDoAddItem
              addTask={ this.addTask } />

            </div>
        );
    }
}
 
export default App;