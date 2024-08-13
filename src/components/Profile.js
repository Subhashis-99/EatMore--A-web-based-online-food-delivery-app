import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, SetCount] = useState(0);
  const [count2, SetCount2] = useState(1);
  useEffect(() => {
    console.log("Inside useeffect");
    const timer = setInterval(() => {
      console.log("namaste react");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("timerr cleaned up");
    };
  }, [count, count2]);

  return (
    <div>
      {console.log("render functional")}
      <h2>Profile Component</h2>
      <h3>Name:{props.name}</h3>
      <h3>Count:{count}</h3>
      <h3>Count2:{count2}</h3>
      <button
        onClick={() => {
          SetCount(1);
          SetCount2(0);
        }}
      >
        Button
      </button>
    </div>
  );
};
export default Profile;
