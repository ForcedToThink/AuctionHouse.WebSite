import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([{
    path: '',
    component: HomeComponent
}]);

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        homeRouting,
        SharedModule,
    ]
})
export class HomeModule {}
