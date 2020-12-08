import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
//   let add = () => {
//     let comment = document.querySelector('.bg-modal .modal-content #comment');

//     if (comment.value != "") {
//         let list = document.querySelector('.list')
//         let time = new Date();
//         let h = time.getHours();
//         let m = time.getMinutes();
//         let s = time.getSeconds();
//         let now = h + " : " + m + " : " + s;
//         let list_item = document.createElement("l1");
//         list_item.innerHTML = `
//     <span>
//     ${now}</p>
//     </span>
//     <p>${comment.value}</p>
// `;
//         list.append(list_item);
//     }
//     comment.value = "";

// }
  constructor() { }

  ngOnInit(): void {
  }

}
