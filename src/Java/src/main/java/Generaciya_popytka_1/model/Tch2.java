package Generaciya_popytka_1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_popytka_1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Тч2
 */
@Entity(name = "IISGeneraciya_popytka_1Тч2")
@Table(schema = "public", name = "Тч2")
public class Tch2 {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВариантОт1")
    private Integer вариантот1;

    @Column(name = "ВариантОт3")
    private Integer вариантот3;

    @Column(name = "Вопрос")
    private String вопрос;

    @Column(name = "ВариантОт2")
    private Integer вариантот2;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nastrojka_testa")
    @Convert("Nastrojka_testa")
    @Column(name = "Настройка_теста", length = 16, unique = true, nullable = false)
    private UUID _nastrojka_testaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nastrojka_testa", insertable = false, updatable = false)
    private Nastrojka_testa nastrojka_testa;

    @OneToMany(mappedBy = "tch2", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Spisok_Sotrudnikov_dlya_proxozhdeniya_testa> spisok_sotrudnikov_dlya_proxozhdeniya_testas;


    public Tch2() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getВариантОт1() {
      return вариантот1;
    }

    public void setВариантОт1(Integer вариантот1) {
      this.вариантот1 = вариантот1;
    }

    public Integer getВариантОт3() {
      return вариантот3;
    }

    public void setВариантОт3(Integer вариантот3) {
      this.вариантот3 = вариантот3;
    }

    public String getВопрос() {
      return вопрос;
    }

    public void setВопрос(String вопрос) {
      this.вопрос = вопрос;
    }

    public Integer getВариантОт2() {
      return вариантот2;
    }

    public void setВариантОт2(Integer вариантот2) {
      this.вариантот2 = вариантот2;
    }


}