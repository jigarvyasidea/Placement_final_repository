import { Heading, Stack, VStack  , Text, Button, image} from '@chakra-ui/react'
import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
import bg from "../assets/images/bg.png"
import { Image } from '@chakra-ui/react';

function Home() {
  return (
   <section className='home'>
     <div className="contianer">
        <Stack 
        direction={["column", "row"]}
        height="100%"
        justifyContent={["center", "space-between"]}
        alignItems="center"
        spacing={['16', '56']}
        
        >

    {/* vstack it mean varticle stack */ }
    <VStack width={"full"} alignItems={["center", "flex-end"]}>

        <Heading children=" Can Help You To Start Highly Profitable" size={'2xl'} />
        <Text children="Blogging,Affiliate Marketing and YouTube Career" size={'xl'}/>

      <Link to="/courses">
        <Button size={'lg'} colorScheme='yellow'> CLick hear to learn more </Button>
      </Link>

    </VStack>

    <Image boxSize={'md'} src={bg} objectFit="contain " />
    
          
        </Stack>
     </div >
   </section>
  )
}

export default Home