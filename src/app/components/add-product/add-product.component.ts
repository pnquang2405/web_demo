import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-Product',
  templateUrl: './add-Product.component.html',
  styleUrls: ['./add-Product.component.scss'],
})
export class AddProductComponent {
  Product: Product = {
    name: '',
    pricce: 0,
    description: '',
    categoryID: 1,
  };
  submitted = false;

  constructor(private ProductService: ProductService) {}

  saveProduct(): void {
    const data = {
      name: this.Product.name,
      price: this.Product.pricce,
    };

    this.ProductService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newProduct(): void {
    this.submitted = false;
    this.Product = {
      title: '',
      description: '',
      published: false,
    };
  }
}
