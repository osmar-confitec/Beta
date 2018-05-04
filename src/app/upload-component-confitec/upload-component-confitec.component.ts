import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { FileSaveViewModel } from '../Models/FileSaveViewModel';
import { environment } from '../../environments/environment';

@Component({
  selector: 'project-B-upload-component-confitec',
  templateUrl: './upload-component-confitec.component.html',
  styleUrls: ['./upload-component-confitec.component.css']
})
export class UploadComponentConfitecComponent implements OnInit {


  @Input() public multiple = false;
  @Input() public access_token:string = ``
  @Input() public autoUpload = false;
  @Input() public limit = 10;
  @Output() public onAddAll: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  @Output() public onAddItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onfilesAdded: EventEmitter<any> = new EventEmitter<any>();
  @Input() MaxNameLength = 100;
  @Input() dontCleanName: boolean;

  public url:string;
  public fileUploadService: FileUploader;
  public uploadedFiles: Array<FileSaveViewModel> = new Array<FileSaveViewModel>();

  public successUpload = true;
  public fileNameSelected: string;
  public filesWithError: Map<string, string>;

  private albumId: string;

  public get AlbumId(): string { return this.albumId; }
  @Input()
  public set AlbumId(value: string) {
    // this.albumId = !value ? environment.albums.find(x => x.key === 'temp').value : environment.albums.find(x => x.key === value).value;
    this.initFileUpload();
  }


  
  public save(): Promise<Array<FileSaveViewModel>> {

    if (this.fileUploadService.queue.length <= 0) {
        this.clear();
        
        return Promise.reject('Nenhum documento informado!');
    }
    let validFiles = true;
    this.fileUploadService.queue.forEach(img => {
        if (img.file.name.length > this.MaxNameLength) {
            validFiles = false;
        }
    });

    if (validFiles) {
            return this.uploadAllFiles();
    }
    else {
        const errorMsg = 'Nome de documento muito Longo, tamanho maximo é de ' + this.MaxNameLength + ' caracteres!';
        //this.notificationService.error('Documento inválido!', errorMsg);
        this.clear();
        return Promise.reject(errorMsg);
    }

}

private uploadAllFiles(): Promise<Array<FileSaveViewModel>> {

    this.fileUploadService.uploadAll();

    if (this.onAddAll.observers.length > 0)
        this.onAddAll.observers.splice(0);

    return new Promise((resolve, reject) => {
        this.onAddAll.subscribe(event => {
            this.filesWithError.size <= 0 ? resolve(this.uploadedFiles) : reject(this.filesWithError);
            this.clear();
        });
    });
}

public clear(): void {
    this.fileUploadService.clearQueue();
    this.filesWithError.clear();
    this.uploadedFiles = new Array<FileSaveViewModel>();
    this.fileNameSelected = null;
}

  private initFileUpload() {
    
    this.fileUploadService = new FileUploader({
      url: this.url,
      autoUpload: this.autoUpload,
      queueLimit: (this.multiple) ? this.limit : 1/* ,
      authToken: 'Bearer ' + this.access_token */
    });

    this.fileUploadService.onSuccessItem = (fileItem: FileItem, response: any, status: number) => {
      const retObj = JSON.parse(response);
      const item = new FileSaveViewModel(retObj.FileId,
        fileItem.file.name,
        retObj.ThumbnailName,
        this.albumId,
        retObj.FileExtension,
        retObj.Height,
        retObj.Width,
        fileItem.file.size);
      this.uploadedFiles.push(item);
      this.onAddItem.next(item);
    }

    this.fileUploadService.onErrorItem = (fileItem: FileItem, response: any, status: number) => {
      this.filesWithError.set(fileItem._file.name, response.error);
    }

    this.fileUploadService.onCompleteAll = () => {
      this.onAddAll.next(this.uploadedFiles);
    }

    this.fileUploadService.onAfterAddingFile = (fileItem: FileItem) => {

      if (this.fileUploadService.queue.length > 1) {
        this.fileNameSelected = this.fileUploadService.queue.length + ' arquivos selecionados';
        this.onfilesAdded.emit(true);
      }
      else {
        this.fileNameSelected = fileItem._file.name;
        this.onfilesAdded.emit(true);
      }
    }
  }

  constructor() { }

  ngOnInit() {
    this.filesWithError = new Map<string, string>();
  }

}
