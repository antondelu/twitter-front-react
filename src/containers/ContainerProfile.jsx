import { LeftSidebar } from "../components/LeftSidebar";
import { MiddleProfile } from "../components/MiddleProfile";
import { RightSidebar } from "../components/RightSidebar";

export const Profile = ({ refresh, setRefresh }) => {
  return (
    <div className="row">
      <LeftSidebar />
      <MiddleProfile refresh={refresh} setRefresh={setRefresh} />
      <RightSidebar refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
};
