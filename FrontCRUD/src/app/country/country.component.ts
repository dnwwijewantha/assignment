import { Component, OnInit } from '@angular/core';
import {CountryServiceService} from '../Service/country-service.service';
import {Country} from '../dto/country';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries: Country;

  selectedCountry: Country = new Country();
  constructor(private countryService: CountryServiceService, private router: Router) { }

  ngOnInit(): void {
    this.countryService.findAllCountries().subscribe(resp => {
      this.countries = resp;
    });

  }

  addCountry(): void {
    this.countryService.addCountry(this.selectedCountry).subscribe(isOk => {
      if (!isOk) {
        alert('Country has been added successfully');
      } else {
        alert('failed to add country');
      }
    });
    this.redirect();

  }

  updatedetails(name: string) {
    this.router.navigate(['update/' + name]);
  }

  deleteCountry(name: string) {
    this.countryService.deleteCountryByName(name).subscribe(isOk => {
      if (!isOk) {
        alert('Country has been added successfully');
      } else {
        alert('failed to add country');
      }
    });
    this.redirect();
    console.log(name);


  }

  redirect(){
    window.location.reload();
  }

}
