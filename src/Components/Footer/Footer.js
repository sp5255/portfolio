import "../../Assets/Styles/Footer/index.css";

function Footer(props) {
    //<i class="uil uil-instagram"></i>
    //<i class="uil uil-facebook-f"></i>
    //<i class="uil uil-twitter-alt"></i>

    const { name, title } = props;
    return (
        <div className="footer--section">
            <div>
                <label className="name">{name}</label>
                <label className="title">{title}</label>
            </div>

        <div className="mid--section">
                <div>
                    <a href="#Skills">Skills</a>
                    <a href="#Portfolio">Portfolio</a>
                    <a href="#ContactMe">Contact Me</a>
                </div>
                <div>
                    <label>
                        <i className="uil uil-copyright"></i>
                        All rights reserved
                    </label>
                </div>
            </div>

            <div className="icons">
                <a href="#">
                    <span>
                        <i className="uil uil-facebook-f"></i>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <i className="uil uil-instagram"></i>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <i className="uil uil-twitter-alt"></i>
                    </span>
                </a>
            </div>
        </div>
    );
}

export default Footer;