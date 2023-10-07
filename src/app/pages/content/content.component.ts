import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {

  pictureCover: string = ''

  contentTitle: string = ''

  publishDate: string = ''

  contentDescription: string = ''

  private id:string | null = '0'

  constructor( private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get('id')
    )

    this.setComponentValues(this.id)
  }

  setComponentValues(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.contentTitle = result.title
    this.publishDate = result.publishDate
    this.contentDescription = result.description
    this.pictureCover = result.picture

  }

}
