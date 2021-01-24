package com.example.demo.service;

import com.example.demo.dto.CountryDto;
import com.example.demo.entity.Country;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CountryService {
    ResponseEntity<Country> addCountry(CountryDto dto);
    List<Country> showCountries();
    void deleteCountry(String name);
    Country getCountry(String name);
    Country update(String name, CountryDto country);


}
