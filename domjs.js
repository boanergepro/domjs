const domjs = (function () {
	
	//Metodo crear nodo

	function createNode (typeElement, textValue, idParentElement) {

		if (typeElement == undefined && textValue == undefined && idParentElement == undefined){
			console.error('createNode dice: sin parametros.');
			return false
		}
		else if (textValue == undefined && idParentElement == undefined){
			let element = document.createElement(typeElement);
			let parent = document.body;
			parent.appendChild(element);
			return true
		}
		else if (idParentElement == undefined && typeof(typeElement, textValue) == 'string'){
			let element = document.createElement(typeElement);
			let content = document.createTextNode(textValue);
			let parent = document.body;
			element.appendChild(content);
			parent.appendChild(element);
			return true
		}
		else if (document.getElementById(idParentElement) == null){
			console.error('creteNode dice: parametro id no existe.'); 
			return false
		}
		else if (typeof(typeElement , textValue, idParentElement) == 'string'){
			let element = document.createElement(typeElement);
			let content = document.createTextNode(textValue);
			let parent = document.getElementById(idParentElement);
			element.appendChild(content);
			parent.appendChild(element);
			return true
		}
	}

	//Metodo eliminar nodo

	function removeNode (idElement){

		if (idElement == undefined){
			console.error('removeNode dice: sin parametro,');
			return false
		}
		else if (document.getElementById(idElement) == null){
			console.error('removeNode dice: parametro id no existe.');
			return false
		}
		else if (typeof(idElement) == 'string'){
			let element = document.getElementById(idElement);
			element.parentNode.removeChild(element);
			console.log()
			return true
		}
	}

	//Metodo para ver si un nodo tiene una clase o no.
	
	function searchClass (idElement, classSearch){

		if (idElement == undefined && classSearch == undefined){
			console.error('searchClass dice: sin parametros');
			return false
		}
		else if (idElement == undefined || classSearch == undefined){
			console.error('searchClass dice: faltan parametros.');
			return false
		}
		if (document.getElementById(idElement) == null){
			console.error('searchClass dice: parametro id no existe.');
			return false
		}
		else if (typeof(idElement, classSearch) == 'string'){
			let element = document.getElementById(idElement); 
			let exists = element.classList.contains(classSearch);

			if (exists == true){
				return true
			}
			else {
				return false
			}
		}
	}

	//Metodo para ver el valor de algun atributo del nodo.

	function seeAttributeNode (idElement, attributeSee){

		if (idElement == undefined && attributeSee == undefined){
			console.error('seeAttributeNode dice: sin parametros');
			return false
		}
		else if (idElement == undefined || attributeSee == undefined){
			console.error('seeAttributeNode dice: faltan parametros.');
			return false
		}
		else if (document.getElementById(idElement) == null){
			console.error('seeAttributeNode dice: parametro id no existe.');
			return false
		}
		else if (typeof(idElement,attributeSee) == 'string'){
			let element = document.getElementById(idElement);
			let attribute = element.getAttribute(attributeSee);

			if (attribute == null){
				return false
			}
			else {
				return attribute
			}
		}
	}

	//Metodo agregar atributos a un nodo.

	function addAttributeNode (idElement, attribute, valueAttribute){

		if (idElement == undefined && attribute == undefined && valueAttribute == undefined) {
			console.error('addAttributeNode dice: sin parametros');
			return false
		}
		else if (document.getElementById(idElement) == null){
			console.error('addAttributeNode dice: parametro id no existe.');
			return false
		}
		else if (typeof(idElement, attribute, valueAttribute) == 'string') {

			let element = document.getElementById(idElement);
			element.setAttribute(attribute, valueAttribute);
			return true

		}
	}

	//Metodo eliminar atributos de un nodo.

	function removeAttributeNode (idElement, attribute){

		if (idElement == undefined && attribute == undefined) {
			console.error('removeAttributeNode dice: sin parametros');
			return false
		}
		else if (idElement == undefined || attribute == undefined){
			console.error('seeAttributeNode dice: faltan parametros.');
			return false
		}
		else if (document.getElementById(idElement) == null){
			console.error('removeAttributeNode dice: parametro id no existe.');
			return false
		}
		else if (typeof(idElement, attribute) == 'string') {
			let element = document.getElementById(idElement);
			element.removeAttribute(attribute);
			return true
		}
	}

	//API Publica
	return {

		createNode,
		removeNode,
		searchClass,
		seeAttributeNode,
		addAttributeNode,
		removeAttributeNode

	}
}())

/*

- usar querySelector("") en la funcion searchClass()

- Agregar la posibilidad de agregarle atributos al elemento creado con createNode()
- Usar el objeto arguments en todas las funciones.
- Refactoriar el codigo de la funcion createNode()
  para que los atributos se pasen por medio de un objeto. 




  function crear (tipo,atributos){
	var args = atributos;
	var element = document.createElement(tipo);
	for (atr in args){
		element.setAttribute(atr,args[atr]);
	}
	return element
 }
 //Llamada
 crear('div',{class: 'btn', name : 'content')
 Se le debe pasar coo paraetro un objeto con los atributos que se quieren añadir.
*/