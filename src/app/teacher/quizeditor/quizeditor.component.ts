import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Question } from 'src/app/model/question';
import { Quiz } from 'src/app/model/quiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quizeditor',
  templateUrl: './quizeditor.component.html',
  styleUrls: ['./quizeditor.component.scss'],
})
export class QuizeditorComponent implements OnInit {
  // quizes$: Observable<Quiz[]> = this.quizService.getAll();

  selectedQuiz: Quiz = new Quiz();

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap((params) => {
      if (Number(params.id) === 0) {
        return of(new Quiz());
      }

      return this.quizService.get(Number(params.id));
    })
  );

  onDeleteClick(question: number) {
    let response = confirm(
      `Do you really want to delete question ${question}?`
    );
    if (response === true) {
      this.questionService.remove(question)
        // .subscribe(() => {
        // console.log('deleted');
        // this.quizes$ = this.quizService.getAll();
        // })
        ;
      this.selectedQuiz.questions.splice(question,1);
    }
  }

  onUpdateClick(quiz: Quiz) {
    quiz.active = !quiz.active;
    this.quizService.update(quiz).subscribe(() => {
      // console.log('updated');
      // this.quizes$ = this.quizService.getAll();
    });
  }

  onCreateClick(ctrls: any) {
    // console.log(ctrls.title.pristine);
    // console.log(ctrls.description.pristine);
    this.selectedQuiz.active = true;
    // console.log(this.selectedQuiz);
    this.quizService.create(this.selectedQuiz).subscribe(() => {
      // console.log('created');
      // this.quizes$ = this.quizService.getAll();
      this.selectedQuiz = new Quiz();
      // ctrls.title.pristine = true;
      // ctrls.description.pristine = true;
    });
  }
}
