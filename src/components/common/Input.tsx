import { cva, RecipeVariantProps } from "styled-system/css";
import { styled } from "styled-system/jsx";

const inputVariants = cva({
  base: {
    height: "6",
    width: "6",
    borderRadius: "lg",
  },
});

export type InputVariants = RecipeVariantProps<typeof inputVariants>;

const Input = styled("input", inputVariants);

export default Input;
