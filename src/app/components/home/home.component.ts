import { Component } from '@angular/core';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkOverviewComponent } from './work-overview/work-overview.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeOverviewComponent, SkillsComponent, ExperienceComponent, WorkOverviewComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
