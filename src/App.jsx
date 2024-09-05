import PlatformExplore from "./components/PlatformExplore";
import RecentPosts from "./components/RecentPosts";
import SliderPosts from "./components/SliderPosts";
import Welcome from "./components/Welcome";


const App = () => {
  return <div className="w-full flex flex-col items-center justify-center">
    <Welcome/>
    <SliderPosts/>
    <RecentPosts/>
    <PlatformExplore/>
  </div>;
};

export default App;
