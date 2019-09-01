import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => (
  <div>
    <p>Welcome traveler! :)</p>
    <Link to="/countries">List all countries</Link>
  </div>
);
