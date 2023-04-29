const Divider = ({ horizontal, vertical, weight, dark }) => {
  return <div
    style={{
      width: horizontal ? "100%" : `${weight}px`,
      height: vertical ? "100%" : `${weight}px`,
      backgroundColor: dark ? "#4B4B4B" : "#CECECE"
    }}
  />
};

export default Divider;