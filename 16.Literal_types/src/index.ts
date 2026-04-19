// Literal types

type Action = "Start" | "Stop" | "Reset" | "Submit" | "Pause";

function handleAction(action: Action): void {
  console.log(action);
}
handleAction("Start");
handleAction("Submit");
