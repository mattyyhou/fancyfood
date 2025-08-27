import { readFileSync } from 'fs';

export class FileReader {
    readCSV(filePath: string): string [][] {
        try{
            const content = readFileSync (filePath, 'utf8');
            return content //use try and catch to iterate through the file
            .trim() //remove whitespace from both ends of string
            .split('\n') //split string object into an array
            .map(line => line.split(',')); //create new array based on results of function
        } catch (error) {
            console.error(`Error reading file ${filePath}:`, error);
            return [];
        }
    }
}