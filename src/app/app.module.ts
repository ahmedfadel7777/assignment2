import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SideBarComponent } from './side-bar/side-bar/side-bar.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { EducationModule } from './education/education.module';
import { ServicesModule } from './services/services.module';
import { SkillsModule } from './skills/skills.module';
import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SideBarModule,
    AboutModule,
    BlogModule,
    ContactModule,
    EducationModule,
    ServicesModule,
    SkillsModule,
    WorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
