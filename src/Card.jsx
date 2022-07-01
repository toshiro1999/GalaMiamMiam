import styled from 'styled-components';
import Rating from './Rating';

const CardImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

const CardWrapper = styled.div`
  
  grid-gap: 20px;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  height: 400px;
  width: 300px;
  margin-bottom: 60px;
  background-color: pink;
  border-radius: 20px;
  transition: 200ms;
  box-shadow: 5px 3px 20px grey;
  // max-height: 380px;
  &:hover {
    cursor: pointer;
    box-shadow: 13px 5px 5px grey;
`;

const CardTitle = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const CardText = styled.div`
  padding: 15px;
  flex-direction: column;
  line-height: 30px;
`;

const RatingContainer = styled.div`
  line-height: 40px;
`;

function Card({ picture, title, grade, price }) {
  return (
    <CardWrapper>
      <CardImg src={picture} />
      <CardText>
        <CardTitle> {title} </CardTitle>
        <RatingContainer>
          <Rating rate={grade} isStatic width={150} />
          <Rating rate={price} isStar={false} isStatic width={150} />
        </RatingContainer>
      </CardText>
    </CardWrapper>
  );
}

export default Card;
