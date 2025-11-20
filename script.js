//https://tarotapi.dev/api/v1/cards/random

document.addEventListener('DOMContentLoaded', () => {

    const contenido = document.querySelector(".api-item");
    const boton = document.querySelector("#obtener");
    const imgMazo = document.querySelector("#mazo-default");


    boton.addEventListener("click", obtenerDatos);

        
    async function obtenerDatos() {
        let random = Math.floor(Math.random() * 79) ; // Número aleatorio entre 0 y 78
        fetch('https://tarot-api-es.vercel.app/api/v1/cards')
            .then(response => response.json())
            .then(data => {
            console.log(data);
            
            const card = data.cards;
            contenido.style.display = "flex block";
            imgMazo.style.display = "none";
            contenido.innerHTML = `
                    <img src="${card[random].image}"  id="img-carta" alt="a">
                    <aside id="${random}">
                        <h2>${card[random].name}</h2>
                        <h1>Arcano ${card[random].type}</h1>
                        <p><strong>Significado:</strong> ${card[random].meaning_up}</p>
                        <p><strong>Descripción:</strong> ${card[random].desc}</p>
                        <button id="btn-amor" data-tooltip="Amor" class="btnApi">💞 </button>
                        <button id="btn-trabajo" data-tooltip="Trabajo" class="btnApi">💼</button>
                        <button id="btn-finanzas" data-tooltip="Finanzas" class="btnApi">💵</button>
                        <button id="btn-salud" data-tooltip="Salud" class="btnApi">💉</button>
                        <button id="btn-espiritualidad" data-tooltip="Espiritualidad" class="btnApi">💫</button>
                        <p id="mensaje"></p>
                    </aside>
                    
                `;
            const btnAmor = document.querySelector("#btn-amor");
            const btnTrabajo = document.querySelector("#btn-trabajo");
            const btnFinanzas = document.querySelector("#btn-finanzas");
            const btnSalud = document.querySelector("#btn-salud");
            const btnEspiritualidad = document.querySelector("#btn-espiritualidad");
            const mensaje = document.querySelector("#mensaje");
            btnAmor.addEventListener("click",  () => mensaje.innerHTML = "<strong>Amor:</strong> " + card[random].amor + "</strong>");
            btnTrabajo.addEventListener("click", () => mensaje.innerHTML = "<strong>Trabajo:</strong> " + card[random].trabajo + "</strong>");
            btnFinanzas.addEventListener("click", () => mensaje.innerHTML = "<strong>Finanzas:</strong> " + card[random].finanzas + "</strong>");
            btnSalud.addEventListener("click", () => mensaje.innerHTML = "<strong>Salud:</strong> " + card[random].salud + "</strong>");
            btnEspiritualidad.addEventListener("click", () => mensaje.innerHTML = "<strong>Espiritualidad:</strong> " + card[random].espiritualidad + "</strong>");
                });
                
            
    
            }
});
    







//});
