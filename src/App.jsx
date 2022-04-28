import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Start from "./pages/Start";
import Topic from "./pages/Topic";
import Track from "./pages/Track";
import Tracks from "./pages/Tracks";
import "./styles.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/topic/:id" element={<Topic />} />
        <Route path="/track/:title" element={<Track />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
