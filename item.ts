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

    //Check if the item is expired
    isExpired(currentDate: Date, supplierQuality: String,): boolean {
        const adjustedExpiry = this.getAdjustedExpiryDate(supplierQuality);
        return adjustedExpiry < currentDate;
    }

    //Calculate reduced price based on category and days to expiry
    getReducedPrice(currentDate: Date, supplierQuality: String): number | null {
        const adjustedExpiry = this.getAdjustedExpiryDate(supplierQuality);
        const daysToExpiry = Math.ceil(
            (adjustedExpiry.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        switch(this.category) {
            case 'Dairy':
                if (daysToExpiry < 4) return this.price * 0.5;
                break;
            case 'Canned Goods':
                const monthsToExpiry = daysToExpiry / 30;
                if(monthsToExpiry < 3) return this.price * 0.75;
                break;
            case 'Vegetables':
                if (daysToExpiry < 3) return this.price * 0.6;
                break;    
        }
        return null;
    }
}