import data from "./data";
import { useState } from "react";

interface AccordianItem {
  id: number;
  question: string;
  answer: string;
}
const Accordian = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [canMultiSelect, setCanMultiSelect] = useState<boolean>(false);
  const [multiId, setMultiId] = useState<number[]>([]);

  const handleSelection = (id: number): void => {
    if (canMultiSelect) {
      const isCurrentlySelected = multiId.includes(id);
      if (isCurrentlySelected) {
        setMultiId(multiId.filter((currentId) => currentId !== id));
      } else {
        setMultiId([...multiId, id]);
      }
    } else {
      setSelected(selected === id ? null : id);
    }
  };
  return (
    <div className="accordian">
      <div className="wrapper mx-auto my-10 flex max-w-2xl flex-col gap-6 p-8">
        <button
          onClick={() => setCanMultiSelect(!canMultiSelect)}
          className="mx-auto w-[60%] cursor-pointer rounded-xl bg-blue-800 px-4 py-2 text-white hover:bg-blue-600"
        >
          Multi Selection: {canMultiSelect ? "Enabled" : "Disabled"}
        </button>
        {data && data.length > 0
          ? data.map((item: AccordianItem) => (
              <div key={item.id}>
                <div
                  className="title flex cursor-pointer items-center gap-4 rounded-xl border-2 border-blue-300 bg-blue-100 px-4 py-2"
                  onClick={() => handleSelection(item.id)}
                >
                  <h3 className="flex-1">{item.question}</h3>
                  <span className="rounded-md bg-blue-800 px-2 text-white hover:bg-blue-600">
                    +
                  </span>
                </div>
                {(
                  canMultiSelect
                    ? multiId.includes(item.id)
                    : selected === item.id
                ) ? (
                  <div className="answer mx-auto mt-2 w-[90%] rounded-md bg-blue-50 px-6 py-2 text-sm">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Accordian;
