db.getCollection('medias').find({})

/*db.medias.update(
{Titulo:"Matrix"},
{$set:{
    tipo: "DVD",
    Titulo: "John Wick",
    estreno: 1999,
    genero: "action"
    }}
);*/
  //db.getCollection('medias').find({})  
 /*db.getCollection('medias').insertOne({
      "tipo": "Libro",
      "Titulo": "Constantine",
      "capitulos": 12,
      "leidos": 3
      });*/
//db.getCollection('medias').find({})  
/*db.medias.updateOne(
{titulo:"Java para todos"},
{$unset:{editorial:""}}
);*/
/*db.medias.updateOne(
{titulo: "Java para todos"},
{
    $addToSet:{"Autor": "Maria Sancho"}
    }
)*/
/*db.medias.update(
{Titulo: "Matrix"},
{$set: {
    "tipo":"DVD",
    "Titulo":"Matrix",
    "estreno":1999.0,
    "actores":[
    "Keanu Reeves",
    "Carry-Anne Moss",
    "Laurence Fishburne",
    "Hugo Weaving",
    "Gloria Foster",
    "Joe Pantoliano"]}}
)*/
/*db.medias.updateOne(
{Titulo: "Matrix"},
{$push:{actores: {$each: ["Antonio Banderas", "Brad Pitt"]}} }
)*/

/*db.medias.updateOne(
{Titulo: "Matrix"},
{$addToSet:{actores:  ["John Wick", "Brad Pitt", "John Rambo"]} }
)*/

/*db.medias.updateOne(
{Titulo: "Matrix"},
{$pop:{actores:-1, actores:-1}}
)*/

/*db.medias.updateOne(
{Titulo: "Matrix"},
{$push:{actores:{ $each:["Antonio Banderas", "Joe Pantoliano"]}}}
)*/
/*db.medias.updateOne(
{Titulo: "Matrix"},
{$pullAll:{actores:["Antonio Banderas", "Joe Pantoliano"]}}
)*/
/*db.medias.updateOne(
{Titulo: "Recuerdos"},
{$push: {canciones:
    
        {
            "cancion" : 5.0,
            "titulo" : "El atardecer",
            "longitud" : "3:20"
        }
    
    }}
)*/
/*db.medias.updateOne(
{$and:[{Titulo: "Recuerdos"}, {"canciones.cancion": 5.0}]},
{$set: {"canciones.$.cancion": 3.0}}
)*/
db.medias.update(
{Titulo: "Recuerdos"},
{$pull:{""} }
)
db.getCollection('medias').find({})  