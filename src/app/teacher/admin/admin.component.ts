import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  actQuiz: number = 0;
  quests: string = '';

  quizes: Quiz[] =
    [
      {
        id: 1, title: "JS", description: "Array methods",
        questions: [1, 2, 3, 4],
        active: true
      },
      {
        id: 2, title: "JS", description: "Array methods",
        questions: [1, 2, 3, 4],
        active: true
      },
      {
        id: 3, title: "JS", description: "Array methods",
        questions: [1, 2, 3, 4],
        active: true
      },
    ];


  constructor() { }

  ngOnInit(): void {
  }

  questions(q: Quiz): string  {
    this.quests = '';
    if (q.questions.length) {
      this.quests += q.questions[0];
      for (let i = 1; i < q.questions.length; i++) {
        this.quests = this.quests + ', ' + q.questions[i];
      }
    }
    return this.quests;
  }

}
