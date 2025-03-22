function Url({ disabled, onClick, children }) {
  return (
    <p className="link">
      <a
        onClick={!disabled ? onClick : undefined}
        className={
          !disabled ? undefined : "cursor-not-allowed opacity-50"
        }
      >
        {children}
      </a>
    </p>
  )
}

export default Url