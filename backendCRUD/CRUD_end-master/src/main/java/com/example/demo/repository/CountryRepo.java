package com.example.demo.repository;

import com.example.demo.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.xml.soap.SAAJResult;
import java.util.List;

@Repository
public interface CountryRepo extends JpaRepository<Country, Integer> {
    Country findByName(String name);
    void deleteByName(String name);

//    @Query("UPDATE country c SET c.name=?2, c.desc = ?3 WHERE c.id = ?1")
//    void updateCountry(Integer id, String name, String desc);
}
