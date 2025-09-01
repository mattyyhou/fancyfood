export class Item {
    constructor (
        public category: string,
        public name: string,
        public expiryDate: Date,
        public price: number,
        public supplier: string
    ) {}
    
}