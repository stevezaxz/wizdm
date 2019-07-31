import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MarkdownModule } from '@wizdm/markdown';
import { AnimateModule } from '../../elements/animate';
import { IllustrationModule } from '../../elements/illustration';
//import { ContentResolver } from '../../core';
import { StaticComponent } from './static.component';

const routes: Routes = [
  {
    path: '',
    component: StaticComponent,
    //resolve: { content: ContentResolver }, 
    //data: { i18n: ['static'] },
    //canActivate: [ ContentResolver ],
    //canDeactivate: [ ContentResolver ]
  }
];

@NgModule({
  declarations: [ StaticComponent ],
  imports: [
    CommonModule,
    //FlexLayoutModule,
    MatDividerModule,
    MarkdownModule,
    AnimateModule,
    //IllustrationModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class StaticModule { }
