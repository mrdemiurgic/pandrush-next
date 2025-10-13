import React, { useState } from "react";

import Video from "./Video";
import { Container } from "./styles";

interface Props {
  /**
   * children of Examples
   */
  children: React.ReactNode;
}

const Examples = ({ children }: Props) => {
  const [selectedId, setSelectedId] = useState<string>("");

  return (
    <Container>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.JSX.Element, {
          selectedId,
          select: setSelectedId,
        })
      )}
    </Container>
  );
};

Examples.Video = Video;
export default Examples;
