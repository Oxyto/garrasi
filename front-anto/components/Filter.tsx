export function Filter() {
  return (
    <div id="filter">
      <br></br>
      <p>Tags</p>
      <br></br>
      <label for="scales">Tech</label>
      <input type="checkbox" id="tech" name="tech">
      </input>
      <br></br>
      <label for="scales">Sport</label>
      <input type="checkbox" id="sport" name="sport">
      </input>
      <br></br>
      <label for="scales">Food</label>
      <input type="checkbox" id="food" name="food">
      </input>
      <br></br>
      <label for="scales">Science</label>
      <input type="checkbox" id="science" name="science">
      </input>
      <br></br>
      <button type="submit" id="buttonsearch">Search</button>
      <button type="submit" id="create">Create comment</button>
    </div>
  );
}
