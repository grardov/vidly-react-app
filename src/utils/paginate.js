 import _ from 'lodash'

 export function paginate(items, pageNumbers, pageSize) {
   const startIndex = (pageNumbers - 1) * pageSize
   return _(items).slice(startIndex).take(pageSize).value()
 }