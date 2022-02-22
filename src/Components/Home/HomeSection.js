import { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "../../Assets/Styles/Home/index.css";

import HomeImg from "../../Assets/images/blob.svg";
import profile from "../../Assets/images/IMG_20210824_175141-removebg-preview.png";

class HomeSection extends Component {
    //<i className="uil uil-mouse-alt"></i>
    //<i className="uil uil-message"></i>
    //<i className="uil uil-github-alt"></i>
    //<i className="uil uil-linkedin-alt"></i>
    //
    render() {
        const { name, position, home_content, scrollDown } = this.props;

        return (
            <>
                <div className="home--section" id="Home">
                    <div className="home__icons">
                        <i className="uil uil-linkedin-alt"></i>
                        <i className="uil uil-github-alt"></i>
                    </div>

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
                            <p className = "position">{position}</p>
                        </div>

                        <p className="content__p">{home_content}</p>

                        <button id="Contact_me">
                            <span>Contact me </span>
                            <i className="uil uil-message"></i>
                        </button>

                        <div className="footer">
                            <a href= {`#${scrollDown}`}>                                
                                    <i className="uil uil-mouse-alt"></i>
                                    <label>Scroll down</label>                               
                            </a>
                        </div>
                    </div>

                    <div className="home__profile">
                        <div>
                            <img src={HomeImg} alt="profile" />
                            <img
                                src={profile}
                                alt="profilepic"
                                className="profilePic"
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomeSection;
