import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, ProductsSearch } from '../models/products-search';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  searchByTerm(term: string): Observable<Product[]> {
    return this.http.get<ProductsSearch>(`https://swapi.dev/api/people/?search=${term}`).pipe(
      map((response: ProductsSearch) => response.results)
    );
  }
}
