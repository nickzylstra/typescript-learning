import { hello, user } from './hello';


(async function main() {
  hello(user);

  setTimeout(() => {
    main();
  }, 5000);
}());
