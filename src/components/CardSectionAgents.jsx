import { Link } from "react-router-dom";
import 'animate.css';

export function CardSectionAgents() {
    return (
        <>
            <div className="w-full h-[70vh] bg-cover bg-center flex items-center" style={{ backgroundImage: `url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaf4dae47b30c2172/5fd2d140a84f233eaf61091a/VALORANT_Logo_V.jpg')` }}>
                <div className="w-full flex">
                    <div className="mb-5 z-30">
                        <img src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png" alt="img" className="mx-10 h-[100vh] " />
                    </div>
                    <div className="flex items-center flex-col justify-center ">
                        <h1 className=" text-7xl uppercase text-white font-bold cursor-pointer duration-700 ease-in-out select-none font-bebas">Agents</h1>
                        <Link to={'/agents'}>
                            <p className="mt-5 text-white underline font-bold duration-500 rounded hover:bg-red-200 hover:no-underline hover:text-black hover:p-3">CHECK THE HEADCOUNT</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

