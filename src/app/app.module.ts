import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './teacher/admin/admin.component';
import { QuizeditorComponent } from './teacher/quizeditor/quizeditor.component';
import { QuestioneditorComponent } from './teacher/questioneditor/questioneditor.component';
import { QuizComponent } from './student/quiz/quiz.component';
import { HomeComponent } from './student/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';

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
    path: 'admin/quizeditor/:id',
    component: QuizeditorComponent,
  },
  {
    path: 'admin/questioneditor/:id',
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
    FilterPipe,
    SorterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
