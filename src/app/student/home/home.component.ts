import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { ConfigService } from 'src/app/service/config.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  studentName: string = '';
  studentEmail: string = '';
  studentPoints: number = 0;

  list$: Observable<Quiz[]> = this.quizService.getAll();

  constructor(
    private quizService: QuizService,
    private configService: ConfigService,

  ) {
    this.studentPoints = this.configService.score;
  }

}
