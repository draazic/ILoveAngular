import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[] | undefined;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }

    // imageChangedEvent: any = '';
    // croppedImage: any = '';

    // fileChangeEvent(event: any): void {
    //     this.imageChangedEvent = event;
    // }
    // imageCropped(event: ImageCroppedEvent) {
    //     this.croppedImage = event.base64;
    // }
    // imageLoaded() {
    //     // show cropper
    // }
    // cropperReady() {
    //     // cropper ready
    // }
    // loadImageFailed() {
    //     // show message
    // }
}