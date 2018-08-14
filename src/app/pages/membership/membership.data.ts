import { InMemoryDbService } from 'angular-in-memory-web-api';


export class MembershipData implements InMemoryDbService {
    
  createDb() {

    const funcionarios = [
        {
            claveFuncionario: 1,
            nombre: "Fernando",
            apPaterno: "Moreno",
            apMaterno: "Fuentes",
            fechaIngreso: "2018-04-02T18:25:43.511Z",
            agencia: {
                catDiscriminanteId: 1235,
                claveDiscriminante: 1235,
                nombreAgencia: "Primera de querellas"
            },
            usuario: {
                usuarioId: 1324,
                claveUsuario: "FMoreno",
                claveFuncionario: 1325,
                esActivo: 1
            },
            usuarioRol: {
                usuarioId: 1324,
                rolId: { id: [8, 7] },
                fechaInicio: new Date(),
                fchaFin: new Date(),
                esPrincipal: 1
            }
        },
        {
            claveFuncionario: 2,
            nombre: "Hernan",
            apPaterno: "Hernandez",
            apMaterno: "Jimenez",
            fechaIngreso: "2018-04-02T18:25:43.511Z",
            agencia: {
                catDiscriminanteId: 1235,
                claveDiscriminante: 1235,
                nombreAgencia: "Primera de querellas"
            },
            usuario: {
                usuarioId: 1324,
                claveUsuario: "HHernandez",
                claveFuncionario: 1325,
                esActivo: 0
            },
            usuarioRol: {
                usuarioId: 1324,
                rolId: { id: [8] },
                fechaInicio: new Date(),
                fchaFin: new Date(),
                esPrincipal: 1
            }
        },
        {
            claveFuncionario: 3,
            nombre: "Miguel",
            apPaterno: "Hernandez",
            apMaterno: "Escalante",
            fechaIngreso: "2017-03-02T18:25:43.511Z",
            agencia: {
                catDiscriminanteId: 1235,
                claveDiscriminante: 1235,
                nombreAgencia: "Primera de querellas"
            },
            usuario: {
                usuarioId: 1324,
                claveUsuario: "MHernandez",
                claveFuncionario: 1325,
                esActivo: 0
            },
            usuarioRol: {
                usuarioId: 1324,
                rolId: { id: [8] },
                fechaInicio: new Date(),
                fchaFin: new Date(),
                esPrincipal: 1
            }
        },
        {
            claveFuncionario: 4,
            nombre: "Luis Francisco",
            apPaterno: "Corrales",
            apMaterno: "Fuentes",
            fechaIngreso: "2017-03-02T18:25:43.511Z",
            agencia: {
                catDiscriminanteId: 1235,
                claveDiscriminante: 1235,
                nombreAgencia: "Primera de querellas"
            },
            usuario: {
                usuarioId: 1324,
                claveUsuario: "LCorrales",
                claveFuncionario: 1325,
                esActivo: 1
            },
            usuarioRol: {
                usuarioId: 1324,
                rolId: { id: [8] },
                fechaInicio: new Date(),
                fchaFin: new Date(),
                esPrincipal: 1
            }
        },
        {
            claveFuncionario: 5,
            nombre: "Samuel",
            apPaterno: "Azuka",
            apMaterno: "Cardenas",
            fechaIngreso: "2017-03-02T18:25:43.511Z",
            agencia: {
                catDiscriminanteId: 1235,
                claveDiscriminante: 1235,
                nombreAgencia: "Primera de querellas"
            },
            usuario: {
                usuarioId: 1324,
                claveUsuario: "SAzuka",
                claveFuncionario: 1325,
                esActivo: 1
            },
            usuarioRol: {
                usuarioId: 1324,
                rolId: { id: [8] },
                fechaInicio: new Date(),
                fchaFin: new Date(),
                esPrincipal: 1
            }
        },
        {
            claveFuncionario: 6,
            nombre: "Carlos",
            apPaterno: "Preciado",
            apMaterno: "Lafarga",
            fechaIngreso: "2017-03-02T18:25:43.511Z",
            agencia: {
                catDiscriminanteId: 1235,
                claveDiscriminante: 1235,
                nombreAgencia: "Primera de querellas"
            },
            usuario: {
                usuarioId: 1324,
                claveUsuario: "CPreciado",
                claveFuncionario: 1325,
                esActivo: 1
            },
            usuarioRol: {
                usuarioId: 1324,
                rolId: { id: [8] },
                fechaInicio: new Date(),
                fchaFin: new Date(),
                esPrincipal: 1
            }
        }
    ];    

    const catDiscriminantes = [
        {
            catDiscriminanteId: 1,
            catDistritoId: 7,
            claveDiscrimiante: 5,
            cNombre: "CUMPAS",
            tipo: 1,
            catDelegacionId: 1
        },
        {
            catDiscriminanteId: 2,
            catDistritoId: 1,
            claveDiscrimiante: 10,
            cNombre: "HERMOSILLO PRIMERA UNIDAD ESPECIALIZADA EN EL SISTEMA DE JUSTICIA PENAL ACUSATORIO Y ORAL",
            tipo: 1,
            catDelegacionId: 1
        },
        {
            catDiscriminanteId: 3,
            catDistritoId: 1,
            claveDiscrimiante: 89,
            cNombre: "DIRECCIÓN GENERAL DE SERVICIOS PERICIALES",
            tipo: 0,
            catDelegacionId: 1
        },
        {
            catDiscriminanteId: 4,
            catDistritoId: 1,
            claveDiscrimiante: 90,
            cNombre: "DIRECCIÓN DE SISTEMAS",
            tipo: 0,
            catDelegacionId: 1
        }
    ];

    const rol = [
        {
            rolId: 1,
            nombreRol: "reginicial",
            descripcionRol: "Recepcionista",
            esActivo: 1,
            confInstitucion: 1,
            jerarquiaOrganizacional: 43
        },
        {
            rolId: 2,
            nombreRol: "adminat",
            descripcionRol: "Agente MP Orientador Administrativo",
            esActivo: 1,
            confInstitucion: 1,
            jerarquiaOrganizacional: 45
        },
        {
            rolId: 3,
            nombreRol: "atpenal",
            descripcionRol: "Agente MP Orientador Penal",
            esActivo: 1,
            confInstitucion: 1,
            jerarquiaOrganizacional: 44
        },
        {
            rolId: 4,
            nombreRol: "visitador",
            descripcionRol: "Visitaduría",
            esActivo: 1,
            confInstitucion: 1,
            jerarquiaOrganizacional: 55
        },
        {
            rolId: 5,
            nombreRol: "facilitador",
            descripcionRol: "Especialista MASC",
            esActivo: 1,
            confInstitucion: 1,
            jerarquiaOrganizacional: 11
        },
        {
            rolId: 6,
            nombreRol: "coordinadorJAR",
            descripcionRol: "AMP Facilitador",
            esActivo: 1,
            confInstitucion: 1,
            jerarquiaOrganizacional: 7
        }
    ];


    const users = [
        {
            id: 1,
            nombreUsuario: "mando",
            contrasena: "mando123",
            profile: {
                name: "Armando",
                surname: "Mora",
                birthday: { day: 2, month: 4, year: 1990 },
                gender: "male",
                image: ""
            },
            work: {
                company: "Google",
                position: "Aguirre",
                salary: 5000
            },
            contacts:{
                email: "FGJE Sistemas",
                phone: "(202) 756-9756",
                address: "Washington"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2018-04-02T18:25:43.511Z"
            },
            menuIds: []
        },
        {
            id: 2,
            nombreUsuario: "bruno.V",
            contrasena: "bruno123",
            profile: {
                name: "Bruno",
                surname: "Vespa",
                birthday: { day: 20, month: 11, year: 1992 },
                gender: "male",
                image: "assets/img/profile/bruno.jpg"
            },
            work: {
                company: "Dell EMC",
                position: "Vespa",
                salary: 17000
            },
            contacts:{
                email: "FGJE Sistemas",
                phone: "(415) 231-0332",
                address: "San Francisco"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: false,
                isDeleted: true,
                registrationDate: "2011-01-05T08:45:23.511Z",
                joinedDate: "2017-05-20T18:25:43.511Z"
            },
            menuIds: [] 
        },
        {
            id: 3,
            nombreUsuario: "andy.79",
            contrasena: "andy123",
            profile: {
                name: "Andy",
                surname: "Warhol",
                birthday: { day: 21, month: 10, year: 1979 },
                gender: "male",
                image: "assets/img/avatars/avatar-3.png"
            },
            work: {
                company: "Adecco",
                position: "Warhol",
                salary: 13000
            },
            contacts:{
                email: "FGJE Sistemas",
                phone: "(212) 457-2308",
                address: "New York"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: true,
                registrationDate: "2014-11-01T19:35:43.511Z",
                joinedDate: "2017-06-28T15:25:43.511Z"
            },
            menuIds: [] 
        },
        {
            id: 4,
            nombreUsuario: "julia.a",
            contrasena: "julia123",
            profile: {
                name: "Julia",
                surname: "Aniston",
                birthday: { day: 18, month: 6, year: 1982 },
                gender: "female",
                image: "assets/img/profile/julia.jpg"
            },
            work: {
                company: "Apple",
                position: "Aniston",
                salary: 18000
            },
            contacts:{
                email: "FGJE Sistemas",
                phone: "(224) 267-1346",
                address: "Illinois, Chicago"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2015-12-06T11:10:20.511Z",
                joinedDate: "2017-06-29T15:15:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 5,
            nombreUsuario: "lusia.m",
            contrasena: "lusia123",
            profile: {
                name: "Lusia",
                surname: "Manuel",
                birthday: { day: 2, month: 12, year: 1992 },
                gender: "female",
                image: "assets/img/avatars/avatar-7.png"
            },
            work: {
                company: "Alphabet",
                position: "Manuel",
                salary: 10000
            },
            contacts:{
                email: "FGJE Sistemas",
                phone: "(224) 267-1346",
                address: "California, Los Angeles"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2014-01-10T10:20:20.511Z",
                joinedDate: "2017-06-28T12:20:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 6,
            nombreUsuario: "adam.82",
            contrasena: "adam123",
            profile: {
                name: "Adam",
                surname: "Sandler",
                birthday: { day: 24, month: 12, year: 1987 },
                gender: "male",
                image: "assets/img/profile/adam.jpg"
            },
            work: {
                company: "General Electric",
                position: "Sandler",
                salary: 21000
            },
            contacts:{
                email: "FGJE Sistemas",
                phone: "(224) 267-1346",
                address: "Texas, Houston"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: false,
                isDeleted: false,
                registrationDate: "2016-11-16T12:20:20.511Z",
                joinedDate: "2017-06-27T14:20:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 7,
            nombreUsuario: "tereza.s",
            contrasena: "tereza123",
            profile: {
                name: "Tereza",
                surname: "Stiles",
                birthday: { day: 9, month: 7, year: 1979 },
                gender: "female",
                image: "assets/img/profile/tereza.jpg"
            },
            work: {
                company: "Southwest Airlines",
                position: "Stiles",
                salary: 31000
            },
            contacts:{
                email: "FGJE Sistemas",
                phone: "(214) 617-2614",
                address: "Texas, Dallas"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2010-10-12T16:20:20.511Z",
                joinedDate: "2017-06-29T15:20:40.511Z"
            },
            menuIds: [] 
        }
       
    ];
    
    return {
        users: users,
        funcionarios: funcionarios,
        catDiscriminantes: catDiscriminantes,
        rol: rol
    };
  }
  
}



/*
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MembershipData implements InMemoryDbService {
  createDb() {
    const users = [
        {
            id: 1,
            username: "pretty",
            password: "pretty123",
            profile: {
                name: "Ashley",
                surname: "Ahlberg",
                birthday: { day: 29, month: 3, year: 1981 },
                gender: "female",
                image: "assets/img/profile/ashley.jpg"
            },
            work: {
                company: "Google",
                position: "Product designer",
                salary: 5000
            },
            contacts:{
                email: "ashley@gmail.com",
                phone: "(202) 756-9756",
                address: "Washington"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2017-04-21T18:25:43.511Z"
            },
            menuIds: []
        },
        {
            id: 2,
            username: "bruno.V",
            password: "bruno123",
            profile: {
                name: "Bruno",
                surname: "Vespa",
                birthday: { day: 20, month: 11, year: 1992 },
                gender: "male",
                image: "assets/img/profile/bruno.jpg"
            },
            work: {
                company: "Dell EMC",
                position: "Sale manager",
                salary: 17000
            },
            contacts:{
                email: "bruno@dell.com",
                phone: "(415) 231-0332",
                address: "San Francisco"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: false,
                isDeleted: false,
                registrationDate: "2011-01-05T08:45:23.511Z",
                joinedDate: "2017-05-20T18:25:43.511Z"
            },
            menuIds: [] 
        },
        {
            id: 3,
            username: "andy.79",
            password: "andy123",
            profile: {
                name: "Andy",
                surname: "Warhol",
                birthday: { day: 21, month: 10, year: 1979 },
                gender: "male",
                image: "assets/img/avatars/avatar-3.png"
            },
            work: {
                company: "Adecco",
                position: "Product manager",
                salary: 13000
            },
            contacts:{
                email: "andy@adecco.com",
                phone: "(212) 457-2308",
                address: "New York"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: true,
                registrationDate: "2014-11-01T19:35:43.511Z",
                joinedDate: "2017-06-28T15:25:43.511Z"
            },
            menuIds: [] 
        },
        {
            id: 4,
            username: "julia.a",
            password: "julia123",
            profile: {
                name: "Julia",
                surname: "Aniston",
                birthday: { day: 18, month: 6, year: 1982 },
                gender: "female",
                image: "assets/img/profile/julia.jpg"
            },
            work: {
                company: "Apple",
                position: "Sales manager",
                salary: 18000
            },
            contacts:{
                email: "julia@apple.com",
                phone: "(224) 267-1346",
                address: "Illinois, Chicago"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2015-12-06T11:10:20.511Z",
                joinedDate: "2017-06-29T15:15:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 5,
            username: "lusia.m",
            password: "lusia123",
            profile: {
                name: "Lusia",
                surname: "Manuel",
                birthday: { day: 2, month: 12, year: 1992 },
                gender: "female",
                image: "assets/img/avatars/avatar-7.png"
            },
            work: {
                company: "Alphabet",
                position: "Office manager",
                salary: 10000
            },
            contacts:{
                email: "lusia@alphabet.com",
                phone: "(224) 267-1346",
                address: "California, Los Angeles"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2014-01-10T10:20:20.511Z",
                joinedDate: "2017-06-28T12:20:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 6,
            username: "adam.82",
            password: "adam123",
            profile: {
                name: "Adam",
                surname: "Sandler",
                birthday: { day: 24, month: 12, year: 1987 },
                gender: "male",
                image: "assets/img/profile/adam.jpg"
            },
            work: {
                company: "General Electric",
                position: "Product manager",
                salary: 21000
            },
            contacts:{
                email: "adam@gen-el.com",
                phone: "(224) 267-1346",
                address: "Texas, Houston"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: false,
                isDeleted: false,
                registrationDate: "2016-11-16T12:20:20.511Z",
                joinedDate: "2017-06-27T14:20:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 7,
            username: "tereza.s",
            password: "tereza123",
            profile: {
                name: "Tereza",
                surname: "Stiles",
                birthday: { day: 9, month: 7, year: 1979 },
                gender: "female",
                image: "assets/img/profile/tereza.jpg"
            },
            work: {
                company: "Southwest Airlines",
                position: "Sale manager",
                salary: 31000
            },
            contacts:{
                email: "tereza@airlines.com",
                phone: "(214) 617-2614",
                address: "Texas, Dallas"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2010-10-12T16:20:20.511Z",
                joinedDate: "2017-06-29T15:20:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 8,
            username: "michael.b",
            password: "michael123",
            profile: {
                name: "Michael",
                surname: "Blair",
                birthday: { day: 15, month: 11, year: 1978 },
                gender: "male",
                image: "assets/img/profile/michael.jpg"
            },
            work: {
                company: "Microsoft",
                position: "Software developer",
                salary: 50000
            },
            contacts:{
                email: "michael@microsoft.com",
                phone: "(267) 388-1637",
                address: "Pennsylvania, Philadelphia"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2009-08-12T16:20:20.511Z",
                joinedDate: "2017-06-30T11:30:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 9,
            username: "michelle.81",
            password: "michelle123",
            profile: {
                name: "Michelle",
                surname: "Ormond",
                birthday: { day: 18, month: 11, year: 1981 },
                gender: "female",
                image: "assets/img/avatars/avatar-5.png"
            },
            work: {
                company: "Starbucks",
                position: "Sale manager",
                salary: 15000
            },
            contacts:{
                email: "michelle@starbucks.com",
                phone: "(267) 388-1637",
                address: "Washington, Seattle"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: false,
                isDeleted: true,
                registrationDate: "2012-11-10T18:20:20.511Z",
                joinedDate: "2015-03-29T17:20:40.511Z"
            },
            menuIds: [] 
        }
       
    ];
    return {users};
  }
}
*/