// Generates code for a logo based on user specifications.
function generateShape(data) {
  switch (data.shape) {
    case 'Circle': const circle = new Circle(data.logoText, data.textColor, data.shapeColor);
      return `<svg version="${circle.version}" width="${circle.width}" height="${circle.height}" xmlns="${circle.xmlns}">
    
  <circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="${circle.shapeColor}" />
    
  <text x="${circle.x}" y="${circle.y}" font-size="${circle.fontSize}" text-anchor="${circle.textAnchor}" fill="${circle.textColor}">${circle.logoText}</text>
    
</svg>`;
      break;

    case 'Triangle': const triangle = new Triangle(data.logoText, data.textColor, data.shapeColor);
      return `<svg version="${triangle.version}" width="${triangle.width}" height="${triangle.height}" xmlns="${triangle.xmlns}">

  <polygon points="40,170 150,10 260,170" fill="${triangle.shapeColor}" />

  <text x="${triangle.x}" y="${triangle.y}" font-size="${triangle.fontSize}" text-anchor="${triangle.textAnchor}" fill="${triangle.textColor}">${triangle.logoText}</text>

</svg>`;
      break;

    case 'Square': const square = new Square(data.logoText, data.textColor, data.shapeColor);
      return `<svg version="${square.version}" width="${square.width}" height="${square.height}" xmlns="${square.xmlns}">

  <rect x="${square.cx}" y="${square.cy}" width="${square.length}" height="${square.length}" fill="${square.shapeColor}" />

  <text x="${square.x}" y="${square.y}" font-size="${square.fontSize}" text-anchor="${square.textAnchor}" fill="${square.textColor}">${square.logoText}</text>

</svg>`;
      break;
  }
}

// Checks if logoText has a maximum of 3 characters.
function isCorrectLength(data) {
  if (data.logoText.length > 3) {
    throw new Error(
      'Please provide a logo with a maximum of 3 characters'
    )
  }
}

// Checks if the user-provided colors are supported by CSS.
function colorSupported(data) {
  if (!(CSS.supports(color, data.textColor))) {
    throw new Error(
      'Please provide a valid CSS color for your text'
    );
  }

  if (!(CSS.supports(color, data.shapeColor))) {
    throw new Error(
      'Please provide a valid CSS color for your shape'
    );
  }
}

class Shape {
  constructor(logoText, textColor, shapeColor) {


    this.version = 1.1;
    this.width = 300;
    this.height = 200;
    this.xmlns = "http://www.w3.org/2000/svg";

    this.x = 150;
    this.y = 120;
    this.fontSize = 60;
    this.textAnchor = "middle";

    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
    this.cx = 150;
    this.cy = 100;
    this.r = 80;
  }
}

class Triangle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
    this.base = 160;
    this.baseHeight = 160;
  }
}

class Square extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
    this.cx = 70;
    this.cy = 20;
    this.length = 160;
  }
}

module.exports = { generateShape: generateShape }