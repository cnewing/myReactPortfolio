import "./intro.css";
import Photo from "../../images/placeholder.jpeg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-greet"> Hey, my name is </h2>
          <h1 className="i-name"> Christa Newing</h1>
          <div className="i-roles">
            <div className="i-roles-wrapper">
              <div className="i-role1">Web Developer</div>
              <div className="i-role1">UI Designer</div>
              <div className="i-role1">Graphic Designer</div>
            </div>
          </div>
          <p className="i-about">
            I love making design ideas become design realities.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="image-bg"></div>
        <img src="" alt="" className="my-pic" />
      </div>
    </div>
  );
};

export default Intro;
