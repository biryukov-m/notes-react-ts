import React from "react";

type Props = {
  children: any;
};

const Table: React.FC<Props> = ({ children }) => (
  <section>
    <table className="w-full border-collapse border-0 text-base">
      {children}
    </table>
  </section>
);

export default Table;
