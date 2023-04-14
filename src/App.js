import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Aside from "./components/Aside";
import Trends from "./components/Trends";
import CreateTweet from "./pages/CreateTweet";
import ListTweets from "./pages/ListTweets";
import Tweets from './pages/Tweets';

// Redux
import {Provider} from "react-redux";
import store from "./store";

function App() {

  return (
    <div className="flex w-8/12 mx-auto h-screen gap-3">            
      <Router>
        <Provider store={store}>
          <Aside />
          <Routes>
            <Route path="/" element={<Tweets />} />
            <Route path="/listTweets" element={<ListTweets/>}/>
            <Route path="/create" element={<CreateTweet/>} />
          </Routes>
        </Provider>
      </Router>
      <Trends />
    </div>    
  );
}

export default App;