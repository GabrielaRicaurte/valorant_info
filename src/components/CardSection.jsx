export function CardSection({ imagen, titulo }) {
    return (
        <>
            <div className="flex rounded-lg h-72 bg-cover" style={{ backgroundImage: `url(${imagen})`}}>  
                <div className="bg-black bg-opacity-75 w-full rounded-lg flex items-center">
                    <h1 className="font-bold text-5xl text-white p-16">{titulo}</h1>
                </div>
            </div>
        </>
    )
}

