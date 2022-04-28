import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InterceptorsModule} from "@app/providers/interceptors";
import {AuthenticationGuardService} from "@app/providers/guards";
import {AuthService} from "@app/providers/services/oauth";

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        InterceptorsModule,
        HttpClientModule],
    providers: [AuthenticationGuardService, AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
