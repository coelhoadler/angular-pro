import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, filter, switchMap } from 'rxjs';
import { Product } from '../models/products-search';

@Component({
  selector: 'angular-pro-class-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {

  control = new FormControl();
  products$ = new Observable<Product[]>;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products$ = this.control.valueChanges.pipe(
      filter((term) => term.length > 1),
      debounceTime(400),
      switchMap((term => this.productsService.searchByTerm(term)))
    );
  }

  search() {
    this.productsService.searchByTerm(this.control.value).subscribe(response => console.log(response));
  }
  
}
