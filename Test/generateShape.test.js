const genShape = require('../Utils/generateShape');

describe('Shape', () => {
  // Test for char length
  describe('More than 3 characters', () => {
    it('should throw an error if logoText contains more than 3 characters', () => {
      const logoText = 'XYXY';
      const textColor = 'black';
      const shapeColor = 'red';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a string with a maximum of 3 characters');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported text color keyword
  describe('Not a text color keyword', () => {
    it('should throw an error if textColor is not a CSS-supported color keyword', () => {
      const logoText = 'XYX';
      const textColor = 'dingdong';
      const shapeColor = 'red';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your text. Supported formats: keyword, hex, rgb, rgba, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color keyword
  describe('Not a shape color keyword', () => {
    it('should throw an error if shapeColor is not a CSS-supported color keyword', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = 'bingbong';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Tests for CSS-supported shape color in hex format
  describe('Not a shape color in hex format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hex format (3 characters)', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '#F2P';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsla');
      expect(shape).toThrowError(err);
    });
  });

  describe('Not a shape color in hex format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hex format (6 characters)', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '#F2F2G6';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsla');
      expect(shape).toThrowError(err);
    });
  });

  describe('Not a shape color in hex format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hex format (0x form)', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '0xfffffg';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color in rgb format
  describe('Not a shape color in rgb format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in rgb format', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '(255, 0, 24)';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color in rgba format
  describe('Not a shape color in rgba format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in rgba format', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '(#f2p, 0, 24)';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color in hsla format
  describe('Not a shape color in hsla format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hsla format', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '(140, 26%, 21%, .2)';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsla');
      expect(shape).toThrowError(err);
    });
  });
});