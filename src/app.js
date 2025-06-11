import { useEffect } from "react";
import { BlockForgeEditor } from "block-forge-editor";
import "block-forge-editor/dist/index.css";

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      id: "0",
      type: "header",
      data: {
        level: 1,
        text: "вввввввввввввввввввввввввв..",
      },
    },
  ],
};

const originalConsoleLog = console.log;

export function App() {
  useEffect(() => {
    console.log("App: component mounted");
  }, []);

  const handleCancel = () => {
    console.log("App: cancel handler called");
    debugger;
  };

  return (
    <>
      <BlockForgeEditor
        id="pisya"
        initialData={DEFAULT_INITIAL_DATA}
        onCancel={handleCancel}
        onSave={(data) => {
          originalConsoleLog("App: save handler called with data:", data);
          alert(JSON.stringify(data));
        }}
        onChange={(data) => {
          console.log("App: change handler called with data:", data);
        }}
      />
    </>
  );
}
