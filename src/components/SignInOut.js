import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../FirebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, removeUserData } from "../utils/authSlicer";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/image.png";

const SignInOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AuthUserData = useSelector((store) => store.auth.AuthUserData);

  let handleSignIn = async () => {
    const data = await signInWithPopup(auth, provider);
    const AuthUserData = {
      name: data.user.displayName,
      photo: data.user.photoURL,
    };
    dispatch(addUserData(AuthUserData));
    navigate("/");
  };

  let handleSignOut = async () => {
    await signOut(auth);
    dispatch(removeUserData());
    navigate("/");
  };
  return (
    <div className="relative flex items-center justify-center min-h-screen py-6 bg-gray-100">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 blur-[1px] "
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Content on top of the background */}
      <div className="relative w-full max-w-md mx-auto bg-white p-7  rounded-lg shadow-lg z-10 -mt-24">
        {AuthUserData ? (
          <div className="my-8">
            <div className="flex gap-2">
              <img src="https://img.icons8.com/fluency/48/box-important--v1.png" className="text-[10px]" />
              <p className=" font-mono text-3xl mt-[2px] ">
              Hii {AuthUserData.name.split(" ")[0]}...
              </p>
            </div>
            <div className="ml-2 font-mono text-2xl">
              {" "}
              Do You want to Log Out ???{" "}
            </div>

            <button
              className="bg-green-500 p-2 ml-2  hover:text-white rounded-md my-2 "
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold font-serif">Login</h2>
            </div>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter Password"
                />
                <div className="flex items-center justify-between mt-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm font-semibold flex items-center justify-center my-[2px]">
                <span className="flex-grow border-t border-gray-300 mr-2"></span>
                login with
                <span className="flex-grow border-t border-gray-300 ml-2"></span>
              </p>
              <div className="flex justify-center mt-2 gap-8">
                <button>
                  <img
                    src="https://img.icons8.com/color/48/google-logo.png"
                    onClick={handleSignIn}
                  />
                </button>
                <button>
                  <img src="https://img.icons8.com/color/48/facebook.png" />
                </button>
                <button>
                  <img src="https://img.icons8.com/color/48/twitterx--v1.png" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInOut;
