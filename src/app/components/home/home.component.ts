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
  categories = [
    {
      icon: 'business.svg',
      title: 'Business',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      featured: false,
    },
    {
      icon: 'startup.svg',
      title: 'Startup',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      featured: true,
    },
    {
      icon: 'economy.svg',
      title: 'Economy',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      featured: false,
    },
    {
      icon: 'technology.svg',
      title: 'Technology',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      featured: false,
    },
  ];
  authors = [
    {
      picture: 'floyd-miles.svg',
      name: 'Floyd Miles',
      position: 'Content Writer @Company',
      featured: false
    },
    {
      picture: 'dianne-russell.svg',
      name: 'Dianne Russell',
      position: 'Content Writer @Company',
      featured: true,
    },
    {
      picture: 'jenny-wilson.svg',
      name: 'Jenny Wilson',
      position: 'Content Writer @Company',
      featured: false
    },
    {
      picture: 'leslie-alexander.svg',
      name: 'Leslie Alexander',
      position: 'Content Writer @Company',
      featured: false
    },
  ];
}
