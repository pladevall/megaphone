import React, { FC, useState } from "react";
import useSound from "use-sound";
import styled from "styled-components";
import { Row } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

interface SoundCardProps {
  combo: any;
}

const FavoriteButton = styled.span`
  margin-left: auto;
  font-size: 12px;
  display: none;
  padding: 0.25rem;
`;

const SoundCard = styled.div`
  width: 8rem;
  height: 10rem;
  cursor: pointer;
  border: 1px solid #dadada;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;

  /* EMOJIS */
  font-size: 40px;
  color: rgba(0, 0, 0, 1);
  &:hover ${FavoriteButton} {
    display: block;
  }
`;


const CardImage = styled.img`

  width: 40px;
  height: 40px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const CardName = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`;

const SoundCardComponent: FC<SoundCardProps> = ({ combo }) => {
  const [play, { isPlaying, stop }] = useSound(combo.sound);

  const [state, setState] = useState(combo);

  const handleClick = () => {
    setState((prev: any) => ({
      ...prev,
      [combo.isFavorite]: !combo.isFavorite,
    }));
  };

  return (
    <SoundCard
      onClick={() => {
        return isPlaying ? stop() : play();
      }}
    >
      <Row style={{ width: "100%", height: "12px" }}>
        &nbsp;
        <FavoriteButton onClick={handleClick}>
          {state === true ? (
            <HeartFilled style={{ fontSize: 14, color: "#E3342F" }} />
          ) : (
            <HeartOutlined style={{ fontSize: 14, color: "#B8C2CC" }} />
          )}
        </FavoriteButton>
      </Row>
      <div style={{textAlign: 'center'}}>
      <CardImage src={combo.image} />
      {combo.image2 && <CardImage src={combo.image2} />}
      </div>

      <CardName>{combo.name}</CardName>
    </SoundCard>
  );
};

export default SoundCardComponent;
