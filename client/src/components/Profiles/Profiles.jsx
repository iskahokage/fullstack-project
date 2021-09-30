import { Paper } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { profileContext } from "../../context/ProfileContext";
import Header from "../Header/Header";

const Profiles = () => {
  const { profilesData, getProfilesData } = useContext(profileContext);
  useEffect(() => {
    getProfilesData();
  }, []);
  return (
    <div className="bgc profiles">
      <div className="homeWrapper profiles">
        <div className="welcomeBlock profiles">
          <div className="overlay profiles">
              <Header/>
              <p className='lawyersTitle'>Our lawyers and attorneys</p>
            <div className="serviceList">
              {profilesData.map((item) => (
                <Paper className="serviceList-card">
                  <div>
                    <img className="serviceList-img" src={item.img} alt="" />
                  </div>
                  <div>
                    <p className="serviceList-serviceTitle">
                      <b>
                        <h5>
                          {item.firstName} {item.lastName}:
                        </h5>{" "}
                        {item.phone}
                      </b>
                    </p>
                    <p className="serviceList-serviceDescription">
                      {item.experience}
                    </p>
                    <p className="serviceList-servicePrice ">
                      Цена: <b>{item.price}</b> Сом
                    </p>
                  </div>
                </Paper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
