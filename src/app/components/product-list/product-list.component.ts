import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-Products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./Products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  Products?: Product[];
  currentIndex = -1;
  title = '';

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.ProductService.getAll().subscribe({
      next: (data) => {
        this.Products = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProduct(Product: Product, index: number): void {
    this.currentProduct = Product;
    this.currentIndex = index;
  }

  removeAllProducts(): void {
    this.ProductService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }

  searchTitle(): void {
    this.currentProduct = {};
    this.currentIndex = -1;

    this.ProductService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.Products = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
