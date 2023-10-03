function Select(selector){
    let element = document.querySelector(selector);
    if(element == null){
        throw new Error(`Element is null. Selector - ${selector}.`);
    }
    return element;
}