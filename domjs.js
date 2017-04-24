/*
					°_°_°_°_°_°_°_°_°_°_°_°_°
					||||||||||DOMJS||||||||||
					_°_°_°_°_°_°_°_°_°_°_°_°_
*/

const domjs = {

	//Metodos

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
	}
}