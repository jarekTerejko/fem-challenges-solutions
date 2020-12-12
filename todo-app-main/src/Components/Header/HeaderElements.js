import styled from "styled-components";
import DesktopBgLight from "../../images/bg-desktop-light.jpg";
import DesktopBgDark from "../../images/bg-desktop-dark.jpg";

export const HeaderWrapper = styled.header`
padding-top: 7.6rem;
  background-image: ${({ light }) =>
    !light ? `url(${DesktopBgLight})` : `url(${DesktopBgDark})`};
  min-height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderTitleH1 = styled.h1`
  text-transform: uppercase;
  color: #fff;
  font-size: 3.6rem;
  letter-spacing: 5px;
`;
