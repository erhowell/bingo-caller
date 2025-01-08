import { cva, RecipeVariantProps } from "styled-system/css";
import { styled } from "styled-system/jsx";

const buttonStyles = cva({
  base: {
    py: "2",
    px: "4",
    w: "full",
    textStyle: "h5",
    fontWeight: "bold",
    borderRadius: "full",
  },
  variants: {
    visual: {
      primary: {
        bg: "theme.blue",
      },
      secondary: {
        bg: "theme.white",
        color: "theme.blue",
        borderWidth: "2px",
        borderColor: "theme.blue",
      },
      outline: {
        bg: "transparent",
        color: "theme.blue",
        borderWidth: "2px",
        borderColor: "theme.blue",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>;

const Button = styled("button", buttonStyles);

export default Button;
