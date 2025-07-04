import express from 'express';
import cors from 'cors';
import { attachBaseController } from '../middlewares/attachBaseController.js';

import authRoutes from '../routes/api/authRoutes.js';
import abilityGroupRoutes from '../routes/shared/abilityGroupRoutes.js';
import abilityRoutes from '../routes/shared/abilityRoutes.js';
import abilityUserRoutes from '../routes/shared/abilityUserRoutes.js';
import roleUserRoutes from '../routes/shared/roleUserRoutes.js';
import userRoutes from '../routes/api/userRoutes.js';
import devRoutes from '../routes/dev/devRoutes.js';


import carbohydrateRoutes from '../routes/api/carbohydrateRoutes.js';  //TODO Agregar esta linea <-->




export class Server {
    
    constructor() {
        
        this.app = express();
        this.port = process.env.PORT;

        this.pathApi = {
            auth: '/api/v1/auth',
            carbohydrate: '/api/v1/carbohydrates', // TODO Agregar esta linea <-->
        }

        this.pathShared = {
            abilityGroups: '/api/v1/ability-groups',
            abilities: '/api/v1/abilities',
            abilityUsers: '/api/v1/ability-users',
            roleUsers: '/api/v1/ability-users',
            users: '/api/v1/users',
        }

        this.pathDev = {
            dev: '/api/v1/dev/test',
        }

        // Midlewares
        this.midlewares();

        // Routes app
        this.routes();
    }


    midlewares(){

        // Dir public
        this.app.use( express.static('public') );

        //Cors
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Form-data body
        this.app.use(express.urlencoded({ extended: true })); // para form-data

        // Base Controller
        this.app.use( attachBaseController );

    }


    routes(){

        // Shared
        this.app.use( this.pathShared.abilityGroups, abilityGroupRoutes);
        this.app.use( this.pathShared.abilities, abilityRoutes);
        this.app.use( this.pathShared.abilityUsers, abilityUserRoutes);
        this.app.use( this.pathShared.roleUsers, roleUserRoutes);
        this.app.use( this.pathShared.userUsers, userRoutes);
        
        // Dev
        this.app.use( this.pathDev.dev, devRoutes);


        // Api
        this.app.use( this.pathApi.auth, authRoutes);

        
        //TODO Others routes
        this.app.use( this.pathApi.carbohydrate, carbohydrateRoutes); //TODO Agregar esta linea <-->
        
    }


    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor ejecutandose en el puerto: ${ this.port }`);
        });
    }

}
