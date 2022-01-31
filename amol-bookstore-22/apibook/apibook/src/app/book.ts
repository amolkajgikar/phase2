//model class is use to map the json data from REST API

export class Book {
    constructor(
      public _id:string,
      public name:string,
      public author:string,
      public imgSrc:string,
      public price:number){}  
  }

