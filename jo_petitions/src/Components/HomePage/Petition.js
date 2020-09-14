import React from 'react';
function Petition(){
    return(
        <article class="ph2 br3 shadow-3 bt bb b--black-10 bg-black-10 mb4 mt4">
            <div class="link pointer db pv4 ph3 ph0-l no-underline black dim" href="#0">
            <div class="row flex-row-ns">
                <div class="col-4 pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img   height="250" src="http://mrmrs.github.io/photos/cpu.jpg" class="db w-100" alt="first petition"/>
                <p className="tl f5 b mt3 mb0"> 
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg> {"1000 Supporters"}
                </p>
                </div>
                <div class="col-8 text-container w-100 w-60-ns pl3-ns">
                <h1 class="f2 b fw1 baskerville mt0 lh-title">{"Potition Title"}</h1>
                <p class="petition-desc f6 f4-l mt4 lh-copy">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
    <p class="f4 tr b lh-copy mv0"> {"Potition Poster"} <br/> <span className="f6">{"1/1/2020"}</span></p>
                </div>
                
            </div>
            </div>
        </article>
    );
}
export default Petition;