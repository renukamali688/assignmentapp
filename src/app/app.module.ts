import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PassGeneratorComponent } from './pass-generator/pass-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdfValidationComponent } from './tdf-validation/tdf-validation.component';
// import { NesteddropdownComponent } from './nesteddropdown/nesteddropdown.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeComponent } from './pipe/pipe.component';
import { AsynchpipeComponent } from './asynchpipe/asynchpipe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { filterpipeComponent } from './filterpipe/filterpipe.component';
import { SpaceSearchService } from './services/space-search.service';
import { SpaceSearchesComponent } from './space-searches/space-searches.component';
import { SearchComponent } from './search/search.component';
import { GifyComponent } from './gify/gify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { TopweareComponent } from './men/topweare/topweare.component';
import { BottomweareComponent } from './men/bottomweare/bottomweare.component';
import { FootweareComponent } from './men/footweare/footweare.component';
import { BeautyComponent } from './women/beauty/beauty.component';
import { WesternComponent } from './women/western/western.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { Registration1Component } from './registration1/registration1.component';


@NgModule({
  declarations: [
    AppComponent,
    PassGeneratorComponent,
    TdfValidationComponent,
    // NesteddropdownComponent,
    AgeCalculatorComponent,
    RegistrationComponent,
    RegistrationformComponent,
    PipeComponent,
    AsynchpipeComponent,
    FilterPipe,
    filterpipeComponent,
    SpaceSearchesComponent,
    SearchComponent,
    GifyComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProductComponent,
    MobileComponent,
    PagenotfoundComponent,
    PostComponent,
    LaptopComponent,
    TvComponent,
    MenComponent,
    WomenComponent,
    TopweareComponent,
    BottomweareComponent,
    FootweareComponent,
    BeautyComponent,
    WesternComponent,
    PostlistComponent,
    PostdetailsComponent,
    Registration1Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,

  ],
  providers: [SpaceSearchService],
  bootstrap: [AppComponent]

})
export class AppModule { }
