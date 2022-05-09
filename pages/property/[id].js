import { Box, Text, Avatar, Spacer, Flex } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollBar from "../../components/ImageScrollBar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    title,
    rooms,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    furnishingStatus,
    amenities,
    purpose,
    photos,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScrollBar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box paddingRight="3">{isVerified && <GoVerified />}</Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar size="sm" src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" w="250px">
        {rooms}
        <FaBed />|{baths}
        <FaBath />|{millify(area)} sqft <BsGridFill />
      </Flex>
      <Box marginTop="2">
        <Text fontSize="lg" fontWeight="bold" marginBottom="2">
          {title}
        </Text>
        <Text lineHeight="2" color="white">
          {description}
        </Text>
      </Box>
      <Flex
        flexWrap="wrap"
        textTransform="uppercase"
        justifyContent="space-between"
      >
        <Flex
          w="400px"
          justifyContent="space-between"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex
          w="400px"
          justifyContent="space-between"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Purpose</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            w="400px"
            justifyContent="space-between"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>FurnishingStatus</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && (
          <>
            <Text fontSize="2xl" fontWeight="black" marginTop="5">
              Amenities
            </Text>
            <Flex flexWrap="wrap">
              {amenities.map((item) =>
                item.amenities.map((amenity) => (
                  <Text
                    fontWeight="bold"
                    color="blue.400"
                    bg="gray.200"
                    fontSize="l"
                    p="2"
                    m="1"
                    borderRadius="5"
                    key={amenity.text}
                  >
                    {amenity.text}
                  </Text>
                ))
              )}{" "}
            </Flex>
          </>
        )}
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
