import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsArticleComponent } from './cms-article/cms-article.component';
import { CmsBlogComponent } from './cms-blog/cms-blog.component';
import { CmsCategoryComponent } from './cms-category/cms-category.component';
import { CmsComponent } from './cms.component';

@NgModule({
  declarations: [
    CmsCategoryComponent,
    CmsArticleComponent,
    CmsBlogComponent,
    CmsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CmsModule { }
