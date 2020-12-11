export default () => `<form>
  <span>
    <label for="sugarLevel">Sugar Level</label>
    <input
      type="number"
      id="sugarLevel"
      placeholder="Sugar Level #"
      name="sugarLevel"
      min="0"
      required />
  </span>
  <span>
    <label for="comment">Comments</label>
    <input
      type="text"
      id="comment"
      placeholder="Comments"
      name="comment"
      required
    />
  </span>
  <button type="submit">Add Sugar Level</button>
</form>
`;