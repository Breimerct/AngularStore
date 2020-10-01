import { PageNotFoundRoutingModule } from './pageNotFound-routing.module';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        PageNotFoundRoutingModule
    ],
    providers: []
})

export class PageNotFoundModule {}
