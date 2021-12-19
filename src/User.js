import React from "react";

export default function User(props) {
  console.log(props);
  const { name, surname, age, isLoggedIn } = props;
  return (
    <div>
      <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Please login!"}</h1>
    </div>
  );
}
