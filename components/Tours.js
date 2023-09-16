import Card from './Card';

function Tours({tours, removeTour}) {
  return (
    <div className='Container'>
      <div>
        <h2 className='Cards'>Plan with Love</h2>
     </div>
     <div>
      {
       tours.map( (tour) => {
      return <Card key={tour.id} {...tour}removeTour={removeTour }></Card>
       })
       
       }
     </div>
    </div>
  );
}

export default Tours;




