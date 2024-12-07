import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //CC
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';   //CC
import { AuthGuard } from './auth.guard';   //CC
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard], //CC
  bootstrap: [AppComponent]
})
export class AppModule { }
