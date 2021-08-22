import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewUserDialogData } from 'src/app/shared/utility/members';
import { _urls } from '../../utility/connection-url';

@Component({
  selector: 'app-view-dialog-box',
  templateUrl: './view-dialog-box.component.html',
  styleUrls: ['./view-dialog-box.component.css']
})
export class ViewDialogBoxComponent implements OnInit {

  public imgurl = '';
  constructor(
    public dialogRef        : MatDialogRef<ViewDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data             : ViewUserDialogData
  ) { }

  ngOnInit(): void {
    this.imgurl = _urls.DISPLAY_IMAGE+this.data.filename;
  }

  /**
   * @description close dialogbox
   */
  closeDialog():void{
    this.dialogRef.close();
  }

}
