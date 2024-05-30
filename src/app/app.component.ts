import { ChangeDetectionStrategy, Component } from "@angular/core";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [OrderSummaryComponent],
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
