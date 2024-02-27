// eslint-disable-next-line react/prop-types
const Filter = ({ showFinishedTasks, setShowFinishedTasks }) => {
  const checkAndGo = (typeToSet) => {
    if (typeToSet == showFinishedTasks) {
      setShowFinishedTasks(null);
    } else {
      setShowFinishedTasks(typeToSet);
    }
  };
  return (
    <div className="filter_div">
      <div
        onClick={() => checkAndGo(true)}
        className={`finished_div ${showFinishedTasks && "finished_div_active"}`}
      >
        <p>Finished</p>
      </div>
      <div
        onClick={() => checkAndGo(false)}
        className={`unfinished_div ${
          showFinishedTasks === false && "unfinished_div_active"
        }`}
      >
        <p>Unfinished</p>
      </div>
    </div>
  );
};

export default Filter;
