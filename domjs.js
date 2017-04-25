/*
					°_°_°_°_°_°_°_°_°_°_°_°_°
					||||||||||DOMJS||||||||||
					_°_°_°_°_°_°_°_°_°_°_°_°_
*/

const domjs = {
	
	//Metodo crear nodo

	_createNode : function(typeElement, textValue, idParentElement) {
	
		if(typeElement && textValue && idParentElement == undefined){
			alert('Algún parametro no ha sido proporcionado a la funcion _createNode.');
		}
		else if(document.getElementById(idParentElement) == null){
			alert(`No existe ningun elemento en el DOM con el id = ${idParentElement}`);
		}
		else if (typeof(typeElement , textValue, idParentElement) == "string"){
			let element = document.createElement(typeElement);
			let content = document.createTextNode(textValue);
			let parent = document.getElementById(idParentElement);
			element.appendChild(content);
			parent.appendChild(element);
		}
	},

	//Metodo eliminar nodo

	_removeNode : function(idElement){

		if(idElement == undefined){
			alert('El parametro idElement no ha sido proporcionado al metodo.');
		}
		else if(document.getElementById(idElement) == null){
			alert(`No existe ningun elemento en el DOM con el id = ${idElement}`);
		}
		else if (typeof(idElement) == 'string'){
			let element = document.getElementById(idElement);
			element.parentNode.removeChild(element);
		}
	},

	//Metodos para ver los atributos de un nodo

	//Metodo ver si un nodo tiene una clase o no
	_searchClass : function(idElement, classSearch){
		
		if(idElement && classSearch == undefined){
			alert('Algún parametro no ha sido proporcionado al metodo _searchClass.');
		}
		else if(document.getElementById(idElement) == null){
			alert(`No existe ningun elemento en el DOM con el id = ${idElement}`);
		}
		else if(typeof(idElement, classSearch) == 'string'){
			let element = document.getElementById(idElement); 
			let exists = element.classList.contains(classSearch);

			if(exists == true){
				alert(`El nodo si tiene una clase llamada = '${classSearch}'`);
			}
			else{
				alert(`El nodo no tiene una clase llamada = ${classSearch}`);
			}
		}
	},

	//Metodo para ver el valor de algun atributo del nodo.

	_seeAttributeNode: function(idElement, attributeSee){

		if(idElement && attributeSee == undefined){
			alert('Algún parametro no ha sido proporcionado al metodo _seeAttributeNode.');
		}
		else if(document.getElementById(idElement) == null){
			alert(`No existe ningun elemento en el DOM con el id = ${idElement}`);
		}
		else if(typeof(idElement,attributeSee) == 'string'){
			let element = document.getElementById(idElement);

			let attribute = element.getAttribute(attributeSee);

			if(attribute == null){
				alert(`El nodo no tiene un atributo '${attributeSee}'`)
			}
			else{
				alert(`El nodo si tiene un atributo '${attributeSee}' y su valor es  '${attribute}'`);
			}
		}
	},

	//Metodo agregar atributos a un nodo.

	_addAttributeNode : function(idElement, attribute, valueAttribute){

		if (idElement && attribute && valueAttribute == undefined) {
			alert('Algún parametro no ha sido proporcionado al metodo _addAttributeNode.');
		}
		else if(document.getElementById(idElement) == null){
			alert(`No existe ningun elemento en el DOM con el id = ${idElement}`);
		}
		else if (typeof(idElement, attribute, valueAttribute) == 'string') {

			let element = document.getElementById(idElement);
			element.setAttribute(attribute, valueAttribute);
			alert(`El atributo ${attribute} con el valor ${valueAttribute} fue añadido al nodo.`);

		}
	},

	//Metodo eliminar atributos de un nodo.

	_removeAttributeNode : function(idElement, attribute){

		if (idElement && attribute == undefined) {
			alert('Algún parametro no ha sido proporcionado al metodo _removeAttributeNode.');
		}
		else if(document.getElementById(idElement) == null){
			alert(`No existe ningun elemento en el DOM con el id = ${idElement}`);
		}
		else if (typeof(idElement, attribute) == 'string') {
			let element = document.getElementById(idElement);
			element.removeAttribute(attribute);
			alert(`El atributo ${attribute} fue eliminado del nodo del DOM.`);
		}
	}
}