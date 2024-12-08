import React, { useContext, useEffect } from 'react'
import { countryContext } from '../Context/CounrtyContext'
import { Box, Flex, Grid, Input, Select, Text, VStack } from '@chakra-ui/react'
import Card from '../Components/Card'

const Country = () => {
  const {country, setCountry} = useContext(countryContext)
  const url = "https://restcountries.com/v3.1/all"

  const fetchCountry = async ()=>{
    const response = await fetch(`${url}`)
    const data = await response.json()
    setCountry(data)
    // console.log(data)
  }

  useEffect(()=>{fetchCountry()},[])
  return (
    // <Grid lg={[templateColumns="repeat(4,1fr)", gap="8"]}>
    <VStack width={"100%"}>
        <Box justifyContent={"space-around"}>
            <Box>
                <span>Sort by Population</span>
                <select>                    
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </Box>
            <Flex>
                <Text>Filter By Region</Text>
                <Input placeholder='Enter Region Name...'/>
            </Flex>
        </Box>
        <Box>        
            <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(4,1fr)"]} gap={[0,4,8]}>
                {
                    country.map((ele,index)=> <Card key={index} country= {ele}/>)
                    // country.map((ele,index)=> console.log(ele.name))

                }
            </Grid>
        </Box>
    </VStack>

  )
}

export default Country