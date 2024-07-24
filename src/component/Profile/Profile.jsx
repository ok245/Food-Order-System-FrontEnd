import { useState } from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import Events from "./Events";
import Address from "./Address"
import Favorites from "./Favorites";
import UserProfile from "./UserProfile";

const Profile=()=>{
    const[openSideBar,setOpenSideBar]=useState(false);
    return(
        <div className="lg:flex justify-between ">
            <div className="sticky h-[80vh] lg:w-[20%]">
              <ProfileNavigation open={openSideBar}/>
            </div>

            <div className="lg:w-[80%] ml-10">
                <Routes>
                    <Route  path='/' element={<UserProfile/>}/>
                    <Route  path='/orders' element={<Orders/>}/>
                    <Route  path='/favorites' element={<Favorites/>}/>
                    <Route  path='/address' element={<Address/>}/>
                    <Route  path='/events' element={<Events/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default Profile;