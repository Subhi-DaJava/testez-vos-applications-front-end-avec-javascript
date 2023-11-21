/**
 * 
 * @param {string} name 
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World";
    }

    if(name === 'Subhi') {
        return "Bonjour, Subhi";
    }

    if(name === 'Alice') {
        return "Hello, Alice";
    }

    return `Hello, ${name}`
}
