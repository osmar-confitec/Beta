export class FileSaveViewModel {
    public Nome: string;
    public Thumbnailname: string;
    public ArquivoId: string;
    public Extension: string;
    public Size: number;
    public Height: number;
    public Width: number;
    public AlbumId: string;

    constructor(id: string, nome: string, thumbnailName: string,
                albumId: string, extension: string,
                height: number, width: number,
                size: number) {
        this.ArquivoId = id;
        this.Nome = nome;
        this.Thumbnailname = thumbnailName;
        this.AlbumId = albumId;
        this.Size = size
        this.Extension = extension,
        this.Height = height,
        this.Width = width
    }
}