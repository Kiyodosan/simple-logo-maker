const genShape = require('../Utils/generateShape');

describe('Shape', () => {
  // test for char length
  describe('More than 3 characters', () => {
    it('should throw an error if logoText contains more than 3 characters', () => {
      const logoText = 'XYXY';
      const textColor = 'black';
      const shapeColor = 'red';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a logo with a maximum of 3 characters');
      expect(shape).toThrowError(err);
    });
  });

  // test for CSS-supported text color
  describe('Not a text color', () => {
    it('should throw an error if textColor is not a CSS-supported color', () => {
      const logoText = 'XYX';
      const textColor = 'dingdong';
      const shapeColor = 'red';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your text');
      // const err = new Error('CSS is not defined');
      expect(shape).toThrowError(err);

      // https://stackoverflow.com/questions/49096093/how-do-i-test-a-jest-console-log
/*       const logSpy = jest.spyOn(console, 'log');
      console.log('Please provide a valid CSS color for your text');
      expect(logSpy).toHaveBeenCalledWith('Please provide a valid CSS color for your text'); */
    });
  });

  // test for CSS-supported shape color
  describe('Not a shape color', () => {
    it('should throw an error if shapeColor is not a CSS-supported color', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = 'bingbong';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      // const err = new Error('Please provide a valid CSS color for your shape');
/*       const err = new Error('CSS is not defined');
      expect(shape).toThrowError(err); */
      // expect(genShape.shape(logoText, textColor, shapeColor)).toThrowError(err);

      const logSpy = jest.spyOn(console, 'log');
      console.log('Please provide a valid CSS color for your shape');
      expect(logSpy).toHaveBeenCalledWith('Please provide a valid CSS color for your shape');
    });
  });
});

/* CSS.supports(propertyName, propertyValue)

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
/^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(testVar) */