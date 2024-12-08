import { ReactNode, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>children</Text>;
  const summary = children.slice(0, 300) + "...";
  return (
    <div>
      {expanded ? children : summary}{" "}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
