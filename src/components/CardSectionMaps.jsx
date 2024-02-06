import { Link } from "react-router-dom";

export function CardSectionMaps() {
    return (
        <>
            <div className="h-[80vh] w-full bg-no-repeat flex items-center justify-end bg-[#ece8e1]" style={{ backgroundImage: `url('https://playvalorant.com/assets/images/background-sprite.png')` }}>
                <div className="flex items-center flex-col z-20 w-6/12 relative mx-10">
                    <h1 className="text-7xl uppercase text-black font-anton font-bold cursor-pointer duration-700 ease-in-out select-none">YOUR MAPS</h1>                   
                     <Link to={'/maps'}>
                        <p className="text-black underline duration-500 font-semibold mt-10 rounded-lg hover:bg-gray-600 hover:no-underline hover:text-white hover:p-3">FIGHT AROUND THE WORLD</p>
                    </Link>
                </div>
                <div className="self-end w-11/12">
                    <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png" alt="" className="h-[100vh]"/>
                </div>
            </div>
        </>
    )
}