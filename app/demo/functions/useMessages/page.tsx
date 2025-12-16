import { msg, useMessages } from "gt-next"

const messages = [
  {
    key: 'greeting-1',
    displayText: msg('Hello, world!'),
  },
  {
    key: 'greeting-2',
    displayText: msg('How are you?'),
  },
  {
    key: 'goodbye-1',
    displayText: msg('Goodbye, world!'),
  },
  {
    key: 'goodbye-2',
    displayText: msg('See you later!'),
  },
]


export default function Page() {
  const cb = useMessages();
  return (
    <div>
      <h1>The useMessages Hook</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.key}>{cb(message.displayText)}</li>
        ))}
      </ul>
    </div>
  )
}