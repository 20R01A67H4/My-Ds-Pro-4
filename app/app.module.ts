import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { OpComponent } from 'src/op/op.component';
import { AboutComponent } from 'src/about/about.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileService } from 'src/mobile.service';
import { AppliComponent } from 'src/appli/appli.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'',component:AppComponent
  },
  {
    path:'op',component:OpComponent,
    children:[
      {
        path:'opr',component:AppliComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    OpComponent,
    AboutComponent,
    AppliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
