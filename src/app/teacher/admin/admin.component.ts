import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  actQuiz: number = 0;
  quests: string = '';
  phraseControl: FormControl = new FormControl('');
  phrase: string = '';
  columnKey: string = '';

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
        1,
        2,
        3,
        4,
        5,
        6,
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

  constructor() {}

  ngOnInit(): void {}

  questions(q: Quiz): string {
    this.quests = '';
    if (q.questions.length) {
      this.quests += q.questions[0];
      for (let i = 1; i < q.questions.length; i++) {
        this.quests = this.quests + ', ' + q.questions[i];
      }
    }
    return this.quests;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
}
