import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px"
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "10px"
  };

  return (
    <div style={style}>
      {children && <img src={children} alt="Profile picture" style={imgStyle} />}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>

      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "hassen kaffel",
  bio: "hello i'm",
  profession: "Unknown profession"
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired
};

export default Profile;