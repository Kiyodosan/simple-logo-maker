const genShape = require('../utils/generateShape');

describe('Shape', () => {
  // Test for character length.
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

  // Test for CSS-supported text color keyword.
  describe('Not a text color keyword', () => {
    it('should throw an error if textColor is not a CSS-supported color keyword', () => {
      const logoText = 'XYX';
      const textColor = 'dingdong';
      const shapeColor = 'red';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your text. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color keyword.
  describe('Not a shape color keyword', () => {
    it('should throw an error if shapeColor is not a CSS-supported color keyword', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = 'bingbong';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color in rgb format.
  describe('Not a shape color in rgb format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in rgb format', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '(255, 0, 24)';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color in rgba format.
  describe('Not a shape color in rgba format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in rgba format', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '(#f2p, 1.8)';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color in hsl format.
  describe('Not a shape color in hsl format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hsl format', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '(140, 26%, 21%)';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(shape).toThrowError(err);
    });
  });

  // Test for CSS-supported shape color in hsla format.
  describe('Not a shape color in hsla format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hsla format', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '(140, 26%, 21%, 0.2)';

      const shape = () => new genShape.shape(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(shape).toThrowError(err);
    });
  });
});

describe('Circle', () => {
  // Test return value for generateShape() function with Circle class.
  describe('SVG file creation for Circle class', () => {
    it('should return a string for the corresponding SVG file', () => {
      const data = {
        logoText: 'XYX',
        textColor: 'black',
        shape: 'Circle',
        shapeColor: 'red'
      }
      const circle = new genShape.circle(data.logoText, data.textColor, data.shapeColor);
      expect(genShape.generateShape(data)).toEqual(`<svg version="${circle.version}" width="${circle.width}" height="${circle.height}" xmlns="${circle.xmlns}">

  <circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="${circle.shapeColor}" />

  <text x="${circle.x}" y="${circle.y}" font-size="${circle.fontSize}" text-anchor="${circle.textAnchor}" fill="${circle.textColor}">${circle.logoText}</text>

</svg>`);
    });
  });

  // Test for CSS-supported shape color in hex format with Circle class.
  describe('Not a shape color in hex format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hex format (3 characters)', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '#F2P';

      const circle = () => new genShape.circle(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(circle).toThrowError(err);
    });
  });
});

describe('Triangle', () => {
  // Test return value for generateShape() function with Triangle class.
  describe('SVG file creation for Triangle class', () => {
    it('should return a string for the corresponding SVG file', () => {
      const data = {
        logoText: 'XYX',
        textColor: 'black',
        shape: 'Triangle',
        shapeColor: 'red'
      }
      const triangle = new genShape.triangle(data.logoText, data.textColor, data.shapeColor);
      expect(genShape.generateShape(data)).toEqual(`<svg version="${triangle.version}" width="${triangle.width}" height="${triangle.height}" xmlns="${triangle.xmlns}">

  <polygon points="40,170 150,10 260,170" fill="${triangle.shapeColor}" />

  <text x="${triangle.x}" y="${triangle.y}" font-size="${triangle.fontSize}" text-anchor="${triangle.textAnchor}" fill="${triangle.textColor}">${triangle.logoText}</text>

</svg>`);
    });
  });

  // Test for CSS-supported shape color in hex format with Triangle class.
  describe('Not a shape color in hex format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hex format (6 characters)', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '#F2F2G6';

      const triangle = () => new genShape.triangle(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(triangle).toThrowError(err);
    });
  });
});

describe('Square', () => {
  // Test return value for generateShape() function with Square class.
  describe('SVG file creation for Square class', () => {
    it('should return a string for the corresponding SVG file', () => {
      const data = {
        logoText: 'XYX',
        textColor: 'black',
        shape: 'Square',
        shapeColor: 'red'
      }
      const square = new genShape.square(data.logoText, data.textColor, data.shapeColor);
      expect(genShape.generateShape(data)).toEqual(`<svg version="${square.version}" width="${square.width}" height="${square.height}" xmlns="${square.xmlns}">

  <rect x="${square.cx}" y="${square.cy}" width="${square.length}" height="${square.length}" fill="${square.shapeColor}" />

  <text x="${square.x}" y="${square.y}" font-size="${square.fontSize}" text-anchor="${square.textAnchor}" fill="${square.textColor}">${square.logoText}</text>

</svg>`);
    });
  });

  // Test for CSS-supported shape color in hex format with Square class.
  describe('Not a shape color in hex format', () => {
    it('should throw an error if shapeColor is not a CSS-supported color in hex format (0x form)', () => {
      const logoText = 'XYX';
      const textColor = 'black';
      const shapeColor = '0xfffffg';

      const square = () => new genShape.square(logoText, textColor, shapeColor); 
      const err = new Error('Please provide a valid CSS color for your shape. Supported formats: keyword, hex, rgb, rgba, hsl, hsla');
      expect(square).toThrowError(err);
    });
  });
});