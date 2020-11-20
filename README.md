# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Project được chia như sau:
components: cái này học về components sẽ biết, cơ bản mấy cái thành phần thường sử dụng mình chia vô đây. components chia theo folder sử dụng nó như account-settings hay homepage, còn mấy cái dùng chung như navbar thì thuộc general (trong general có creator-tag t định dùng để chứa các thẻ creator có ảnh đại diện với username, có j thay đổi sau).
layouts: layout của các trang có bô cục khác như phần cài đặt, homepage hay profile.
page: các page được chia theo các layout dùng trong router oulet (cái này đọc doc để hiểu rõ hơn, đơn giản là phần thay đổi các page có cùng layout, ví dụ như homepage sẽ có 2 page là home chứa newfeed với following tab, account-settings sẽ có page như security,...)
services: chứa các services, khi sử dụng services thì lưu trong này, nên chia theo folder cho dễ quản lý.
Còn các thành phần còn lại là cơ bản của angular generate rồi

Phần routing tạm thời như sau:
http://localhost:4200/login trang đăng nhập có gì nếu chưa có tài khoản mình hiện thêm component phần đăng kí ở đây luôn.

http://localhost:4200/homepage/home giao diện chính của trang homepage, hiển thị newfeed
http://localhost:4200/home/following-tab giao diện của trang the following-tab

http://localhost:4200/accountSettings/general giao diện của account settings chỉnh các thông tin như tên, giới tính, mail. cái mình là trên figma t nghĩ nên gộp cái sửa tên với giới tính, mail lại một trang luôn cho tiện. Có gì thay đổi sau
http://localhost:4200/accountSettings/notifications giao diện settings phần thông báo
http://localhost:4200/accountSettings/security giao diện settings phần security