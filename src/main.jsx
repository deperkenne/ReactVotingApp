import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Election from "./components/Home/CreateElection";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Apptest from './components/Home/Release.jsx';

createRoot(document.getElementById('root')).render(
  /*<StrictMode>*/
    <App/>
  /*</StrictMode>,*/
    /*<Election />*/
)
