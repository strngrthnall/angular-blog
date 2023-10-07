import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.responsive.component.css'
  ]
})
export class BigCardComponent implements OnInit {

  pictureCover: string = ''
  cardTitle: string = ''
  cardDescription: string = ''
  publishDate: string = ''

  @Input()
  Id:string = '0'

  constructor() { }

  ngOnInit(): void {
    this.setComponentValues(this.Id)
  }

  setComponentValues(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.cardTitle = result.title
    this.publishDate = result.publishDate
    this.cardDescription = result.description
    this.pictureCover = result.picture

  }

}
