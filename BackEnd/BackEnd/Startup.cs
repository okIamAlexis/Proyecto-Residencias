using BackEnd.Domain.IRepositories;
using BackEnd.Domain.IServices;
using BackEnd.Persistence.Context;
using BackEnd.Persistence.Repositories;
using BackEnd.Services;
using BackEnd.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IConfiguration>(this.Configuration);
            services.AddSingleton<MailService>();

            services.AddDbContext<AplicationDbContext>(options =>
                options.UseMySql(Configuration.GetConnectionString("Conexion")));

            //Services
            services.AddScoped<IUsuarioService, UsuarioService>();
            services.AddScoped<ILoginService, LoginService>();

            services.AddScoped<IUsuarioEgrService, UsuarioEgrService>();
            services.AddScoped<ILoginEgrService, LoginEgrService>();

            services.AddScoped<IUsuarioEmpService, UsuarioEmpService>();
            services.AddScoped<ILoginEmpService, LoginEmpService>();

           
            services.AddScoped<ICuestionarioService, CuestionarioService>();

            services.AddScoped<ICuestionarioFinalService, CuestionarioFinalService>();

            services.AddScoped<IRespuestaCuestiorioService, RespuestaCuestionarioService>();
            
            

            //Repository
            services.AddScoped<IUsuarioRepository, UsuarioRepository>();
            services.AddScoped<ILoginRepository, LoginRepository>();

            services.AddScoped<IUsuarioEgrRepository, UsuarioEgrRepository>();
            services.AddScoped<ILoginEgrRepository, LoginEgrRepository>();

            services.AddScoped<IUsuarioEmpRepository, UsuarioEmpRepository>();
            services.AddScoped<ILoginEmpRepository, LoginEmpRepository>();

            services.AddScoped<ICuestionarioRepository, CuestionarioRepository>();

            services.AddScoped<ICuestionarioFinalRepository, CuestionarioFinalRepository>();

            services.AddScoped<IRespuestaCuestionarioRepository, RespuestaCuestionarioRepository>();


            //Cors 
            services.AddCors(options => options.AddPolicy("AllowWebapp",
                                                    builder => builder.AllowAnyOrigin()
                                                                        .AllowAnyHeader()
                                                                        .AllowAnyMethod()));

            services.AddControllers().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                 ); ;

            //Add Authentication
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,
                            ValidIssuer = Configuration["Jwt:Issuer"],
                            ValidAudience = Configuration["Jwt:Audience"],
                            IssuerSigningKey = new 
                            SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:SecretKey"])),
                            ClockSkew = TimeSpan.Zero
                        });


            services.AddControllers();
            services.AddControllersWithViews();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("AllowWebapp");
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
