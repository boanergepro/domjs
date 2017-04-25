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
		else if (typeof(typeElement) && typeof(textValue) && typeof(idParentElement) == "string"){
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
			alert('El parametro idElement no ha sido proporcionado a la funcion.');
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
	_searchClass : function(idElement, classElement){
		
		if(idElement && classElement == undefined){
			alert('Algún parametro no ha sido proporcionado al metodo _searchClass.');
		}
		else if(typeof(idElement) && typeof(classElement) == 'string'){
			let element = document.getElementById(idElement); 
			let exists = element.classList.contains(classElement);

			if(exists == true){
				alert(`El nodo si tiene una clase llamada = '${classElement}'`);
			}
			else{
				alert(`El nodo no tiene una clase llamada = ${classElement}`);
			}
		}

	},
}