import { useState } from 'react'
import { Link } from 'react-router-dom'
export function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="w-full bg-[#111] py-2 px-10 border-b-stone-500">
                <div className="flex items-center text-white">
                    <div>
                        <a href="/">
                            <img className="w-20" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt50870b13992cdf47/63b0d7d089f85210f400107e/val-logo-small.png?&height=75&disable=upscale" alt="icon" />
                        </a>
                    </div>
                    <div className="mx-10 flex gap-x-5">
                        <div className="py-3">
                            <a onClick={() => setIsOpen((prev) => !prev)} className="px-6 py-1 cursor-pointer select-none rounded uppercase font-oswald font-semibold hover:bg-zinc-800">Game Info 
                                { !isOpen ? ( <i class="fas fa-sort-up mx-1 duration-200"></i> ) : ( <i class="fas fa-sort-up mx-1 rotate-180 duration-200"></i>) }
                            </a>
                            {isOpen && (
                                <div className="z-50 absolute bg-[#202020] mt-3 px-5 py-3 w-[250px] border-t-4 border-red-400 rounded text-zinc-300">
                                    <div className="flex flex-col gap-y-2">
                                        <Link to={'/agents'}  className='hover:bg-zinc-800 p-2 rounded'><a className="uppercase font-oswald font-semibold">Agents</a></Link>
                                        <Link to={'/maps'}  className='hover:bg-zinc-800 p-2 rounded'><a className="uppercase font-oswald font-semibold">Maps</a></Link>
                                        <Link to={'/arsenal'}  className='hover:bg-zinc-800 p-2 rounded'><a className="uppercase font-oswald font-semibold">Arsenal</a></Link>
                                        <Link to={'/gamemode'}  className='hover:bg-zinc-800 p-2 rounded'><a className="uppercase font-oswald font-semibold">Game Mode</a></Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="border-b-4 border-[#111] hover:border-red-400 py-3 rounded">
                                <a href="https://playvalorant.com/en-us/" className="px-6 py-1 rounded uppercase font-oswald font-semibold hover:bg-zinc-800">Valorant Oficial Web</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}