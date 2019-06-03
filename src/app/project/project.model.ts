
export class Project {

    public name: string;
    public wlink: string;  
    public imagepath: string;  
    public description: string;  

    constructor(name: string, wlink: string,   description: string,imagepath: string ) {
      this.name = name;
      this.wlink= wlink;
      this.imagepath=imagepath;
      this.description=description;
    }
  }
  