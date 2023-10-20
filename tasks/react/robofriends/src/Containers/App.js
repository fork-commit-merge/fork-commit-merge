import React from "react";
import CardList from "../Components/CardList";
import Searchbox from "../Components/Searchbox";
import Errorboundary from "../Components/Errorboundary";
import Scroll from "../Components/Scroll";
import { Component } from "react/cjs/react.production.min";
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            users:  [] ,
            searched: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(respnse=> respnse.json()).then(database=>{
            this.setState({users : database})
        })
    }
    
    // anytime u you use your own method use arrow function so that
    // this point to the main object
    Onsearch = (event) => {
        this.setState({searched : event.target.value});
    }

    render(){
        const filteredRobs = this.state.users.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searched.toLowerCase());
        })
        return !this.state.users.length ?
        <h1>Loading....</h1> :
        (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <Searchbox searching={this.Onsearch}/>
                <Scroll>
                    <Errorboundary>
                        <CardList robot={ filteredRobs }/>
                    </Errorboundary>
                </Scroll>
            </div>
        )
    }
}

export default App;



// constructor -> render -> componentDidmount() -> remder