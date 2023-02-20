import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName }) => {
  return (
    <div style={{ textAlign: "center" }}>
      
      <h2 style={{ color: "orange" }}>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <img src="/image/ola2.jpg" alt="profile" style={{ height: 150, width: 150 }} />
      <br />
      <button style={{ color: "orange" }} onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Akinbuwa emmanuel olayimika ",
  bio: "i'm the upcoming greatest developer in the universe",
  profession: "freelance full-stack software developer ",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;