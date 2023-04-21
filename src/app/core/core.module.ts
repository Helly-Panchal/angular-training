//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    BookListComponent,
    BookItemComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    BookListComponent,
    BookItemComponent,
  ],
})
export class CoreModule {}
