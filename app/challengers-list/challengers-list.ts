import {Component, Input} from "angular2/core";
import {Challenger} from "../common/entity/challenger";

@Component({
    selector : 'challengers-list',
    template : `
        <div>
            <h3>{{ teamName }}</h3>
        </div>
    `
})
export class ChallengersList {
    @Input() challengers : Array<Challenger>;
    @Input() teamName : String;
}