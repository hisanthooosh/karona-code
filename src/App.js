import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Routes , Route } from 'react-router-dom';

import Signup from './project/templates/Signup';

import Login from './project/templates/Login';

import Reg from './project/templates/Reg';

import Home from './project/templates/Home';

import LoginForm from "./project/templates/LoginForm"

import Profile from './project/templates/Profile';

import Trendingfeed from './project/templates/Trendingfeed';

import Message from './project/templates/Message';

import Saved from './project/templates/Saved';

import Forgotpassword from './project/templates/Forgotpassword';

import Verifyemail from './project/templates/Verifyemail';

import History from './project/templates/History'

import Check from './project/templates/Check';

import Notification from './project/templates/Notification';

import Createpage from './project/templates/Createpage';

import More from './project/templates/More';

import Editprofile from './project/templates/Editprofile';

import Portfolio from './project/templates/Portfolio';

import Add from './project/templates/Add';

import Addtype from './project/templates/Addtype';

import Settings from './project/templates/Settings';

import Video from './project/templates/Video';
import Reel from './project/templates/Reel';

function App() 
{
  return (

    <div >
      
      <Routes>

        

         <Route path='/' element = { < LoginForm />} />

         <Route path='/login' element  = { < Login />} />

         <Route path='/Signup' element = { < Signup />} />

         <Route path='/Reg' element = { < Reg />} />

         <Route path='/Home' element = { < Home />} />

         <Route path='/Profile' element = { < Profile />} />

         <Route path='/Trendingfeed' element = { < Trendingfeed />} />

         <Route path='/Message' element = { < Message />} />

         <Route path='/History' element = { < History />} />

         <Route path='/Saved' element = { < Saved />} />

         <Route path='/Forgotpassword' element = { < Forgotpassword />} />

         <Route path='/Verifyemail' element = { < Verifyemail />} />

         <Route path='/Notification' element = { < Notification />} />

         <Route path='/Createpage' element = { < Createpage />} />

         <Route path='/More' element = { < More />} />

         <Route path='/Editprofile' element = { < Editprofile />} />

         <Route path='/Portfolio' element = { < Portfolio />} />

         <Route path='/Add' element = { < Add/>} />

         <Route path='/Addtype' element = {< Addtype/>} />

         <Route path='/Settings' element = {< Settings/>} />

         <Route path='/Video' element = {< Video/>} />

         <Route path='/Reel' element = {< Reel/>} />

         <Route path='/Check' element = { < Check />} />
         
      </Routes>
          
   
    </div>

  );

};

export default App;
