import { fetchData } from "../fetchData";
import { print } from "../assets/js/maps";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const apiData = fetchData("https://valorant-api.com/v1/maps");

export function Maps() {
    const data = apiData.read();
    return (
        <>
            <div className='w-full h-[90vh] bg-cover' style={{ backgroundImage: `url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaf4dae47b30c2172/5fd2d140a84f233eaf61091a/VALORANT_Logo_V.jpg')` }} alt='img'>
                <div className='flex h-full items-center'>
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
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}