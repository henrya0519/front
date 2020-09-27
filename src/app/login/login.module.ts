import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {MaterialModule} from './../material/material.module';
import {FormsModule} from '@angular/forms';
import { HomeloginComponent } from './components/homelogin/homelogin.component';
import { InfoComponent } from './components/info/info.component';
import { CreateruserComponent } from './components/createruser/createruser.component';
import { TablasComponent } from './components/tablas/tablas.component';

@NgModule({
    declarations: [
        LoginComponent,
        HomeloginComponent,
        InfoComponent,
        CreateruserComponent,
        TablasComponent
    ],
    imports: [
        LoginRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule

    ],
    exports: [],

})
export class LoginModule {}
