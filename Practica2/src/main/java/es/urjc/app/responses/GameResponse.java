package es.urjc.app.responses;

import java.util.ArrayList;
import java.util.List;

import es.urjc.app.models.Juego;

public class GameResponse {
	private ArrayList<Juego> gameList = new ArrayList<>();
	
	public GameResponse() {
		
	}

	public ArrayList<Juego> getGameList() {
		return gameList;
	}

	public void setGameList(ArrayList<Juego> gameList) {
		this.gameList = gameList;
	}





	
	
	
}
