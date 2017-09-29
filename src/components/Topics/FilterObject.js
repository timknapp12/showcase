import React, {Component} from 'react';


export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            employees: [
                {
                    color: 'white',
                    sound: 'loud',
                    height: 'short'
                },
                {
                    color: 'blue',
                    sound: 'soft',
                    height: 'medium'
                },
                {
                    color: 'black',
                    sound: "whisper",
                    height: "midget"
                }
            ],

            userInput: '',
            filteredAray: []
        }
    }

    handleChange(val) {
        this.setState = ({ userInput: val});
    }

    filterEmployees(prop) {
        var employees = this.state.employees;
        var filteredEmployees = [];
        
        for ( var i = 0; i < employees.length; i++ ) {
          if ( employees[i].hasOwnProperty(prop) ) {
            filteredEmployees.push(employees[i]);
          }
        }
        this.setState = ({filteredEmployees: filteredEmployees})
    }

    render () {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <input className="inputLine" onChange={ (e)=> this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ (e)=> this.solveTheProblem(this.state.userInput)}>Filter</button>
                <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10) } </span>
                <span className="resultsBox filterObjectRB" > Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
            </div>

        )
    }
}