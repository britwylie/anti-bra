// listen for checkForWord request, call getTags which includes callback to sendResponse
var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/mask/g, 'bra');
  value = value.replace(/Mask/g, 'Bra');
  value = value.replace(/masked/g,'bra-wearing');
  value = value.replace(/Masked/g,'Bra-Wearing');
//  value = value.replace(/masks/g, 'bras');
//  value = value.replace(/Masks/g, 'Bras');
  node.nodeValue = value;
}

window.onload = findAndReplace();