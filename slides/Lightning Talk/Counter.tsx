import { useState } from 'react'

const containerStyle = {
  margin: '30px',
}

const buttonStyle = {
  border: 'none',
  width: '120px',
  height: '120px',
  fontSize: '5vh',
  backgroundColor: 'cornflowerblue',
  borderRadius: '5%',
}

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => setCount((count) => count + 1)}>
        {count}
      </button>
    </div>
  )
}

export default Counter
