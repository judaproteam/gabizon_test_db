"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const set_1 = require("@/db/post/set");
function Home() {
    return (<form action={set_1.insertPost}>
      <input type="date" name="date" required/>
      <input type="text" name="title" placeholder="title" required/>
      <input type="number" name="time" placeholder="time" required/>
      <button type="submit">Send</button>
    </form>);
}
