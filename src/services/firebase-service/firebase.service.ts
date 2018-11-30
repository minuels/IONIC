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
    updateDev(device: Device) {
        return this.listRef$.update(device.key, device);
    }

    //Eliminar dispostivo
    deleteDev(device: Device) {
        return this.listRef$.remove(device.key);
    }

}