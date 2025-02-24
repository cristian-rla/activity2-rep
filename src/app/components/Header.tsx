import Link from "next/link";
import "./Header.css"

/* 

Crear un nuevo proyecto donde la página principal (con menú de navegación arriba con varias páginas que se especificarán, todas accesibles en el header: Home...)

En HOME, va el contador, agregarle otro botón para reducir el valor. Agregar una validación: no podemos reducir el numero más allá del cero (no neg)
Mandar error (sin alert). Escrito, no popUp. Así como cuando no pones tu contraseña en algun forms y sale un mensajito rojo debajo de los cuadros de texto.

2da pagina: un Rectángulo en medio (de color gris por defecto). Se le puede cambiar el color con 4 botones debajo del rectangulo, como se distribuyen en kahoot.
Con colores diferentes, no importa el color. 

*/

const Header = () => {
    return (
        <header className="Header">
            <Link href = "/ColorChanger" className="HeaderLink">Colores</Link>
            <Link href = "/" className ="HeaderLink">Contador</Link>
        </header>
    );
};

export default Header;