import React from "react";

const UserProfilePage = (props) => {
  return <h1>{props.name}</h1>;
};

export async function getServerSideProps(context) {
  return {
    props: { name: "Anirudh" },
  };
}

export default UserProfilePage;
