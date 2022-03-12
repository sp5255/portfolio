import { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "../../Assets/Styles/Home/index.css";

// import HomeImg from "../../Assets/images/blob.svg";
// import profile from "../../Assets/images/IMG_20210824_175141-removebg-preview.png";
import profile from "../../Assets/images/IMG.png";

class HomeSection extends Component {
    //<i className="uil uil-mouse-alt"></i>
    //<i className="uil uil-message"></i>
    //<i className="uil uil-github-alt"></i>
    //<i className="uil uil-linkedin-alt"></i>
    //<i class="uil uil-arrow-down"></i>

    render() {
        const { name, position, home_content, scrollDown } = this.props;

        return (
            <>
                <div className="home--section" id="Home" >
                    <div className="home__icons">
                        <a href="https://www.linkedin.com/in/sachin-pundir-b1b97a1b1/" target={"_blank"}>

                        <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/sp5255" target={"_blank"}>

                        <i className="uil uil-github-alt"></i>
                        </a>
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
                            <p className="position">{position}</p>
                        </div>

                        <p className="content__p">{home_content}</p>
                        
                        <a href="./Sachin.pdf" download="Sachin Pundir Resume.pdf">

                        <button type="submit" id="Contact_me">
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

                    <div className="home__profile">
                        <div>
                            {/* <img src={HomeImg} alt="profile" /> */}
                            <img
                                src={profile}
                                alt="profilepic"
                                className="profilePic"
                                draggable = {false}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomeSection;
