export function Tabs(props) {
  const { todos, activeTab, setActiveTab } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numofTodos =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button
            key={tabIndex}
            className={
              "tab-button " + (tab === activeTab ? " tab-selected" : " ")
            }
            onClick={() => setActiveTab(tab)}
          >
            <h4>
              {tab}
              <span>{" (" + numofTodos + ")"}</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
