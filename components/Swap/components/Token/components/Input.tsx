import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Input as CInput,
  InputProps,
} from "@chakra-ui/react";

export const Input = () => {
  return (
    <Box {...wrapperStyles}>
      <Box {...buttonWrapperStyles}>
        <Button {...buttonStyles}>50%</Button>
        <Button {...buttonStyles}>MAX</Button>
      </Box>
      <CInput {...inputStyles} placeholder={"0"} />
    </Box>
  );
};

const buttonStyles: ButtonProps = {
  bg: "none",
  p: 0,
  m: 0,
  border: "none",
  fontWeight: 500,
  fontSize: "14px !important",
  color: "#787878",
};

const wrapperStyles: BoxProps = {
  mt: "16px",
  position: "relative",
};

const buttonWrapperStyles: BoxProps = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "12px",
  zIndex: "1",
  display: "grid",
  gridTemplateColumns: "repeat(2,max-content)",
  gap: "9px",
};

const inputStyles: InputProps = {
  background: "#EDEDED",
  borderRadius: "8px 8px 0px 0px",
  fontSize: "20px",
  p: "8px 12px",
};
