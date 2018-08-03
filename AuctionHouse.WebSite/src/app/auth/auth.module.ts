import { NgModule, ModuleWithProviders, ModuleWithComponentFactories } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

const authRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'auth',
        component: AuthComponent
    }
]);

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        authRouting
    ]
})
export class AuthModule {}
