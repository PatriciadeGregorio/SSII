package es.urjc.app.controller;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import es.urjc.app.models.Usuario;
import es.urjc.app.models.IntentoConexión;
import es.urjc.app.models.Juego;
import es.urjc.app.models.Login;
import es.urjc.app.repositories.GameRepository;
import es.urjc.app.repositories.TryConnectionRepository;
import es.urjc.app.repositories.UserRepository;
import es.urjc.app.responses.AddGameResponse;
import es.urjc.app.responses.GameResponse;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/gf")
public class RestControllers {
	
	
	@Autowired
	private TryConnectionRepository iRepository;
	
	@Autowired
	private UserRepository uRepository;
	
	@Autowired
	private GameRepository gRepository;
	
	
	
	private Usuario user;
	
	
	int intento = 0;
	
	boolean login = false;
	
    @RequestMapping(value = "/")
    public String test() {
        

        return "WORKS!";
        
    }
    
	@PostConstruct
	public void init(){
		Usuario u = new Usuario();
		Usuario u1 = new Usuario();
		Usuario u2 = new Usuario();
		Usuario u3 = new Usuario();
		
		u.setUserName("Agus");
		u1.setUserName("Jorge");
		u.setPassword("lol");
		u1.setPassword("lolaso");
		
		
		Juego j = new Juego();
		Juego j1 = new Juego();
		Juego j2 = new Juego();
		Juego j3 = new Juego();
		
		j.setDemo("https://www.youtube.com/watch?v=3RPOxeL358c");
		j.setDescription("Pues el juego, chico. Que va a ser xD");
		j.setMinAge("Nadie lo sabe nsadjs");
		j.setName("JAJA SI");
		j.setNationality("CONGO");
		j.setStudio("A saber");
		j.setVersion("1.2.3.4.5.6.7");
		j.setYear("1232");
		
		j1.setDemo("https://www.youtube.com/watch?v=3RPOxeL358c");
		j1.setDescription("Pues el juego, chico. Que va a ser xD");
		j1.setMinAge("Nadie lo sabe nsadjs");
		j1.setName("JAJA SI");
		j1.setNationality("CONGO");
		j1.setStudio("A saber");
		j1.setVersion("1.2.3.4.5.6.7");
		j1.setYear("1232");
		
		
		this.gRepository.save(j);
		this.gRepository.save(j1);
		
		
		
		this.uRepository.save(u);
		this.uRepository.save(u1);
		
	}

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Usuario> login(Login login, HttpServletRequest request) {
        
    	Usuario u = this.uRepository.findByUserName(login.getUserName());
        
        IntentoConexión ic = new IntentoConexión();
        ic.setOperacion("login");
        Date date = new Date();
        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        ic.setDate(dateFormat.format(date));
        ic.setTime(hourFormat.format(date));
        ic.setIP(request.getRemoteAddr());
        ic.setUserName(login.getUserName());
        if (u == null) {
        	ic.setResult(false);
        	this.iRepository.save(ic);
        	return new ResponseEntity<Usuario>(HttpStatus.UNAUTHORIZED);
        }
        
        
        if (intento == 3) {
        	ic.setResult(false);
        	this.iRepository.save(ic);
        	
        	u.setBloqueado(1);
        	return new ResponseEntity<Usuario>(HttpStatus.BAD_REQUEST);
        }
        
        	
        if ((u != null) && (u.getPassword().equals(login.getPassword())) && (u.getBloqueado() != 1)) {
        	ic.setResult(true);
        	Set<IntentoConexión> i = u.getIntentos();
        	i.add(ic);
        	this.user = u;
        	ic.setUser(u);
        	this.iRepository.save(ic);
        	this.uRepository.save(u);
        	this.login = true;
        	
        	
        	return new ResponseEntity<Usuario>(u, HttpStatus.OK);
        }else {
        	ic.setResult(false);
        	this.iRepository.save(ic);
        	intento++;
        	return new ResponseEntity<Usuario>(HttpStatus.UNAUTHORIZED);
        }
        
        
        

       
    }
    
    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public ResponseEntity<GameResponse> getGames(HttpServletRequest request) {
    	
    	GameResponse gR = new GameResponse();
    	IntentoConexión ic = new IntentoConexión();
        ic.setOperacion("get");
        Date date = new Date();
        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        ic.setDate(dateFormat.format(date));
        ic.setTime(hourFormat.format(date));
        ic.setIP(request.getRemoteAddr());
        ic.setUserName(this.user.getUserName());
        ic.setUser(this.user);
    	
        for (Juego g : this.gRepository.findAll()) {
			gR.getGameList().add(g);
		}
    	
    	if (gR.getGameList().isEmpty()) {
    		
    		ic.setResult(false);
    		this.iRepository.save(ic);
    		return new ResponseEntity<GameResponse>(HttpStatus.NO_CONTENT);
    		
    	}
    	
    	
    	
    	ic.setResult(true);
    	this.iRepository.save(ic);
    	return new ResponseEntity<GameResponse>(gR, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/game/{id}", method = RequestMethod.GET)
    public ResponseEntity<Juego> getGame(@PathVariable Long id, HttpServletRequest request) {
    	Juego j = this.gRepository.findOne(id);
    	IntentoConexión ic = new IntentoConexión();
        ic.setOperacion("get");
        Date date = new Date();
        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        ic.setDate(dateFormat.format(date));
        ic.setTime(hourFormat.format(date));
        ic.setIP(request.getRemoteAddr());
        ic.setUserName(this.user.getUserName());
        ic.setUser(this.user);
    	if (j == null) {
    		ic.setResult(false);
    		this.iRepository.save(ic);
    		return new ResponseEntity<Juego>(HttpStatus.NO_CONTENT);
    	}
    	
    	ic.setResult(true);
    	this.iRepository.save(ic);
    	return new ResponseEntity<Juego>(j, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/filter", method = RequestMethod.GET)
    public ResponseEntity<GameResponse> filterGame(@RequestParam(required=false, value="filter") String filter, HttpServletRequest request) {
        
    	GameResponse gr = new GameResponse();
    	IntentoConexión ic = new IntentoConexión();
        ic.setOperacion("filter_games");
        Date date = new Date();
        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        ic.setDate(dateFormat.format(date));
        ic.setTime(hourFormat.format(date));
        ic.setIP(request.getRemoteAddr());
        ic.setUserName(this.user.getUserName());
        
        ic.setUser(this.user);
    	
    	
    	
    	ArrayList<Juego> games = new ArrayList<>();
    	for (Juego juego : this.gRepository.findAll()) {
			games.add(juego);
		}
    	
        if (filter == null) {
        	gr.setGameList(games);
        	ic.setResult(true);
        	this.iRepository.save(ic);
            return new ResponseEntity<GameResponse>(gr,HttpStatus.OK);
        }
        ArrayList<Juego> filtered = new ArrayList<>();
        filter = filter.toLowerCase();
        for (Juego j: this.gRepository.findAll()) {
            if (j.getName().toLowerCase().contains(filter)) {
                filtered.add(j);
            }
        }
        gr.setGameList(filtered);
        ic.setResult(true);
        this.iRepository.save(ic);
        return new ResponseEntity<>(gr,HttpStatus.OK);
    }
    
    @RequestMapping(value = "/game/{id}", method = RequestMethod.PATCH)
    public ResponseEntity<Juego> editGame(@PathVariable Long id, @RequestBody AddGameResponse game, HttpServletRequest request) {
    	Juego j = this.gRepository.findOne(id);
    	IntentoConexión ic = new IntentoConexión();
        ic.setOperacion("patch");
        Date date = new Date();
        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        ic.setDate(dateFormat.format(date));
        ic.setTime(hourFormat.format(date));
        ic.setIP(request.getRemoteAddr());
        ic.setUserName(this.user.getUserName());
        ic.setUser(this.user);
    	if (j == null) {
    		ic.setResult(false);
    		this.iRepository.save(ic);
    		return new ResponseEntity<Juego>(HttpStatus.NO_CONTENT);
    	}
    	
    	ArrayList<String> noNullParams = noNulParams(game);
    	for (String param : noNullParams) {
			switch(param) {
				case "name":
					j.setName(game.getName());
				break;
				
				case "demo":
					j.setDemo(game.getDemo());
				break;
				
				case "description":
					j.setDescription(game.getDescription());
				break;
				
				case "minage":
					j.setMinAge(game.getMinAge());
					
				break;
				
				case "nationality":
					j.setNationality(game.getNationality());
				break;
				
				case "studio":
					j.setStudio(game.getStudio());
				break;
				
				case "version":
					j.setVersion(game.getVersion());
				break;
					
				case "year":
					j.setYear(game.getYear());
				break;
				
				default:
					return new ResponseEntity<Juego>(j, HttpStatus.OK);
			
					
			}
		}
    	
    	ic.setResult(true);
    	this.iRepository.save(ic);
    	this.gRepository.save(j);
    	return new ResponseEntity<Juego>(j, HttpStatus.OK);
    }

	private ArrayList<String> noNulParams(AddGameResponse g) {
		ArrayList<String> noNullParams = new ArrayList<>();
		if (g.getName() != null) {
			noNullParams.add("name");
		}
		if (g.getDemo() != null) {
			noNullParams.add("demo");
		}
		if (g.getDescription() != null) {
			noNullParams.add("description");
		}
		if (g.getMinAge() != null) {
			noNullParams.add("minage");
		}
		if (g.getNationality() != null) {
			noNullParams.add("nationality");
		}
		if (g.getStudio() != null) {
			noNullParams.add("studio");
		}
		if (g.getVersion() != null) {
			noNullParams.add("version");
		}
		
		if (g.getYear() != null) {
			noNullParams.add("year");
		}
		
		return noNullParams;
		
	}
	
	
	  @RequestMapping(value = "/game", method = RequestMethod.POST)
	    public ResponseEntity<Juego> addGame(@RequestBody Juego juego, HttpServletRequest request) {
	    	//Juego j = this.gRepository.findOne(usuario.getIdUser());
	    	IntentoConexión ic = new IntentoConexión();
	        ic.setOperacion("post");
	        Date date = new Date();
	        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
	        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
	        
	        ic.setDate(dateFormat.format(date));
	        ic.setTime(hourFormat.format(date));
	        ic.setIP(request.getRemoteAddr());
	        ic.setUserName(this.user.getUserName());
	        ic.setUser(this.user);
	        /*
	    	if (j != null) {
	    		ic.setResult(false);
	    		return new ResponseEntity<Juego>(HttpStatus.CREATED);
	    	}
	    	*/
	    	
	    	ic.setResult(true);
	    	this.iRepository.save(ic);
	    	this.gRepository.save(juego);
	    	return new ResponseEntity<Juego>(HttpStatus.OK);
	    }
	
    @RequestMapping(value = "/game/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Juego> deleteGame(@PathVariable Long id, HttpServletRequest request) {
    	Juego j = this.gRepository.findOne(id);
    	IntentoConexión ic = new IntentoConexión();
        ic.setOperacion("delete");
        Date date = new Date();
        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        ic.setDate(dateFormat.format(date));
        ic.setTime(hourFormat.format(date));
        ic.setIP(request.getRemoteAddr());
        ic.setUserName(this.user.getUserName());
        ic.setUser(this.user);
    	if (j == null) {
    		ic.setResult(false);
    		this.iRepository.save(ic);
    		return new ResponseEntity<Juego>(HttpStatus.NO_CONTENT);
    	}
    	
    	ic.setResult(true);
    	this.iRepository.save(ic);
    	this.gRepository.delete(id);
    	return new ResponseEntity<Juego>(j, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/game", method = RequestMethod.DELETE)
    public ResponseEntity<Juego> deleteAllGame(HttpServletRequest request) {
    	IntentoConexión ic = new IntentoConexión();
        ic.setOperacion("delete");
        Date date = new Date();
        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        ic.setDate(dateFormat.format(date));
        ic.setTime(hourFormat.format(date));
        ic.setIP(request.getRemoteAddr());
        ic.setUserName(this.user.getUserName());
        ic.setResult(true);
        ic.setUser(this.user);
        this.iRepository.save(ic);
    	this.gRepository.deleteAll();
    	return new ResponseEntity<Juego>(HttpStatus.OK);
    }
    
    @RequestMapping(value = "/demo/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Juego> solicitarDemo(@PathVariable Long id, HttpServletRequest request) {
    	IntentoConexión ic = new IntentoConexión();
        ic.setOperacion("solicitar_demo");
        Date date = new Date();
        DateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        
        ic.setDate(dateFormat.format(date));
        ic.setTime(hourFormat.format(date));
        ic.setIP(request.getRemoteAddr());
        ic.setUserName(this.user.getUserName());
        ic.setResult(true);
        ic.setUser(this.user);
        
        this.iRepository.save(ic);
        
        

        
        
        
    	return new ResponseEntity<>(HttpStatus.OK);
    }
	
	
	
	
}
