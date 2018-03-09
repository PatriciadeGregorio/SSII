package es.urjc.app.repositories;

import org.springframework.data.repository.CrudRepository;

import es.urjc.app.models.IntentoConexión;
import es.urjc.app.models.Usuario;

public interface TryConnectionRepository extends CrudRepository<IntentoConexión, Long> {

}
