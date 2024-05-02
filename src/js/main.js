

const main =document.querySelector("main")
main.classList.add("d-flex", "flex-wrap", "gap-5","justify-content-center",)

console.table(mascotasVeterinario)


// // for clasico

for(let i=1; i<mascotasVeterinario.length; i++) {
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${mascotasVeterinario[i].link}" class="card-img-top w-100 h-100 object-fit-cover border rounded" alt="..."</div>
    <div class="card-body">
    <h5 class="card-title">Nombre: ${mascotasVeterinario[i].nombreMascota}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Especie: ${mascotasVeterinario[i].especieMascota}</li>
    <li class="list-group-item">Raza: ${mascotasVeterinario[i].razaMascota}</li>
    <li class="list-group-item">Edad: ${mascotasVeterinario[i].edadMascota}</li>
    <li class="list-group-item">Peso: ${mascotasVeterinario[i].pesoMascota}</li>
    <li class="list-group-item">Estado: ${mascotasVeterinario[i].estadoMascota}</li>
    <li class="list-group-item">Dueño: ${mascotasVeterinario[i].propietarioMascota.nombreDueñoMascota}</li>
    </ul>
    </div>`


}

//for of

// for (const mascota of mascotasVeterinario) {
//     console.log(mascota)
// }

// //for each

// mascotasVeterinario.forEach(mascota => {
//     console.log(mascota)
// });

function limpiar(){
    main.innerHTML=``
}

const buttonLimpiar=document.querySelector("button")

buttonLimpiar.addEventListener("click", (limpiar));