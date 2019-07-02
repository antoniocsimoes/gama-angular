import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
   cont = 0;
   

  constructor() { }
   

  ngOnInit() {  

    let counter = setInterval(() => {
      if (this.cont > 15) {
        //clearInterval(counter);
        this.cont = 0;
      }
      this.cont ++;
    }, 1000);   
  }



}
