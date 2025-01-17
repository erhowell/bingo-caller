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
    borderWidth: "2px",
  },
  variants: {
    visual: {
      primary: {
        color: "bingo.black",
        bg: "bingo.lightBlue",
        _hover: {
          bg: "bingo.black",
          color: "bingo.lightBlue",
          borderColor: "bingo.lightBlue",
        },
      },
      secondary: {
        bg: "bingo.black",
        color: "bingo.lightBlue",
        borderColor: "bingo.lightBlue",
        _hover: {
          color: "bingo.black",
          bg: "bingo.lightBlue",
        },
      },
      outline: {
        bg: "transparent",
        color: "bingo.lightBlue",
        borderWidth: "2px",
        borderColor: "bingo.lightBlue",
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
