export class Book {
  
 id: number
 title: string
 author: string
 isbn: string
 publishYear: number
 reserved: boolean
 constructor(id:number,title:string,author:string,isbn:string,publisneyear:number,reserved:boolean){
    this.id=id+1
    this.title=title
    this.author=author
    this.isbn=isbn
    this.publishYear=publisneyear
    this.reserved=reserved

 }
}
