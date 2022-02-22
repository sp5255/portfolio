import { Component } from "react";
import "../../Assets/Styles/Skills/index.css";
import Technologies from "./Technologies";
import Bars from "./Bars";

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpandFrontend: true,
            isExpandBackend: false,
            isExpandProgramming: false,
        };
    }

    handleExpand = (obj) => {
        let newObj = { ...this.state };
        // console.log('clicked');

        for (const key in newObj) {
            if (obj[key] === true) {
                newObj[key] = true;
            } else newObj[key] = false;
        }
        this.setState(newObj);
    };

    render() {
        const { isExpandFrontend, isExpandBackend, isExpandProgramming } =
            this.state;

        return (
            <div data-aos="slide-right" className="skills--section" id="Skills">
                <div className="skills__title">
                    <label>Skills</label>
                    <p>My Technical level</p>
                </div>

                <div className="skills-container">
                    <div>
                        <Technologies
                            name="Frontend Technologies"
                            icon="frontend"
                            isExpand={{ isExpandFrontend }}
                            handleExpand={this.handleExpand}
                            onClick={this.handleExpand}
                        >
                            <div>
                                <Bars name="HTML" percentage="90%" />
                                <Bars name="CSS" percentage="70%" />
                                <Bars name="JavaScript" percentage="80%" />
                                <Bars name="React.js" percentage="60%" />
                            </div>
                        </Technologies>

                        <Technologies
                            name="Backend Technologies"
                            icon="backend"
                            isExpand={{ isExpandBackend }}
                            handleExpand={this.handleExpand}
                        >
                            <div>
                                <Bars name="NodeJs" percentage="70%" />
                                <Bars name="ExpressJs" percentage="60%" />
                                <Bars name="MongoDB" percentage="40%" />
                            </div>
                        </Technologies>
                    </div>

                    <div>
                        <Technologies
                            name="Programming Languages"
                            icon="programming"
                            isExpand={{ isExpandProgramming }}
                            handleExpand={this.handleExpand}
                        >
                            <div>
                                <Bars name="C" percentage="70%" />
                                <Bars name="C++" percentage="80%" />
                                <Bars name="Java" percentage="70%" />
                            </div>
                        </Technologies>
                    </div>
                </div>
            </div>
        );
    }
}
