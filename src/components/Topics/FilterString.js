import React, {Component} from 'react';


class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(val) {
        this.setState = ({userInput: val});
    }

    filterNames(userInput) {
        var names = this.state.names;
        var newNames = [];
    
        for ( var i = 0; i < names.length; i++ ) {
          if ( names[i].includes(userInput) ) {
            newNames.push(names[i]);
          }
        }

        this.setState = ({filteredArray: newNames});
    }

    render() {

        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names</span>
                <input className="inputLine" onChange={ (e)=> this.handleChange(e.target.value)}></input>
                <button  className="confirmationButton" onClick={ (e) => this.state.userInput}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names</span>
            </div>
        )
    }
}
export default FilterString