import { InventoryManager } from './inventory-manager';
import { FileReader } from './file-reader';

//Main function to run the program
async function main() {
    const inventoryFile = 'inventory.csv';
    const supplierFile = 'supplierQuality.csv';
    const currentDate = new Date('2024-06-10');

    const FileReader = new FileReader();
    const inventoryData = await fileReader.readCSV(inventoryFile);
    const supplierData = await FileReader.readCSV(supplierFile);

}