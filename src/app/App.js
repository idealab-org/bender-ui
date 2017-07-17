import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Query from './query/Query.js'
import Grid from './grid/Grid.js'

class App extends Component {
    constructor() {
        super();
        this.state = {req: {"job_id": 9219219,
                            "grid": [[{"color": null,
                                       "text": null},
                                      {"color": "green",
                                       "text": "GREEN"},
                                      {"color": null,
                                       "text": null}],
                                      [{"color": "red",
                                       "text": "BLUE"},
                                      {"color": null,
                                       "text": null},
                                      {"color": "blue",
                                       "text": "RED"}],
                                      [{"color": null,
                                       "text": null},
                                      {"color": null,
                                       "text": null},
                                      {"color": null,
                                       "text": null}]],
                            "query": "Pick the red box",
                            "time": 5000}};

        this.click = this.click.bind(this);
    }

    click(loc, clickable) {
        //RETURN THE SELECTION TO SERVER 
        if (clickable) { 
            console.log(
              {
                "job_id": this.state.req.job_id,
                "selection": loc
              }
          )
        }
    }

    render() {
        alert("You will have 5 seconds to complete the task")
        return ( 
            <div className="Bender">
                <Query query={this.state.req.query}/> 
                <Grid grid={this.state.req.grid} handler={this.click}/>
            </div>
        );
    }
}

export default App;