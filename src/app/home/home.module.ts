import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MaterialModule} from './../material/material.module';
import {FormsModule} from '@angular/forms';
import { AmountComponent } from './components/amount/amount.component';



@NgModule({
    declarations: [
        HomeComponent,
        AmountComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        FormsModule,

    ]
})

export class HomeModule {

}


