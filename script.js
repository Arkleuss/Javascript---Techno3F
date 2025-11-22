//https://tarotapi.dev/api/v1/cards/random

document.addEventListener('DOMContentLoaded', () => {

    const contenido = document.querySelector(".api-item");
    const boton = document.querySelector("#obtener");
    const defaultApi = document.querySelector("#api-default");
    const boton3 = document.querySelector("#obtener3");
    const textoApi = document.querySelector(".api-text-tres");

    boton.addEventListener("click", obtenerDatos); 
    boton3.addEventListener("click", obtenerDatos3)

    //API Tarot
//sacar una carta
    async function obtenerDatos() {
        let random = Math.floor(Math.random() * 79) ; // Número aleatorio entre 0 y 78
        textoApi.style.display = "none";
        fetch('https://tarot-api-es.vercel.app/api/v1/cards')
            .then(response => response.json())
            .then(data => {
                const card = data.cards;
                contenido.style.display = "flex block";
                defaultApi.style.display = "none";
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
    //sacar tres cartas
    async function obtenerDatos3() {
        textoApi.style.display = "flex";
        let cartasData = [];
        fetch('https://tarot-api-es.vercel.app/api/v1/cards')
            .then(response => response.json())
            .then(data => {
                let card = data.cards;
                // Seleccionar 3 índices únicos usando Set y card.length en lugar de 79
                const indices = new Set();
                while (indices.size < 3) {
                    indices.add(Math.floor(Math.random() * card.length));
                }
                const selected = Array.from(indices);
                cartasData = selected.map(i => card[i]);


                console.log(cartasData);
                

                contenido.style.display = "flex block";
                defaultApi.style.display = "none";
                
                contenido.innerHTML = `
                    
                    
                    <div class="cartasImgTres" >
                        <button id="btnCarta1" class="btnApiCartas">
                            <img src="${cartasData[0].image}"  id="img-carta1" class="btnApiImg" alt="a">
                        </button>
                        <button id="btnCarta2" class="btnApiCartas">
                            <img src="${cartasData[1].image}"  id="img-carta2" class="btnApiImg" alt="a">
                        </button>
                        <button id="btnCarta3" class="btnApiCartas">
                            <img src="${cartasData[2].image}"  id="img-carta3" class="btnApiImg" alt="a">
                        </button>
                        
                    </div>
                    
                    <div class="carta-info-1" style="display: none;">
                        <h2>${cartasData[0].name}</h2>
                        <h1>Arcano ${cartasData[0].type}</h1>
                        <p><strong>Significado:</strong> ${cartasData[0].meaning_up}</p>
                        <p><strong>Descripción:</strong> ${cartasData[0].desc}</p>
                        <button id="btn-back1" data-tooltip="Volver" class="btnApi">Volver </button>
                    </div>
                    <div class="carta-info-2" style="display: none;">
                        <h2>${cartasData[1].name}</h2>
                        <h1>Arcano ${cartasData[1].type}</h1>
                        <p><strong>Significado:</strong> ${cartasData[1].meaning_up}</p>
                        <p><strong>Descripción:</strong> ${cartasData[1].desc}</p>
                        <button id="btn-back2" data-tooltip="Volver" class="btnApi"> Volver </button>
                    </div>
                    <div class="carta-info-3" style="display: none;">
                        <h2>${cartasData[2].name}</h2>
                        <h1>Arcano ${cartasData[2].type}</h1>
                        <p><strong>Significado:</strong> ${cartasData[2].meaning_up}</p>
                        <p><strong>Descripción:</strong> ${cartasData[2].desc}</p>
                        <button id="btn-back3" data-tooltip="Volver" class="btnApi"> Volver </button>
                    </div>
                    `;
                
                const imgCarta1 = document.querySelector("#btnCarta1");
                const imgCarta2 = document.querySelector("#btnCarta2");
                const imgCarta3 = document.querySelector("#btnCarta3");
                const cartaInfo1 = document.querySelector(".carta-info-1");
                const cartaInfo2 = document.querySelector(".carta-info-2");
                const cartaInfo3 = document.querySelector(".carta-info-3");
                const btnBack1 = document.querySelector("#btn-back1");
                const btnBack2 = document.querySelector("#btn-back2");
                const btnBack3 = document.querySelector("#btn-back3");

                imgCarta1.addEventListener("click",  () => {
                    imgCarta2.style.display = "none";
                    imgCarta3.style.display = "none";
                    cartaInfo1.style.display = "block";
                    textoApi.style.display = "none";
                }); 
                imgCarta2.addEventListener("click",  () => {
                    imgCarta1.style.display = "none";
                    imgCarta3.style.display = "none";
                    cartaInfo2.style.display = "block";
                    textoApi.style.display = "none";
                });
                imgCarta3.addEventListener("click",  () => {
                    imgCarta1.style.display = "none";
                    imgCarta2.style.display = "none";
                    cartaInfo3.style.display = "block";
                    textoApi.style.display = "none";
                });
                function volver()  {
                    cartaInfo1.style.display = "none";
                    cartaInfo2.style.display = "none";
                    cartaInfo3.style.display = "none";
                    imgCarta1.style.display = "block";
                    imgCarta2.style.display = "block";
                    imgCarta3.style.display = "block";
                    textoApi.style.display = "flex";
                }
                btnBack1.addEventListener("click", volver);
                btnBack2.addEventListener("click", volver);
                btnBack3.addEventListener("click", volver);
            
            });
    }


//validacion formulario

            function validarFormulario() {
                const nombre = document.getElementById('nombre').value.trim();
                const email = document.getElementById('email').value.trim();
                const asunto = document.getElementById('asunto').value;
                const mensaje = document.getElementById('mensaje').value.trim();
                const errorNombre = document.getElementById('errorNombre');
                const errorEmail = document.getElementById('errorEmail');
                const errorAsunto = document.getElementById('errorAsunto');
                const errorMensaje = document.getElementById('errorMensaje');

                // Resetear mensajes de error
                errorNombre.style.display = 'none';
                errorEmail.style.display = 'none';
                errorAsunto.style.display = 'none';
                errorMensaje.style.display = 'none';
                let errores = 0;
                
                if (nombre === '') {    
                    errorNombre.style.display = 'block';
                    errorNombre.innerHTML = '<p>Por favor ingresa tu nombre completo.</p>';
                    errores++;
                }
                if (email === '') {
                    
                    errorEmail.style.display = 'block';
                    errorEmail.innerHTML = '<p>Por favor ingresa tu correo electrónico.</p>';
                    errores++;
                }
                if (asunto === '') {
                    
                    errorAsunto.style.display = 'block';
                    errorAsunto.innerHTML = '<p>Por favor selecciona un asunto.</p>';
                    errores++;
                }
                if (mensaje === '') {
                    
                    errorMensaje.style.display = 'block';
                    errorMensaje.innerHTML = '<p>Por favor ingresa tu mensaje.</p>';
                    errores++;
                }
                if (errores > 0) {
                    return false;
                }else {
                return true;  
            }
            }
            const form = document.getElementById('contactForm');
            form.addEventListener('submit', function(event) {
                if (!validarFormulario()) {
                    event.preventDefault();
                }
            });
    







});
