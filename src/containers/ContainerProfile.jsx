import { LeftSidebar } from "../components/LeftSidebar";
import { MiddleProfile } from "../components/MiddleProfile";
import { RightSidebar } from "../components/RightSidebar";

export const Profile = ({ refresh, setRefresh }) => {
  return (
    <div className="row">
      <LeftSidebar refresh={refresh} setRefresh={setRefresh} />
      <MiddleProfile refresh={refresh} setRefresh={setRefresh} />
      <RightSidebar refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
};
