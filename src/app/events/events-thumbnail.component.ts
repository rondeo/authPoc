import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h3>{{event.name}}</h3>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}},  {{event.location.zip}}</span>
        </div>
       
    </div>
    `
})
export class EventsThumbnailComponent{
    @Input() event:any


}