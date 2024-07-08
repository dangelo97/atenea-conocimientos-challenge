import 'dotenv/config';

export class BasePage {

    constructor(page) {
        this.page = page;
        this.baseUrl = process.env.BASE_URL;
    }

    async ingresoBaseUrl(){
        await this.page.goto(this.baseUrl);
    }

}