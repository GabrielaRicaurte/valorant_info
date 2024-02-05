export function Header({ title }) {
    return (
        <>
            <div className="w-full bg-blue-500 h-96 bg-cover bg-center bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt463ab493c63a3968/65988e9b14672f52fd6fad1d/Website_Hero_Image_1730x720.jpg')]">
                {/* <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6ecd185638a306d0/659ba683c4b620170cfb8d63/Ep8a1_Defiance_Playval.com_Act_Overview_banner_3440x1020_Darkbg.jpg" alt="" className="absolute"/> */}
                <div className="w-full h-full flex md:justify-start justify-center items-center md:px-28">
                    <h1 className="uppercase relative text-white font-extrabold text-4xl md:text-6xl">{ title }</h1>
                </div>
            </div>
        </>
    )
}