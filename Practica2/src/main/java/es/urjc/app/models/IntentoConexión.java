package es.urjc.app.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class IntentoConexión {
	
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idTryConection;

	
	private String date;
	private String time;
	private String IP;
	private String userName;
	private String operacion;
	private boolean result;
	
    public Usuario getUser() {
		return user;
	}
	public void setUser(Usuario user) {
		this.user = user;
	}
	@ManyToOne
    @JoinColumn(name = "user_id")
	private Usuario user;
	
	public Long getIdTryConection() {
		return idTryConection;
	}
	public void setIdTryConection(Long idTryConection) {
		this.idTryConection = idTryConection;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getIP() {
		return IP;
	}
	public void setIP(String iP) {
		IP = iP;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public boolean isResult() {
		return result;
	}
	public void setResult(boolean result) {
		this.result = result;
	}
	public String getOperacion() {
		return operacion;
	}
	public void setOperacion(String operacion) {
		this.operacion = operacion;
	}
	
	
}
