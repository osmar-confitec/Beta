import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FileUploadModule, FileUploader, FileItem } from 'ng2-file-upload';


// const URL = '/api/';
const URL = 'http://localhost:58647/api/Upload';

@Component({
  selector: 'project-B-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit , AfterViewInit {

  ngAfterViewInit(): void {
  //   this.uploader.onAfterAddingFile = (item => {
  //     item.withCredentials = false;
  //  });

  this.uploader.onBeforeUploadItem = (item: FileItem) => {
    item.withCredentials = false;
    //this.uploader.authToken = 'Bearer ' + this.boxTokenResponse.userToken;
    this.uploader.options.additionalParameter = {
      name: item.file.name,
      length: item._file.size,
    
      contentType: item._file.type
      //,
      //parent_id: this.parentFolderId

    };
  };
  }
  ngOnInit(): void {
   
  }
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;

  constructor (){
    this.uploader = new FileUploader({
      maxFileSize: 10*1024*1024, // 10 MB,
      url: URL//,
     // disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
     // formatDataFunctionIsAsync: true,
     /*  formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      } */
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe( res => this.response = res );
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
