import {
  List,
  ListItem,
  Image,
  HStack,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && <GenreSkeleton skeletons={skeletons} />}
        {data.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                borderRadius={8}
                boxSize="40px"
                src={getCroppedImageURL(genre.image_background)}
                objectFit="cover"
              />
              <Button
                onClick={() => onSelect(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
