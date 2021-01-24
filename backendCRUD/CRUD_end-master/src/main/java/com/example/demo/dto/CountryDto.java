package com.example.demo.dto;

//create class name as CountryDto and assign variables
public class CountryDto {
    private String name;
    private String desc;

    public CountryDto(){}

    public CountryDto(String name, String desc) {
        this.name = name;
        this.desc = desc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    //method override
    @Override
    public String toString() {
        return "CountryDto{" +
                "name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                '}';
    }
}
