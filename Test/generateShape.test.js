// test for char length

function isCorrectLength(data) {
  
}

// test for CSS-supported color

CSS.supports(propertyName, propertyValue)

CSS.supports('color','red') 
//True.
CSS.supports('color', '#007')
//True. 

CSS.supports('color', 'random')
//False. 
CSS.supports('colours', 'red')
//False. 

// alternative test for CSS-supported color

const isColor = (strColor) => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}

// test for hex color
testVar = "#AABBCC80";
/^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(testVar)