En este ejercicio se ha creado un sitio web de muebles: "furniture shop"; utilizando angular js, jQuery, boostrap y parsley (validador de formularios);

En definitiva se ha creado un 'index.html' que contiene como elementos est�ticos en su 'body' el 'footer' y el 'header' (navbar y navtabs) y como elemento din�mico un 'div' inmediatamente anterior a la apertura del 'footer'.

El contenido de este 'div' va actualiz�ndose de acuerdo a la ruta en la que nos encontremos mediante 'vistas' (views); utiliz�ndose para ello el m�dulo ngRoute y la directiva ng-view de angular js. Existen un total de 4 vistas: 

- la asociada a la ruta /#/ ('/' en app.config): 'homeView.html'; que consta de un carousel de boostrap con los artesanos que trabajan los muebles, una serie de botones (all, tables, sofas, pufs) y una galer�a de im�genes que se filtra din�micamente al hacer click sobre dichos botones (directiva ng-click & myFilter value) y que muetsran informaci�n sobre el producto al hacer hover (directiva ng-mousehover & myFilter value)

- la asociada a la ruta /#/views/all y /#/views/category ('/views/all' & '/views/:category' en app.config): 'productView.html' que se accede a trav�s del dropdown menu del header (navtabs) y que muestra una colecci�n de muebles concreta meadiante filtros (products(/#/views/all): todas las categor�as; tables: s�lo la categor�a 'table'(/#/views/table); sofas: s�lo la categor�a 'sofa' (/#/views/sofa); pufs: s�lo la categor�a 'puf'(/#/views/puf)) prestablecido al hacer click sobre el dropdown menu (directiva ng-click & myFilter value).

- la asociada a la ruta /#/views/category/id ('/views/:category/:id' en app.config): 'specificProductView.html'; que se accede al hacer click sobre cualquiera de los productos de la galer�a abierta desde el dropdown menu haciendo uso de un segundo 'scope' dentro del controlador com�n a todas las vistas (HomeViewController): items; calculado a partir del scope original (products) y el $routeParams.id que corresponda.

- la asociada a la ruta /#/views/contact ('/views/contact'): 'views/formView.html'. Aunque a esta vista se le ha asignado un controlador ('FormViewController') �ste no se ha llegado a definir en ning�n momento por considerarse innecesario con posterioridad al no hacerse uso en esta vista de los datos del json de muebles (motivo que explica el error que se detona en angularjs al acceder a dicha vista; bastar�a con asignarle la de HomeViewController por ejemplo y listo....porque no se puede dejar en vac�o �no?).

		
RETOS: creacion de filtros; creaci�n de scopes; conflicto boostrap carousel y ngRoute (en la pagina de boostrap se facilita una platilla http://v4-alpha.getbootstrap.com/components/carousel/; en la que al aparecer un href en las flechas de movimeinto a izquierda y derecha, entra en conflicto con el modulo ngRoute de angular; dejando de funcionar como deber�a. Cambiando dicho href por un 'data-target' se soluciona el problema.) etc.

DEUDA TECNICA: aparte del beutiful design (hubiera estado genial a�adir m�s efectos de mouse-hover y tal); la validaci�n del formulario final mediante la librer�a parsleyjs deja un tanto que desear. 

Genial trabajar con Irene Gutierrez; �super persistente y ordenada!

�Un saludo!

Paz rg
