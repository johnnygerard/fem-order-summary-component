import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SvgMusicIconComponent } from "../svg/svg-music-icon.component";
import { SvgHeroComponent } from "../svg/svg-hero.component";

@Component({
  selector: "app-order-summary",
  standalone: true,
  imports: [SvgHeroComponent, SvgMusicIconComponent],
  templateUrl: "./order-summary.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      "block min-w-[300px] max-w-[450px] rounded-[20px] bg-white shadow-main",
  },
})
export class OrderSummaryComponent {}
