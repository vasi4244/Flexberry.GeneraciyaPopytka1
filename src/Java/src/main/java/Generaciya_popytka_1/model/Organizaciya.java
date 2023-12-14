package Generaciya_popytka_1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_popytka_1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Организация
 */
@Entity(name = "IISGeneraciya_popytka_1Организация")
@Table(schema = "public", name = "Организация")
public class Organizaciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "КодОрг")
    private Integer кодорг;


    public Organizaciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Integer getКодОрг() {
      return кодорг;
    }

    public void setКодОрг(Integer кодорг) {
      this.кодорг = кодорг;
    }


}