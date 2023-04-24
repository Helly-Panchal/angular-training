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
  public linksSection = [
    {
      title: 'Link 1',
      hyperlinkList: [
        {
          title: 'link 1',
          href: '#',
        },
        {
          title: 'link 2',
          href: '#',
        },
        {
          title: 'link 3',
          href: '#',
        },
        {
          title: 'link 4',
          href: '#',
        },
      ],
    },
    {
      title: 'Link 2',
      hyperlinkList: [
        {
          title: 'link 5',
          href: '#',
        },
        {
          title: 'link 6',
          href: '#',
        },
        {
          title: 'link 7',
          href: '#',
        },
        {
          title: 'link 8',
          href: '#',
        },
      ],
    },
    {
      title: 'Link 3',
      hyperlinkList: [
        {
          title: 'link 9',
          href: '#',
        },
        {
          title: 'link 10',
          href: '#',
        },
        {
          title: 'link 11',
          href: '#',
        },
        {
          title: 'link 12',
          href: '#',
        },
      ],
    },
    {
      title: 'Link 4',
      hyperlinkList: [
        {
          title: 'link 13',
          href: '#',
        },
        {
          title: 'link 14',
          href: '#',
        },
        {
          title: 'link 15',
          href: '#',
        },
        {
          title: 'link 16',
          href: '#',
        },
      ],
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
