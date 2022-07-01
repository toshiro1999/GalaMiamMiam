function Rating({ rate, setRate, ID }) {
  const [localRate, setlocalRate] = useState(rate);
  return (
    <StarsContainer>
      {starsList.map((elt) => (
        <div
          onMouseOver={() => setlocalRate(elt)}
          onMouseLeave={() => setlocalRate(rate)}
          onClick={() => setRate(elt)}
        >
          {ID ? star(localRate >= elt) : euro(localRate >= elt)}
        </div>
      ))}
    </StarsContainer>
  );
}
