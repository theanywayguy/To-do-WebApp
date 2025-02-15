import tick from "/src/assets/tick.jpg";
import untick from "/src/assets/untick.jpg";
import trash from "/src/assets/trash.jpg";

const Tile = ({ text, id, isComplete, deleteTodo, Switch }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img
          onClick={() => Switch(id)}
          src={isComplete ? tick : untick}
          className="w-7"
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete && "line-through"
          }`}
        >
          {text}{" "}
        </p>
      </div>
      <img onClick={() => deleteTodo(id)} src={trash} className="w-6" />
    </div>
  );
};

export default Tile;
