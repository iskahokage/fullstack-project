import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {JSON_API} from "./../consts.js"
export const profileContext = createContext();

const INIT_STATE = {
  profilesData: [],
  profileToEdit: null,
  profileDetails: {},
};

const reducer = (state=INIT_STATE, action) =>{
    switch (action.type) {
        case "GET_PROFILE_DATA":
            return{
                ...state,
                profilesData: action.payload.data,
            }
        default:
            break;
    }
}

const ProfileContextProvider = ({children}) => {
    const history = useHistory();
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const getProfilesData = async () => {
        // const search = new URLSearchParams(window.location.search);
        // search.set("_limit", 3);
        // history
        //   ? history.push(`${history.location.pathname}?${search.toString()}`)
        //   : console.log(null);
        let res = await axios(`${JSON_API}/profile`);
        dispatch({
          type: "GET_PROFILE_DATA",
          payload: res,
        });
      };

  return (
      <profileContext.Provider
        value={{
            history,
            profilesData: state.profilesData,
            getProfilesData,
        }}
      >
          {children}
      </profileContext.Provider>
  )
};

export default ProfileContextProvider;
