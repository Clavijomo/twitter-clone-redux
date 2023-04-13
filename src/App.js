import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Aside from "./components/Aside";
import Trends from "./components/Trends";
import CreateTweet from "./pages/CreateTweet";
import ListTweets from "./pages/ListTweets";
import Tweets from './pages/Tweets';

function App() {

  return (
    <div className="flex w-6/12 mx-auto h-screen gap-3">            
      <Router>
        <Aside />
        <Routes>
          <Route path="/" element={<Tweets />} />
          <Route path="/listTweets" element={<ListTweets/>}/>
          <Route path="/create" element={<CreateTweet/>} />
        </Routes>
      </Router>
      <Trends />
    </div>    
  );
}

export default App;