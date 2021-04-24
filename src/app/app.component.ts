 import { Component, ElementRef, ViewChild } from '@angular/core';
 import Typewriter from 't-writer.js';
 
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   
    

  constructor() { 
  }
 
  ngOnInit():void{
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
       
    })
    
    writer
    .type('MY')
      .rest(500)
       .changeOps({ deleteSpeed: 80 })
      .remove(5)
      .type('WORK')
      .rest(500)
      .remove(10)
      .type('AND PRACTICAL KNOWELDGE OF')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(26)
      .type('PROCESSES AND TECHNOLOGY')
      .rest(500)
      .clear()
       
      .start()
}

  
 


 

  




}
