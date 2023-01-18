import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

   
@Component({
    selector: 'app-root',
    styleUrls:["./default_styles.css"],
    template: `
                <div class="wrapper">
                   <div class = "section1">
                        <div class = "big_image_section">
                            <div class = "changing-color" id = "mgl-1"
                            [ngStyle]="{'background-color': angularHovering ? 'rgb(221, 27, 22)' : 'white'}"></div>
                            <div class = "changing-color" id = "mgl-2"
                            [ngStyle]="{'background-color': phpHovering ? 'rgb(119, 123, 179)' : 'white'}"></div>
                            <div class = "changing-color" id = "mgl-3"
                            [ngStyle]="{'background-color': swiftHovering ? 'rgb(255, 71, 9)' : 'white'}"></div>
                            <div class = "changing-color" id = "mgl-4"
                            [ngStyle]="{'background-color': nodeHovering ? 'rgb(131,205,41)' : 'white'}"></div>
                            <div class = "changing-color" id = "mgl-5"
                            [ngStyle]="{'background-color': reactHovering ? 'rgb(0,216,255)' : 'white'}"></div>
                        </div>
                        <h2>Michael Green</h2>
                        <h1>Web Developer • Software Developer • App Developer</h1>
                        <div class = "information">
                            <a href = "mailto: mikegreen2322@outlook.com">
                                <div class="email-img"></div>
                            </a>
                            <a href = "https://github.com/mike-green-CA">
                                <div class="github-img"></div>
                            </a>
                            <a href = "https://www.linkedin.com/in/michael-green-2b2b93215/">
                                <div class="linkedin-img"></div>
                            </a>
                        </div>
                   </div>
                   <div class = "section2">
                        <div id="angular-col" (mouseenter)='angularHovering=true' (mouseleave)='angularHovering=false'>

                        </div>
                        <div class="php-col" (mouseenter)='phpHovering=true' (mouseleave)='phpHovering=false'>
                            
                        </div>
                        <div class="swift-col" (mouseenter)='swiftHovering=true' (mouseleave)='swiftHovering=false'>
                            
                        </div>
                        <div class="node-docker-col" (mouseenter)='nodeHovering=true' (mouseleave)='nodeHovering=false'>
                            
                        </div>
                        <div class="react-col" (mouseenter)='reactHovering=true' (mouseleave)='reactHovering=false'>
                            
                        </div>
                   </div>
                   <div class = "section3">
                        <div class="content-view">
                            
                        </div>
                   </div>
                </div>` 
})
export class PageDefault {
    parentFunctionReference:Function;
    imageFromChild: string;
    _http:HttpClient;

    public angularHovering = false;
    public phpHovering = false;
    public swiftHovering = false;
    public nodeHovering = false;
    public reactHovering = false;
 
    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(private http: HttpClient) {
        this._http = http;
        this.imageFromChild = '';
        this.parentFunctionReference= this.callBackFunction.bind(this);
    }

    public callBackFunction(imagePath:string){
        this.imageFromChild = imagePath;
    }
 
    ngOnInit() {

    }

    angular_hover(){
    }
}