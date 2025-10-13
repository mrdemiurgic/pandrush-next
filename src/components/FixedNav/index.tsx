import React, { useRef, useLayoutEffect } from "react";
import Nav from "../Nav";

import { clamp, linearInterpolate, Params } from "../../utils/layout";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import colors from "../../styles/colors";
import spacing from "../../styles/spacing";

import * as S from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const FixedNav = () => {
  const fixedNavRef = useRef<HTMLDivElement>(null);

  const { width, height } = useWindowDimensions();

  useLayoutEffect(() => {
    const scrollHandler = () => {
      let raf: number | undefined;

      if (raf !== undefined) {
        window.cancelAnimationFrame(raf);
      }

      raf = window.requestAnimationFrame(() => {
        if (height > 0 && fixedNavRef.current !== null) {
          const scrollY = window.scrollY;
          const newY = clamp(scrollY - height + spacing.xxl, 0, spacing.xl);
          const newOpacity = linearInterpolate(newY, {
            inputRange: [0, spacing.xl],
            outputRange: [0, 1],
          } as Params);
          fixedNavRef.current.style.transform = `translateY(${newY}px)`;
          fixedNavRef.current.style.opacity = newOpacity.toString();
        }
      });
    };

    if (width > 600) {
      window.addEventListener("scroll", scrollHandler);
      scrollHandler();
    } else {
      if (fixedNavRef.current !== null) {
        fixedNavRef.current.style.transform = `translateY(0px)`;
        fixedNavRef.current.style.opacity = "0";
      }
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [height, width]);

  return (
    <S.Container ref={fixedNavRef}>
      <S.InnerContainer>
        <S.Logo src="/images/pandrush.svg" />
        <S.NavContainer>
          <Nav
            includeHome={true}
            textColor={colors.richBlack}
            separatorColor={colors.babyPowder}
            textHoverColor={colors.babyPowder}
          />
        </S.NavContainer>
        <S.HamburgerIcon icon={faBars} />
      </S.InnerContainer>
    </S.Container>
  );
};

export default FixedNav;
