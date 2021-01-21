import mysql from 'mysql';
/*import http from "http";

http.get("http://localhost:1337", function(resp){
   console.log("Request made!", resp);
});*/

export function FabricaConexao(config) {
	config = Object.assign({
	  host: 'localhost',
	  user: 'iury',
	  password: '123',
	  database: 'contatos'
	}, config);
	this.connect = function () {
		let con = mysql.createConnection(config);
		return con;
	}
}

export function Agenda(fabricaConexao) {

	this.listar = function (callback) {
		var selecionar = "select * from pessoas";
		var connection = fabricaConexao.connect();
		
		connection.query(selecionar, function (error, results, fields) {
			if (error) throw error;
			connection.end();
			callback(error, results, fields);
		});

	}
	this.inserir = function (pessoa, callback) {
		var selecionar = "INSERT INTO pessoas (id, nome, telefone) VALUES (default, ?, ?)";
		var connection = fabricaConexao.connect();
		var [nome, telefone] = pessoa;
		
		connection.query(selecionar, [nome, telefone], function (error, results, fields) {
			//console.log(error, results, fields);
			if (error) throw error;
			
			connection.commit();
			connection.end();
			callback(error, results, fields);
		});	
	}
}