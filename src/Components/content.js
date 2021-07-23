import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function Content() {
  return (
    <div>
      <div className="row" id="skills">
        <div
          className="column"
          style={{ paddingTop: 100, backgroundColor: "#ffb703" }}
        >
          <h2>Skills and Abilities</h2>
        </div>
        <div
          className="columnContent"
          style={{ backgroundColor: "#023047", color: "white" }}
        >
          <div className="columnSkill">
            {" "}
            <p>HTML5</p>
            <br />
            <p>Vanila JS</p>
            <br />
            <p>CSS3</p>
            <br />
            <p>ReactJS</p>
            <br />
          </div>
          <div className="columnSkill">
            <p>Jquery</p>
            <br />
            <p>Redux</p>
            <br />
            <p>MySQL</p>
            <br />
          </div>
        </div>
      </div>
      <div className="row" id="experience">
        <div className="columnContent" style={{ backgroundColor: "#ff6d00" }}>
          <h3>Engineer at Unisys India 2019-Present</h3>
          <br />
          <p>
            Worked on Front-end of the Web Application which includes HTML5,
            Vanilla JS ,jQuery and CSS.
          </p>
          <br />
          <p>
            Worked on Agile Methodologies with responsibility of continual
            planning, improvement, team collaboration, evolutionary development,
            and early delivery.
          </p>
          <br />
          <p>Worked on migrating projects to React</p>
        </div>
        <div
          className="column"
          style={{ paddingTop: 100, backgroundColor: "#ffe5d9" }}
        >
          <h2>Experience</h2>
        </div>
      </div>
      <div className="row" id="education">
        <div
          className="column"
          style={{ paddingTop: 100, backgroundColor: "#7cb518" }}
        >
          <h2>Education</h2>
        </div>
        <div className="columnContent" style={{ backgroundColor: "lightpink" }}>
          <h4>RV College of Engineering</h4>
          <p>BE in computer science and Engineering | 7.45</p>
          <br />
          <h3>School of Mines</h3>
          <p>Diploma in computer science and Engineering | 73%</p>
          <br />
          <h3>VVS School</h3>
          <p>SSLC |68%</p>
        </div>
      </div>
      <div className="row" id="achievements">
        <div
          className="columnContent"
          style={{ backgroundColor: "#219ebc", justifyContent: "screenLeft" }}
        >
          <p>
            Won a competition for developing an interactive web application to
            predict IPl winner (worked on webpage design).
          </p>
          <br />

          <p>
            recognized for participation in innovation campaign from company's
            portal.
          </p>
          <br />
          <p>Recognized for resolving clients critical issue on-time .</p>
          <br />
          <p>Completed AWS Certified Cloud Practitioner</p>
        </div>
        <div
          className="column"
          style={{ paddingTop: 100, backgroundColor: "lightgray" }}
        >
          <h2>Achievements</h2>
        </div>
      </div>
    </div>
  );
}
