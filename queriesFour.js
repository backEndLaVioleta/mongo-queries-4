// db.getCollection('media').find({});
// import and create db

// mongoimport --db media --collection media --type json --file media.json


/*db.media.updateOne(
// from where to get the one to be updated
{Titulo:"Matrix"},
// what we want to update.
// carefull, it will be left as we write it down in this case
{$set: 
    {
    "tipo" : "DVD",
    "Titulo" : "Matrix",
    "estreno" : 1999,
    "actores" : [ 
        "Keanu Reeves", 
        "Carry-Anne Moss", 
        "Laurence Fishburne", 
        "Hugo Weaving", 
        "Gloria Foster", 
        "Joe Pantoliano"
    ],
        "genero": "accion"
    }}
);*/

/*db.media.insertOne(

{

    tipo:"Libro",

    Titulo:"Constantine",

    capitulos: 12,

    leidos: 3

    }

);*/

/*db.media.updateOne(

{Titulo: "Constantine"},

{

    $inc: {leido:5}

    }

);*/

/*db.media.updateOne(

{Titulo: "Matrix"},

{$set: {genero: "sci-fi"}}

);*/

/*db.media.updateOne(

    {titulo: "Java para todos"},

    {$unset: {editorial: ""}}

);*/

/*db.media.updateOne(

{titulo: "Java para todos"},

{$push: {Autor: "María Sancho" }}

);*/

/*db.media.updateOne(

    {Titulo: "Matrix"},

    {$push: {actores: { $each: ["Antonio Banderas", "Brad Pitt"]}}}

);*/

/*db.media.updateOne(

    {Titulo: "Matrix"},

    {$addToSet: {actores: { $each: ["Joe Pantoliano", "Brad Pitt", "Natalie Portman"]}}}

);*/

/*db.media.updateOne(

    {Titulo: "Matrix"},

    {$pop: {actores:-1,actores:1}}

);*/

/*db.media.updateOne(

    {Titulo: "Matrix"},

    {$push:{actores:{$each:["Joe Pantoliano","Antonio Banderas"]}}}

);*/

/*db.media.updateOne(

{Titulo:"Matrix"},

{$pullAll: {actores: ["Antonio Banderas", "Joe Pantoliano"]}}

);*/

/*db.media.updateOne(

{Titulo: "Recuerdos"},

{$push: {canciones:

    

        {

            cancion : 5,

            titulo : "El atardecer",

            longitud : "6:50"

        }

    

    }}

);*/

/*db.media.updateOne(

    {$and:[

        {Titulo: "Recuerdos"},

        {"canciones.cancion": 5}

        ]

    },

    {$set:{"canciones.$.cancion": 3}}

);*/

/*db.multimedia.updateOne(

{$and: [

    {Titulo: "Recuerdos"},

    {Artista: "Los piratas"}

    ]},

    {$set: {Artista: "Los piratillas"}}

);*/

// db.media.renameCollection('multimedia');
db.getCollection('multimedia').find({});
