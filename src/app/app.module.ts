import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditComponent } from './components/edit/edit.component';
import { heroTrash,heroPencil } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgIconsModule.withIcons({heroTrash,heroPencil})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
