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

export function App() {
  useEffect(() => {
    console.log("App: component mounted");
  }, []);

  return (
    <>
      <BlockForgeEditor
        id="pisya"
        initialData={DEFAULT_INITIAL_DATA}
        onCancel={() => {
          console.log("App: cancel handler called");
        }}
        onSave={(data) => {
          console.log("App: save handler called with data:", data);
        }}
        onChange={(data) => {
          console.log("App: change handler called with data:", data);
        }}
      />
    </>
  );
}
