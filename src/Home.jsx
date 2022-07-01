import styled from 'styled-components';
import Card from './Card';

const PageTitle = styled.h1`
  text-align: center;
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 30px;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-size: 25px;
  @media (min-width: 800px) {
     {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1200px) {
     {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

function Home({ RestaurantListState }) {
  console.log(RestaurantListState);
  return (
    <div>
      <PageTitle>Voici la liste des MiamMiams</PageTitle>
      <CardsContainer>
        {RestaurantListState?.map((restaurant) => (
          <Card
            picture={restaurant.picture}
            title={restaurant.name}
            grade={restaurant.grade}
            price={restaurant.price}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default Home;
