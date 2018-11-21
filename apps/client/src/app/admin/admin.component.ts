import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nearest-stars-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.url.subscribe(() => {
      if (this.route.snapshot.children.length === 0) {
        this.router.navigate(['/admin/dashboard']);
      }
    })
  }

}
