
import Sign from './components/Home/Sign'
import ResetPassword from "./components/Home/Resetpassword" 
import VotingApp from "./components/Home/VotingApp"
import ResultVote from "./components/Home/ResultVote"
import VotingTest from "./components/Home/VotingTest";

import Election from './components/Home/CreateElection';


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {

    path: "/",
    element:   <Sign/>,
    
  },
    /*errorElement: <PageNotFound />,*/
  {
    path: '/ResetPassword',
    element: <ResetPassword />,
  },

  {
      path: '/VotingApp',
      element: <VotingApp />,
  },

  {
      path: '/ResultVote',
      element: <ResultVote/>,
  },

  {
      path: '/VotingTest',
      element: <VotingTest/>,
  },

  {
      path: '/Election',
      element: <Election/>,
  },

]);




function App() {
  console.log("Google Client ID:", import.meta.env.REACT_APP_GOOGLE_CLIENT_ID);
  return  <RouterProvider router={router}/>
}

export default App
