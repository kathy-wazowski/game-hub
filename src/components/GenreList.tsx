import {
  List,
  ListItem,
  Image,
  HStack,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGenre, { Genre } from "../hooks/useGenre";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelect, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && <GenreSkeleton skeletons={skeletons} />}
        {data?.results.map((genre) => (
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
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
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
