export const Button = ({ text, size, color, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "34px" : "8px",
        fontSize: size === "large" ? "32px" : "8px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton = (props) => {
  return <Button color="red" {...props} />;
};

export const SuccessButton = (props) => {
  return <Button color="green" {...props} />;
};
