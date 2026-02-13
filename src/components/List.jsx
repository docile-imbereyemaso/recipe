const List = (props) => {
  const { list, listType } = props;
  return (
    <ul
      className={`pl-4 ${listType} marker:text-gray-600 text-gray-600 space-y-2 text-md`}
    >
      {list.map((item,index) =>
        typeof item ==='object'? <li key={index}>{item.content}</li> : <li key={index}>{item}</li>,
      )}
    </ul>
  );
};

export default List;
