// import React from "react";
import "./Progress.css";
const Progress = () => {
  return (
    <div>
      <div className="flex justify-between px-20 py-20 progressContainer">
        <div className="w-[600px]">
          <h3 className=" font-semibold mb-3">Shooting Campaign</h3>
          <p>
            Alierewnum phaedrum torquatos nec eu, dasvis detraxit ertssa
            periculiser eres frtisi reex,nihdail dexpetendis in mei Meis an
            lorem tincidunt vix at, vele.adsaasx sensibus id, errdsaeore
            rwrepicurei mea et. Mea facilisis urbanies tas moderatius id. Vis
            eires rationibus definiebass, eu qui purto zril laoreet.. Ex error
            es omnium es interpretaris prout legimus similique vix, te equidem.
          </p>
        </div>
        <div>
          <p>Web Design</p>
          <progress className="progress w-96" value="30" max="100"></progress>
          <p>Web Design</p>
          <progress className="progress w-96" value="50" max="100"></progress>
          <p>Web Design</p>
          <progress className="progress w-96" value="70" max="100"></progress>
          <p>Web Development</p>
          <progress className="progress w-96" value="90" max="100"></progress>
        </div>
      </div>
    </div>
  );
};

export default Progress;
