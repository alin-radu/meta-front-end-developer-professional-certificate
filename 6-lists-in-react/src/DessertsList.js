const CALORIES_LIMIT = 500;

function DessertsList(props) {
  const { data } = props;

  const filteredArray = data.filter((item) => item.calories <= CALORIES_LIMIT);
  const sortedArray = filteredArray.sort((a, b) => a.calories - b.calories);
  console.log("sortedArray -> ", sortedArray);

  const dessertList = sortedArray.map((item) => <li key={item.createdAt}>{`${item.name} - ${item.calories} cal`}</li>)

  return (
    <div>
    <ul>
      {dessertList}
    </ul>
  </div>)
}

export default DessertsList;
