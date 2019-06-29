import React, { Component } from 'react';
import data from './data.json';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import uuid from 'uuid';

class App extends Component {
    state = data

    componentDidMount(){
      this.setState({
          todays_date: this.getHeaderDate(this.getDate())
      });

      this.setState({
        tasks: this.state.tasks.map(task => {
            (
              task.date_created === this.getTodaysDate(this.getDate()) ||
              task.date_due === this.getTodaysDate(this.getDate())
            ) ?
              task.my_day = true
              :
              task.my_day = false
            return task;
        })
      })
    }

    getDate = () => {
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
          '0': 'January',
          '1': 'February',
          '2': 'March',
          '3': 'April',
          '4': 'May',
          '5': 'June',
          '6': 'July',
          '7': 'August',
          '8': 'September',
          '9': 'October',
          '10': 'November',
          '11': 'December'
        }

        const newDate = new Date();
        const weekday = newDate.getDay();
        const month = newDate.getMonth();
        const day = newDate.getDate();
        const year = newDate.getFullYear();

        const date = {
            newDate: newDate,
            weekday: weekdays[weekday],
            month: months[month],
            day: day,
            year: year
        }

        return date;
    }

    getHeaderDate = date => {
      return date.weekday + ', ' + date.month + ' ' + date.day;
    }

    getFormatDate = date => {
      return date.weekday.substr(0,3) + ' ' + date.month.substr(0,3) + ' ' + date.day + ' ' + date.year;
    }

    getTodaysDate = date => {
      return date.weekday.substr(0,3) + ' ' + date.month.substr(0,3) + ' ' + date.day + ' ' + date.year 
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
            "date_created_full": this.getDate(),
            "date_created": this.getFormatDate(this.getDate()),
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