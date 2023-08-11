"use client"
import Card from '../components/Card';
import { Container, Grid } from '@mui/material';

import  {CarouselSlider}  from "@/components/CarouselSlider";


const Home =  () => {
  
  let todos = [
    {
        title: "Going to the market",
        description: "Going to the market",
        completed: false
    },
    {
        title: "Cooking lunch meal",
        description: "Cooking lunch meal",
        completed: false
    },
  
];

  return (
    <>
      <Container>
        {
          todos.length > 0 ? (
            todos.map((todo, index) => (
              <Grid key={index} marginBottom={4} marginTop={4}>
                <Card todo={todo} key={index} />
              </Grid>
            ))
          ) : (
            <p>
              No saved todos yet!!
            </p>
          )
        }
       <CarouselSlider ></CarouselSlider>
      </Container>

    </>
  )
}
export default Home;