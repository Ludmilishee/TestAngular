import { Component, OnInit } from '@angular/core';
import {Cat, CatsStorageService} from '../cats-storage.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: Cat[] = []

  constructor(private catsStorageService: CatsStorageService) { }

  ngOnInit() {
    this.cats = this.catsStorageService.getCatList();
  }
}
