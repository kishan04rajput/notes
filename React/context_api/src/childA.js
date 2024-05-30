import { ChildB } from "./childB";

export const ChildA = () => {
  return (
    <div>
      This is child A!
      <ChildB />
    </div>
  );
};
