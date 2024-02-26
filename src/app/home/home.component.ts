import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  arr: any[] = [];
  copyArr:any = []
  info: any = {};
  currentPage: number = 40;
  characterName: string = ""
  ngOnInit(): void {
    this.fetchData();
  }
  nextPage() {
    this.currentPage += 1;
    this.fetchData();
  }
  prevPage() {
    this.currentPage -=1;
    this.fetchData();
  }

  fetchData() {
    this.http
      .get(`https://rickandmortyapi.com/api/character?page=${this.currentPage}`)
      .subscribe((data: any) => {
        this.arr = data.results;
        this.info = data.info;
        this.copyArr = [...this.arr]
      });
  }
  filterCharacters(){
    this.arr = this.copyArr
    this.arr = this.arr.filter(i=> i.name.toLowerCase().includes(this.characterName.toLowerCase()))
  }
}
