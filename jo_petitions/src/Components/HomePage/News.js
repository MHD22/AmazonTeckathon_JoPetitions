import React from "react";
import Petition from "./Petition";

function News({ route , data, readPetition ,changeRoute}) {
  return (
    <section class="mw8 center avenir">
      <hr className="bg-black"></hr>
      {route === "home" ? (
        <h2 class="baskerville fw8 ph3 ph0-l mt6 mb4">Top Petitions</h2>
      ) : null}
      <Petition data={data} readPetition={readPetition} changeRoute={changeRoute}/>
      <Petition data={data} readPetition={readPetition} />
      <Petition data={data} readPetition={readPetition} />
      <Petition data={data} readPetition={readPetition} />
    </section>
  );
}

export default News;
