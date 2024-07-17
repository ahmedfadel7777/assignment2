import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { BlogComponent } from './blog/blog/blog.component';
import { ContactComponent } from './contact/contact/contact.component';
import { EducationComponent } from './education/education/education.component';
import { ServicesComponent } from './services/services/services.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { WorkComponent } from './work/work/work.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'education',component:EducationComponent},
  {path:'services',component:ServicesComponent},
  {path:'skills',component:SkillsComponent},
  {path:'work',component:WorkComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
