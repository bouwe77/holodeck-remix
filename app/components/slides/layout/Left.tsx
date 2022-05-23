const Left = ({ children }) => {
  return (
    <div className="container">
      <div className="left">
        <div />
        <div className="left-content">
          <div>{children[0]}</div>
          <div>{children[1]}</div>
        </div>
      </div>
    </div>
  )
}

export default Left
