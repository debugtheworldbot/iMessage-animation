import { useState } from "react";
import "./App.css";

function App() {
  const [msgs, setMsgs] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  return (
    <div className="sm:mx-20 border p-4 rounded text-xl h-screen overflow-hidden">
      <ul className="messages text-right text-white h-full overflow-y-scroll ">
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
          setSending(true);
          e.preventDefault();

          changeY();
          const value = (e.target as any)[0].value;
          if (!value) return;

          setMsgs([...msgs, value]);
          setTimeout(() => {
            setSending(false);
          }, 500);
        }}
        className={`border mt-4 flex left-4 right-4 fixed bottom-2 rounded-full ${
          sending && "-z-10"
        }`}
      >
        <input className="w-full" name="message" placeholder="Type a message" />
        <button className="border bg-blue-400 px-4 rounded-full" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

const changeY = () => {
  const eles = document.getElementsByTagName("li");
  const ele = eles[eles.length - 1];
  const windowHeight = window.innerHeight;
  const height = ele?.getBoundingClientRect().top || 0;
  const result = Math.max(windowHeight - height - 40, 0);
  console.log({ height, windowHeight, result });
  ele?.scrollIntoView({ behavior: "smooth" });
  document.documentElement.style.setProperty("--y", `${result}px`);
};

export default App;
