import styled from 'styled-components';
import { useState } from 'react';
import EmptyStar from './Images/EmptyStar.png';
import FullStar from './Images/FullStar.png';
import EmptyEuro from './Images/EmptyEuro.png';
import FullEuro from './Images/FullEuro.png';

export const starsList = [1, 2, 3, 4, 5];

const StarsContainer = styled.div`
  display: flex;
  width: ${(props) => props.width}px;
`;

const IconeContainer = styled.img`
  width: 100%;
`;

const star = (selected) => (
  <div>
    {selected ? (
      <IconeContainer src={FullStar} />
    ) : (
      <IconeContainer src={EmptyStar} />
    )}
  </div>
);

const euro = (selected) => (
  <div>
    {selected ? (
      <IconeContainer src={FullEuro} />
    ) : (
      <IconeContainer src={EmptyEuro} />
    )}
  </div>
);

function Rating({
  rate,
  setRate = () => {},
  isStar = true,
  isStatic = false,
  width = 200,
}) {
  const [localRate, setlocalRate] = useState(rate);
  return (
    <StarsContainer width={width}>
      {starsList.map((elt) => (
        <div
          onMouseOver={() => !isStatic && setlocalRate(elt)}
          onMouseLeave={() => !isStatic && setlocalRate(rate)}
          onClick={() => !isStatic && setRate(elt)}
        >
          {isStar ? star(localRate >= elt) : euro(localRate >= elt)}
        </div>
      ))}
    </StarsContainer>
  );
}

export default Rating;
