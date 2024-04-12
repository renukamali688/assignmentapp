import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 
  transform(value: any, searchTearm: any):  any[] {
    
    console.log('filer pipe', value); // 10 users 
    console.log('search name', searchTearm);
    
    let filteredItems = value.filter((search: any) => {
      // Implement your search logic here
      // For example, searching within item's properties
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });

    if (filteredItems.length === 0) {
      // If no data is found, return a placeholder item
      return [{ name: 'No Data Found', description: 'No data found for the search criteria' }];
    }

     return filteredItems;
   
  }

}