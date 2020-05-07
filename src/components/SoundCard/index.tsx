import React, { FC, useState } from "react";
import useSound from "use-sound";
import styled from "styled-components";
import { Card } from "antd";

interface SoundCardProps {
  combo: any;
}

const FavoriteButton = styled.span`
  display: none;
  &:hover {
    opacity: 1;
  }
`;

const SoundCard = styled(Card)`
  width: 8rem;
  height: 10rem;
  cursor: pointer;
  border: 1px solid #dadada;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  /* EMOJIS */
  font-size: 40px;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  &:hover ${FavoriteButton} {
    display: block;
  }
`;

const SoundCardComponent: FC<SoundCardProps> = ({ combo }) => {
  const [play, { isPlaying, stop }] = useSound(combo.sound);

  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <SoundCard
      onClick={() => {
        return isPlaying ? stop() : play();
      }}
    >
      {combo.image}
      <FavoriteButton onClick={handleClick}>❤️</FavoriteButton>
    </SoundCard>
  );
};

export default SoundCardComponent;
