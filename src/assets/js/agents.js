export async function print(agentUrl) {
  let url = `https://valorant-api.com/v1/agents/${agentUrl}`;
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
    description,
    fullPortrait,
    background,
    abilities,
    role,
  } = datos;

  div.classList.remove("justify-center");
  div.innerHTML = `
        <div class="w-6/12">
            <div style="background-image: url('${background}')" class="h-[80vh] bg-contain bg-no-repeat bg-center">
              <img src="${fullPortrait}" class="h-full w-full flex" alt="img">
            </div>
        </div>
        <div class="w-6/12 py-1">
          <h1 class="font-oswald text-4xl uppercase text-center font-bold">${displayName}</h1>
          <p class="font-bold mt-2 px-5">${description}</p>
          <p class="font-bold mt-2 px-5">Role: ${role.description}</p>
          <div id="abilities" class="px-5 mt-5 flex justify-center gap-x-4">
          </div>
        </div>
    `;

  const abilitiesDiv = document.getElementById("abilities");
  for(let i = 0; i < abilities.length; i++) {
    console.log(abilities[i].displayName);
    abilitiesDiv.innerHTML += `
      <div class="flex flex-col justify-center items-center">
        <p class="font-bold">${abilities[i].displayName}</p>
        <img src="${abilities[i].displayIcon}" alt="img" class="w-10 h-10">
      </div>
      `
  }
}
