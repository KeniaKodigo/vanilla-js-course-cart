import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { getCourses } from './list_courses';
import { addCourse, deleteCourse } from './cart';

//estar atento cuando se cargue la pagina
document.addEventListener('DOMContentLoaded',() => {
    //mostrar la lista de cursos
    getCourses();

    //agregar el evento de escucha para agregar un curso al carrito
    document.querySelector('#list-courses').addEventListener('click', addCourse)

    //agregando un evento para eliminar un curso
    document.querySelector('#list-cart').addEventListener('click', deleteCourse)
}) 
