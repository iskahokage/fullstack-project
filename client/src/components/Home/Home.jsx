import React from "react";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="bgc">
      <div className="homeWrapper">
        <div className="welcomeBlock">
          <div className="overlay">
            <Header />
            <p className="welcomeText">
              Experienced lawyers are ready to help you.
            </p>
            <p className="welcomeText2">The experience your case needs.</p>
            <div className="tipBlock">
              <div className="whiteTip tip">
                <div className="MaterialTipImg tipImg"></div>
                <p className='tipTitle'>Material law</p>
                <p className='tipDescription'>
                  The object of material law is property, labor, family and
                  other material relations, most branches of law belong to the
                  category of material law.
                </p>
              </div>

              <div className="yellowTip tip">
                <div className="ProceduralTipImg tipImg"></div>
                <p className='tipTitle'>Procedural law</p>
                <p className='tipDescription'>
                  Procedural law regulates the order, procedure for exercising
                  the rights and obligations of the parties.{" "}
                </p>
              </div>

              <div className="whiteTip tip">
                <div className="CompositeTipImg tipImg"></div>
                <p className='tipTitle'>Composite law</p>
                <p className='tipDescription'>
                  Modern legal science identifies the following complex branches
                  of law: <p> Business Law <br /> Economic law</p>
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className='mainBlock'>
              <div className='mainBlockWrapper'>
                <div>
                  <p className='mainBlockTip1'>Reliable & effective legal solutions</p>
                  <p className='mainBlockTip2'>Get immediate free information and advice from experienced attorneys</p>
                </div>
                <p>
                  view all services
                </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
