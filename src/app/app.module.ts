import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "~/app/app-routing.module";
import { AppComponent } from "~/app/app.component";
import { WelcomeComponent } from "~/app/welcome/welcome.component";
import { InputScreenComponent } from "~/app/input-screen/input-screen.component";
import { ResultScreenComponent } from "~/app/result-screen/result-screen.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        InputScreenComponent,
        ResultScreenComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
