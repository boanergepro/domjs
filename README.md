# DOMJS

Esta es una libreria creada para la manipulación del DOM (Document Objet Model) mediante el conjunto de funciones nativas de JavaScript.

### Añadirlo a nuestro documento:

```html
<script type="text/javascript" src="domjs.js"></script>
```
### Como emplear la libreria en el codigo:

1. **Ejemplo**

	Se debe usar la palabra ```domjs``` para usar la libreria, seguido se debe colocar un ```.``` y el nombre del metodo que se desea usar con sus argumentos.

**_Javascript_**

```javascript
	domjs.nombreMetodo(argumentos)
```

### La libreria ```domjs``` ofrece una serie de metodos para manipular el DOM(Document Objet Model).

1. **createNode(argumentos)**
	
	Esta función sirve para crear un nodo en nuestro arbol DOM. Cabe mencionar que esta permite ser usada de dos formas, una para crear un nodo hijo de otro, como por ejemplo un ```<li>``` dentro de un ```<ul>```, y la otra forma es para crear el nodo directamente detro del body. Dicho metodo recive un objeto los siguientes valores.

	1.1 ```typeElement``` : Este debe ser de tipo ```string``` y debe corresponder al nombre de la etiqueta del nodo que queremos crear.
	
	**Ejemplo** ```div``` para crear un nodo con la etiqueta ```<div>```.

	1.2 ```textValue``` : Este debe ser de tipo ```string``` y debe corresponder al contenido que queremos que tenga nuestro nodo.
	
	**Ejemplo** Si le pasamos un ```string``` vacio ```""``` el elemento se creara sin ningún texto.
	
	1.3 ```idParent``` : Este debe ser de tipo ```string``` y debe responder al atributo de tipo ```id``` del nodo padre del nuevo, en caso de que queramos crear un nodo hijo de ``` <body>``` no debemos psarle este parametro a nuestra función.

	1.4 ```attributes``` : Recibe un objeto con todos los atributos que queremos asignarle a nuestro nuevo nodo.
	
	**Ejemplo de la creación de un nodo hijo de otro.**

	Para crear un nodo hijo de otro, como lo seria el caso de crear un elemento ```<div>``` dentro de otro ```<div>``` tendriamos que pasarle los tres parametros al metodo.
	
	**_Javascript_**

	```javascript
	domjs.createNode({
		typeElement: 'div',
		idParent: 'nodoPadre',
		attributes: {
			id: 'contenedor',
			class: 'row'
		},
		textValue: ''
	});
	```

	```
	**Asi quedaria nuestro codigo ```html```**

	```html
	<div id="nodoPadre">
		
		<!--
		Este es le <div> creado.
		-->
		
		<div id="contenedor" class="row"></div>

	</div>
	```

	**Ejemplo de la creación de un nodo hijo de el nodo ```<body>``` directamente.**
	
	Para crear un nodo directamente dentro del nodo ```<body>``` solo es necesario que le pasemos los dos primeros parametros a nuestra función, es decir, ```typeElement``` y ```textValue```, ya que el tercero ```idParentElement``` no lo necesitaremos porque nuestro nodo no tendra un nodo padre mas que ```<body>```. Al no mencionarle a nuestra función el id del nodo que sera su padre, éste nuevo nodo se creara dentro del ```<body>``` luego del ultimo nodo existente.

	```javascript

	//Aqui solo recibirá dos parametros.
	domjs.createNode({
		typeElement: 'div'
	});

	```
	**Asi quedaria nuestro codigo ```html```**

	```html
	<body>

		<div>

			<h1>DOMJS</h1>

		</div>
		<!-- Este es le <div> creado. -->
		<div></div>

	</body>
	```


2. **removeNode(argumentos)**

	Esta función sirve para eliminar un nodo del DOM cualquiera se su ubicación dentro de nuestro arbol. Dicha función solo recive un parametro, el cual debe ser de tipo ```string```.

	2.1 ```ìdElement``` : Este debe ser de tipo ```string``` y debe responder al atributo de tipo ```id``` del padre del nodo que queremos eliminar.

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
	domjs.removeNode("nodoHijo");

	```

	**Asi quedaria nuestro codigo ```html```**

	```html
	<div id="nodoPadre">
		
		<!--
		El <div> ha sido eliminado.
		-->

	</div>
	```
3. **searchClass(argumentos)**

	Esta función sirve para verificar si un nodo del DOM posee o no una clase.
	Recibe dos parametros de tipo ```string```.

	3.1 ```idElement``` : Este debe ser de tipo ```string``` y debe corresponder al atributo de tipo ```id``` del nodo del que queremos verificar la clase.

	3.2 ```classSearch``` : Este debe ser de tipo ```string``` y debe corresponder con el nombre de la clase que queremos ver si tiene nuestro nodo con el atributo ```id``` que pasamos como primer parametro a nuestro metodo ```_searchClass()```.

	**Ejemplo**

	**_Javascript_**

	```javascript

	domjs.searchClass("contenedor", "style");

	```
	**_html_**

	```html
	<div id="contenedor" class="style color">
		
		<!--
		Ya que el div si tiene una clase llamada 'style' entonces la función lo notificara con un ```alert()```.
		-->

	</div>
	```

4. **seeAttributeNode(argumentos)**

	Esta función sirve para verificar un atributo de un nodo. Recibe dos parametros.

	4.1 ```idElement``` : Este debe ser de tipo ```string``` y debe corresponder al atributo de tipo ```id``` del nodo del que queremos verificar el atributo.

	4.2 ```attributeSee``` : Este debe ser de tipo ```string``` y debe corresponder al nombre del atributo que queremos verificar.

	**Ejemplo**

	**_Javascript_**

	```javascript

	domjs.seeAttributeNode("contenedor", "class");

	```

	**_html_**

	```html
	<div id="contenedor" class="style color">
		
		<!--
		Retornara ```"style color"``` ya que el atributo class tiene este valor en el nodo que estamos consultando```alert()```.
		-->

	</div>
	```

5. **addAttributeNode(argumentos)**

	Esta función sirve para agregar un atributo a un nodo del DOM. Este recibe tres parametros.

	5.1 ```idElement``` : Este debe ser de tipo ```string``` y debe corresponder al atributo de tipo ```id``` del nodo al que queremos agregar el atributo.

	5.2 ```attribute``` : Este es un objeto que contendra los atributos que le agregaremos al nodo.

	**Ejemplo**

	**_html_**

	```html
	<div id="contenedor">
		

	</div>
	```

	**_Javascript_**

	```javascript

	domjs.addAttributeNode("contenedor", {
		class: 'style'
	});

	```

	**_html_**

	**Asi quedaria nuestro codigo ```html```**

	```html
	<!--Ahora se agrego el atributo class con el valor 'style'-->
	<div id="contenedor" class="style">

	</div>
	```

6. **removeAttributeNode(argumentos)**
	
	Esta función sirve para remover un atributo de algun nodo del DOM. Recibe dos parametros.

	6.1 ```idElement``` : Este debe ser de tipo ```string``` y debe corresponder al atributo de tipo ```id``` del nodo al que le queremos remover el atributo.

	6.2 ```attribute``` : Este debe ser de tipo ```string``` y debe corresponder al valor del atributo que queremos eliminar de nuestro nodo.

	**Ejemplo**

	**_Javascript_**

	```javascript

	domjs.removeAttributeNode("contenedor", "class");

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
