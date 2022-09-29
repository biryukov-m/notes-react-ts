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
        key={row.name}
      />
    );
  });

  return (
    <div className="max-w-full">
      <caption>
        <header>
          <h2 className="px-7 my-3 text-xl font-normal text-dark-pastel-green text-left">
            Summary
          </h2>
        </header>
      </caption>
      <thead>
        <tr className="bg-forest">
          <td className="p-2 pb-8 pl-4"></td>
          <th className="p-2 pl-0 text-left">Category</th>
          <th className="p-2">Active</th>
          <th className="p-2">Archived</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </div>
  );
};

export default Summary;
