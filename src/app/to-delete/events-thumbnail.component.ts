import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h3>{{ event.name }}</h3>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span class="pad-left"></span>
        <span>{{ event.location.city }}, {{ event.location.zip }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        margin-left: 15px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})
export class EventsThumbnailComponent {
  @Input() event: any;
}
