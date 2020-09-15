import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

class StartPetition extends Component{
    constructor(){
        super();
        this.state={
            route:"page1",
            title:"",
            text:"",
            photo:"",
        }
    }
    setTitle=(event)=>{
        this.setState({title:event.target.value});
    }
    setText=(event)=>{
        this.setState({text:event.target.value});

    }
    setPhoto=(event)=>{
        this.setState({photo:event.target.value});
        console.log(this.state.photo);
    }
    changeRoute=(r)=>{
        if(r==='page3' && this.state.title===""){
            return;
        }
        if(r==='page4' && this.state.text===""){
            return;
        }
        if(r==='home' && this.state.photo===""){
            return;
        }

        this.setState({route:r})
    }
    render(){
        const {route}=this.state;
        return(<>
            {route==='page1'?
            <Page1 changeRoute={this.changeRoute}/>
            :route ==='page2'?
            <Page2 changeRoute={this.changeRoute}
                    setTitle={this.setTitle}/>
            :route ==='page3'?
            <Page3 changeRoute={this.changeRoute}
                    setText={this.setText}/>
            :
            <Page4 changeRoute={this.changeRoute}
                    setPhoto={this.setPhoto}/>
        }
            </>
        );

    }

};

export default StartPetition;