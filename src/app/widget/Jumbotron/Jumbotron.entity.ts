import { WidgetEntity } from "@progress/sitefinity-widget-designers-sdk";

@WidgetEntity('Jumbotron','Jumbotron')
export class JumbotronEntity{

    // Propiedades
    public Id: number = 0;
    public Title : string  = "";
    
    public Description: string = "";
    public BtnText : string = "";
     public BtnColor : string = "";
    public BtnTypeButton : string = "";
    public BtnLink : string = "";

}

