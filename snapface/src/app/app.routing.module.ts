import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        LandingPageComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}