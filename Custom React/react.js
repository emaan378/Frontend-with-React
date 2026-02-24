function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute("href",reactElement.propes.href)
    domElement.setAttribute("target",reactElement.propes.target)
    container.appendChild(domElement)
}
const reactElem={
    type:"a",
    props:{
        href:"https://www.google.com",
        target:'_blank'
    },
    children:"click me to visit Google"
}

const mainContainer=document.querySelector("root")
customRender(reactElem,mainContainer)
