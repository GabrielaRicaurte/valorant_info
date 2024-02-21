export function SectionInfo() {
    return (
        <>
            <div className="h-[100vh] p-10">
                <div className="h-[500px] border-x border-black p-10 flex gap-x-3">
                    <div className="md:w-6/12 flex flex-col justify-center h-full px-4">
                        <h1 className="text-6xl font-extrabold uppercase mb-3 text-[#0f1923] font-bebas">What is Valorant?</h1>
                        <p className="font-semibold text-gray-500">
                            Blend your style and experience on a global, competitive stage.
                            You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities.
                            And, with one life per-round, you'll need to think faster than your opponent if you want to
                            survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                        </p>
                        <div className="mt-5 w-full text-center">
                            <a href="https://playvalorant.com/en-us/news/announcements/beginners-guide/" className="rounded underline font-semibold duration-300 hover:p-3 hover:bg-red-400 hover:no-underline hover:text-white">LEARN THE GAME</a>
                        </div>
                    </div>
                    <div className="md:w-6/12 mt-7">
                        <div className="absolute mt-6 bg-red-500 px-7 ">
                            <h1 className="text-white font-semibold uppercase font-oswald">Gameplay</h1>
                        </div>
                        <div className="px-4 duration-300 rounded cursor-pointer mt-2">
                            <div className="bg-red-500 rounded">
                                <video className="h-full pb-2 pr-2" src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4" autoPlay loop muted></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}