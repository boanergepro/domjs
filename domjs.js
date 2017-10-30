const domjs = (function () {

    const msj = {

        createNode: "createNode:",
        removeNode: "removeNode:",
        searchClass: "searchClass:",
        seeAttributeNode: "seeAttributeNode:",
        addAttributeNode: "addAttributeNode:",
        removeAttributeNode: "removeAttributeNode:"

    };

    //Metodo crear nodo

    function createNode(data) {
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

                let valor = new RegExp("^[a-z1-9]*$");
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
                        for (key in attributes) {
                            element.setAttribute(key, attributes[key]);
                        }
                        element.appendChild(textContent);
                        parent.appendChild(element);
                        console.log(`${msj.createNode} Se creo el nodo hijo de otro nodo y con atributos`);
                        return true;
                    }

                    else if (exisIdParent && exisTextContent) {

                        let element = document.createElement(type);
                        let textContent = document.createTextNode(text);
                        let parent = document.getElementById(idParent);

                        element.appendChild(textContent);
                        parent.appendChild(element);
                        console.log(`${msj.createNode} El nodo fue creado hijo del nodo con el id ${ idParent }`);
                        return true;
                    }

                    else if (exisIdParent && exisAttribute) {

                        let element = document.createElement(type);
                        let parent = document.createTextNode(text);
                        //Add attributes
                        for (key in attributes) {
                            element.setAttribute(key, attributes[key]);
                        }
                        parent.appendChild(element);
                        console.log(`${msj.createNode} El nodo fue creado hijo del nodo con el id ${ idParent } y con atributos`);
                        return true;
                    }

                    else if (exisTextContent && exisAttribute) {

                        let element = document.createElement(type);
                        let textContent = document.createTextNode(text);
                        let parent = document.body;

                        //Add attributes
                        for (key in attributes) {
                            element.setAttribute(key, attributes[key]);
                        }
                        element.appendChild(textContent);
                        parent.appendChild(element);
                    }

                    else if (exisIdParent) {

                        let element = document.createElement(type);
                        let parent = document.getElementById(idParent);

                        parent.appendChild(element);
                        console.log(`${msj.createNode} El nodo fue creado hijo del nodo con el id ${idParent}`);
                        return true;
                    }

                    else if (exisTextContent) {

                        let textContent = data.textContent;
                        let element = document.createElement(type);
                        let nodoText = document.createTextNode(textContent);
                        element.appendChild(nodoText);
                        let parent = document.body;
                        parent.appendChild(element);
                        console.log(`${msj.createNode} El nodo fue creado hijo de body`);
                        console.log(`Con el texto ${textContent}`);
                        return true;

                    }
                    else if (exisAttribute) {

                        let attributes = data.attributes;

                        let element = document.createElement(type);
                        for (key in attributes) {
                            element.setAttribute(key, attributes[key]);
                        }
                        let parent = document.body;
                        parent.appendChild(element);
                        console.log(`${msj.createNode} El nodo fue creado hijo de body, si tiene atributos.`);
                        return true;

                    }
                    else {

                        let element = document.createElement(type);
                        let parent = document.body;
                        parent.appendChild(element);
                        console.log(`${msj.createNode} El nodo fue creado hijo de body.`);
                        return true;

                    }
                }
                else {
                    console.error(`${msj.createNode} El tipo de elemento es incorrecto.`);
                    return false;
                }
            }
            else {
                console.error(`${msj.createNode} No ha especificado el tipo de elemento`);
                return false;
            }
        }
        else {
            console.error(`${msj.createNode} No ha especificado ningun parametro.`);
            return false;
        }
    }

    //Metodo eliminar nodo.

    function removeNode(idElement) {

        if (idElement == undefined) {
            console.error(`${msj.removeNode} No ha especificado ningun parametro`);
            return false;
        }
        else if (document.getElementById(idElement) == null) {
            console.error(`${msj.removeNode} parametro id no existe.`);
            return false;
        }
        else if (typeof(idElement) == 'string') {
            let element = document.getElementById(idElement);
            element.parentNode.removeChild(element);
            console.log(`${msj.removeNode} Nodo eliminado.`);
            return true;
        }
    }

    //Metodo para ver si un nodo tiene una clase o no.

    function searchClass(idElement, classSearch) {

        if (idElement == undefined && classSearch == undefined) {
            console.error(`${msj.searchClass} sin parametros`);
            return false;
        }
        else if (idElement == undefined || classSearch == undefined) {
            console.error(`${msj.searchClass}  faltan parametros.`);
            return false;
        }
        if (document.getElementById(idElement) == null) {
            console.error(`${msj.searchClass}  parametro id no existe.`);
            return false;
        }
        else if (typeof(idElement, classSearch) == 'string') {
            let element = document.getElementById(idElement);
            let exists = element.classList.contains(classSearch);

            if (exists == true) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    //Metodo para ver el valor de algun atributo del nodo.

    function seeAttributeNode(idElement, attributeSee) {

        if (idElement == undefined && attributeSee == undefined) {
            console.error(`${msj.seeAttributeNode} sin parametros`);
            return false;
        }
        else if (idElement == undefined || attributeSee == undefined) {
            console.error(`${msj.seeAttributeNode} faltan parametros.`);
            return false;
        }
        else if (document.getElementById(idElement) == null) {
            console.error(`${msj.seeAttributeNode} parametro id no existe.`);
            return false;
        }
        else if (typeof(idElement, attributeSee) == 'string') {
            let element = document.getElementById(idElement);
            let attribute = element.getAttribute(attributeSee);

            if (attribute == null) {
                return false;
            }
            else {
                return attribute;
            }
        }
    }

    //Metodo agregar atributos a un nodo.

    function addAttributeNode(idElement, attributes) {

        if (idElement && attributes) {

            if (document.getElementById(idElement) == null) {
                console.error(`${msj.addAttributeNode} parametro id no existe.`);
                return false;
            }
            else if (typeof(idElement) == "string" && typeof(attributes) == "object") {

                let element = document.getElementById(idElement);

                for (key in attributes) {
                    element.setAttribute(key, attributes[key]);
                }
            }
            else {
                console.error(`${msj.addAttributeNode} Algun parametro no fue pasado o es incorrecto.`);
                return false;
            }
        }
        else {
            console.error(`${msj.addAttributeNode} Algun parametro no fue pasado o es incorrecto`)
        }
    }

    //Metodo eliminar atributos de un nodo.

    function removeAttributeNode(idElement, attribute) {

        if (idElement == undefined && attribute == undefined) {
            console.error(`${msj.removeAttributeNode} sin parametros`);
            return false;
        }
        else if (idElement == undefined || attribute == undefined) {
            console.error(`${msj.removeAttributeNode} faltan parametros.`);
            return false;
        }
        else if (document.getElementById(idElement) == null) {
            console.error(`${msj.removeAttributeNode} parametro id no existe.`);
            return false;
        }
        else if (typeof(idElement, attribute) == 'string') {
            let element = document.getElementById(idElement);
            element.removeAttribute(attribute);
            return true;
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
}());
