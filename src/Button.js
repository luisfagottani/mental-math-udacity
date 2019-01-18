import React from "react";

const Button = ({
  onClickEvent,
  trueOrFalse,
  clickEvent,
  as: ElementType,
  children,
  link,
  ...rest
}) => {

  return (
    <ElementType
      type="submit"
	  onClick={() => clickEvent(trueOrFalse)}
      {...rest}
    >
      <span>{children}</span>
    </ElementType>
  );
};

Button.defaultProps = {
  as: "button"
};

Button.displayName = "Button";

export default Button;
