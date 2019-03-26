import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ActivityIndicator } from "ui/activity-indicator";
import { RouterExtensions} from 'nativescript-angular/router';
import { NavigationExtras } from "@angular/router";
import {Page} from "ui/page";



@Component({
    selector: "input-screen",
    moduleId: module.id,
    templateUrl: "./input-screen.component.html",
    styleUrls: ["./input-screen.css"]
})
export class InputScreenComponent implements OnInit {

    public activityIndicator: ActivityIndicator;
    public busy: boolean;
    public items: any[];
    public selectIndex: number;

    @ViewChild("activityIndicator") ac: ElementRef;

    constructor(private router: RouterExtensions, page:Page) {
        page.actionBarHidden = true;
        // Use the component constructor to inject providers.
    }

    ngOnInit(){
        this.items = [
            { id: 1, src: 'res://rock', value: 'rock'},
            { id: 2, src: 'res://paper', value: 'paper' },
            { id: 3, src: 'res://scissors', value: 'scissors' },
          ];

        this.activityIndicator = this.ac.nativeElement;
        this.busy = false;
    }

    public onTapShoot(event){
        this.activityIndicator.busy = !this.activityIndicator.busy;
        let result : string;
        const userChoice = event.object.value;
        const computerChoice = this.randomValue();

        if(userChoice === computerChoice){
            result = "it's a tie!"
        }
        else if( userChoice === 'rock'){
            if(computerChoice == 'paper'){
                result = "Computer wins!";
            }else{
                result = "Player wins!!!";
            }
        }else if(userChoice === 'paper'){
            if(computerChoice === 'scissors'){
                result = "Computer wins!";
            }else{
                result = "Player wins!!!";
            }
        }else if(userChoice === 'scissors'){
            if(computerChoice ==='rock'){
                result = "Computer wins!";
            }else{
                result = "Player wins!!!";
            }
        }

        let navigationExtras: NavigationExtras = {
            queryParams: {
                "ComputerChoice": computerChoice,
                "UserChoice": userChoice,
                "Result": result
            }
        };

       this.router.navigate(["/result-screen"], navigationExtras);
    }

    //Computer chooses rock, paper, scissors
    public randomValue() {

        let num = ["rock", "paper", "scissors"];
        return num[Math.floor(Math.random() * this.items.length)];
     }
  
}
