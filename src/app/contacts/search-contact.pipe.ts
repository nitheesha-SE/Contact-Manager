import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchContact'})
export class SearchContactPipe implements PipeTransform {
    transform(contactList: any, input: string, searchableList: any) {
        if (input) {
            input = input.toLowerCase();
            return contactList.filter(function (el: any) {
                //var isTrue = false;
                for (var k in searchableList) {
                    if (el[searchableList[k]].toLowerCase().indexOf(input) > -1) {
                        return el;
                    }
                }
            })
        }
        return contactList;
    }
}