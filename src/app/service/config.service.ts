import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
  type: string;
  repeated: boolean,
  editable?: boolean;
  visible?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  apiUrl: string = 'http://localhost:3000';

  studentTableCols: ITableCol[] = [
    {
      key: 'id',
      text: '#',
      type: 'number',
      repeated: false,
      editable: false,
      visible: false,
    },
    {
      key: 'name',
      text: 'Student name',
      type: 'string',
      repeated: false,
      editable: true,
      visible: true,
    },
    {
      key: 'email',
      text: 'Email',
      type: 'email',
      repeated: false,
      editable: true,
      visible: true,
    },
    {
      key: 'points',
      text: 'Points',
      type: 'number',
      repeated: false,
      editable: false,
      visible: true,
    },
    {
      key: 'active',
      text: 'Active',
      type: 'boolean',
      repeated: false,
      editable: true,
      visible: true,
    },
  ];

  answerTableCols: ITableCol[] = [
    {
      key: 'id',
      text: '#',
      type: 'number',
      repeated: false,
      editable: false,
      visible: false,
    },
    {
      key: 'content',
      text: 'Content',
      type: 'editfield',
      repeated: false,
      editable: true,
      visible: true,
    },
    {
      key: 'correct',
      text: 'Correct',
      type: 'boolean',
      repeated: false,
      editable: true,
      visible: true,
    },
  ];

  questionTableCols: ITableCol[] = [
    {
      key: 'id',
      text: '#',
      type: 'number',
      repeated: false,
      editable: false,
      visible: false,
    },
    {
      key: 'question',
      text: 'Question',
      type: 'editfield',
      repeated: false,
      editable: false,
      visible: true,
    },
    {
      key: 'answers',
      text: 'Answers',
      type: 'answer',
      repeated: true,
      editable: true,
      visible: true,
    },
    {
      key: 'points',
      text: 'Points',
      type: 'number',
      repeated: false,
      editable: true,
      visible: true,
    },
    {
      key: 'active',
      text: 'Active',
      type: 'boolean',
      repeated: false,
      editable: true,
      visible: true,
    },
  ];

  quizTableCols: ITableCol[] = [
    {
      key: 'id',
      text: '#',
      type: 'number',
      repeated: false,
      editable: false,
      visible: false,
    },
    {
      key: 'title',
      text: 'Title',
      type: 'string',
      repeated: false,
      editable: true,
      visible: true,
    },
    {
      key: 'description',
      text: 'Desc.',
      type: 'string',
      repeated: false,
      editable: true,
      visible: true,
    },
    {
      key: 'questions',
      text: 'Quests',
      type: 'number',
      repeated: true,
      editable: true,
      visible: true,
    },
    {
      key: 'active',
      text: 'Active',
      type: 'boolean',
      repeated: false,
      editable: true,
      visible: true,
    },
  ];

  constructor() {}
}
