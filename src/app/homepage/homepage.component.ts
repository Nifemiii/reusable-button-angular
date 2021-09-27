import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  buttons =[
    {
      name: 'Button 1',
      color:  {
        'background-color': 'green',
        'color': 'white' 
      },
      showToast: () => {
        this.toastr.info('Button 1 is clicked');
      }
    },

    {
      name: 'Button 2',
      color:  {
        'background-color': 'blue',
        'color': 'white' 
      },
      showToast: () => {
        this.toastr.info('Button 2 is clicked');
      }
    }
  ]
 
  ngOnInit(): void {
  }

}
