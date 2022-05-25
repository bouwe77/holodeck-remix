import { useState } from 'react'

const containerStyle = { display: 'flex', margin: '120px' }

const buttonStyle = {
  border: 'none',
  width: '150px',
  height: '150px',
  fontSize: '6em',
  backgroundColor: 'cornflowerblue',
  borderRadius: '5%',
}

const counterStyle = {
  fontSize: '8em',
  margin: '0px 30px',
  width: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => setCount((count) => count - 1)}>
        -
      </button>
      <span style={counterStyle}>{count}</span>
      <button style={buttonStyle} onClick={() => setCount((count) => count + 1)}>
        +
      </button>
    </div>
  )
}

export default Counter
