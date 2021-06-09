import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import  {MatIconModule}  from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';





import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { AddInfoProfileComponent } from './add-info-profile/add-info-profile.component';
import { OneProductComponent } from './one-product/one-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterUserComponent,
    FooterComponent,
    WelcomePageComponent,
    ContactPageComponent,
    AboutusPageComponent,
    AddProductComponent,
    AddCategoryComponent,
    AddStoreComponent,
    AddInfoProfileComponent,
    OneProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
