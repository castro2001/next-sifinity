import { WidgetRegistry, initRegistry, defaultWidgetRegistry } from '@progress/sitefinity-nextjs-sdk';
 import { HelloWorld } from './widget/hello-word/hello-word';
import { HelloWorldEntity } from './widget/hello-word/hello-word.entity';
import { Card } from './widget/Card/Card';
import { CardEntity } from './widget/Card/Card.entity';
import {Jumbotron} from "./widget/Jumbotron/Jumbotron";
import {JumbotronEntity} from "./widget/Jumbotron/Jumbotron.entity";

const customWidgetRegistry: WidgetRegistry = {
    widgets: {
        'HelloWorld': {
             componentType: HelloWorld, // registration of the widget
             entity: HelloWorldEntity, // registration of the designer
             editorMetadata: {
                 Title: 'HelloWorld'
                },
                designerMetadata:{
                    Component: HelloWorld, // the component that will be rendered in the designer
                },
                ssr: true, // whether this is a server rendered or client rendered component
                
        },
        'Cards': {
             componentType: Card, // registration of the widget
            entity: CardEntity, // registration of the designer
             editorMetadata: {
                 Title: 'Card'
                },
                 designerMetadata:{
                     Component: Card, // the component that will be rendered in the designer
                },
                ssr: false, // whether this is a server rendered or client rendered component     
        },
            'Jumbotron': {
             componentType: Jumbotron, // registration of the widget
             entity: JumbotronEntity, // registration of the designer
             editorMetadata: {
                 Title: 'Jumbotron'
                },
                designerMetadata:{
                    Component: Jumbotron, // the component that will be rendered in the designer
                },
                ssr: true, // whether this is a server rendered or client rendered component
                
        },
    }
};

customWidgetRegistry.widgets = {
    ...defaultWidgetRegistry.widgets,
    ...customWidgetRegistry.widgets
};

export const widgetRegistry: WidgetRegistry = initRegistry(customWidgetRegistry);
