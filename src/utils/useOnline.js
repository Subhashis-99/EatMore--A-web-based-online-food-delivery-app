import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, SetIsOnline] = useState(true);

  useEffect(() => {

    const OnlineHandler = () => {
      SetIsOnline(true);
    };
    const OfflineHandler = () => {
      SetIsOnline(false);
    };

    window.addEventListener("online", OnlineHandler);
    window.addEventListener("offline", OfflineHandler);
  }, []);
  return isOnline;
};
export default useOnline;