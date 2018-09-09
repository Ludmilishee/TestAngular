import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatDividerModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { CatsComponent } from './cats/cats.component';
import { CatsStorageService } from './cats-storage.service';
import { AgePipe } from './age-pipe/age.pipe';
import { GenderPipe } from './gender-pipe/gender.pipe';
import { GenderColorDirective } from './gender-color-directive/gender-color.directive';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { MenuComponent } from './menu/menu.component';
import { AuthComponent } from './auth/auth.component';
import {  RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  { path: 'cats', component: CatsComponent, canActivate: [ AuthGuardService ] },
  { path: 'login', component: AuthComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AgePipe,
    GenderPipe,
    GenderColorDirective,
    FilterPipe,
    MenuComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ CatsStorageService, AuthService, AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
