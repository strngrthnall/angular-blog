import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css'
  ]
})
export class SmallCardComponent implements OnInit {

  pictureCover: string = ''
  cardTitle: string = ''
  publishDate :string = ''

  @Input()
  Id: string = '0'

  constructor() { }

  ngOnInit(): void {
    this.setComponentValues(this.Id)
  }

  setComponentValues(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.cardTitle = result.title
    this.publishDate = result.publishDate
    this.pictureCover = result.picture

  }

}
