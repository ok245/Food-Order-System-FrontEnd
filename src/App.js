
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { DarkTheme } from './Theme/DarkTheme';
import {Home} from './component/Home/Home'
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoutes from './Routers/CustomerRoute';

function App() {
  return (
    
      
      <ThemeProvider theme={DarkTheme}>
        <CssBaseline/>
         {/* <Navbar/> */}
         {/* <Home/> */}
         {/* <RestaurantDetails/> */}
         {/* <Cart/> */}
         {/* <Profile/> */}
         <CustomerRoutes/>
      </ThemeProvider>
      
    
  );
}

export default App;
