import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Divider,
  Image,
  ImageProps,
} from "@chakra-ui/react";
import { FC } from "react";

export type DivideProps = {
  action: () => void;
} & BoxProps;

export const Divide: FC<DivideProps> = ({ action, ...rest }) => {
  return (
    <Box {...wrapperStyles} {...rest}>
      <Divider />
      <Button {...buttonStyles} onClick={action}>
        <Image {...imageStyles} />
      </Button>
      <Divider />
    </Box>
  );
};

const imageStyles: ImageProps = {
  w: "44px",
  h: "44px",
  src: "./img/Arrows.svg",
};

const wrapperStyles: BoxProps = {
  display: "grid",
  gridTemplateColumns: "1fr max-content 1fr",
  alignItems: "center",
};

const buttonStyles: ButtonProps = {
  bg: "none",
  border: "none",
  _hover: {
    bg: "none",
  },
  _active: {
    bg: "none",
  },
};
