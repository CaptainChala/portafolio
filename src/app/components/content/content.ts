import { Component } from '@angular/core';
import { Profile } from "../profile/profile";
import { Experience } from "../experience/experience";
import { Projects } from "../projects/projects";
import { Recomdendaciones } from "../recomdendaciones/recomdendaciones";
import { Education } from "../education/education";
import { Skills } from "../skills/skills";


@Component({
  selector: 'app-content',
  imports: [Profile, Experience, Projects, Recomdendaciones, Education, Skills],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
