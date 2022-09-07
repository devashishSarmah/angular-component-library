import { NgModule } from '@angular/core';
import { MobileStepperModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { MatIconModule } from '@angular/material/icon';
import { BasicExampleComponent } from './examples/basic.component';
import { RouterModule } from '@angular/router';
import { MobileStepperDocComponent } from './mobile-stepper-doc.component';
import { TextComponent } from './examples/text.component';
import { ProgressComponent } from './examples/progress.component';

@NgModule({
    declarations: [MobileStepperDocComponent, BasicExampleComponent, TextComponent, ProgressComponent],
    imports: [MobileStepperModule, SharedCompDocsModule, MatIconModule, RouterModule],
    exports: [MobileStepperDocComponent],
})
export class MobileStepperDocModule {}
