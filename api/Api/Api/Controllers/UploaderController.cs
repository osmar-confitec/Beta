using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


using System.Web;
using System.Threading.Tasks;
using System.Net.Http.Headers;
using System.IO;
using Newtonsoft.Json;

namespace Api.Controllers
{

  public class UploadDataModel
  {
    public string testString1 { get; set; }
    public string testString2 { get; set; }
  }


  public class UploaderController : ApiController
  {

    // You could extract these two private methods to a separate utility class since
    // they do not really belong to a controller class but that is up to you
    private MultipartFormDataStreamProvider GetMultipartProvider()
    {
      // IMPORTANT: replace "(tilde)" with the real tilde character
      // (our editor doesn't allow it, so I just wrote "(tilde)" instead)
      var uploadFolder = "UploadFile"; // you could put this to web.config
      var root = HttpContext.Current.Server.MapPath(uploadFolder);
      Directory.CreateDirectory(root);
      return new MultipartFormDataStreamProvider(root);
    }

    // Extracts Request FormatData as a strongly typed model
    private object GetFormData<T>(MultipartFormDataStreamProvider result)
    {
      if (result.FormData.HasKeys())
      {
        var unescapedFormData = Uri.UnescapeDataString(result.FormData
            .GetValues(0).FirstOrDefault() ?? String.Empty);
        if (!String.IsNullOrEmpty(unescapedFormData))
          return JsonConvert.DeserializeObject<T>(unescapedFormData);
      }

      return null;
    }

    private string GetDeserializedFileName(MultipartFileData fileData)
    {
      var fileName = GetFileName(fileData);
      return JsonConvert.DeserializeObject(fileName).ToString();
    }
    public class CustomMultipartFormDataStreamProvider : MultipartFormDataStreamProvider
    {
      public CustomMultipartFormDataStreamProvider(string path)
          : base(path) { }
      public override string GetLocalFileName(HttpContentHeaders headers)
      {
        return headers.ContentDisposition.FileName;
      }
    }
    public string GetFileName(MultipartFileData fileData)
    {
      return fileData.Headers.ContentDisposition.FileName;
    }
    [HttpPost]
    [Route("api/Upload")]

    public HttpResponseMessage UploadJsonFile()
    {
      HttpResponseMessage response = new HttpResponseMessage();
      var httpRequest = HttpContext.Current.Request;
      if (httpRequest.Files.Count > 0)
      {
        foreach (string file in httpRequest.Files)
        {
          var postedFile = httpRequest.Files[file];
          var filePath = HttpContext.Current.Server.MapPath("~/UploadFile/" + postedFile.FileName);
          postedFile.SaveAs(filePath);
        }
      }
      return response;
    }
  }
}
