import React, { Component } from 'react';
import data from './initialState.json';
import getDate from './getDate';
import uuid from 'uuid';
import ResponsiveDrawer from './components/ResponsiveDrawer';

class App extends Component {
    state = data

    componentDidMount(){
        this.setState({
            todays_date: this.getHeaderDate(getDate())
        });

      this.setState({
          tasks: this.state.tasks.map(task => {
              (
                task.date_created === this.getTodaysDate(getDate()) ||
                task.date_due === this.getTodaysDate(getDate())
              ) ?
                task.my_day = true
                :
                task.my_day = false
              return task;
          })
        })
    }

    getHeaderDate = date => {
        return date.weekday + ', ' + date.month + ' ' + date.day;
    }

    getTodaysDate = date => {
        return date.weekday.substr(0,3) + ' ' + date.month.substr(0,3) + ' ' + date.day + ' ' + date.year 
    }

    getFormatDate = date => {
        return date.weekday.substr(0,3) + ' ' + date.month.substr(0,3) + ' ' + date.day + ' ' + date.year;
    }

    toggleCompleted = id => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.task_id === id) {
                    task.completedStatus = !task.completedStatus
                    task.important = false
                    task.planned = false
                }
                return task;
            })
        })
    }

    toggleImportant = id => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.task_id === id) {
                    task.importantStatus = !task.importantStatus
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
                    "completedStatus": false,
                    "importantStatus": false,
                    "moreInfo": false,
                    "date_created_full": getDate(),
                    "date_created": this.getFormatDate(getDate()),
                    "date_due": "",
                    "my_day": true,
                    "planned": false,
                    "important": false,
                    "tasks": true
                }
            ]
        }))
    }

    getListTitle = listTitle => {
        this.setState({
            listTitle: listTitle
        })
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
                getListTitle={ this.getListTitle }
          />
        );
    }
}
 
export default App;