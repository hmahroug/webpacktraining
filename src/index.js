import "./services/avion";

import {YEAR} from "./services/avion"; //  import d'une constate nommé

import * as avion from "./services/avion"; // import de tout ce qui était exporté dans le fichier avion

import  adp from './services/aeroport'; // import default

import test from './services/deneigement';

import "../src/assets/style.css";
import "../src/assets/style2.css";
import "../src/assets/style3.less";

import image from './assets/images/A330.jpg';

 

 
const homeImg = document.getElementById('image');
homeImg.src = image;

let a = new adp();

let msg=test();
 
console.log(msg) ;
console.log(YEAR);
console.log(avion.YEAR);