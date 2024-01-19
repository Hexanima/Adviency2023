import { ReactNode } from "react";

function Snowflakes() {
  const snowflakes: ReactNode[] = [];

  for (let i = 1; i < 12; i++) {
    snowflakes.push(
      <div className="snowflake" key={`snowflake${i}`}>
        <div className="inner">❅</div>
      </div>
    );
  }

  return (
    <div className="snowflakes" aria-hidden="true">
      {snowflakes}
    </div>
  );
}

export default Snowflakes;
