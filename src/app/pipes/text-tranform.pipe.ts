import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'appTranformPipe',
    /* pure: true */
})
export class TextTransformPipe implements PipeTransform {
    transform(value: string): string {
        let result = [];
        let text = value.split('')
        for(let i = 0; i < text.length - 1; i ++){
            if (+[i] % 2 === 0){
                result.push(text[i].toUpperCase());
            } else {
                result.push(text[i].toLowerCase());
            }
        }
        
        return result.join('');
    }
    
    
    
}