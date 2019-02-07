import React from "react"
import Form from './Form'
import Form2 from './Form2'
import './style1.css'
export default class Invoice extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            toForm : false
        }
    }  
    handleClick(){
        this.setState({toForm : true})
    }
    render(){
        if(this.state.toForm){
            return <Form2 />
        }
        return(
            <div class="welcome">
                <div><h1>Invoice creator</h1></div>
                <button onClick={()=>this.handleClick()}>Create an invoice</button>
            </div>
        );
    }
} 