﻿// <auto-generated />
using System;
using BackEnd.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BackEnd.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    [Migration("20220202205145_v2.2")]
    partial class v22
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BackEnd.Domain.Models.Cuestionario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Activo")
                        .HasColumnType("int");

                    b.Property<string>("Atributo")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Cuestionario");
                });

            modelBuilder.Entity("BackEnd.Domain.Models.Pregunta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("CuestionarioId")
                        .HasColumnType("int");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("CuestionarioId");

                    b.ToTable("Pregunta");
                });

            modelBuilder.Entity("BackEnd.Domain.Models.Respuesta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<int>("EsCorrecta")
                        .HasColumnType("int");

                    b.Property<int>("PreguntaId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PreguntaId");

                    b.ToTable("Respuesta");
                });

            modelBuilder.Entity("BackEnd.Domain.Models.Usuario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("NombreUsuario")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Usuario");
                });

            modelBuilder.Entity("BackEnd.Domain.Models.UsuarioEgr", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("EgrUsuario")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("PasswordControl")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<string>("egr_amaterno")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("egr_apaterno")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("egr_correo")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("nombre")
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("UsuarioEgr");
                });

            modelBuilder.Entity("BackEnd.Domain.Models.UsuarioEmp", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("EmpUsuario")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("emp_amaterno")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("emp_apaterno")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("emp_correo")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("nombre")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("passwordControl")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("UsuarioEmp");
                });

            modelBuilder.Entity("BackEnd.Domain.Models.Cuestionario", b =>
                {
                    b.HasOne("BackEnd.Domain.Models.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BackEnd.Domain.Models.Pregunta", b =>
                {
                    b.HasOne("BackEnd.Domain.Models.Cuestionario", "Cuestionario")
                        .WithMany("listPreguntas")
                        .HasForeignKey("CuestionarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BackEnd.Domain.Models.Respuesta", b =>
                {
                    b.HasOne("BackEnd.Domain.Models.Pregunta", "Pregunta")
                        .WithMany("listRespuesta")
                        .HasForeignKey("PreguntaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
