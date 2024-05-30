import React from "react";
import { FN, LN } from "./App";

export const ChildB = () => {
  return (
    <div>
      This is child B!
      <FN.Consumer>
        {(firstName) => {
          return (
            <div>
              <LN.Consumer>
                {(lastName) => {
                  return (
                    <div>
                      My name is {firstName} {lastName}
                    </div>
                  );
                }}
              </LN.Consumer>
            </div>
          );
        }}
      </FN.Consumer>
    </div>
  );
};
