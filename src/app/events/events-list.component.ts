import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1><img width="50" src="/assets/images/camera.png" /> Federated Event</h1>
        <div>
        <event-thumbnail  [event]="event1"></event-thumbnail>
      
        </div>
    </div>`
})
export class EventsListComponent{
    event1 = {
        name: 'One Event',
        date: '01/01/2020',
        time: '9:00 am',
        price: 599,
        location:{
            address: '123 main street',
            city: 'Wilmington',
            zip: '28401'
        }
    }
}