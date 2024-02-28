import { Link, useNavigate } from 'react-router-dom';
import { HouseSimple, PlusSquare, List, Pill } from '@phosphor-icons/react';
import './Nabvar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full bg-sky-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='logo nav-item gap-2'>
            <Pill size={28}></Pill>
            <div className='text-2xl font-bold uppercase'>Farmácia Paracetamal</div>
          </div>

          <div className='nav-links flex gap-7'>
            <div className='nav-item gap-2'>
              <HouseSimple size={18}></HouseSimple>
              <Link to='/home' className='hover:underline'>Home</Link>
            </div>

            <div className='nav-item gap-2' >
              <List size={18}></List>
              <div className='hover:underline'>Produtos</div>
            </div>

            <div className='nav-item gap-2'>
              <List size={18}></List>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
            </div>

            <div className='nav-item gap-2'>
              <PlusSquare size={18}></PlusSquare>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;