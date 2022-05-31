import React from "react";
import { ChakraProps, ResponsiveValue } from "@chakra-ui/react";
import { Property } from "csstype";

export type ChakraGradientBorderProps = {
  borderGradient: ResponsiveValue<Property.Background>;
} & ChakraProps;

export const chakraGradientBorder = <P extends object>(
  Component: React.ComponentType<P>
) =>
  class ChakraGradientBorder extends React.Component<
    P & ChakraGradientBorderProps
  > {
    render() {
      const {
        borderGradient,
        borderWidth,
        borderRadius,
        bg = "white",
        ...rest
      } = this.props;
      return (
        <Component
          {...componentStyle}
          bg={bg}
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          _before={{
            ...beforeStyle,
            margin: `-${borderWidth}`,
            bg: borderGradient,
          }}
          {...(rest as P)}
        />
      );
    }
  };

const componentStyle = {
  borderWidth: ".1rem",
  borderRadius: 0,
  bg: "white",
  pos: "relative",
  bgClip: "padding-box",
  borderColor: "transparent",
} as ChakraProps;

const beforeStyle = {
  content: '""',
  pos: "absolute",
  zIndex: "-1",
  borderRadius: "inherit",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as Pick<ChakraProps, "_before">;
