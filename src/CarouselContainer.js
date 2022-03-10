import Carousel from 'react-material-ui-carousel';
import Item from "./Item";

const CarouselContainer = () => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];
  return (
    <Carousel animation="slide" className="carousel" duration={700}>
      {items.map((item, i) => (
        <Item 
          key={i} 
          name={item.name} 
          description={item.description} 

          />
      ))}
    </Carousel>
  );
};

export default CarouselContainer;
