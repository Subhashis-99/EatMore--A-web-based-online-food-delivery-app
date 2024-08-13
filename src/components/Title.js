import { Restaurant_Title_URL } from "../../config";
const Title = () => {
    return (
      <a href="/">
        <img
          className="h-24 rounded-full"
          src= {Restaurant_Title_URL}
        ></img>
      </a>
    );
};
export default Title;