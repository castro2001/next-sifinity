import { WidgetEntity } from "@progress/sitefinity-widget-designers-sdk";

@WidgetEntity('HelloWorld','Hello World')
export class HelloWorldEntity{
    //Propiedades
    public Content:string | null = null;
}