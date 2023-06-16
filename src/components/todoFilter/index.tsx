import { memo } from "react";
import { FilterType } from "../../App";

type BTNType = {
  value: FilterType;
  text: string;
};

type Props = {
  chnageFilterType: (item: FilterType) => void;
  btns: BTNType[];
};

const TodoFilter = memo(({ chnageFilterType, btns }: Props) => {
  console.log("redner TodoFilter");
  return (
    <section className="flex">
      {btns.map((x) => (
        <button
          key={x.value}
          type="button"
          className="btn flex-1 rounded-none"
          onClick={() => chnageFilterType(x.value)}
        >
          {x.text}
        </button>
      ))}
    </section>
  );
});

export default TodoFilter;
