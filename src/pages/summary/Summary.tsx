import React from "react";
import { useSummaryCount } from "../../hooks/useSummaryCount";
import { SummaryTableRow } from "./SummaryTableRow";
// Types
import { SummaryData } from "../../utils/helpers";

const Summary: React.FC = () => {
  const summaryCounted: SummaryData = useSummaryCount();

  const renderedRows = Object.keys(summaryCounted).map((key) => {
    const row = summaryCounted[key];
    return (
      <SummaryTableRow
        selector={row.selector}
        icon={row.icon}
        name={row.name}
        active={row.active}
        archived={row.archived}
      />
    );
  });

  return (
    <>
      <caption>
        <header>
          <h2>Summary</h2>
        </header>
      </caption>
      <thead>
        <tr>
          <td></td>
          <th>Category</th>
          <th>Active</th>
          <th>Archived</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </>
  );
};

export default Summary;
