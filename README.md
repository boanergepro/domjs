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

4. **_seeAttributeNode(argumentos)**

	Este metodo sirve para verificar un atributo de un nodo. Recibe dos parametros.

	4.1 ```idElement``` : Este debe ser de tipo ```string``` y debe corresponder al atributo de tipo ```id``` del nodo del que queremos verificar el atributo.

	4.2 ```attributeSee``` : Este debe ser de tipo ```string``` y debe corresponder al nombre del atributo que queremos verificar.

	**Ejemplo**

	**_Javascript_**

	```javascript

	domjs._seeAttributeNode("contenedor", "class");

	```

	**_html_**

	```html
	<div id="contenedor" class="style color">
		
		<!--
		Retornara ```"style color"``` ya que el atributo class tiene este valor en el nodo que estamos consultando```alert()```.
		-->

	</div>
	```

5. **_addAttributeNode(argumentos)**

	Este metodo sirve para agregar un atributo a un nodo del DOM. Este recibe tres parametros.

	5.1 ```idElement``` : Este debe ser de tipo ```string``` y debe corresponder al atributo de tipo ```id``` del nodo al que queremos agregar el atributo.

	5.2 ```attribute``` : Este debe ser de tipo ```string``` y debe tener un nombre valido de un atributo para los nodos.

	5.3 ```valueAttribute``` : Este debe ser de tipo ```string``` y debe corresponder al valor del atributo que queremos agregar al nodo del DOM.

	**Ejemplo**

	**_Javascript_**

	```javascript

	domjs._addAttributeNode("contenedor", "class", "style");

	```

	**_html_**

	```html
	<div id="contenedor">
		

	</div>
	```

	**Asi quedaria nuestro codigo ```html```**

	```html
	<!--Ahora se agrego el atributo class con el valor 'style'-->
	<div id="contenedor" class="style">
		
		<!--Se notificara por un ```alert()``` del atributo y el valor de 
		dicho atributo que se agrego.-->

	</div>
	```

6. **_removeAttributeNode(argumentos)**
	
	Este metodo sirve para remover un atributo de algun nodo del DOM. Recibe dos parametros.

	6.1 ```idElement``` : Este debe ser de tipo ```string``` y debe corresponder al atributo de tipo ```id``` del nodo al que le queremos remover el atributo.

	6.2 ```attribute``` : Este debe ser de tipo ```string``` y debe corresponder al valor del atributo que queremos eliminar de nuestro nodo.

	**Ejemplo**

	**_Javascript_**

	```javascript

	domjs._removeAttributeNode("contenedor", "class");

	```

	**_html_**

	```html
	<div id="contenedor" class="style">
		

	</div>
	```

	**Asi quedaria nuestro codigo ```html```**

	```html
	<!--Ahora se elimino el atributo class con el valor 'style'-->
	<div id="contenedor">
		
		<!--Se notificara por un ```alert()```el atributo que fue removido.-->

	</div>
	```