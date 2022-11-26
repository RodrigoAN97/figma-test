import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  featuredPost = {
    author: 'John Doe',
    date: 'May 23, 2022',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    featuredText:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    featuredImage: 'featured-post-image.svg',
  };
  posts = [
    {
      author: 'John Doe',
      date: 'Aug 23, 2021 ',
      title: '8 Figma design systems that you can download for free today.',
    },
    {
      author: 'John Doe',
      date: 'Aug 23, 2021 ',
      title: '8 Figma design systems that you can download for free today.',
    },
    {
      author: 'John Doe',
      date: 'Aug 23, 2021 ',
      title: '8 Figma design systems that you can download for free today.',
    },
    {
      author: 'John Doe',
      date: 'Aug 23, 2021 ',
      title: '8 Figma design systems that you can download for free today.',
    },
  ];
}