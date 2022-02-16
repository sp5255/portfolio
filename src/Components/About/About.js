import { Component } from "react";
import '../../Assets/Styles/About/index.css';

export default class About extends Component{

    render(){
        return(
            <div dataaos ="fade-right" className="about--section">
                <div className="about__title">
                    <h1>About Me</h1>
                    <p>My Introduction</p>
                </div>

                <div className="about__container">
                    <div><img src="" /> image</div>
                    <div>
                        <p>some Introduction</p>
                        <button>Download Resume(icon)</button>
                    </div>

                </div>

            </div>
        )
    }
}