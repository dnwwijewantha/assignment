import { Component, OnInit } from '@angular/core';
import {Country} from '../dto/country';
import {CountryServiceService} from '../Service/country-service.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  selectedCountry: Country = new Country();

  constructor(private countryService: CountryServiceService) { }

  ngOnInit(): void {
  }

  addCountry(): void {
    this.countryService.addCountry(this.selectedCountry).subscribe(isOk => {
      if (!isOk) {
        alert('Country has been added successfully');
      } else {
        alert('failed to add country');
      }
    });
  }

}
