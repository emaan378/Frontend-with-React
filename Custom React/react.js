function customRender(reactElement,container){
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute("href",reactElement.props.href)
//     domElement.setAttribute("target",reactElement.props.target)
//     container.appendChild(domElement)

const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reatElement.children
for(const prop in reactElement.props){
    if (prop==="children")continue
    domElement.setAttribute(prop,reactElemet.props[prop])
}
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

const mainContainer=document.querySelector("#root")
customRender(reactElem,mainContainer)
