export async function imprimir(agentUrl) {
  let dataAgente = `https://valorant-api.com/v1/agents/${agentUrl}`;
  try {
    const response = await fetch(dataAgente);
    const data = await response.json();
    mostrardatos(data.data);
  } catch (error) {
    console.log(error);
  }
}

function mostrardatos(datos) {
  const div = document.getElementById("mostrar");

  const {
    displayName,
    description,
    fullPortrait,
    background,
    abilities,
    role,
  } = datos

  div.classList.remove("justify-center", "items-center");
  div.innerHTML = `
        <div class="w-5/12">
            <div style="background-image: url('${background}')" class="h-[80vh] bg-contain bg-no-repeat bg-center">
              <img src="${fullPortrait}" class="h-full w-full flex" alt="img">
            </div>
        </div>
        <div class="w-7/12 py-1">
          <h1 class="font-oswald text-4xl uppercase text-center font-bold">${displayName}</h1>
          <p class="text-center font-bold mt-2 px-3">${description}</p>
          <div id="abilities">
          </div>
        </div>
    `;

    const abilitiesDiv = document.getElementById("abilities");
    abilities.forEach(ability => {
      const { displayName } = ability
      abilitiesDiv.innerHTML = `
        <p class="text-center font-bold">${displayName}</p>
      `
  });
    
}
