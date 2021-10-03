import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientdetailComponent } from './clients/clientdetail/clientdetail.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
    { path: 'client',component: ClientdetailComponent,canActivate: [AuthGuard]},
    { path: '', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
