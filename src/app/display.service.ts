 
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root'
  })
  export class DisplayService {
    
    displayArray(array: any[]): void {
      console.log("Array is displayed by Display service:");
      array.forEach(item => console.log(item));
    }
  }