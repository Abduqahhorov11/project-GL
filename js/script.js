'use strict';

// LOADER

const loader = document.querySelector('.loader1'),
      loading = document.querySelector('.loading');

setTimeout( () =>{
   loading.style.opasity = '1';
   setTimeout( () =>{
   loading.style.display = 'none';
   }, 4300);
}, 500);      

setTimeout( () =>{
   loader.style.opasity = '1';
   setTimeout( () =>{
    loader.style.display = 'none';
   },4300);
},500);