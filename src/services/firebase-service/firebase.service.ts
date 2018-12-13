import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Device } from "../../models/devices/device.model";


@Injectable()
export class FirebaseService {

    private listRef$ = this.db.list<Device>('lista-dispositivos');

    constructor(private db: AngularFireDatabase) {}

    //Recoger toda la informacion de Firebase
    public getAll() {
       return this.listRef$;
    }

    //Añadir nuevo dispositivo
    addDev(device: Device) {
        return this.listRef$.push(device);
    }

    //Actualizar dispostivo
    updateDev(key: string, d2: Device) {
        return this.listRef$.update(key, d2);
    }

    //Eliminar dispostivo
    deleteDev(device: Device) {
        return this.listRef$.remove(device.key);
    }

}