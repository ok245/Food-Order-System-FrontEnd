import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
import { Event } from '@mui/icons-material';


const menu=[{title:"Orders",icon:<ShoppingBagIcon/>},
{title:"Favorites",icon:<FavoriteIcon/>},
{title:"Address",icon:<HomeIcon/>},
{title:"Events",icon:<Event/>},
{title:"Payment",icon:<AccountBalanceWalletIcon/>},
{title:"Notification",icon:<NotificationsActiveIcon/>},
{title:"Logout",icon:<LogoutIcon/>},
];


const ProfileNavigation=({open,handleClose})=>{
    const isScreenSmall=useMediaQuery('(min-width:900)');
    const navigate=useNavigate();

    const handleNavigate=(item)=>{
      navigate(`/my-profile/${item.title.toLowerCase()}`)

    }
    return(
      <div>
        <Drawer 
        variant={isScreenSmall?"temporary":"permanent"} 
        open={isScreenSmall? open:true}
         anchor="left" sx={{zIndex:1,position:"sticky"}}
         >
            <div  className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
              {menu.map((item,i)=><>
              <div  onClick={()=>handleNavigate(item)} className='flex items-center space-x-5 cursor-pointer'>
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i!==menu.length-1 &&<Divider/>}
              </>)}
            </div>

        </Drawer>
      </div>
    );
}
export default ProfileNavigation;