import { useState } from "react";
import "./App.css";

function App() {
  const [msgs, setMsgs] = useState<string[]>([]);
  return (
    <div className="sm:mx-20 border p-4 rounded text-xl">
      <ul className="messages text-right text-white">
        {msgs.map((msg, i) => (
          <li
            className="ml-auto block w-fit mb-2 bg-blue-400 rounded-full px-4"
            key={i}
          >
            {msg}
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const value = (e.target as any)[0].value;
          if (!value) return;

          setMsgs([...msgs, value]);
        }}
        className="border mt-4 flex"
      >
        <input className="w-full" name="message" placeholder="Type a message" />
        <button className="border bg-blue-400 px-4 rounded-full" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
