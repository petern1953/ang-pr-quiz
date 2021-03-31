import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  actQuiz: number = 0;
  quests: string = '';

  inputField: HTMLInputElement | null = document.querySelector('input');
  phraseControl: FormControl = new FormControl('');
  phrase: string = '';
  searchText: string = '';

  columnKey: string = '';
  order: number = 1;
  orderText: string[] = ['DOWN', 'UP'];

  quizes: Quiz[] = [
    {
      id: 1,
      title: 'JS',
      description: 'Array methods',
      questions: [1, 2, 3, 4],
      active: true,
    },
    {
      id: 2,
      title: 'Újratervezés',
      description:
        'Szövegek, számok és a Math objektum, dátumok, adatok átstrukturálása',
      questions: [
        11,
        12,
        13,
        14,
        15,
        16,
        21,
        22,
        23,
        24,
        25,
        26,
        31,
        32,
        33,
        34,
        35,
        36,
      ],
      active: true,
    },
    {
      id: 3,
      title: '3. JavaScript haladó - Modulok és kivételek',
      description: 'Egyéb újdonságok',
      questions: [11, 12, 13, 14],
      active: true,
    },
  ];

  constructor(
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizService.getAll();
    this.phraseControl.valueChanges
      .pipe(debounceTime(800))
      .subscribe((newValue) => (this.phrase = newValue));
  }
  // 1st way
  // questions(q: Quiz): string {
  //   this.quests = '';
  //   if (q.questions.length) {
  //     this.quests += q.questions[0];
  //     for (let i = 1; i < q.questions.length; i++) {
  //       this.quests = this.quests + ', ' + q.questions[i];
  //     }
  //   }
  //   return this.quests;
  // }
  // 2nd (simpler) way
  // questions(q: Quiz): string {
  //   return q.questions.join(', ');
  // }

  // onChangePhrase(event: any): void {
  //   this.phrase = (event.target as HTMLInputElement).value;
  // }

  changeOrder(): void {
    console.log(this.order);
    this.order = -this.order;
  }

  // onColumnSelect(key: string): void {
  //   this.columnKey = key;
  //   this.changeOrder();
  //   this.searchText = 'Search for / filter | sort by ' + `${this.columnKey}`;
  //   // this.phrase = '';
  // }
  onColumnSelect(key: string): void {
    if (this.columnKey === key) {
      this.changeOrder();
    } else {
      this.columnKey = key;
      this.order = 1;
      this.phrase = '';

      // console.log(this.phraseControl.value);

      this.inputField = document.querySelector('input');
      if (this.inputField) this.inputField.value = '';
    }
    // this.searchText = `Search for / filter | sort by: . . . ${
    this.searchText = `Sorted >>> ${
      this.orderText[(this.order + 1) / 2]
    }WARD <<< by >>> ${this.columnKey} <<< (or choose another one)`;
  }

  onDelete(id: number): void {
    if(confirm('Do you really want to delete quiz ' + id + '?'))
      this.quizService.remove(id);
  }
}
