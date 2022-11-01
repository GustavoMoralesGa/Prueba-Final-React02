import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <div>
      <h1>404 - Pizza no encontrada</h1>
      <div>
        <img src="https://cdn2.vectorstock.com/i/1000x1000/31/46/sad-crying-slice-pizza-cartoon-vector-28463146.jpg" alt="" />
      </div>
    <Link to='/'>
      <Button>Volver</Button>
    </Link>
    </div>
  )
}

export default NotFound;