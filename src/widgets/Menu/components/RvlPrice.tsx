import React from "react";
import styled from "styled-components";
import { RivalRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  rvlPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const RvlPrice: React.FC<Props> = ({ rvlPriceUsd }) => {
  return rvlPriceUsd ? (
    <PriceLink
      href="https://poocoin.app/tokens/0x7EaeE60040135F20f508A393ca400dEd339d654e"
      target="_blank"
    >
      <RivalRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${rvlPriceUsd.toFixed(8)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(RvlPrice);
