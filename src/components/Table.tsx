import React from "react";

type Props = {
  sectionClass: string;
  children: any;
};

const Table: React.FC<Props> = ({ sectionClass, children }) => (
  <section className={sectionClass}>
    <table>{children}</table>
  </section>
);

export default Table;
