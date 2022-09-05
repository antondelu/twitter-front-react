import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import MiddleHome from "../components/MiddleHome";

export const Home = ({ refresh, setRefresh }) => {
  return (
    <div className="row">
      <LeftSidebar refresh={refresh} setRefresh={setRefresh} />
      <MiddleHome refresh={refresh} setRefresh={setRefresh} />
      <RightSidebar refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
};
