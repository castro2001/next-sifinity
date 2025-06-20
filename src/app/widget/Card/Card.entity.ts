import { WidgetEntity } from "@progress/sitefinity-widget-designers-sdk";

@WidgetEntity('Card','Card')
export class CardEntity{

    // Propiedades
    public Id: number = 0;
    public Title : string  = "";
    public Imagen : string = "";
    public Description: string = "";
    public Price : number = 0;
    public ISBN : string  = "";
    public Published : string  = "";

}

