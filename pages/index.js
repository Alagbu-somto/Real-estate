import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/property";
import forReantImg from "../assets/images/1652857468144.jpg";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageUrl,
}) => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      m="10"
      bg="#104f55"
    >
      <Box p="5" marginRight="5" color="white">
        <Text color="gray.500" fontSize="sm" fontWeight="medium" paddingTop="5">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold" paddingTop="5">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="5" paddingBottom="5">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize="xl" color="black">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
      <Image src={imageUrl} width={400} height={500} alt="banner" />
    </Flex>
  );
};

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Home"
        title2="For Everyone"
        desc1="Explore Apartments, villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl={forReantImg}
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy, Own"
        title2="Your Dream Home"
        desc1="Explore Apartments, villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {propertyForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}
export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
