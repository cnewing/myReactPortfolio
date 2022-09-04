import "./intro.css";

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
        </div>
      </div>
      <div className="i-right">Right Intro section</div>
    </div>
  );
};

export default Intro;
