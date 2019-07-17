import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "./UseContextDisplay";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <ComponentF />
      <div>
        User is {user} and channel is {channel}
      </div>
    </div>
  );
}

export default ComponentE;
