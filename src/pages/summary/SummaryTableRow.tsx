type Props = {
  selector: string;
  icon: string;
  name: string;
  active: number;
  archived: number;
};

export const SummaryTableRow: React.FC<Props> = ({
  selector,
  icon,
  name,
  active,
  archived,
}) => (
  <tr>
    <td className="icon-cell">
      <span className={`icon ${selector}}}`}>
        <i className={icon}></i>
      </span>
    </td>
    <th className="name">{name}</th>
    <td className="active">{active}</td>
    <td className="archived">{archived}</td>
  </tr>
);
