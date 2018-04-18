import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'project-B-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }
  subject:ISubscription;
  @Input() multiUpload: boolean = false;
  uploader: FileUploader;
  @Input() Url: string = ``;
  @Input() disableMultipart: boolean = true;
  @Input() autoUpload:boolean = false;
  @Input() isHTML5:boolean = true;
  @Output() response:string = ``; 

  constructor() {
  }

  UploaderFile(item: any): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(item);
      resolve(
        {
          name: item._file.name,
          length: item._file.size,
          contentType: item._file.type,
          date: new Date()
        });
    });
  }

  ngOnInit() {
    let Promessa = this.UploaderFile;
    this.uploader = new FileUploader({
      url: this.Url,
      disableMultipart: this.disableMultipart, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      autoUpload:this.autoUpload,
      formatDataFunction: async (item) => {
        return Promessa(item);
      }
    });
    this.subject =  this.uploader.response.subscribe(res => 
                    this.response = res);
  }

}
