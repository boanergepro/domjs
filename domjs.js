const domjs = (function () {
	
	//Metodo crear nodo

	function createNode (data){
		/*
		valores del objeto

			typeElement
			idParent
			attributes
			textContent
		*/
		if (data) {

			//Saber si el objeto data contiene la propiedad typeElement
			let exisTypeElement = data.hasOwnProperty("typeElement");

			if (exisTypeElement) {

				let valor = new RegExp("^[a-zA-Z]*$");
				let isString = valor.test(data.typeElement);
				let typeElement = data.typeElement;

				if (isString) {

					let type = typeElement.toLowerCase();
					let exisIdParent = data.hasOwnProperty("idParent");
					let exisTextContent = data.hasOwnProperty("textContent");
					let exisAttribute = data.hasOwnProperty("attributes");

					let idParent = data.idParent;
					let attributes = data.attributes;
					let text = data.textContent;

					if (exisIdParent && exisTextContent && exisAttribute) {

						let element = document.createElement(type);
						let parent = document.getElementById(idParent);
						let textContent = document.createTextNode(text);
						//Add attributes
						for (key in attributes){
							element.setAttribute(key,attributes[key]);
						}
						element.appendChild(textContent);
						parent.appendChild(element);
						console.log("Se creo el nodo hijo de otro nodo y con atributos");
						return true;
					}

					else if (exisIdParent && exisTextContent) {

						let element = document.createElement(type);
						let textContent = document.createTextNode(text);
						let parent = document.getElementById(idParent);

						element.appendChild(textContent);
						parent.appendChild(element);
						console.log(`El nodo fue creado hijo del nodo con el id ${ idParent }`)
						return true;
					}

					else if (exisIdParent && exisAttribute) {

						let element = document.createElement(type);
						let parent = document.createTextNode(text);
						//Add attributes
						for (key in attributes){
							element.setAttribute(key,attributes[key]);
						}
						parent.appendChild(element);
						console.log(`El nodo fue creado hijo del nodo con el id ${ idParent } y con atributos`);
						return true;
					}

					else if (exisTextContent && exisAttribute) {
						
						let element = document.createElement(type);
						let textContent = document.createTextNode(text);
						let parent = document.body;

						//Add attributes
						for (key in attributes){
							element.setAttribute(key,attributes[key]);
						}
						element.appendChild(textContent);
						parent.appendChild(element);
					}

					else if (exisIdParent){

						let element = document.createElement(type);
						let parent = document.getElementById(idParent);

						parent.appendChild(element);
						console.log(`El nodo fue creado hijo del nodo con el id ${idParent}`)
						return true;
					}

					else if (exisTextContent){

						let textContent = data.textContent;
						let element = document.createElement(type);
						let nodoText = document.createTextNode(textContent);
						element.appendChild(nodoText);
						let parent = document.body;
						parent.appendChild(element);
						console.log("El nodo fue creado hijo de body");
						console.log(`Con el texto ${textContent}`);
						return true;

					}
					else if (exisAttribute) {

						let attributes = data.attributes;

						let element = document.createElement(type);
						for (key in attributes){
							element.setAttribute(key,attributes[key]);
						}
						let parent = document.body;
						parent.appendChild(element)
						console.log("El nodo fue creado hijo de body, si tiene atributosS.");
						return true;

					}
					else{

						let element = document.createElement(type);
						let parent = document.body;
						parent.appendChild(element);
						console.log("El nodo fue creado hijo de body.");
						return true;
						
					}
				} 
				else{
					console.error("El tipo de elemento es incorrecto.");
					return false;
				}
			}
			else{
				console.error("No ha especificado el tipo de elemento");
					return false;
			}
		}
		else{
			console.error("No ha especificado ningun parametro");
					return false;
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