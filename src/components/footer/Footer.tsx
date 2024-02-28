import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  return (
    <>
      <div className="flex justify-center bg-sky-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-m mb-4'>Projeto realizado por: Lucas Camargo</p>
          <div className='flex gap-3 mb-4'>
            <a href='https://www.linkedin.com/in/lucas-lima-de-camargo/' target='_blank' className="text-white hover:text-gray-300">
              <LinkedinLogo size={36} weight='light' />
            </a>
            <a href='mailto:camargolimalucas@gmail.com' target='_blank' className="text-white hover:text-gray-300">
              <Envelope size={36} weight='light' />
            </a>
            <a href='https://github.com/camargollucas' target='_blank' className="text-white hover:text-gray-300">
              <GithubLogo size={36} weight='light' /></a>
          </div>
          <p className='text-md font-light mb-3'>Farmácia Paracetamal | 2024 &copy; </p>
          <p className='text-xs font-light mb-1'>* Projeto para fins acadêmicos *</p>
        </div>
      </div>
    </>
  )
}

export default Footer