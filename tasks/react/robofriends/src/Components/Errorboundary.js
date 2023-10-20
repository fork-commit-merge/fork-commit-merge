import React,{Component} from "react";

class Errorboundary extends Component{
    constructor(){
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError : true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oooooops!....Something went Wrong!</h1>
        }
        return this.props.children;
    }
}  

export default Errorboundary;