# DOMJS

Esta es una libreria creada para la manipulación del DOM (Document Objet Model).


### Añadirlo a nuestro documento: 

```javascript
<script type="text/javascript" src="domjs.js"></script>
```
### El Objeto ```domjs``` ofrece una serie de metodos para manipular el DOM.

1. **_createNode(argumentos)**
	
	Este metodo sirve para crear un nodo en nuestro arbol DOM. Dicho metodo recibe tres parametros.

	1.1 ```typeElement``` : Este debe ser de tipo ```string``` y debe corresponder al nombre de la etiqueta del nodo que queremos crear.
	**Ejemplo** ```div``` para crear un nodo con la etiqueta ```<div>```.

	1.2 ```textValue``` : Este debe ser de tipo ```string``` y debe corresponder al contenido que queremos que tenga nuestro nodo.
	**Ejemplo** Si le pasamos un ```string``` vacio ```""``` el elemento se creara in ningún texto.
	
	1.3 ```idParentElement``` : Este debe ser de tipo ```string``` y debe responder al atributo de tipo ```id``` del padre del nodo que queremos eliminar.  

2. **_removeNode(argumentos)**

	Este metodo sirve para eliminar un nodo del DOM. Dicho metodo solo recive un parametro, el cual debe ser de tipo ```string``` y corresponder con el atributo ```id``` del nodo que queremos eliminar.

### Como emplear la libreria en el codigo:

1. **Ejemplo**

	Se debe usar ```domjs``` para usar el objeto, seguido se debe colocar un ```.``` y el nombre del metodo que se desea usar con sus argumentos.

```javascript
	domjs.nombreFuncion(argumentos)
```
