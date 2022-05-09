import { useContext } from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { dataAttr } from "@chakra-ui/utils";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="5">
      <Icon
        as={FaArrowCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="5">
      <Icon
        as={FaArrowCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data.map((item) => (
      <Box width="910px" key={item.id} itemId={item.id} overflow="hidden" p="1">
        <Image
          alt="proprty"
          placeholder="blur"
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={500}
          sizes="(maxWidth:500px)100px,(maxWidth:1023px)400px,1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
