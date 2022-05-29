const partiallyApply = (Component, partialsProps) => {
  return (props) => <Component {...partialsProps} {...props} />;
};

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

export const DangerButton = partiallyApply(Button, { color: "red" });
export const BigSuccessButton = partiallyApply(Button, {
  color: "green",
  size: "large",
});
