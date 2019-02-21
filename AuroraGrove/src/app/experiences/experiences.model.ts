
export class Experiences {
    public experiencesName: string;
    
    public imagePath: string;

    public description: string;

    constructor(experiencesName: string, imagePath: string, description: string) {
        this.experiencesName = experiencesName;
        this.imagePath = imagePath;
        this.description = description;
    }
}