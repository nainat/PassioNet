import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Opportunities from "./pages/oppurtunities/Opportunities"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Layout from "./components/Layout";
//import './app.css';
import Contest from "./pages/contest/Contest";
import Message from "./pages/message/Message"; 
import Career from "./pages/career/Career";
import Event from "./pages/event/Event"; 
import Analytics from "./pages/analytics/Analytics";
import Discussion from "./pages/discussion/Discussion"
import Network from "./pages/network/Network";
import Settings from "./pages/settings/Settings";
import Acting from "./pages/contest/acting";
import Arts from "./pages/contest/Arts";
import Dancing from "./pages/contest/dancing";
import Singing from "./pages/contest/singing";
import ChatbotPopup from "./components/chatBot/ChatbotPopup";  // Import ChatbotPopup

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
        <Switch>
        <Route exact path="/">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
          <Route path="/opportunities">
          <Layout>
            <Opportunities />
          </Layout>
        </Route> 
        <Route path="/analytics"> 
        <Layout>
          <Analytics />
          </Layout>
        </Route>
        <Route path="/network"> 
        <Layout>
          <Network />
          </Layout>
        </Route>
        <Route path="/discussion"> 
        <Layout>
          <Discussion />
          </Layout>
        </Route>
        <Route path="/contest"> 
        <Layout>
          <Contest />
    
          </Layout>
        </Route>
        <Route path="/event"> 
        <Layout>
          <Event />
          </Layout>
        </Route>
        

        <Route path="/settings"> 
        <Layout>
          <Settings />
          </Layout>
        </Route>
        
        <Route path="/messages">
        <Message/>
        </Route>

        <Route path="/career">
        <Layout>

        <Career/>
        </Layout>

        </Route>
        <Router>
        <Route path="/arts" component={Arts} />
        <Route path="/dancing" component={Dancing} />
        <Route path="/singing" component={Singing} />
        <Route path="/acting" component={Acting} />
        </Router>
        
        </Switch>
        <ChatbotPopup />

    </Router>
    
  );
}

export default App;
