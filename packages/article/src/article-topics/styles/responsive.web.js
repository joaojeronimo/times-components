import { View } from "react-native";
import styled from "styled-components";
import { breakpoints, spacing } from "@times-components/styleguide";

export const TopicsContainer = styled(View)`
  padding-left: ${spacing(2)};
  padding-right: ${spacing(2)};

  @media (min-width: ${breakpoints.medium}px) {
    width: 80.8%;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: ${breakpoints.wide}px) {
    display: none;
  }
`;

export const TopicsMetaContainer = styled(View)`
  display: none;

  @media (min-width: ${breakpoints.wide}px) {
    display: block;
  }
`;
