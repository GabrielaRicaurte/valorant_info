export async function print(mapUrl) {
    let url = `https://valorant-api.com/v1/maps/${mapUrl}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        viewData(data.data);
    } catch (error) {
        console.log(error);
    }
}
function viewData(datos) {
    const div = document.getElementById("mostrar");

    const {
        displayName,
        narrativeDescription,
        tacticalDescription,
        displayIcon,
        premierBackgroundImage,
        coordinates,

    } = datos;

    div.style.backgroundImage = `url('${premierBackgroundImage}')`;
    div.classList.add('bg-contain');

    div.innerHTML = `
        <div class="w-6/12">
            <div class="h-[80vh] bg-contain bg-no-repeat bg-center px-3">
              <img src="${displayIcon}" class="h-full w-full flex" alt="img">
            </div>
        </div>
        <div class="w-6/12 py-1">
          <h1 class="font-oswald text-4xl uppercase text-center font-bold">${displayName}</h1>
          <p class="font-bold mt-2 px-5">${narrativeDescription}</p>
          <p class="font-oswald px-5 text-center mt-3">${coordinates}</p>
        </div>
    `;


}   