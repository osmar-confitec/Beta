using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


using System.Web;
using System.Threading.Tasks;
using System.Net.Http.Headers;

namespace Api.Controllers
{

  public class CustomMultipartFormDataStreamProvider : MultipartFormDataStreamProvider
  {
    public CustomMultipartFormDataStreamProvider(string path)
        : base(path) { }
    public override string GetLocalFileName(HttpContentHeaders headers)
    {
      return headers.ContentDisposition.FileName;
    }
  }
  public class UploaderController : ApiController
  {




    [HttpPost]

    public Task<HttpResponseMessage> Uploader()
    {
      HttpRequestMessage request = Request;

      //if (!request.Content.IsMimeMultipartContent())
      //{
      //  throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
      //}
      string root = System.Web.HttpContext.Current.Server.MapPath("~/UploadFile/");
      MultipartFormDataStreamProvider provider = new CustomMultipartFormDataStreamProvider(root);
      var task = request.Content.ReadAsMultipartAsync(provider);
      return task.ContinueWith(o =>
      {
        return new HttpResponseMessage()
        {
          Content = new StringContent("File uploaded.")
        };
      }
      );
    }
  }
}
