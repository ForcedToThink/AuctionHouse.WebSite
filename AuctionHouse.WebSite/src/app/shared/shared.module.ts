import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
    declarations: [
        ShowAuthedDirective
    ],
    imports: [
        CommonModule,
        PanelModule,
        ButtonModule,
        HttpModule,
        DialogModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        ToastModule,
        AccordionModule
    ],
    exports: [
        CommonModule,
        PanelModule,
        ButtonModule,
        HttpModule,
        DialogModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        ShowAuthedDirective,
        ToastModule,
        AccordionModule
    ]
})
export class SharedModule {}
