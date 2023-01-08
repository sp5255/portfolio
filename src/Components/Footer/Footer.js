import { useEffect, useRef, useState } from "react";
import "../../Assets/Styles/Footer/index.scss";

function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}

function Footer(props) {
  //<i class="uil uil-instagram"></i>
  //<i class="uil uil-facebook-f"></i>
  //<i class="uil uil-twitter-alt"></i>
const ref  = useRef();
  const isVisible = useOnScreen(ref)
  console.log('on screen ...', isVisible)
  useEffect(() => {console.log('footer mount')}, [])
  const { name, title } = props;
  return (
    <footer > 
      <div className="footer--section section-container">
        <div ref = {ref}>
          <label className="name">{name}</label>
          <label className="title">{title}</label>
        </div>

        {/* <div className="copyright--container"> */}
        <div className="links">
          <a href="#Skills">Skills</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#ContactMe">Contact Me</a>
        </div>

        {/* <div className="copyright">
            <p>Made by Sachin Pundir with ❤️</p>
            <label>
              <i className="uil uil-copyright"></i>
              All rights reserved
            </label>
          </div> */}
        {/* </div> */}

        <div className="social-icons">
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
      <div className="copyright">
        <p>Made by Sachin Pundir with ❤️</p>
        <label>
          <i className="uil uil-copyright"></i>
          All rights reserved
        </label>
      </div>
    </footer>
  );
}

export default Footer;
