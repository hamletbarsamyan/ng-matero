import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { SidemenuComponent } from './admin-layout/sidemenu/sidemenu.component';
import { AccordionAnchorDirective } from './admin-layout/sidemenu/accordionanchor.directive';
import { AccordionDirective } from './admin-layout/sidemenu/accordion.directive';
import { AccordionLinkDirective } from './admin-layout/sidemenu/accordionlink.directive';
import { HeaderComponent } from './admin-layout/header/header.component';
import { NotificationComponent } from './admin-layout/header/notification/notification.component';
import { CustomizerComponent } from './admin-layout/customizer/customizer.component';
import { UserComponent } from './admin-layout/header/user/user.component';
import { FullscreenComponent } from './admin-layout/header/fullscreen/fullscreen.component';
import { UserPanelComponent } from './admin-layout/sidebar/user-panel/user-panel.component';
import { TopmenuComponent } from './admin-layout/topmenu/topmenu.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    SidemenuComponent,
    AccordionAnchorDirective,
    AccordionDirective,
    AccordionLinkDirective,
    HeaderComponent,
    NotificationComponent,
    CustomizerComponent,
    UserComponent,
    FullscreenComponent,
    UserPanelComponent,
    TopmenuComponent,
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
