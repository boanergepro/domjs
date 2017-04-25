# DOMJS

Esta es una libreria creada para la manipulación del DOM (Document Objet Model).

### Añadirlo a nuestro documento:

```html
<script type="text/javascript" src="domjs.js"></script>
```
### Como emplear la libreria en el codigo:

1. **Ejemplo**

	Se debe usar ```domjs``` para usar el objeto, seguido se debe colocar un ```.``` y el nombre del metodo que se desea usar con sus argumentos.

**_Javascript_**

```javascript
	domjs.nombreMetodo(argumentos)
```

### El Objeto ```domjs``` ofrece una serie de metodos para manipular el DOM.

1. **_createNode(argumentos)**
	
	Este metodo sirve para crear un nodo en nuestro arbol DOM. Dicho metodo recibe tres parametros.

	1.1 ```typeElement``` : Este debe ser de tipo ```string``` y debe corresponder al nombre de la etiqueta del nodo que queremos crear.
	
	**Ejemplo** ```div``` para crear un nodo con la etiqueta ```<div>```.

	1.2 ```textValue``` : Este debe ser de tipo ```string``` y debe corresponder al contenido que queremos que tenga nuestro nodo.
	
	**Ejemplo** Si le pasamos un ```string``` vacio ```""``` el elemento se creara in ningún texto.
	
	1.3 ```idParentElement``` : Este debe ser de tipo ```string``` y debe responder al atributo de tipo ```id``` del padre del nodo que queremos eliminar.  
	
	**Ejemplo**
	
	**_Javascript_**

	```javascript
	domjs._createNode("div", "", "nodoPadre");

	```
	**_html_**

	```html
	<div id="nodoPadre">
		
		<!--
		Aqui se crearia nuestro nodo con el metodo _createNode("div", "", "nodoPadre")
		-->

	</div>
	```
	**Asi quedaria nuestro codigo ```html```**

	```html
	<div id="nodoPadre">
		
		<!--
		Este es le <div> creado.
		-->
		
		<div></div>

	</div>
	```

2. **_removeNode(argumentos)**

	Este metodo sirve para eliminar un nodo del DOM. Dicho metodo solo recive un parametro, el cual debe ser de tipo ```string``` y corresponder con el atributo ```id``` del nodo que queremos eliminar.

	**Ejemplo**

	**_html_**

	```html
	<div id="nodoPadre">
		
		<!--
			El nodo con el id "nodoHijo" es el que necesitamos eliminar.
		-->
		<div id="nodoHijo"></div>

	</div>
	```

	**_Javascript_**

	```javascript
	domjs._removeNode("nodoHijo");

	```

	**Asi quedaria nuestro codigo ```html```**

	```html
	<div id="nodoPadre">
		
		<!--
		El <div> ha sido eliminado.
		-->

	</div>
	```
3. **_searchClass(argumentos)**

	Este metodo sirve para verificar si un nodo del DOM posee o no una clase.
	Recibe dos parametros.

	3.1 ```idElement``` : Este debe ser de tipo ```string``` y debe corresponder al atributo de tipo ```id``` del nodo del que queremos verificar la clase.

	3.2 ```classSearch``` : Este debe ser de tipo ```string``` y debe corresponder con el nombre de la clase que queremos ver si tiene nuestro nodo con el atributo ```id``` que pasamos como primer parametro a nuestro metodo ```_searchClass()```.

	**Ejemplo**

	**_Javascript_**

	```javascript

	domjs._searchClass("contenedor", "style");

	```
	**_html_**

	```html
	<div id="contenedor" class="style color">
		
		<!--
		Ya que el div si tiene una clase llamada 'style' entonces el metodo lo notificara con un ```alert()```.
		-->

	</div>
	```

