import { NgModule, ModuleWithProviders, ModuleWithComponentFactories } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    }
]);

@NgModule({
    declarations: [
        AuthComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        authRouting
    ]
})
export class AuthModule {}
