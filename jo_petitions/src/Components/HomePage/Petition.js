import React, { Component } from 'react';
class Petition extends Component{

    render(){
        const {title,name,text,supports,date,photo,route}= this.props.data;
        const data2= {title,name,text,supports,date,photo,route};
        return(
            <article onClick={()=>{this.props.readPetition(data2)}}
             class="pointer dim  ph2 br3 shadow-3 bt bb b--black-10 bg-black-10 mb4 mt4">
                <div class=" db pv4 ph3 ph0-l no-underline black " href="#0">
                <div class="row flex-row-ns">
                    <div class="col-4 pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img   height="250" src={photo} class="db w-100" alt="first petition"/>
                    <p className="tl f5 b mt3 mb0"> 
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                    </svg> {supports + " Supporters"}
                    </p>
                    </div>
                    <div class="col-8 text-container w-100 w-60-ns pl3-ns">
                    <h1 class="f2 b fw1 baskerville mt0 lh-title">{title}</h1>
                    <p class="petition-desc f6 f4-l mt4 lh-copy">
                    {text}
                    </p>
                 <p class=" f4 tr b lh-copy mv0"> {name} <br/> <span className="f6">{date}</span></p>
                    
                    </div>
                    
                </div>
                </div>
            </article>
        );
    }
}
export default Petition;