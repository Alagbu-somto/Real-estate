import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/images/house.jpg";
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    area,
    rooms,
    title,
    baths,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`}>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="3"
      paddingTop="0"
      justifyContent="center"
      cursor="pointer"
      textAlign="center"
    >
      <Box border="1px" borderColor="#32746d " bg="white" paddingBottom="3">
        <Box w="full">
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            alt="house"
            width={400}
            height={260}
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="space-evenly">
            {rooms}
            <FaBed />|{baths}
            <FaBath />|{millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize="x" fontWeight="normal">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Box>
    </Flex>
  </Link>
);

export default Property;
