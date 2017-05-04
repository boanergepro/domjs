const domjs = (function () {
	
	//Metodo crear nodo

	function createNode (typeElement, textValue, idParentElement) {

		if (typeElement == undefined && textValue == undefined && idParentElement == undefined){
			console.log('creteNode dice: sin parametros.');
			return false
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
			console.log('creteNode dice: parametro id no existe.'); 
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
			console.log('removeNode dice: sin parametro,');
			return false
		}
		else if (document.getElementById(idElement) == null){
			console.log('removeNode dice: parametro id no existe.');
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
			console.log('searchClass dice: sin parametros');
			return false
		}
		else if (idElement == undefined || classSearch == undefined){
			console.log('searchClass dice: faltan parametros.');
			return false
		}
		if (document.getElementById(idElement) == null){
			console.log('searchClass dice: parametro id no existe.');
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
			console.log('seeAttributeNode dice: sin parametros');
			return false
		}
		else if (idElement == undefined || attributeSee == undefined){
			console.log('seeAttributeNode dice: faltan parametros.');
			return false
		}
		else if (document.getElementById(idElement) == null){
			console.log('seeAttributeNode dice: parametro id no existe.');
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
			console.log('addAttributeNode dice: sin parametros');
			return false
		}
		else if (document.getElementById(idElement) == null){
			console.log('addAttributeNode dice: parametro id no existe.');
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
			console.log('removeAttributeNode dice: sin parametros');
			return false
		}
		else if (idElement == undefined || attribute == undefined){
			console.log('seeAttributeNode dice: faltan parametros.');
			return false
		}
		else if (document.getElementById(idElement) == null){
			console.log('removeAttributeNode dice: parametro id no existe.');
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