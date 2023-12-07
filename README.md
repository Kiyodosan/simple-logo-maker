
# Simple Logo Maker

___

## Table of Contents

* [Project Description](#project-description)
* [How to run this project](#how-to-run-this-project)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Project Description

This project is a logo generator that prompts the user for logo specifications and creates an SVG file containing the information given.

## How to run this project

[![Simple Logo Maker - demo](<./assets/images/Simple Logo Maker - demo.png>)](https://put-link-here)

Make sure Node.js is installed on your device. You can open the command terminal and enter "node -v" to check if node is installed. If the command terminal responds back with a version of Node, then it is installed. Otherwise, go to https://nodejs.org/en/download/ and download the LTS version of Node for the appropriate OS that you are using (Windows, Mac, Linux, etc.).

Open the command terminal (if you haven't already done so). Enter "node index.js" to initiate the Simple Logo Maker.

## Usage

After initiating the Simple Logo Maker, you will be expected to answer a few prompts.

When prompted for a text or shape color, input a color using any of these formats:

### keyword

Examples:
  * white
  * BLUE
  * Black

### hex

Examples:
  * #fff
  * #0000FF
  * 0x000000

### rgb

Examples:
  * rgb(255,255,255)
  * rgb(0, 0, 255)

### rgba

Examples:
  * rgba(255,255,255,0.3)
  * rgba(0, 0, 255, 1.6)
  * rgba(#000, .5)

### hsl

Examples:
  * hsl(240,100%,50%)
  * hsl(0, 0%, 100%)

### hsla

Examples:
  * hsla(240,100%,50%,2.7)
  * hsla(0, 0%, 100%, .2)

Sass colors are supported, as shown in the third rgba example.

When you reach the prompt, "Choose a shape:", you may select either a Circle, Triangle, or Square by using the "Up" and "Down" arrow keys to navigate the list and pressing the "Enter" key to confirm.

When finished answering all prompts, a logo.svg file is created in the dist folder using the info you provided.

## Credits

Tyler Odo

RegEx sample for checking hex, rgb, rgba, and hsla format:
https://regexr.com/39cgj

## License

Default