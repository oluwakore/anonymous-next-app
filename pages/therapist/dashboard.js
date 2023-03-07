import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import TherapistDashboardComp from "../../components/therapist/TherapistDashboard/therapistDashboard";

function TherapistDashboard() {
  const router = useRouter();

  // const dispatch = useDispatch()

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // directs back to therapist login page
  const handlePush = () => {
    router.push("/therapist/login");
  };

  return (
    <div>
      {/* the ternary operation  redirects back to therapist login page if user type is not therapist */}
      {userInfo && userInfo?.user?._kind === "therapist" ? (
        <div>
          <TherapistDashboardComp
            therapistToken={loggedUserToken}
            therapistInfo={userInfo?.user}
          />
        </div>
      ) : (
        handlePush()
      )}
    </div>
  );
}

export default TherapistDashboard;
