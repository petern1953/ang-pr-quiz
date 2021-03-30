import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './teacher/admin/admin.component';
import { QuizeditorComponent } from './teacher/quizeditor/quizeditor.component';
import { QuestioneditorComponent } from './teacher/questioneditor/questioneditor.component';
import { QuizComponent } from './student/quiz/quiz.component';
import { HomeComponent } from './student/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/quizeditor',
    component: QuizeditorComponent,
  },
  {
    path: 'admin/questioneditor',
    component: QuestioneditorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuizeditorComponent,
    QuestioneditorComponent,
    QuizComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
