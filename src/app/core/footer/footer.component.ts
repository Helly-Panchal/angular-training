import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // social media icons
  public iconsLink: string[] = [
    'https://www.facebook.com/',
    'https://twitter.com/',
    'https://www.google.com/',
    'https://www.instagram.com/',
    'https://in.linkedin.com/',
    'https://github.com/',
  ];

  //links area
  public links = [
    {
      title: 'Link 1',
      link: '#',
    },
    {
      title: 'Link 2',
      link: '#',
    },
    {
      title: 'Link 3',
      link: '#',
    },
    {
      title: 'Link 4',
      link: '#',
    },
  ];

  //copyright section
  public copyRightYear: string = new Date().getFullYear().toString();

  //email validation
  public email: string = '';
  public patternForEmail: RegExp =
    /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,})+$/;

  public validateEmail(): void {
    if (this.patternForEmail.test(this.email)) {
      alert(this.email + ' - ' + 'Thank you for suscribing :)');
    } else {
      alert('Enter valid email address...!!');
    }
    this.email = '';
  }
}
