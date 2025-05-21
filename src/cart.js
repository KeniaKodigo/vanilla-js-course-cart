import Swal from "sweetalert2"

let array_cart = [] //arreglo de objetos (cursos)
//accediendo al tbody de la tabla
let tbody = document.querySelector('tbody')

/** e => evento */
export function addCourse(e){
    //sacame el abuelo de la etiqueta (target)
    //console.log(e.target.parentElement.parentElement)
    
    //el metodo closest te devuelve el contenedor mas cercano que tenga
    //si la persona selecciona algo que sea diferente al boton, que se salga de la operacion
    const button = e.target.closest('.button-cart')
    if(!button) return

    //si la persona selecciono un boton debe de mostrar la tarjeta del curso
    const card = button.closest('.card')
    console.log(card)

    //agregando la clase a disabled al boton 
    button.classList.add('disabled')
    button.textContent = 'Ir al carrito'

    Swal.fire({
        title: "Agregado al carrito!",
        icon: "success",
        draggable: true
    });

    getCourseData(card)
}

//funcion para convertir la tarjeta en un objeto y agregarlo en un arreglo
function getCourseData(course){
    console.log(course)

    //accediendo a los valores del curso (card del html)
    const object_course = {
        title: course.querySelector('h5').textContent,
        image: course.querySelector('img').src,
        price: course.querySelector('.price').textContent,
        id: course.querySelector('button').getAttribute('data-id')
    }

    console.log(object_course)
    //agregando el curso al arreglo
    array_cart.push(object_course)
    console.table(array_cart)

    cartHTML()
}

//dibujar la tabla con los cursos del carrito
function cartHTML(){

    tbody.innerHTML = ""

    array_cart.map(course => {
        //creando la etiqueta <tr>
        console.log(course.image)
        const fila = document.createElement('tr')
        fila.innerHTML = `
            <td>
                <img src="${course.image}" width="100" />
            </td>
            <td>${course.title}</td>
            <td>$${course.price}</td>
            <td>
                <button class="btn btn-danger delete_course" data-id=${course.id}>X</button>
            </td>
        `;
        //agregando la fila en el tbody
        tbody.appendChild(fila)
    })
}

