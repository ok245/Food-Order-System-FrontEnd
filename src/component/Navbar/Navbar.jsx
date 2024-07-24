import { Avatar, Badge, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar=()=>{
    const navigate=useNavigate();
    return(
     <div className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
        
        <div className="lg:mr-10 cursor-pointer flex items-center" >
             <li className="logo font-semibold text-gray-300 text-2xl">
              Zosh food
             </li>
        </div>
            
        
        <div className="flex items-center space-x-4 lg:space-x-10">
            <div>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>

                </IconButton>
            </div>

            <div>
                {false?<Avatar  sx={{bgcolor:"white"}}>O</Avatar>:
                <IconButton onClick={()=>{navigate('account/login')}}>
                    <Person/>
                </IconButton>}
            </div>
            <div>
                <Badge color="primary" badgeContent={3}>
                <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                </Badge>
                
            </div>

        </div>
    </div>
    );
}
export default Navbar;