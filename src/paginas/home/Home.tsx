import { Link } from 'react-router-dom';
import homeLogo from '../../assets/home.png'
import './Home.css';

function Home() {
  return (
    <>
      <div className="bg-sky-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Bom dia/tarde/noite!</h2>
            <p className='text-xl'>O que gostaria de fazer hoje?</p>
            <div className='flex gap-4'>
              <Link to='/produtos' className='hover:underline'><button className='rounded hover:bg-gray-200 bg-white text-green-800 py-2 px-5'>Ver produtos</button></Link>
              <Link to='/categorias' className='hover:underline'><button className='rounded hover:bg-gray-200 bg-white text-green-800 py-2 px-5'>Ver categorias</button></Link>
            </div>
          </div>
          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;