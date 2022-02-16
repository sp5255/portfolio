import { Component } from "react";

export default class Technologies extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   isExpands: false,
  //   // };
  // }

  techIcons = {
    frontend: "uil uil-arrow",
    programming: "uil uil-brackets-curly",
    backend: "uil uil-server-network-alt",
  };

  handleSkills = (e) => {
    const obj  = {...this.props.isExpand};    
    for(const key in obj ){
      obj[key] = true;
      this.props.handleExpand(obj);
    }
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("next props : " + nextProps);

  //   let { isExpands } = nextProps;
  //   return {
  //     isExpands,
  //   };
  // }


  render() {
    // console.log(this.props.isExpand);
    const { name, icon } = this.props;
    const showIcons = this.techIcons[icon];
    // const { isExpands } = this.state;
    const obj  = {...this.props.isExpand};    
    let isExpands = null;
    for(const key in obj){
      isExpands = obj[key];      
    }
    const arrowClass = isExpands
      ? "uil uil-angle-down"
      : "uil uil-angle-right-b";


    return (
      <div /* style={{border:"2px solid"}} */ >
        <div className="domainSkill--title" onClick={this.handleSkills}>
          <div>
            <span className="domain--icon">
              <i className={showIcons}></i>
            </span>
            <span>{name}</span>
          </div>

          <div>
            <span className="arrow">
              <i className={arrowClass}></i>
            </span>
          </div>
        </div>

        {isExpands ? (
          <div className="domain--skills--box ">{this.props.children}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
