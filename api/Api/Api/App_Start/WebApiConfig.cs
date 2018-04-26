using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Api
{
  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {
      //https://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api


      //Para poder  utilizar mesmo servidor mesma origem de site e web api
      var cors = new EnableCorsAttribute("*", "*", "*");
      config.EnableCors(cors);
      // Web API configuration and services
      // Modifica a identação
      var jsonSettings = config.Formatters.JsonFormatter.SerializerSettings;
      jsonSettings.Formatting = Formatting.Indented;
      // jsonSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();


      // Web API configuration and services
      // Serviços e configuração da API da Web

      // Rotas da API da Web
      config.MapHttpAttributeRoutes();

      config.Routes.MapHttpRoute(
          name: "DefaultApi",
          routeTemplate: "api/{controller}/{id}",
          defaults: new { id = RouteParameter.Optional }
      );
    }
  }
}
