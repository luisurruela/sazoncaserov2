import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { bootstrapArrowLeftShort } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { AuthService } from '../../../../services/auth.service';
import { userProfile } from '../../dashboard/types/user-profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIconComponent, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  viewProviders: [provideIcons({ bootstrapArrowLeftShort })]
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.profileForm = this.formBuilder.group({
      displayName: ['', [Validators.required]]
    });
  }

  submit() {
    const userProfile: userProfile = {
      displayName: this.profileForm.value.displayName
    } 
    
    this.auth.changeUserProfile(userProfile);
    this.router.navigate(['/dashboard/account']);
  }
}
