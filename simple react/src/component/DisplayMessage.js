import React,{Component} from 'react'
class DisplayMessage extends Component{
    constructor(){
        super();
        this.state={msg:"This is initial state",
                       name: " ",
                    adress: " "}
        //this.changeMessage=this.changeMessage.bind(this);
        //this is old way of writing
        //if we use old way of writing function the button object will be considered as this 
        //inside function but we want to use class object as this
        //so add following line to bind function with object use arrow  
    }
    changeMessage=()=>{
        this.setState({msg:"This is after first click "})//it will create the copy of object
        //setState enables to modify the values 
        //this is syntax of set this.state
        //initially this set will hold the value of previous state and then it will modify
    }
    render(){
        return(
            <div>
                Name:  <input type="text" name="nm" value={this.state.name} 
                onChange={(event)=>this.setState({name:event.target.value})} >
                
                </input>
                Address: <input type="text" name="address" value={this.state.adress}
                onChange={(event)=>this.setState({adress:event.target.value})}></input>
              {this.state.msg}
              <br></br>
                {this.state.name}
                <br></br>
                {this.state.adress}
                <button type='button' name='btn' value='click'
                onClick={this.changeMessage}>change the message</button>
            </div>
        ) 
    }
}
export default DisplayMessage;