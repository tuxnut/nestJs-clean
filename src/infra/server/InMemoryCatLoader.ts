import { Injectable } from '@nestjs/common';
import { Cat } from 'src/domain/Cat';
import { CatLoader } from 'src/domain/CatLoader';

@Injectable()
export class InMemoryCatLoader implements CatLoader {
  protected catsInMemory: Cat[] = [];

  getAllCats(): Promise<Cat[]> {
    return Promise.resolve(this.catsInMemory);
  }

  getCatByName(name: string): Promise<Cat | undefined> {
    return Promise.resolve(this.catsInMemory.find((cat) => cat.name === name));
  }

  createCat(cat: Cat): Promise<Cat> {
    this.catsInMemory.push(cat);
    return Promise.resolve(cat);
  }
}
