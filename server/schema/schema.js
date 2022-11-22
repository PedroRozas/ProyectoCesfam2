const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLNonNull} = require('graphql')

//moongoose models
const {Users} = require('../models/User.js');
const Pacients = require('../models/Pacients.js');
const Meds = require('../models/Meds.js');

// user type
const UserType = new GraphQLObjectType({
    name: 'Users',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        birth: {type: GraphQLString}
    })
});
const MedsType = new GraphQLObjectType({
    name: 'Meds',
    fields: () => ({
        id: {type: GraphQLID},
        codigo: {type: GraphQLInt},
        nombre: {type: GraphQLString},
        fabricante: {type: GraphQLString},
        tipo: {type: GraphQLString},
        cantidad: {type: GraphQLInt},
        dosis: {type: GraphQLString},
        bioequivalente: {type: GraphQLString},
        
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        meds: {
            type: new GraphQLList(MedsType),
            resolve(parent, args) {
                return Meds.find();
            }
        },
        med: {
            type: MedsType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // code to get data from db / other source
                return Meds.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return Users.find();
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
               return Users.findById(args.id);
            }
        }
    }   
});

//mutation

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //añadir usuario
        addUser: {
            type: UserType,
            args: {
                username: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                lastname: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                phone: {type: new GraphQLNonNull(GraphQLString)},
                birth: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                const user = new Users({
                    username: args.username,
                    name: args.name,
                    lastname: args.lastname,
                    password: args.password,
                    email: args.email,
                    phone: args.phone,
                    birth: args.birth
                });
    
                return user.save();
            }
        },
        //borrar usuario
        deleteUser: {
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                return Users.findByIdAndDelete(args.id);
            }
        },
        //añaadir medicamento
        addMed: {
            type: MedsType,
            args: {
                codigo: {type: new GraphQLNonNull(GraphQLInt)},
                nombre: {type: new GraphQLNonNull(GraphQLString)},
                fabricante: {type: new GraphQLNonNull(GraphQLString)},
                tipo: {type: new GraphQLNonNull(GraphQLString)},
                cantidad: {type: new GraphQLNonNull(GraphQLInt)},
                dosis: {type: new GraphQLNonNull(GraphQLString)},
                bioequivalente: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                const med = new Meds({
                    codigo: args.codigo,
                    nombre: args.nombre,
                    fabricante: args.fabricante,
                    tipo: args.tipo,
                    cantidad: args.cantidad,
                    dosis: args.dosis,
                    bioequivalente: args.bioequivalente

                  
                });
    
                return med.save();
            }
        },
        //borrar medicamento
        deleteMed: {
            type: MedsType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                return Meds.findByIdAndDelete(args.id);
            }
        },
        //update medicamento
        updateMed: {
            type: MedsType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                codigo: {type: new GraphQLNonNull(GraphQLInt)},
                nombre: {type: new GraphQLNonNull(GraphQLString)},
                fabricante: {type: new GraphQLNonNull(GraphQLString)},
                tipo: {type: new GraphQLNonNull(GraphQLString)},
                cantidad: {type: new GraphQLNonNull(GraphQLInt)},
                dosis: {type: new GraphQLNonNull(GraphQLString)},
                bioequivalente: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                return Meds.findByIdAndUpdate(args.id, 
                    {
                        $set: {
                            codigo: args.codigo,
                            nombre: args.nombre,
                            fabricante: args.fabricante,
                            tipo: args.tipo,
                            cantidad: args.cantidad,
                            dosis: args.dosis,
                            bioequivalente: args.bioequivalente
                        },
                    }, 
                    {new: true}
                );
            }
        }   

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})