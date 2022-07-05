using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class v4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "cuestionarioFinal",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Descripcion = table.Column<string>(type: "varchar(150)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(nullable: false),
                    Activo = table.Column<int>(nullable: false),
                    usuarioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cuestionarioFinal", x => x.id);
                    table.ForeignKey(
                        name: "FK_cuestionarioFinal_Usuario_usuarioId",
                        column: x => x.usuarioId,
                        principalTable: "Usuario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "cuestionarioCliente",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nombre = table.Column<string>(type: "varchar(150)", nullable: true),
                    Descripcion = table.Column<string>(type: "varchar(150)", nullable: true),
                    Atributo = table.Column<string>(type: "varchar(150)", nullable: true),
                    FechaCreacion = table.Column<DateTime>(nullable: false),
                    cuestionarioFinalid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cuestionarioCliente", x => x.Id);
                    table.ForeignKey(
                        name: "FK_cuestionarioCliente_cuestionarioFinal_cuestionarioFinalid",
                        column: x => x.cuestionarioFinalid,
                        principalTable: "cuestionarioFinal",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "preguntasCli",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Descripcion = table.Column<string>(type: "varchar(150)", nullable: true),
                    CuestionarioClienteId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_preguntasCli", x => x.Id);
                    table.ForeignKey(
                        name: "FK_preguntasCli_cuestionarioCliente_CuestionarioClienteId",
                        column: x => x.CuestionarioClienteId,
                        principalTable: "cuestionarioCliente",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "respuestasCli",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Descripcion = table.Column<string>(type: "varchar(150)", nullable: false),
                    esCorrecta = table.Column<string>(type: "varchar(150)", nullable: false),
                    preguntasCliId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_respuestasCli", x => x.Id);
                    table.ForeignKey(
                        name: "FK_respuestasCli_preguntasCli_preguntasCliId",
                        column: x => x.preguntasCliId,
                        principalTable: "preguntasCli",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_cuestionarioCliente_cuestionarioFinalid",
                table: "cuestionarioCliente",
                column: "cuestionarioFinalid");

            migrationBuilder.CreateIndex(
                name: "IX_cuestionarioFinal_usuarioId",
                table: "cuestionarioFinal",
                column: "usuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_preguntasCli_CuestionarioClienteId",
                table: "preguntasCli",
                column: "CuestionarioClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_respuestasCli_preguntasCliId",
                table: "respuestasCli",
                column: "preguntasCliId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "respuestasCli");

            migrationBuilder.DropTable(
                name: "preguntasCli");

            migrationBuilder.DropTable(
                name: "cuestionarioCliente");

            migrationBuilder.DropTable(
                name: "cuestionarioFinal");
        }
    }
}
