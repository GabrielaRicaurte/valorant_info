export function Header({ title }) {
    return (
        <>
            <div className="w-full rounded-bl-[10rem] bg-fixed bg-blue-500 h-96 bg-cover bg-center bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt463ab493c63a3968/65988e9b14672f52fd6fad1d/Website_Hero_Image_1730x720.jpg')]">
                {/* <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6ecd185638a306d0/659ba683c4b620170cfb8d63/Ep8a1_Defiance_Playval.com_Act_Overview_banner_3440x1020_Darkbg.jpg" alt="" className="absolute"/> */}
                <div className="w-full md:justify-start mt-36 md:px-28 z-30 absolute">
                    <h1 className="uppercase text-white font-extrabold text-4xl md:text-6xl font-bebas">{title}</h1>
                </div>
                <div className="bg-black h-full rounded-bl-[10rem] opacity-50"></div>
            </div>
        </>
    )
}