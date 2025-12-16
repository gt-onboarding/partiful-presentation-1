
const messages = [
  {
    key: 'greeting-1',
    displayText: 'Hello, world!',
  },
  {
    key: 'greeting-2',
    displayText: 'How are you?',
  },
  {
    key: 'goodbye-1',
    displayText: 'Goodbye, world!',
  },
  {
    key: 'goodbye-2',
    displayText: 'See you later!',
  },
]


export default function Page() {
  return (
    <div>
      <h1>The useMessages Hook</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.key}>{message.displayText}</li>
        ))}
      </ul>
    </div>
  )
}