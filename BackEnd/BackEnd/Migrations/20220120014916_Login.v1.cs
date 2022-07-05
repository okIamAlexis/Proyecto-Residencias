using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class Loginv1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cuestionario_Usuarios_UsuarioId",
                table: "Cuestionario");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuarios",
                table: "Usuarios");

            migrationBuilder.RenameTable(
                name: "Usuarios",
                newName: "Usuario");

            migrationBuilder.AlterColumn<string>(
                name: "Nombre",
                table: "Cuestionario",
                type: "varchar(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varcchar(100)");

            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Cuestionario",
                type: "varchar(150)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varcchar(150)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuario",
                table: "Usuario",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "UsuarioEgr",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    EgrUsuario = table.Column<string>(type: "varchar(20)", nullable: false),
                    PasswordControl = table.Column<string>(type: "varchar(50)", nullable: false),
                    nombre = table.Column<string>(type: "varchar(50)", nullable: false),
                    egr_apaterno = table.Column<string>(type: "varchar(50)", nullable: false),
                    egr_amaterno = table.Column<string>(type: "varchar(50)", nullable: false),
                    egr_correo = table.Column<string>(type: "varchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsuarioEgr", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UsuarioEmp",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    EmpUsuario = table.Column<string>(type: "varchar(20)", nullable: false),
                    passwordControl = table.Column<string>(type: "varchar(50)", nullable: false),
                    nombre = table.Column<string>(type: "varchar(50)", nullable: false),
                    emp_apaterno = table.Column<string>(type: "varchar(50)", nullable: false),
                    emp_amaterno = table.Column<string>(type: "varchar(50)", nullable: false),
                    emp_correo = table.Column<string>(type: "varchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsuarioEmp", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Cuestionario_Usuario_UsuarioId",
                table: "Cuestionario",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cuestionario_Usuario_UsuarioId",
                table: "Cuestionario");

            migrationBuilder.DropTable(
                name: "UsuarioEgr");

            migrationBuilder.DropTable(
                name: "UsuarioEmp");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuario",
                table: "Usuario");

            migrationBuilder.RenameTable(
                name: "Usuario",
                newName: "Usuarios");

            migrationBuilder.AlterColumn<string>(
                name: "Nombre",
                table: "Cuestionario",
                type: "varcchar(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(100)");

            migrationBuilder.AlterColumn<string>(
                name: "Descripcion",
                table: "Cuestionario",
                type: "varcchar(150)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(150)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuarios",
                table: "Usuarios",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Cuestionario_Usuarios_UsuarioId",
                table: "Cuestionario",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
