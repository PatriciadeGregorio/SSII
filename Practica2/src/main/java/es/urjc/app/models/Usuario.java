package es.urjc.app.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idUser;
    
    
   @OneToMany(mappedBy="user", cascade = CascadeType.ALL)
   private Set<Partida> gameplays = new HashSet<>();
   
   @OneToMany(mappedBy="user", cascade = CascadeType.ALL)
   @JsonIgnore
   private Set<IntentoConexión> intentos = new HashSet<>();
    
    
    private String userName;
    private String password;
    private String name;
    private String surname;
    private String email;
    private String birthDate;
    private String country;
    private String city;
    private int esAdmin;
    private int numIntentos;
    private int bloqueado;
    
    
    public Set<IntentoConexión> getIntentos() {
		return intentos;
	}




	public void setIntentos(Set<IntentoConexión> intentos) {
		this.intentos = intentos;
	}




	public Usuario()  {
    	
    }
    
    
    

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getEsAdmin() {
		return esAdmin;
	}
	public void setEsAdmin(int esAdmin) {
		this.esAdmin = esAdmin;
	}




	public Long getIdUser() {
		return idUser;
	}




	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}




	public String getBirthDate() {
		return birthDate;
	}




	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}




	public Set<Partida> getGameplays() {
		return gameplays;
	}




	public void setGameplays(Set<Partida> gameplays) {
		this.gameplays = gameplays;
	}




	public int getNumIntentos() {
		return numIntentos;
	}




	public void setNumIntentos(int numIntentos) {
		this.numIntentos = numIntentos;
	}




	public int getBloqueado() {
		return bloqueado;
	}




	public void setBloqueado(int bloqueado) {
		this.bloqueado = bloqueado;
	}
    
    
    
}
