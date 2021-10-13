import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showSidebar()
  {
    if($(".navSideBar").hasClass("active"))
    {
      $(".navSideBar").removeClass("active");
      $(".taNavigationMobile i").removeClass("fa-times").addClass("fa-bars");
    }
    else
    {
      $(".navSideBar").addClass("active");
      $(".taNavigationMobile i").removeClass("fa-bars").addClass("fa-times");

    }
    
  }

}
