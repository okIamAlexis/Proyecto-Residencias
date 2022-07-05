import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';
import { RespuestaCuestionario, Resultado } from 'src/app/models/respuestasCuestionario';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {



  public barChartOptions: ChartOptions = {
    responsive: true,
  
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartType2: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [] 

  public barChartData2: ChartDataSets[]= [
    { data: [5,3, ], label: "Hola"}
  ];

  public barChartData: ChartDataSets[]
   = [
    {data: [0, 0, ], label: ' '},
    
  ];

  //-----------------Graficas------------------------>


  loading = false;
  listCuestionarios: Cuestionario[]=[];
  listRespuestaCuestionario: RespuestaCuestionario[] = [];
  Resultado: Resultado[] = [];

  listResultados: Resultado[] = [];

  atributos: any[] = [];
  ids: any[] = [];

  resultados: any[] = [];
  cuestionariosId: any[]=[];
  alumnos: any[] = [];
  var: any[]=[];
  res: any[]=[];
  sueño: any[]=[];
  sueño2: any[]=[];

  atributo: string;
  idCuestionario:number;
  atribu: string;

  listCuestioanrios: Cuestionario[]=[];
  id:  any[] = [];
  totalres: any[] = [];


  constructor(private router: Router,
              private cuestionarioService: CuestionarioService,
              private respuestaCuestionarioService: RespuestaCuestionarioService,
              private aRoute: ActivatedRoute
              ) {
                this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
              }

  ngOnInit(): void {
    this.getCuestionarios();
    this.getListCuestionario();
  
  }


  //Data Graficas
  getListCuestionario(): void{
    this.loading = false;
    this.id = this.ids;
    
  }


  //Label de graficas
  getCuestionarios(): void{

    this.loading= true;
    this.cuestionarioService.getListCuestionarioByuser().subscribe(data =>{

      this.listCuestionarios= data;
      this.loading=false;
      console.log(this.listCuestionarios, 'Cuestionarios')
      
      this.listCuestionarios.forEach(element => this.ids.push(element.id));
      
      this.listCuestionarios.forEach(element => this.atributos.push(element.atributo));
      console.log(this.atributos, 'Atributo')
      
      this.barChartLabels = this.atributos;


      // --------Respuestas Cuestionarios-----------------
      for(var i= 0; i<this.id.length; i++){

        const contador = this.id[i];

        if(contador == this.id[i]){

          this.respuestaCuestionarioService.Respuestas(contador).subscribe(data => {
            this.Resultado = data;

            this.resultados.push(this.Resultado);
            console.log(this.resultados, 'Aver que haces')
            
      
          })

          this.respuestaCuestionarioService.getListCuestionarioRespuesta(contador).subscribe(datas =>{
  
             this.listRespuestaCuestionario = datas;
            console.log(this.listRespuestaCuestionario.length, 'Total de Participantes');
        
           })
        }

        
      }   

    this.barChartData.push({data: this.resultados, label: "Valores"});

    },error =>{
      console.log(error);
      
      this.loading=false;
    });

  }



  Salir(): void{
    this.router.navigate(['/dashboard']);
  }

  
}
