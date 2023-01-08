import { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "../../Assets/Styles/Home/index.scss";

// import HomeImg from "../../Assets/images/blob.svg";
// import profile from "../../Assets/images/IMG_20210824_175141-removebg-preview.png";
import profile from "../../Assets/images/IMG.png";

class HomeSection extends Component {
  //<i className="uil uil-mouse-alt"></i>
  //<i className="uil uil-message"></i>
  //<i className="uil uil-github-alt"></i>
  //<i className="uil uil-linkedin-alt"></i>
  //<i class="uil uil-arrow-down"></i>

  renderIconSection = () => {
    return (
      <div className="home__icons">
        <a
          href="https://www.linkedin.com/in/sachin-pundir-b1b97a1b1/"
          target={"_blank"}
          rel="noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/sp5255" target={"_blank"} rel="noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    );
  };


  renderContent = (name, position, home_content, scrollDown) => (
    <div className="home__content">
      <div className="content-header">
        <h1>
          <Typewriter
            options={{
              strings: [`Hi, I'am ${name}`, "Welcome to my Portfolio"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="position">{position}</p>
      </div>

      <p className="about-me">{home_content}</p>

      <a href="./Sachin.pdf" download="Sachin Pundir Resume.pdf">
        <button type="submit" id="resume-btn">
          <span>Resume </span>
          <i className="uil uil-import"></i>
        </button>
      </a>

      <div className="footer">
        <a href={`#${scrollDown}`}>
          <i className="uil uil-mouse-alt"></i>
          <label>Scroll down</label>
          <i className="uil uil-arrow-down"></i>
        </a>
      </div>
    </div>
  );

  render() {
    const { name, position, home_content, scrollDown } = this.props;

    return (
      <>
        <div className="section-container">
          <div className="home--section " id="Home">
            {this.renderIconSection()}

            <div className="content-desktop-view">
              {this.renderContent(name, position, home_content, scrollDown)}
            </div>

            <div className="home__profile">
              <div>
                <img
                  src={profile}
                  alt="profilepic"
                  className="profilePic"
                  draggable={false}
                />
              </div>
            </div>
          </div>
          <div className="content-mobile-view">
            {this.renderContent(name, position, home_content, scrollDown)}
          </div>
        </div>
      </>
    );
  }
}

export default HomeSection;
