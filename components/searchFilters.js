import { useEffect, useState } from "react";
import {
  Flex,
  Spinner,
  Select,
  Box,
  Text,
  Button,
  Input,
  Icon,
  filter,
  useWhyDidYouUpdate,
} from "@chakra-ui/react";
import { router } from "next/router";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filter, setFilter] = useState(filterData);
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);
    values.forEach((items) => {
      if (items.value && filterValues?.[items.name]) {
        query[items.name] = items.value;
      }
    });

    router.push({ pathname: path, query });
  };
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filter.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((items) => (
              <option value={items.value} key={items.value}>
                {items.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};
export default SearchFilters;
