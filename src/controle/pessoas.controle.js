'use strict';
const Pessoas = require('../modelo/pessoas.modelo');
exports.findAll = function(req, res) {
Pessoas.findAll(function(err, pessoas) {
  console.log('controle')
  if (err)
  res.send(err);
  console.log('res', pessoas);
  res.send(pessoas);
});
};
exports.create = function(req, res) {
const new_pessoas = new Pessoas(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Pessoas.create(new_pessoas, function(err, pessoas) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Pessoas added successfully!",data:pessoas});
});
}
};
exports.findById = function(req, res) {
Pessoas.findById(req.params.id, function(err, pessoas) {
  if (err)
  res.send(err);
  res.json(pessoas[0]);
});
};
exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Pessoas.update(req.params.id, new Pessoas(req.body), function(err, pessoas) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Pessoas successfully updated' });
		});
	}
};
exports.delete = function(req, res) {
Pessoas.delete( req.params.id, function(err, pessoas) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Pessoas successfully deleted' });
});
};