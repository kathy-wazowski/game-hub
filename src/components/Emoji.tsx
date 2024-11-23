import React from "react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Normal", boxSize: 6 },
    4: { src: thumbsUp, alt: "recommended", boxSize: 6 },
    5: { src: bullsEye, alt: "Exceptional", boxSize: 8 },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
