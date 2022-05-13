export const LargeProductListItem = ({ product }) => {
  const { name, price, rating, description } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </>
  );
};
