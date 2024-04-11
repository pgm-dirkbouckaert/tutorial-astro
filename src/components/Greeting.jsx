import { useState } from 'preact/hooks';
import '../styles/global.css';

export default function Greeting({ messages }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div className="greeting__wrapper">
      <h3>{greeting}! Thank you for visiting!</h3>
      <button className="greeting__button" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
