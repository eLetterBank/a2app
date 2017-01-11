import { Injectable } from '@angular/core';
@Injectable()
export class LoggerService {
    private AddTolog(msg: any) {
        console.log(msg);
    }
    debug(msg: any) { this.AddTolog("DEBUG: " + msg); }
    info(msg: any) { this.AddTolog("INFO: " + msg); }
    warning(msg: any) { this.AddTolog("WARNING: " + msg); }
    error(msg: any) { this.AddTolog("INFO: " + msg); }
}
