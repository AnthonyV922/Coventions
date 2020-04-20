import { Component } from '@angular/core';
import { MatIconRegistry, MatIcon } from "@angular/material/icon";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Covention';

  constructor(sanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      `covid-19`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/5859233 - biology cell coronavirus covid life microorganism virus.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `male-user`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/5879324 - avatar coronavirus covid19 man mask person wearing.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `female-user`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/5879325 - avatar coronavirus covid19 mask user wearing woman.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `missing-user`,
      sanitizer.bypassSecurityTrustResourceUrl(`../assets/images/user-svgrepo-com (1).svg`)
    );
  }
}
