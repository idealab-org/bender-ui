import dotenv from 'dotenv';
import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import Query from './query/Query.js'
import Grid from './grid/Grid.js'

dotenv.config()

class App extends Component {
    constructor() {
        super();

        alert("You will have 5 seconds to complete the task")        
        this.state = {req: {job_id: null,
                            grid: null,
                            query: null,},
                      time: 0,
                      valid: true};
        console.log(this.state)                      
            
        this.Job();
        this.click = this.click.bind(this);
    }

    componentDidMount() {
        console.log(this.state)        
    }

    tick() {
        console.log(this.state)
        this.setState({
            time: this.state.time + 1
        });
        if (this.state.time >= 50) {
            this.setState({valid: false});  
            alert("Time Expired")
            window.location.reload()
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    Job() {
        axios.get(process.env.REACT_APP_JOB_DISPATCH_URL)
            .then((res) => {
                var data = JSON.parse(res.data);
                if (data.error === "queue_empty") {
                    return;
                }
                this.setState((prevState, props) => {
                    console.log("NEW TASK");
                    return {req: data};
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    click(loc, clickable) {
        //RETURN THE SELECTION TO SERVER 
        if (clickable && this.state.valid) { 
            axios.post(process.env.REACT_APP_JOB_RESPONSE_URL, {
                job_id: this.state.req.job_id,
                selected: loc
            }).then((res) => {
                if(res.data.status === 'OK') {
                    this.Job();
                } else {
                    console.log("Failed to Submit, please reload");
                }
            }).catch((err) => {
                console.log("Failed to Submit, please reload. ERROR:" + err);
            });
        }
    }

    render() {
        //if (this.state.req.job_id === null) {
        //    return (<div>Loading</div>);
        //} 

        this.timer = setInterval(this.tick, 50);

        return ( 
            <div className="Bender">
                <Query query={this.state.req.query}/> 
                <Grid grid={this.state.req.grid} handler={this.click}/>
            </div>
        );
    }
}

export default App;
