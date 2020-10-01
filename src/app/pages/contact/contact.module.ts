import { MaterialModule } from './../../modules/material/material.module';
import { ContacRoutingtModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        ContacRoutingtModule,
        MaterialModule
    ],
    providers: []
})

export class ContactModule {}
