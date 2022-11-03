import React from "react";

function TimerConponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  setTime(time);
  return (
    <div>
      <h3>{time}초</h3>
      <button>1씩 올려주세요</button>
    </div>
  );
}

export default TimerConponent;
