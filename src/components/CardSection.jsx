export function CardSection({ title, img }) {
    return (
        <>
            <div className="md:w-6/12 h-80 bg-cover rounded-lg flex" style={{ backgroundImage: `url(${img})` }}>
                <div className="flex items-center justify-center w-full h-full duration-500 hover:bg-opacity-50 rounded-lg cursor-pointer ">
                    <h1 className="text-white text-4xl uppercase font-bold">{title}</h1>
                </div>
            </div>

        </>
    )
}