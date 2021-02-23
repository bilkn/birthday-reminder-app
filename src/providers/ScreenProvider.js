import React, { useState } from 'react';
import ScreenContext from "../context/ScreenContext/ScreenContext"

function ScreenProvider(props) {
  const [isScreenLarge, setIsScreenLarge] = useState(false);

  return (
    <ScreenContext.Provider
      value={[isScreenLarge, setIsScreenLarge]}
      {...props}
    />
  );
}

export default ScreenProvider;

