package com.example.demo.service.serviceImpl;

import com.example.demo.dto.CountryDto;
import com.example.demo.entity.Country;
import com.example.demo.repository.CountryRepo;
import com.example.demo.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CountryServiceImpl implements CountryService {
    @Autowired
    private CountryRepo countryRepo;
    @Autowired
    private CountryService countryService;

    @Override
    public ResponseEntity<Country> addCountry(CountryDto dto) {
        Country country = new Country();
        country.setName(dto.getName());
        country.setDesc(dto.getDesc());
        countryRepo.save(country);
        return null;
    }

    @Override
    public List<Country> showCountries() {
        return (List<Country>) countryRepo.findAll();
    }

    @Override
    public void deleteCountry(String name) {
        countryRepo.deleteByName(name);
    }

    @Override
    public Country getCountry(String name) {
        return countryRepo.findByName(name);
    }

    @Override
    public Country update(String name, CountryDto dto) {
        Country country = countryRepo.findByName(name);

        country.setName(dto.getName());
        country.setDesc(dto.getDesc());

        countryRepo.save(country);
        System.out.println(dto);

        return country;

    }


}


