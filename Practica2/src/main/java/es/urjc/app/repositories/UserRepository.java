package es.urjc.app.repositories;

import org.springframework.data.repository.CrudRepository;

import es.urjc.app.models.Usuario;

public interface UserRepository extends CrudRepository<Usuario, Long> {
	Usuario findByUserName (String userName);
}