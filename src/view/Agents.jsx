import { fetchData } from "../fetchData";
import { print } from "../assets/js/agents";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const apiData = fetchData("https://valorant-api.com/v1/agents?isPlayableCharacter=true");

export function Agents() {

    const data = apiData.read();

    return (
        <>
            <div className="w-full h-[90vh] bg-cover" style={{ backgroundImage: `url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaf4dae47b30c2172/5fd2d140a84f233eaf61091a/VALORANT_Logo_V.jpg')` }}>
                <div className="flex h-full items-center">
                    <div className="bg-[#ece8e1] text-zinc-500 md:w-2/12 flex flex-col bg-no-repeat bg-cover" >
                        <Splide options={{
                            direction: 'ttb',
                            perPage: 8,
                            arrows: false,
                            pagination: false,
                            height: '90vh',
                        }}>
                            {data?.map((item) => (
                                <SplideSlide className="text-center">
                                    <button className='px-3 py-2 w-full rounded hover:text-white duration-300 hover:scale-150 uppercase font-oswald text-2xl hover:bg-[#111]' key={item.displayName} onClick={() => print(item.uuid)}>
                                        {item.displayName}
                                    </button>
                                </SplideSlide>
                            ))}
                        </Splide>

                    </div>

                    <div id="mostrar" className="md:w-10/12 flex justify-center items-center text-white h-full bg-[#111111bb] px-6">
                        <div className="mb-5 z-30">
                            <img src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png" alt="img" className="mx-10 h-[80vh]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}