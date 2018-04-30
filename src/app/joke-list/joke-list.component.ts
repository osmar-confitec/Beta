import { Component, OnInit, AfterContentInit, AfterViewInit, ViewChild, ElementRef, QueryList, ViewChildren, ContentChild, ContentChildren } from '@angular/core';
import { Joke } from '../Models/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit ,  AfterContentInit,
AfterViewInit 
 

{

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;
  @ContentChildren(JokeComponent) jokeContentChildren: QueryList<JokeComponent>;


  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ];

  ngAfterViewInit(): void {
    debugger
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);

    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }
  ngAfterContentInit(): void {
    debugger
    console.dir(this.jokeContentChild);
    console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
    console.dir(this.jokeContentChildren);
  }
  constructor() {
    debugger
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
    console.log(`new - jokeContentChild is ${this.jokeContentChild}`);
   }

  ngOnInit() {
  }

}
