import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import MiddleHome from "../components/MiddleHome";

export const Home = () => {
  return (
    <div className="row">
      <LeftSidebar />
      <MiddleHome />
      <RightSidebar />
    </div>
  );
};
