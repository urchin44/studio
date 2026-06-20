import React, { type ReactElement } from "react";
import "./Tab.scss";

type Props = {
  title: string;
  variant: string;
  children: ReactElement<any>;
};

const Tab: React.FC<Props> = ({ children }) => {
  return <div className="tab">{children}</div>;
};

export default Tab;
