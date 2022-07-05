using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class v5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RespuestaCuestionarios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    num_ControlParticipante = table.Column<string>(nullable: false),
                    NombreParticipante = table.Column<string>(nullable: false),
                    Fecha = table.Column<DateTime>(nullable: false),
                    Activo = table.Column<int>(nullable: false),
                    CuestionarioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RespuestaCuestionarios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RespuestaCuestionarios_Cuestionario_CuestionarioId",
                        column: x => x.CuestionarioId,
                        principalTable: "Cuestionario",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RespuestaCuestionarioDetalles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    RespuestaCuestionarioId = table.Column<int>(nullable: false),
                    RespuestaId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RespuestaCuestionarioDetalles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RespuestaCuestionarioDetalles_RespuestaCuestionarios_Respues~",
                        column: x => x.RespuestaCuestionarioId,
                        principalTable: "RespuestaCuestionarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RespuestaCuestionarioDetalles_Respuesta_RespuestaId",
                        column: x => x.RespuestaId,
                        principalTable: "Respuesta",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RespuestaCuestionarioDetalles_RespuestaCuestionarioId",
                table: "RespuestaCuestionarioDetalles",
                column: "RespuestaCuestionarioId");

            migrationBuilder.CreateIndex(
                name: "IX_RespuestaCuestionarioDetalles_RespuestaId",
                table: "RespuestaCuestionarioDetalles",
                column: "RespuestaId");

            migrationBuilder.CreateIndex(
                name: "IX_RespuestaCuestionarios_CuestionarioId",
                table: "RespuestaCuestionarios",
                column: "CuestionarioId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RespuestaCuestionarioDetalles");

            migrationBuilder.DropTable(
                name: "RespuestaCuestionarios");
        }
    }
}
