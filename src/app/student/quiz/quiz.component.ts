import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Question } from 'src/app/model/question';
import { Quiz } from 'src/app/model/quiz';
import { ConfigService } from 'src/app/service/config.service';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  questionIDArray: number[] = [];
  questionArray: Question[] = [];
  currentQuestion: Question = new Question();
  questionNum: number = 0;
  quizID: number = 0;

  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap((params) => {
      if (Number(params.id) === 0) {
        return of(new Quiz());
      }
      return this.quizService.get(Number(params.id)).pipe(
        tap((item) => {
          this.quizID = params.id;
          this.questionIDArray = item.questions;
          item.questions.forEach((element) => {
            this.questionService.get(element).subscribe((x) => {
              this.questionArray.push(x);
            });
            console.table(this.questionArray);
          });
        })
      );
    })
  );

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {this.configService.score = 0;}

  startToFill() {
    if (++this.questionNum < this.questionArray.length) {
      this.questionNum;
      this.currentQuestion = this.questionArray[this.questionNum];
    }
  }
  nextQuestion() {
    this.configService.score += this.currentQuestion.points;
    this.startToFill();
  }
  lastQuestion() {
    this.configService.score += this.currentQuestion.points;
  }
}

