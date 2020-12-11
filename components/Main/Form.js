export default () => `<form>
  <span>
    <label for="sugarLevel">Sugar Level</label>
    <input
      type="number"
      id="sugarLevel"
      placeholder="Sugar Level #"
      name="sugarLevel"
      required />
  </span>
  <span>
    <label for="comment">Comments</label>
    <input
      type="number"
      id="comment"
      min="0"
      max="100"
      placeholder="Comments"
      name="comment"
      required
    />
  </span>
  <button type="submit">Add Sugar Level</button>
</form>
`;