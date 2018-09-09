export class Cat {
  constructor(public name: string, public age: number, public gender: number, public type: string) {}
}

export class CatsStorageService {
  catList: Cat[] = [
    new Cat('Вася', 2, 1, 'Длинношёрстный'),
    new Cat('Маша', 5, 2, 'Короткошёрстный'),
    new Cat('Маруся', 1, 2, 'Сиамский'),
    new Cat('Пуфик', 9, 1, 'Шотландский'),
    new Cat('Карамелька', 4, 2, 'Мейн-кун'),
    new Cat('Котейка', 5, 1, 'Длинношёрстный'),
    new Cat('Рыжик', 1, 1, 'Шотландский'),
    new Cat('Пушок', 7, 1, 'Короткошёрстный'),
  ];

  getCatList(): Cat[] {
    return this.catList;
  }
}
