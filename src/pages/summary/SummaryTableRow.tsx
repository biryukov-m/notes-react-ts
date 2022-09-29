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
  <tr className="bg-middle-green hover:bg-persian-orange">
    <td className="flex flex-col items-center justify-center px-3 py-1.5">
      <span className="flex flex-col items-center justify-center bg-hookers-green text-forest text-lg rounded-full w-8 h-8">
        <i className={icon}></i>
      </span>
    </td>
    <th className="px-1 py-1.5 pl-0 text-left">{name}</th>
    <td className="p-2 text-center">{active}</td>
    <td className="p-2 text-center">{archived}</td>
  </tr>
);
