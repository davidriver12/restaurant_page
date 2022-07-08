import { printHome } from "./printHome.js";
import { printMenu } from './printMenu.js'

let menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', function(){
    printMenu();
});

let homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', function(){
    printHome();
});

printHome();