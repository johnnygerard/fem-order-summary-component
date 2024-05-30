import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-svg-music-icon",
  standalone: true,
  imports: [],
  template: `
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
      <path
        d="M32.5741 15.1982C32.3967 15.0443 32.1611 14.975 31.9284 15.0081L20.581 16.6292C20.1816 16.6862 19.885 17.0282 19.885 17.4316V20.6738V26.9347C19.4049 26.655 18.8476 26.4939 18.253 26.4939C16.4593 26.4939 15 27.9532 15 29.747C15 31.5407 16.4593 33 18.253 33C20.0467 33 21.5061 31.5407 21.5061 29.747V21.3767L31.2325 19.9873V25.3136C30.7524 25.0339 30.1951 24.8728 29.6005 24.8728C27.8068 24.8728 26.3475 26.3322 26.3475 28.1259C26.3475 29.9196 27.8068 31.3789 29.6005 31.3789C31.3942 31.3789 32.8535 29.9196 32.8535 28.1259V19.0527V15.8105C32.8536 15.5755 32.7516 15.3522 32.5741 15.1982Z"
        fill="#717FA6"
      />
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMusicIconComponent {}
