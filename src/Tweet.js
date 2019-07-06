import React from "react";

export default function Tweet(props) {
  return (
    <div className="tweet">
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h3>Number of Likes</h3>
    </div>
  );
}
