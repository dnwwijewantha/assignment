import { Component, OnInit } from '@angular/core';
import {Country} from '../dto/country';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryServiceService} from '../Service/country-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.scss']
})
export class UpdateCountryComponent implements OnInit {
  name: string;
  country: Country;
  selectedCountry: Country = new Country();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private countryService: CountryServiceService) { }

  ngOnInit(): void {
    // this.country = new Country();
    this.name = this.route.snapshot.params.name;

    this.countryService.getCountryByName(this.name).subscribe(data => {
      console.log(data);
      this.country = data;
    }, error => console.log(error));

  }

  updateCountry(){
    this.name = this.route.snapshot.params.name;
    this.countryService.updateCountry(this.name, this.selectedCountry).subscribe(data => {
        console.log(this.name);
        this.selectedCountry = new Country();
        this.gotocountry();
    }, error => console.log(error));

  }

  onSubmit(){
    this.updateCountry();
  }

  gotocountry(){
    this.router.navigate(['country']);
  }

}
