import { Injectable } from '@angular/core';
@Injectable()
export class LoggerService {
    // In a real world app, we might use a remote logging infrastructure
    debug(msg: any) { console.debug("DEBUG: " + msg); }
    info(msg: any) { console.info("INFO: " + msg); }
    warn(msg: any) { console.warn("WARNING: " + msg); }
    error(error: any) { this.sendToConsole(error); }

    private sendToConsole(error: any): void {
        if (console && console.group && console.error) {
            console.group("Error Log Service");
            console.error(error);
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
    }
}