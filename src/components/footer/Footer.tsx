import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  return (
    <>
      <div className="flex justify-center bg-sky-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-m mb-4'>Projeto realizado por: Lucas Camargo</p>
          <div className='flex gap-3 mb-4'>
            <a href="https://www.linkedin.com/in/lucas-lima-de-camargo/" className="hover:underline" target="_blank"><LinkedinLogo size={37} weight='light' /></a>
            <a href='https://github.com/camargollucas' className="hover:underline" target="_blank"><GithubLogo size={37} weight='light' /></a>
            <a href="mailto:camargolimalucas@gmail.com" className="hover:underline" target="_blank"><Envelope size={37} weight='light' /></a>
          </div>
          <p className='text-sm font-light mb-1'>Farmácia Paracetamal | 2024 &copy; </p>
        </div>
      </div>
    </>
  )
}

export default Footer