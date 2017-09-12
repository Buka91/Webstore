import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CollapseDirective } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductItemComponent } from './home/product-list/product-item/product-item.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import { ProductService } from './product.service';
import { ServerService } from './server.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: EditProductComponent },
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'edit/:id/:name', component: EditProductComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductListComponent,
    ProductItemComponent,
    HomeComponent,
    EditProductComponent,
    CollapseDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ProductService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
