export class Item {
    constructor (
        public category: string,
        public name: string,
        public expiryDate: Date,
        public price: number,
        public supplier: string
    ) {}

    //Calculate adjusted expiry date based on supplier quality
    getAdjustedExpiryDate(supplierQuality: string): Date {
        if (supplierQuality !== 'Ok') return this.expiryDate;

        const adjustedDate = new Date(this.expiryDate);
        switch (this.category) {
            case 'Dairy':
                adjustedDate.setDate(adjustedDate.getDate() - 2);
                break
            case 'Canned Goods':
                adjustedDate.setDate(adjustedDate.getMonth() - 1);
                break
            case 'Vegetables':
                adjustedDate.setDate(adjustedDate.getDate() - 1);
                break;        
        }
        return adjustedDate;
    }
}