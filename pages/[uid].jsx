import React from "react";

const UserDetails = (props) => {
  return <h1>{props.name}</h1>;
};

export default UserDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const userID = params.uid;

  return {
    props: {
      name: "user-" + userID,
    },
  };
}
