import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
let books:Book[]=[]

@Injectable()
export class BookService {
  
  create(createBookDto: CreateBookDto) {
    let book:Book=new Book(books.length+1,createBookDto.title,createBookDto.author,createBookDto.isbn,createBookDto.publishYear,false)
    books.push(book)
    return book
  }

  findAll() {
    return  JSON.stringify(books)
  }

  findOne(id: number) {
    return books[id-1];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    let book:Book=new Book(id,updateBookDto.title,updateBookDto.author,books[id-1].isbn,updateBookDto.publishYear,updateBookDto.reserved)
    books[id-1]=book
    return book[id-1]
  }

  remove(id: number) {
    if(books[id-1]){

      books.splice(id-1,1);
    }
    
  }
}
