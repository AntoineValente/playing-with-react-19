import { WithReactCompiler } from "./WithReactCompiler";
import { WithoutReactCompiler } from "./WithoutReactCompiler";

function App() {
  return (
    <div className="w-full h-screen flex divide-x-2">
      <WithoutReactCompiler />
      <WithReactCompiler />
    </div>
  );
}

export default App;
