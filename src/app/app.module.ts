import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AppsettingComponent } from './appsetting/appsetting.component';
import { ResturentDetailsComponent } from './resturent-details/resturent-details.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { EditMenuItemComponent } from './edit-menu-item/edit-menu-item.component';
import { ViewMenuItemComponent } from './view-menu-item/view-menu-item.component';
import { PolicyComponent } from './policy/policy.component';
import { FaqComponent } from './faq/faq.component';
import { TopNavComponent } from './top-nav/top-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    PagenotfoundComponent,
    AdminProfileComponent,
    AppsettingComponent,
    ResturentDetailsComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    MenuItemComponent,
    AddMenuItemComponent,
    EditMenuItemComponent,
    ViewMenuItemComponent,
    PolicyComponent,
    FaqComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, MatProgressButtonsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
