import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({country}) => {
  const navigate = useNavigate()
//   const {flags,name,population,region,capital}   = country  
//   console.log(flags.png,name.common,population,region,capital);
  const {flags,name,population,region,capital}   = {...country } 
//   console.log(flags,name,population,region,capital);

  function handleMoreDetails(name){
    console.log(name);
    navigate(name)
  }
  
  return (
    <Flex flexDirection={"column"} gap={"20px"} width={"100%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"5px"}> 
        <Box>
            <Image src={flags.png} height={"60"}/>
        </Box>
        <Box width={"86%"} mx={"auto"} lineHeight={"35px"}>
            <Heading>{name.common}</Heading>
            <Text>Population: {population}</Text>
            <Text>Region: {region}</Text>
            <Text>Capital: {capital}</Text>
        </Box>
        <Button width={"100%"} onClick={()=>handleMoreDetails(name.common)}>More details</Button>
    </Flex>
  )
}

export default Card