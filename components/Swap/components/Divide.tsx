import { Box, BoxProps, Divider, Image, ImageProps } from "@chakra-ui/react";
import { FC } from "react";

export const Divide: FC<BoxProps> = ({ ...rest }) => {
  return (
    <Box {...wrapperStyles} {...rest}>
      <Divider />
      <Image {...imageStyles} />
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
