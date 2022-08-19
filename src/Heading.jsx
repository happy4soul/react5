import React from "react";

var print = "Morning";
var currentDate = new Date();
var time = currentDate.getHours();
var style = {
  color: "red",
  paddingLeft: "2rem"
};

if (time > 12 && time < 18) {
  print = "Afternoon";
  style.color = "green";
} else if (time > 18 && time < 24) {
  print = "Night";
  style.color = "purple";
}

function Heading() {
  return (
    <div>
      <h1 style={style} className="heading">
        {" "}
        Good {print}
      </h1>
    </div>
  );
}

export default Heading;
