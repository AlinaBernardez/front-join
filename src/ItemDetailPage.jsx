const ItemDetailPage = ({task}) => {

  return (
    <>
      <h1>Task detail</h1>
      <h3>{task.title}</h3>
      <p>{!task.completed ? 'Not completed' : 'Completed'}</p>
    </>
  )
};

export default ItemDetailPage;
