import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
@Input()  questions: number[] = [];

  constructor(question: Question) {}

  ngOnInit(): void {}
}
