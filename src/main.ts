import { hello, user } from './hello';


function main() {
  hello(user);
  setTimeout(() => {
    main();
  }, 5000);
}

main();
