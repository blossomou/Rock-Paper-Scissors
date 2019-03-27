import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions, } from 'nativescript-angular/router';
import {ActivatedRoute} from "@angular/router";
import {Page} from "ui/page";

@Component({
    selector: "result-sceen",
    moduleId: module.id,
    templateUrl: "./result-screen.component.html",
    styleUrls: ["./result-screen.css"]
})
export class ResultScreenComponent implements OnInit {
    public computerChoice: string;
    public userChoice: string;
    public result: string;

    public constructor(private route: ActivatedRoute, page: Page, private router: RouterExtensions) {
        page.actionBarHidden = true;
        this.route.queryParams.subscribe(params => {
            this.computerChoice = 'res://'+params["ComputerChoice"];
            this.userChoice = 'res://'+ params["UserChoice"];
            this.result = params["Result"];
        });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public onTapRematch(){
        this.router.navigate(["/input-screen"]);
    }
   
}
