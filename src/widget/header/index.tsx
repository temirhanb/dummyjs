import React from "react";
import {HeaderContainer, HeaderLabel} from "./style";

export const Header: React.FC = () => {

  return (
    <header style={HeaderContainer}>
      <h1 style={HeaderLabel}>
        Dummy JS
      </h1>
    </header>
  );
};