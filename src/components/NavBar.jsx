export function NavBar() {
    const dropdownContent = document.querySelector('#dropdownContent')

    function dropdownNavBar() {
        console.log('click');

        dropdownContent.classList.toggle('hidden');
    }


    return (
        <>
            <div className="w-full bg-[#111] py-2 px-10 border-b-stone-500">
                <div className="flex items-center text-white">
                    <div>
                        <img className="w-20" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt50870b13992cdf47/63b0d7d089f85210f400107e/val-logo-small.png?&height=75&disable=upscale" alt="icon" />
                    </div>
                    <div className="mx-10 flex gap-x-5">
                        <div className="py-3">
                            <a onClick={dropdownNavBar} className="px-6 py-1 cursor-pointer select-none rounded uppercase font-oswald font-semibold hover:bg-zinc-800">Game Info <i class="fas fa-caret-down"></i></a>
                            <div className="absolute bg-[#202020] mt-3 px-5 py-3 w-[250px] border-t-4 border-red-400 rounded hidden" id="dropdownContent">
                                <div className="flex flex-col gap-y-2">
                                    <a href="" className="p-2 uppercase font-oswald font-semibold rounded hover:bg-zinc-800 text-zinc-300">Agents</a>
                                    <a href="" className="p-2 uppercase font-oswald font-semibold rounded hover:bg-zinc-800 text-zinc-300">Maps</a>
                                    <a href="" className="p-2 uppercase font-oswald font-semibold rounded hover:bg-zinc-800 text-zinc-300">Arsenal</a>
                                    <a href="" className="p-2 uppercase font-oswald font-semibold rounded hover:bg-zinc-800 text-zinc-300">Game Mode</a>
                                </div>
                            </div>
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