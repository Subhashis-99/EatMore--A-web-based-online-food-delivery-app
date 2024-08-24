import React, { useState, useContext } from "react";
import {userData} from "../utils/userContext";

const Section = ({ title, description, isVisible, setIsVisible, sectionName }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible("")}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(sectionName)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("team");
  const {user} = useContext(userData);

  return (
    <div>
      <h1 className="text-3xl p-2 font-bold">Instamart</h1>
      <h2>{user?.name}</h2>
      <h2>{user?.email}</h2>
      <Section
        title="About Instamart"
        description="On the other hand, we denounce with righteous indignation and dislike men ..."
        isVisible={visibleSection === "about"}
        setIsVisible={setIsVisibleSection}
        sectionName="about"
      />
      <Section
        title="Team Instamart"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ..."
        isVisible={visibleSection === "team"}
        setIsVisible={setIsVisibleSection}
        sectionName="team"
      />
      <Section
        title="Careers at Instamart"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ..."
        isVisible={visibleSection === "career"}
        setIsVisible={setIsVisibleSection}
        sectionName="career"
      />
    </div>
  );
};

export default Instamart;
