import { LeftSidebar } from "../components/LeftSidebar";
import { MiddleProfile } from "../components/MiddleProfile";
import { RightSidebar } from "../components/RightSidebar";

export const Profile = () => {
  return (
    <div className="row">
      <LeftSidebar />
      <MiddleProfile />
      <RightSidebar />
    </div>
  );
};
