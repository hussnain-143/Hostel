import { Menu } from 'lucide-react'

const Header = ( {isOpen, setIsOpen} ) => {
    
  return (
    <>
        <main className='bg-gradient-to-r from-cyan-600 to-cyan-800 h-full flex items-center justify-between px-6 shadow-md border-b border-cyan-400/30'>
            <div className='flex items-center gap-4'>
                <button className=' cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={24} className='text-white'/>
                </button>
                <h2>
                    <span className='text-white text-2xl font-bold'> Hostel Management System</span>
                </h2>
                
            </div>
            <button className='ml-auto cursor-pointer text-white bg-cyan-700/70 hover:bg-cyan-700/90 px-4 py-2 rounded-md shadow-md transition-all'>
                    Logout
            </button>
        </main>
    </>
  )
}

export default Header