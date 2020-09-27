import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {HomeloginComponent} from './components/homelogin/homelogin.component';

const routes: Routes = [
    {
        path: '',
        component: HomeloginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class LoginRoutingModule{}
