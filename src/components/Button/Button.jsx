function Button({
  type,
  color = "secondary",
  onClick,
  children,
  variant = "primary",
  raduis,
  display,
  margin,
  font_size,
  className
}) {
  const styles = {
    primary: {
      primary: "bg-primary text-white border-transparent hover:bg-primary/70",
      secondary: "bg-black text-white border-transparent hover:bg-black/70",
      black: "bg-black text-white border-transparent hover:bg-black/70", 
    },

    outline: {
      primary: "bg-white text-primary border-primary hover:bg-primary/10",
      secondary: "bg-white text-black border-black hover:bg-black/10",
      black: "bg-grey text-grey border-black hover:bg-black/10",
    },
  };

  const buttonStyle = styles[variant]?.[color] || styles.primary.primary;
  
  return (
    <button
      className={`border py-1 px-5 ${buttonStyle} ${raduis} ${display} ${margin} ${font_size} ${className}`}
      
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
