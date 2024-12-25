import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CardComponent } from "../../ui/card/card.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private api: ApiService) {}

    data: any;

    ngOnInit() {
      this.api.getProducts().subscribe((res:any) => {
        this.data = res.products;
        console.log(this.data);
      });
    }
}