import React, { useContext } from "react";
import { DataContext } from "../Context/ProviderContext";

function Contact() {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <div>
      <div className="contact">
        <div>
          <h1>Features With litle</h1>
          <hr />
        </div>
        <div className="hisse">
          <div className="hisse-1">
            <h1>Left-aligned title explaining these awesome features</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a
              maxime praesentium, ipsa ratione neque, quisquam velit quaerat
              tenetur, eius magnam sequi quas nam iure commodi dolores impedit!
              Nobis molestias explicabo inventore iste adipisci quo soluta.
              Neque unde ea qui?
            </p>
            <a href="">Primary button</a>
          </div>
          <div className="dort">
            <div className="row">
              <div className="dord">
                <span></span>
                <h1>featured title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore, incidunt.
                </p>
              </div>
              <div className="dord">
                <span></span>
                <h1>featured title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore, incidunt.
                </p>
              </div>
            </div>
              <div className="row">
                <div className="dord">
              <span></span>
              <h1>featured title</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Labore, incidunt.
              </p>
            </div>
            <div className="dord">
              <span></span>
              <h1>featured title</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Labore, incidunt.
              </p>
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
