import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  skeletons: number[];
}

const GenreSkeleton = ({ skeletons }: Props) => {
  return (
    <>
      {skeletons.map((skeleton) => (
        <HStack key={skeleton}>
          <Skeleton
            width="40px"
            height="40px"
            borderRadius="6px"
            overflow="hidden"
          ></Skeleton>
          <SkeletonText paddingY="15px" width="100px" />
        </HStack>
      ))}
    </>
  );
};

export default GenreSkeleton;
