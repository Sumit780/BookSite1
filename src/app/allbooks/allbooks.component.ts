import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageInfo } from '../page-info';


@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

   myBaseUrl = 'http://advjavaapp-env.imadbprai6.us-west-2.elasticbeanstalk.com/booksapp';
   allBooksData: any;
   pageInfo: PageInfo;
   page = 0;
   precheck = false;
   nextcheck = true;
   currentUrl: string;

  constructor(private authService: AuthServiceService, private route: ActivatedRoute, private router: Router) {
   if (this.authService.num === 1) {
        this.newArrivals();
   } else if (this.authService.num === 2) {
             this.gerene();
   } else if (this.authService.num === 3) {
    this.books();
   }
  }

   newArrivals() {
      this.currentUrl = this.router.url;
      this.authService.dataGet(this.myBaseUrl + this.currentUrl)
      .subscribe(resp => this.allBooksData = resp.data);
      console.log('newArrivals');
   }

   gerene() {
      this.currentUrl = this.router.url;
      this.authService.dataGet(this.myBaseUrl + this.currentUrl)
      .subscribe(resp => this.allBooksData = resp.data);
      this.page = 1;
      console.log('genre');
  }

   books() {
      this.currentUrl = this.router.url;
      this.authService.dataGet(this.myBaseUrl + this.currentUrl)
      .subscribe(resp => this.allBooksData = resp.data);
      this.page = 1;
      console.log('Books');
   }

   nextPage() {
      this.precheck = true;
      this.router.navigate(['/' + this.currentUrl], { queryParams:  {page: +this.page + 1}});
      this.authService.dataGet(this.myBaseUrl + this.currentUrl + '?page=' + +this.page).subscribe(resp => {
      this.allBooksData = resp.data;
      this.page++;
      this.getPageInfo();
    });
    }
    previousPage() {
        this.router.navigate(['/' + this.currentUrl], { queryParams:  {page: +this.page - 1}});
        this.authService.dataGet(this.myBaseUrl + this.currentUrl + '?page=' + +this.page).subscribe(resp => {
        this.allBooksData = resp.data;
        this.page--;
        this.getPageInfo();
      });
    }
   getPageInfo() {
     this.authService.dataGet(this.myBaseUrl + this.currentUrl + '?page=' + this.page).subscribe(resp => {
      this.pageInfo = resp.pageInfo;
      if (this.pageInfo.pageNumber * this.pageInfo.numOfItems > this.pageInfo.totalItemCount) {
             this.nextcheck = false;
   }
    });
  }
  ngOnInit() {
    this.precheck = false;
    this.getPageInfo();

  }
}
