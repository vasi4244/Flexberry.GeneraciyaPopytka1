package Generaciya_popytka_1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_popytka_1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Список_Сотрудников_для_прохождения_теста
 */
@Entity(name = "IISGeneraciya_popytka_1Список_Сотрудников_для_прохождения_теста")
@Table(schema = "public", name = "Список_Сотрудников_для_прохождения_теста")
public class Spisok_Sotrudnikov_dlya_proxozhdeniya_testa {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nastrojka_testa")
    @Convert("Nastrojka_testa")
    @Column(name = "Настройка_теста", length = 16, unique = true, nullable = false)
    private UUID _nastrojka_testaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nastrojka_testa", insertable = false, updatable = false)
    private Nastrojka_testa nastrojka_testa;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tch2")
    @Convert("Tch2")
    @Column(name = "Тч2", length = 16, unique = true, nullable = false)
    private UUID _tch2id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tch2", insertable = false, updatable = false)
    private Tch2 tch2;


    public Spisok_Sotrudnikov_dlya_proxozhdeniya_testa() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}