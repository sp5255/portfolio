import { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "../../Assets/Styles/Home/index.css";

import HomeImg from "../../Assets/images/blob.svg";
import linkedin from "../../Assets/icons/linkedin.svg";
import githubIcon from "../../Assets/icons/github.svg";
import mouseIcon from "../../Assets/icons/mouse.png";
import sendIcon from "../../Assets/icons/send.png";
import profile from "../../Assets/images/IMG_20210824_175141-removebg-preview.png"

class HomeSection extends Component {
  //<i class="uil uil-mouse-alt"></i>
  //<i class="uil uil-message"></i>
  //<i class="uil uil-github-alt"></i>
  //<i class="uil uil-linkedin-alt"></i>
  //
  render() {
    const { name, position, home_content } = this.props;

    return (
      <>
        <div className="home--section">

          <div className="home__icons">
            {/* <div> */}
            <img src={githubIcon} alt="githubIcon" />
            <img src={githubIcon} alt="githubIcon" />
            <img src={githubIcon} alt="githubIcon" />
          </div>

          {/* </div> */}
          <div className="home__content">
            <div>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    `Hi, I'am ${name}`,
                    "Welcome to my Portfolio",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p>{position}</p>
            </div>
            <p className="content__p">{home_content}</p>

            <button id="Contact_me">
              <span>Contact me </span>
              <img src={sendIcon} alt="send Icons" />
            </button>
          </div>

          <div className="home__profile">
            <div>              
              <img src={HomeImg} alt="profile" /> 
              <img src={profile} alt = "profilepic" className="profilePic" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeSection;
