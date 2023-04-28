import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Error from './Components/Error';
import Account from './Components/Account';
import { createBrowserRouter } from 'react-router-dom';
import Cart from './Components/Cart';
import Deals from './Components/Deals';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <Header/>
    <Outlet/>
    </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {path:"/",
element:<App/>,
errorElement:<Error/>,
children:[
  {path:"/",
element:<Body/>},
  {path:"/account",
element:<Account/>},
  {path:"/cart",
element:<Cart/>},
  {path:"/deals",
element:<Deals/>}
]}
])

export default appRouter;
