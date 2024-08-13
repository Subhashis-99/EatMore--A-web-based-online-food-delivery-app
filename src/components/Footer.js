import { useContext } from "react";
import userContext from "../utils/userContext";

export const Footer = () => {
  const year = new Date().getFullYear();
  const { user } = useContext(userContext);

  return (
    <>
      <div
        className="bg-white shadow-inner m-2 p-2 text-center"
        data-testid="footer"
      >
        Created by 💌{" "}
        <a
          href="https://www.linkedin.com/in/subhashis-praharaj/"
          title="Subhashis's Linkedin Profile"
          rel=""
          className="font-bold text-orange-600"
        >
          {user.name}
        </a>{" "}
        <a
          href="https://github.com/chetannada/Namaste-React"
          title="Eat Food Github Repository"
          rel=""
          className="font-bold text-green-500"
        >
          ©️{year}
        </a>
      </div>
    </>
  );
};
