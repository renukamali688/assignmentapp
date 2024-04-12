import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BottomweareComponent } from './men/bottomweare/bottomweare.component';
import { WesternComponent } from './women/western/western.component';
import { BeautyComponent } from './women/beauty/beauty.component';
import { FootweareComponent } from './women/footweare/footweare.component';
import { TopweareComponent } from './men/topweare/topweare.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';


const routes: Routes = [

  { path: '',redirectTo:'login',pathMatch:'full'}, // http://localhost:4200/
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},       // http://localhost:4200/login
  { path: 'about' , component: AboutComponent} ,     // http://localhost:4200/about
  { path: 'contact', component: ContactComponent},   // http://localhost:4200/contact
  { path: 'product' ,component:ProductComponent, children: [
    {path: 'mobile',component:MobileComponent},
    {path: 'laptop',component:LaptopComponent},
    {path: 'tv',component:TvComponent},
  ]},  
  { path: 'men',title:'Mens-weare', component: MenComponent, children: [
    {path: 'topweare',title:'Mens-topweare',component:TopweareComponent},
    {path: 'bottomweare',component:BottomweareComponent},
    {path: 'footweare',component:FootweareComponent},
  ]},  

  { path: 'women', component: WomenComponent, children: [
    {path: 'beauty',component:BeautyComponent},
    {path: 'western',component:WesternComponent},
    {path: 'footweare',component:FootweareComponent},
  ]},  

  { path: 'postlist',title:'PostLists', component: PostlistComponent},
  { path: 'postDetails/:id', component: PostdetailsComponent},
  { path: '**', component: PagenotfoundComponent} // http://localhost:4200/contact

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
