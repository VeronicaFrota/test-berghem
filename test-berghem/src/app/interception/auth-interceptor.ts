import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let keyToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQzYTMxN2QwLTdjMTUtNDU1Yi04Zjk2LWE2MjUzOTgzYWYwYyIsImlhdCI6MTU3NjA3NTY2Nywic3ViIjoiZGV2ZWxvcGVyLzQ0NDZkYWYyLWIwZTMtY2IyZC03ODA1LThhY2MxOGQxYTQ4ZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3OS45OS42Ni4yNDkiXSwidHlwZSI6ImNsaWVudCJ9XX0.4b3KQPJmZbsY9vEwXJVDEWNjPA8aq0UeBJQIfWLHc94BhzDD6psZ6xza7vxDExEdNqBxC8JNlv7KElfymv36kw'

        if(keyToken) {
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + keyToken)})
                return next.handle(authReq)
        } else {
            return next.handle(req)
        }
        
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true, 
};