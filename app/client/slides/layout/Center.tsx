const Center = ({ children }) => {
  return (
    <div className="container">
      <div className="center-horizontally-vertically">
        <div className="center-content">{children}</div>
      </div>
    </div>
  )
}

export default Center
