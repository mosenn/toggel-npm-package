import { useState } from "react";

const Toggel = () => {
  const [active, setActive] = useState(false);
  return [active, setActive];
};

export default Toggel;
