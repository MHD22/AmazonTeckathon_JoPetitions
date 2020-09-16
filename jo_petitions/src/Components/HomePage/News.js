import React from "react";
import Petition from "./Petition";

function News({ route , data, readPetition ,changeRoute}) {
  
  const petList= data.map((item)=>{
    return (<Petition data={item} key={item.id} route={route} readPetition={readPetition} changeRoute={changeRoute}/>)
  })
  return (
    <section class="mw8 center avenir">
      <hr className="bg-black"></hr>
      {route === "home" ? (
        <h2 class="baskerville fw8 ph3 ph0-l mt6 mb4">Top Petitions</h2>
      ) : null}
      {
        petList
      }  
      </section>
  );
}

export default News;
